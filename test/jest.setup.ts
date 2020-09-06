/* eslint-disable import/prefer-default-export */
import url from 'url';
import type { Server } from 'http';

import app from 'src/app';

const port = app.get('port') || 3541;

export const getUrl = (pathname?: string, search?: string): string =>
  url.format({
    hostname: app.get('host') || 'localhost',
    protocol: 'http',
    port,
    pathname,
    search,
  });

let server: Server;

beforeAll((done) => {
  server = app.listen(port);
  server.once('listening', () => done());
});

afterAll((done) => {
  server.close(done);
});
