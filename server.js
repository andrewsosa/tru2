const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const server = express();
const http = require('http').Server(server);
const io = require('socket.io')(http);

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = app.getRequestHandler();

const api = require('./backend/routes');

app.prepare().then(() => {
  // Middleware
  server.use(bodyParser.json());
  server.use(logger('tiny'));
  server.use((req, res, nxt) => { req.io = io; nxt(); });

  // Routes
  server.use('/api', api);
  server.use(handler);

  http.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server ready on http://localhost:3000');
  });
});
