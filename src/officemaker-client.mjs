const DEFAULT_FREE_BASE_URL = 'https://free.officemaker.ai';
const DEFAULT_PAID_BASE_URL = 'https://docs.officemaker.ai';
function getConfig() {
  const tier = String(process.env.OFFICEMAKER_API_TIER || 'free').toLowerCase() === 'paid' ? 'paid' : 'free';
  const baseUrl = String(process.env.OFFICEMAKER_BASE_URL || (tier === 'paid' ? DEFAULT_PAID_BASE_URL : DEFAULT_FREE_BASE_URL)).replace(/\/+$/, '');
  return { tier, baseUrl, authToken: process.env.OFFICEMAKER_AUTH_TOKEN || '', userApiKey: process.env.OFFICEMAKER_USER_API_KEY || '' };
}
function buildHeaders() {
  const { authToken, userApiKey } = getConfig();
  const headers = { Accept: 'application/json', 'Content-Type': 'application/json', 'User-Agent': 'officemaker-enterprise-example/0.1.0' };
  if (authToken) headers.Authorization = `Bearer ${authToken}`;
  if (userApiKey) headers['X-Document-Service-User-Api-Key'] = userApiKey;
  return headers;
}
async function requestJson(path, body) {
  const { baseUrl } = getConfig();
  const response = await fetch(`${baseUrl}${path}`, { method: 'POST', headers: buildHeaders(), body: JSON.stringify(body) });
  const raw = await response.text();
  const parsed = raw ? JSON.parse(raw) : null;
  if (!response.ok || !parsed?.success) throw new Error(parsed?.error || parsed?.message || `OfficeMaker request failed with ${response.status}`);
  return parsed;
}
export async function createDocument({ documentType, fileName, documentObject, generatePdf = false }) {
  const { tier } = getConfig();
  return requestJson(tier === 'paid' ? '/createDocument' : '/gpt/v1/create-document', tier === 'paid'
    ? { documentType, fileName, documentJson: documentObject, generatePdf }
    : { document_type: documentType, file_name: fileName, document_json: JSON.stringify(documentObject), generate_pdf: generatePdf });
}
export function printCreateSummary(result) {
  console.log('documentKey:', result.documentKey || '(none)');
  console.log('documentDownloadUrl:', result.documentDownloadUrl || result.documentUrl || '(none)');
}
