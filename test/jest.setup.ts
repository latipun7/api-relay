/* eslint-disable import/prefer-default-export */
import url from 'url';
import app from 'src/app';
import type { Server } from 'http';
import type { Mongoose } from 'mongoose';

const port = app.get('port') || 3541;
const mongoose: Mongoose = app.get('mongooseClient');

let server: Server;

beforeAll((done) => {
  server = app.listen(port);
  server.once('listening', () => done());
});

afterAll(async (done) => {
  await mongoose.connection.close();
  await mongoose.disconnect();
  server.close(done);
});

export const getUrl = (pathname?: string, search?: string): string =>
  url.format({
    hostname: app.get('host') || 'localhost',
    protocol: 'http',
    port,
    pathname,
    search,
  });
