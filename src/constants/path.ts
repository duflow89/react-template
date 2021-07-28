export const ROOT = {
  ROOT: '/',
  SAMPLE: '/sample',
} as const;

// Sample
export const SAMPLE_ROUTES = {
  ROOT: ROOT.SAMPLE,
  TODO_LIST: `${ROOT.SAMPLE}/todo-list`,
} as const;
