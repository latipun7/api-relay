import { Router } from 'express';
import { requestFootball } from '../lib/utils';

const router = Router();
const BASE_URL = 'https://api.football-data.org/v2';

export default function football(route: Router): any {
  route.use('/football', router);

  router.get('/epl-standings', async (_, res) => {
    try {
      const url = `${BASE_URL}/competitions/PL/standings`;
      const request = await requestFootball(url);
      return res.send(request);
    } catch (error) {
      return res.send(error);
    }
  });

  router.get('/teams/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const url = `${BASE_URL}/teams/${id}`;
      const request = await requestFootball(url);
      return res.send(request);
    } catch (error) {
      return res.send(error);
    }
  });

  router.get('/teams/:id/matches', async (req, res) => {
    try {
      const { id } = req.params;
      const url = `${BASE_URL}/teams/${id}/matches?status=SCHEDULED`;
      const request = await requestFootball(url);
      return res.send(request);
    } catch (error) {
      return res.send(error);
    }
  });
}
