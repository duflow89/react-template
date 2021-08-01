export const ROOT = {
  ROOT: '/',
  SAMPLE: '/sample',
} as const;

// Sample
export const SAMPLE_ROUTES = {
  ROOT: ROOT.SAMPLE,
  TODO_LIST: `${ROOT.SAMPLE}/todo-list`,
  SUB_PAGE1: `${ROOT.SAMPLE}/sub-page1`,
  SUB_PAGE2: `${ROOT.SAMPLE}/sub-page2`,
} as const;
