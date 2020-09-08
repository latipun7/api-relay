import { customAlphabet } from 'nanoid/async';
import type { HookContext } from '@feathersjs/feathers';

async function defaultUUID(context: HookContext) {
  const { slug } = context.data;

  if (!slug) {
    const alphabet = 'latipun7-012345689bcdefghjkmoqrsvwxyz';
    const nanoid = customAlphabet(alphabet, 7);

    context.data.slug = await nanoid();
  }

  return context;
}

export default {
  before: {
    create: [defaultUUID],
  },
};
