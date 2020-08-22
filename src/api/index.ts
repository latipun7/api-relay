import { Router } from 'express';
import news from './news';

export default function apis(): Router {
  const router = Router();

  news(router);

  return router;
}
