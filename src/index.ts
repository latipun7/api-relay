import cors from 'cors';
import express from 'express';
import apis from './api';
import logger from './logger';

const app = express();
const PORT = process.env.PORT || 3541;

app.use(cors());

app.get('/', (_, res) => res.send('Hello World!'));

app.use(apis());

app.listen(PORT, () => logger.info(`Listening at http://localhost:${PORT}`));
