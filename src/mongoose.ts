import mongoose from 'mongoose';
import logger from 'lib/logger';
import type { Application } from 'typings/declarations';

export default function mongoDB(app: Application): void {
  mongoose
    .connect(app.get('dbURI'), {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      logger.error(err);
      process.exit(1);
    });

  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
}
