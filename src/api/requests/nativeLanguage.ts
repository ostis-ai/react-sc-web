import { AxiosError } from 'axios';
import { IScnNode } from 'ostis-ui-lib';
import { ScAddr } from 'ts-sc-client';
import { client, isAxiosError } from '@api';

import { translate } from './requests';
import { shiftMap } from '@utils';


interface IReturnNativeLanguageTree {
    tree: IScnNode;
}

// Copy of the scn request now, but i guess in future 
// would have own specific logic here (meybe less JSON things inside in response etc)
const requestNativeLanguageTree = async (question: number): Promise<IReturnNativeLanguageTree | AxiosError | null> => {
  const res = await translate(question, 'format_scn_json', 'lang_ru');
  if (isAxiosError(res)) return res;
  const { link } = res.data;
  const [{ data }] = await client.getLinkContents([new ScAddr(link)]);

  try {
    const tree = JSON.parse(String(data))[0] as IScnNode;
    return { tree };
  } catch (error) {
    return null;
  }
};

const DEFAULT_CACHE_SIZE = 50;

const memoizedNativeLanguageTree = (cacheSize = DEFAULT_CACHE_SIZE) => {
  const cache = new Map<number, IReturnNativeLanguageTree>();

  const removeFromCache = (question: number) => cache.delete(question);

  const request = async (
    question: number,
    onRequestStarted?: () => void,
  ): Promise<IReturnNativeLanguageTree | AxiosError | null> => {
    const nodeInCache = cache.get(question);
    if (nodeInCache) return nodeInCache;

    onRequestStarted?.();
    const newNode = await requestNativeLanguageTree(question);

    if (newNode === null) {
      return null;
    }

    if (isAxiosError(newNode)) return newNode;

    cache.set(question, newNode);
    if (cache.size > cacheSize) shiftMap(cache, 1);

    return newNode;
  };
  return [request, removeFromCache] as const;
};

export const [getNativeLanguageTree, removeFromCache] = memoizedNativeLanguageTree();
