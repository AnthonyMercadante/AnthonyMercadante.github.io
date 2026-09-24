export const openMemory = {
  name: 'OpenMemory',
  route: '/OpenMemory',
  repository: 'https://github.com/Raethexn-Technologies/OpenMemory',
  thesis: 'Your AI history, in one memory.',
  summary:
    'A user-controlled memory layer for AI history across providers, with local conversation imports, traceable evidence, and live cross-agent recall through MCP.',
  tags: ['AI Memory', 'Local-first', 'Provenance'],
  reviewedRevision: '6094a61b4fc29fdc1bd7ad75c0238b8f91988943',
  reviewedDate: '2026-09-23',
};

/** Pin technical references to the implementation this case study describes. */
export const openMemorySource = (path: string) =>
  `${openMemory.repository}/blob/${openMemory.reviewedRevision}/${path}`;
