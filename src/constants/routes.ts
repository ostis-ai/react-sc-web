export const MAIN = '/' as const;
export const COMMAND = '/c/:commandAddr/a/:addr/:format' as const;
export const QUESTION = '/q/:question/:format' as const;

export const ASK_AI = '/ask' as const;
export const ASK_AI_ANSWER = '/answer' as const;
