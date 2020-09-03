import logger from 'lib/logger';
import app from './app';

const port = app.get('port');
const server = app.listen(port);

process.on('unhandledRejection', (reason, params) =>
  logger.error('Unhandled Rejection at: Promise ', params, 'Reason: ', reason)
);

server.on('listening', () =>
  logger.info(
    'Feathers application started on http://%s:%d',
    app.get('host'),
    port
  )
);
