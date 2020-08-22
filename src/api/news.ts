import { Router } from 'express';
import { requestNews } from '../lib/utils';

const router = Router();
const BASE_URL = 'https://newsapi.org/v2';

export default function news(route: Router): any {
  route.use('/news', router);

  router.get('/top-headlines', async (req, res) => {
    try {
      const url = `${BASE_URL}/top-headlines/`;
      const request = await requestNews(url, req);
      return res.send(request);
    } catch (error) {
      return res.send(error);
    }
  });

  router.get('/everything', async (req, res) => {
    try {
      const url = `${BASE_URL}/everything`;
      const request = await requestNews(url, req);
      return res.send(request);
    } catch (error) {
      return res.send(error);
    }
  });
}
