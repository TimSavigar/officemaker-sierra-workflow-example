import { createDocument, printCreateSummary } from '../src/officemaker-client.mjs';

const documentObject = {
  type: 'document',
  content: {
    children: [
      { type: 'paragraph', children: [{ type: 'text', text: 'Dear Customer,' }] },
      { type: 'paragraph', children: [{ type: 'text', text: 'This document was created from the OfficeMaker Sierra workflow starter.' }] },
      { type: 'paragraph', children: [{ type: 'text', text: 'Kind regards,' }] },
      { type: 'paragraph', children: [{ type: 'text', text: 'Sierra Agent' }] }
    ]
  }
};

const result = await createDocument({ documentType: 'word', fileName: 'sierra-letter', documentObject });
printCreateSummary(result);
