import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import winston from 'winston';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3541;
const { NEWS_API_KEY } = process.env;
const logger = winston.createLogger({
  level: 'http',
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.simple(),
  ),
  transports: [new winston.transports.Console()],
});

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/top-headlines', async (req, res) => {
  try {
    const url = 'https://newsapi.org/v2/top-headlines/';
    const request = await axios.get(url, {
      headers: { 'X-Api-Key': NEWS_API_KEY },
      params: req.query,
    });
    return res.send(request.data);
  } catch (error) {
    return res.send(error);
  }
});

app.get('/everything', async (req, res) => {
  try {
    const url = 'https://newsapi.org/v2/everything';
    const request = await axios.get(url, {
      headers: { 'X-Api-Key': NEWS_API_KEY },
      params: req.query,
    });
    return res.send(request.data);
  } catch (error) {
    return res.send(error);
  }
});

app.listen(PORT, () => logger.info(`Listening at http://localhost:${PORT}`));
