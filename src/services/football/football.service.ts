// Initializes the `football` service on path `/football`
import type { ServiceAddons } from '@feathersjs/feathers';
import type { Application } from 'typings/declarations';

import { EPLStandings, TeamDetail, TeamMatches } from './football.object';
import {
  eplStandingsHooks,
  teamDetailHooks,
  teamMatchesHooks,
} from './football.hooks';

// Add this service to the service type index
declare module 'typings/declarations' {
  interface ServiceTypes {
    'football/epl-standings': typeof EPLStandings &
      ServiceAddons<ServiceObject>;
    'football/teams/:id/matches': typeof TeamMatches &
      ServiceAddons<ServiceObject>;
    'football/teams/:id': typeof TeamDetail & ServiceAddons<ServiceObject>;
  }
}

export default function football(app: Application): void {
  // Initialize our service with any options it requires
  app.use('/football/epl-standings', EPLStandings);
  app.use('/football/teams/:id/matches', TeamMatches);
  app.use('/football/teams/:id', TeamDetail);

  // Get our initialized service so that we can register hooks
  const eplStandingsService = app.service('football/epl-standings');
  const teamMatchesService = app.service('football/teams/:id/matches');
  const teamDetailService = app.service('football/teams/:id');

  eplStandingsService.hooks(eplStandingsHooks);
  teamMatchesService.hooks(teamMatchesHooks);
  teamDetailService.hooks(teamDetailHooks);
}
