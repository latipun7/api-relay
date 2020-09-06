import type { Params, Paginated } from '@feathersjs/feathers';
import type { ServiceObject } from 'typings/declarations';

interface Data {}

export const TopHeadlines: ServiceObject = {
  find: async (params?: Params): Promise<Data | Paginated<Data>> =>
    params?.response,
};

export const Everything: ServiceObject = {
  find: async (params?: Params): Promise<Data | Paginated<Data>> =>
    params?.response,
};
