import axios from 'axios';
import { GeneralError, BadRequest } from '@feathersjs/errors';
import type { AxiosResponse } from 'axios';
import type { Query } from '@feathersjs/feathers';

async function requestNews(
  url: string,
  token: string,
  query?: Query
): Promise<AxiosResponse> {
  try {
    const { data } = await axios.get(url, {
      headers: { 'X-Api-Key': token },
      params: query,
    });

    return data;
  } catch (error) {
    if (error.response) {
      throw new BadRequest(error.response.data);
    }
    throw new GeneralError(error);
  }
}

async function requestFootball(
  url: string,
  token: string
): Promise<AxiosResponse> {
  try {
    const { data } = await axios.get(url, {
      headers: { 'X-Auth-Token': token },
    });
    return data;
  } catch (error) {
    if (error.response) {
      throw new BadRequest(error.response.data);
    }
    throw new GeneralError(error);
  }
}

export { requestNews, requestFootball };
