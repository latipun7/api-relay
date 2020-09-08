// links.model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
import isSlug from 'validator/lib/isSlug';
import isURL from 'validator/lib/isURL';
import type { Document, Mongoose } from 'mongoose';
import type { Application } from 'typings/declarations';
import type { Links } from 'typings/models';

interface LinksModel extends Links, Document {}

export default function linksModel(app: Application) {
  const modelName = 'links';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      slug: {
        type: String,
        unique: true,
        minlength: [3, 'Minimum lenght 3 characters'],
        validate: {
          validator: async (value: string) => isSlug(value),
          message: 'Should valid URL slug',
        },
      },
      fullURL: {
        type: String,
        required: [true, 'URL is required'],
        validate: {
          validator: async (value: string) => isURL(value),
          message: 'Should valid URL',
        },
      },
    },
    { timestamps: true }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }

  return mongooseClient.model<LinksModel>(modelName, schema);
}
