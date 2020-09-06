import { requestFootball } from 'lib/utils';
import type { HookContext } from '@feathersjs/feathers';

const FOOTBALL_BASE_URL = 'https://api.football-data.org/v2';

async function getFootball(context: HookContext) {
  let subURL;
  const id = context.params.route?.id;

  if (context.path === 'football/epl-standings') {
    subURL = 'competitions/PL/standings';
  }

  if (context.path === 'football/teams/:id/matches') {
    subURL = `teams/${id}/matches?status=SCHEDULED`;
  }

  if (context.path === 'football/teams/:id') {
    subURL = `teams/${id}`;
  }

  const token: string = context.app.get('api').footballToken;
  const url = `${FOOTBALL_BASE_URL}/${subURL}`;

  context.params.response = await requestFootball(url, token);

  return context;
}

export const eplStandingsHooks = {
  before: {
    find: [getFootball],
  },
};

export const teamDetailHooks = {
  before: {
    find: [getFootball],
  },
};

export const teamMatchesHooks = {
  before: {
    find: [getFootball],
  },
};
