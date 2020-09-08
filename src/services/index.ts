import type { Application } from 'typings/declarations';

import news from './news/news.service';
import football from './football/football.service';
import links from './links/links.service';

export default function services(app: Application): void {
  app.configure(news);
  app.configure(football);
  app.configure(links);
}
