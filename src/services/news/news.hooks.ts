import { requestNews } from 'lib/utils';
import type { HookContext } from '@feathersjs/feathers';

const NEWS_BASE_URL = 'https://newsapi.org/v2';

async function getNews(context: HookContext) {
  let subURL;

  if (context.path === 'news/top-headlines') {
    subURL = 'top-headlines';
  }

  if (context.path === 'news/everything') {
    subURL = 'everything';
  }

  const token: string = context.app.get('api').newsToken;
  const url = `${NEWS_BASE_URL}/${subURL}`;
  const { query } = context.params;

  context.params.response = await requestNews(url, token, query);

  return context;
}

export const topHeadlinesHooks = {
  before: {
    find: [getNews],
  },
};

export const everythingHooks = {
  before: {
    find: [getNews],
  },
};
