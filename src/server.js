const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

function addGraphQLAuthHeader(headers = {}) {
  if (process.env.token) {
    return {
      ...headers,
      Token: process.env.token
    }
  }
  return headers
}

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use('/graphql', createProxyMiddleware({
  ignorePath: true,
  target: 'http://localhost:8000/graphql/beerjson/v1',
  headers: addGraphQLAuthHeader()
}));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);