// Initializes the `news` service on path `/news`
import type { ServiceAddons } from '@feathersjs/feathers';
import type { Application } from 'typings/declarations';

import { TopHeadlines, Everything } from './news.object';
import { everythingHooks, topHeadlinesHooks } from './news.hooks';

// Add this service to the service type index
declare module 'typings/declarations' {
  interface ServiceTypes {
    'news/top-headlines': typeof TopHeadlines & ServiceAddons<ServiceObject>;
    'news/everything': typeof Everything & ServiceAddons<ServiceObject>;
  }
}

export default function news(app: Application): void {
  // Initialize our service with any options it requires
  app.use('/news/top-headlines', TopHeadlines);
  app.use('/news/everything', Everything);

  // Get our initialized service so that we can register hooks
  const topHeadlinesService = app.service('news/top-headlines');
  const everythingService = app.service('news/everything');

  topHeadlinesService.hooks(topHeadlinesHooks);
  everythingService.hooks(everythingHooks);
}
