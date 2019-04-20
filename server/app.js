import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

import template from '../template';
import compile from './utils/webpackDevCompile';

const app = express();

const dev = process.env.NODE_ENV !== 'production';

if (dev) {
  compile(app);
}

app.set('port', process.env.PORT || 3000);

app.use('/build', express.static(path.resolve('build')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send(template());
});

export default app;
