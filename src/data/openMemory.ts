export const openMemory = {
  name: 'OpenMemory',
  route: '/OpenMemory',
  repository: 'https://github.com/Raethexn-Technologies/OpenMemory',
  thesis: 'Your AI history, in one memory.',
  summary:
    'A user-controlled memory layer for AI history across providers, with local conversation imports, traceable evidence, and live cross-agent recall through MCP.',
  tags: ['AI Memory', 'Local-first', 'Provenance'],
  reviewedRevision: '6c52e01aa180556b6424b367093668e4addc1ef1',
  reviewedDate: '2026-09-10',
};

/** Pin technical references to the implementation this case study describes. */
export const openMemorySource = (path: string) =>
  `${openMemory.repository}/blob/${openMemory.reviewedRevision}/${path}`;
