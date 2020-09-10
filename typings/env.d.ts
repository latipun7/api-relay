declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    DB_URL: string;
    API__NEWS_TOKEN: string;
    API__FOOTBALL_TOKEN: string;
  }
}
