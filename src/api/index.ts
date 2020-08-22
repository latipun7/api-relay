import { Router } from 'express';
import football from './football';
import news from './news';

export default function apis(): Router {
  const router = Router();

  news(router);
  football(router);

  return router;
}
