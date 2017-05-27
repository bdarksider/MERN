import config from './config';
import apiRouter from './api';

import nunjucks from 'nunjucks';
import express from 'express';

const server = express();

nunjucks.configure('views', {
  autoescape: true,
  express: server
});

server.get('/', (req, res) => {
  res.render('index.html');
});

server.use('/v1', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});


