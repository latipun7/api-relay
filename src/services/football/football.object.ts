import type { Params, Paginated } from '@feathersjs/feathers';
import type { ServiceObject } from 'typings/declarations';

interface Data {}

export const EPLStandings: ServiceObject = {
  find: async (params?: Params): Promise<Data | Paginated<Data>> =>
    params?.response,
};

export const TeamDetail: ServiceObject = {
  find: async (params?: Params): Promise<Data | Paginated<Data>> =>
    params?.response,
};

export const TeamMatches: ServiceObject = {
  find: async (params?: Params): Promise<Data | Paginated<Data>> =>
    params?.response,
};
