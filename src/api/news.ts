import { Router } from 'express';
import requestNews from '../lib/utils';

const router = Router();

export default function news(route: Router): any {
  route.use('/news', router);

  router.get('/top-headlines', async (req, res) => {
    try {
      const url = 'https://newsapi.org/v2/top-headlines/';
      const request = await requestNews(url, req);
      return res.send(request);
    } catch (error) {
      return res.send(error);
    }
  });

  router.get('/everything', async (req, res) => {
    try {
      const url = 'https://newsapi.org/v2/everything';
      const request = await requestNews(url, req);
      return res.send(request);
    } catch (error) {
      return res.send(error);
    }
  });
}
