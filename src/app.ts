import configuration from '@feathersjs/configuration';
import express from '@feathersjs/express';
import feathers from '@feathersjs/feathers';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'lib/logger';
import type { Application } from 'typings/declarations';

import appHooks from './app.hooks';
import middleware from './middleware';
import mongoose from './mongoose';
import services from './services';

const app: Application = express(feathers());

// Load app configuration
app.configure(configuration());

// Enable security, CORS, and body parsing
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up Plugins and providers
app.configure(express.rest());

app.use('/', { find: async () => 'Hello World!' });

app.configure(mongoose);
app.configure(middleware);
app.configure(services);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

export default app;
