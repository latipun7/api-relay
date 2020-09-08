// Initializes the `links` service on path `/links`
import type { ServiceAddons } from '@feathersjs/feathers';
import type { MongooseServiceOptions } from 'feathers-mongoose/types';
import type { Application } from 'typings/declarations';

import LinksService from './links.class';
import hooks from './links.hooks';
import createModel from './links.model';

// Add this service to the service type index
declare module 'typings/declarations' {
  interface ServiceTypes {
    links: LinksService & ServiceAddons<LinksService>;
  }
}

export default function links(app: Application): void {
  const options: Partial<MongooseServiceOptions> = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    id: 'slug',
  };

  // Initialize our service with any options it requires
  app.use('/links', new LinksService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('links');

  service.hooks(hooks);
}
