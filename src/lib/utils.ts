import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';
import { Request } from 'express';

dotenv.config();

const { NEWS_API_KEY, FOOTBALL_API_KEY } = process.env;

async function requestNews(url: string, req: Request): Promise<AxiosResponse> {
  try {
    const request = await axios.get(url, {
      headers: { 'X-Api-Key': NEWS_API_KEY },
      params: req.query,
    });
    return request.data;
  } catch (error) {
    return error;
  }
}

async function requestFootball(url: string): Promise<AxiosResponse> {
  try {
    const request = await axios.get(url, {
      headers: { 'X-Auth-Token': FOOTBALL_API_KEY },
    });
    return request.data;
  } catch (error) {
    return error;
  }
}

export { requestNews, requestFootball };
