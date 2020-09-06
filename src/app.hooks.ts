// Application hooks that run for every service
import errors from '@feathersjs/errors';
import type { HookContext } from '@feathersjs/feathers';

const errorHandler = (ctx: HookContext) => {
  if (ctx.error) {
    const { error } = ctx;

    if (!error.code) {
      const newError = new errors.GeneralError('server error');

      ctx.error = newError;
      return ctx;
    }
    if (error.code === 404 || process.env.NODE_ENV === 'production') {
      error.stack = null;
    }
    return ctx;
  }
  return undefined;
};

export default {
  error: {
    all: [errorHandler],
  },
};
