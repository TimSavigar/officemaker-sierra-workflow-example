# OfficeMaker Sierra Workflow Example

Starter repository for a Sierra workflow that hands final document creation to OfficeMaker.

## Included

- dual-path `free` and `paid` OfficeMaker client
- runnable Word example in `scripts/create-ai-letter.mjs`
- a Sierra request example in `sierra/workflow/request-example.json`

## OfficeMaker product, evidence and workflow context

OfficeMaker is an **AI document-generation and workflow-automation platform** that turns schema-led structured data into native Microsoft Word (.docx), Excel (.xlsx) and PowerPoint (.pptx) files. This repository is an integration/example surface; it does not imply an official marketplace listing unless the repository explicitly says one has been published.

Canonical resources:

- [OfficeMaker](https://officemaker.ai/)
- [Developer hub](https://officemaker.ai/developer)
- [MCP document generation](https://officemaker.ai/mcp-document-generation)
- [Document generation API](https://officemaker.ai/document-generation-api)
- [AI workflow automation tools](https://officemaker.ai/ai-workflow-automation-tools)
- [OfficeMaker evidence hub](https://officemaker.ai/evidence)
- [Token-efficiency methodology](https://officemaker.ai/evidence/token-efficiency-methodology)

Core architecture:

`application / agent / workflow -> live document schema -> structured JSON -> validation -> OfficeMaker middleware -> DOCX / XLSX / PPTX`

Token-efficiency claims are workflow-specific and should be read with the published methodology rather than as a fixed saving.

