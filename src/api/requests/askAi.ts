import { request } from '@api';
import { API_URL } from '@constants';

import { IRequestInfoResp } from '@model/requests';

export const getAskAiAnswer = (query: string, lang: number) => {
  return request<IRequestInfoResp>({
    method: 'GET',
    url: `${API_URL}/api/query/${addr}`,
    params: {
      lang,
    },
  });
};
