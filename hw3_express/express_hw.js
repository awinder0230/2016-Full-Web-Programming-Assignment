/*
eslint no-console: 0,
*/

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => res.send('<h1>首頁<h1>'));

app.get('/api/query', (req, res) => res.json(req.query));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/api/body', (req, res) => {
  res.send(JSON.stringify(req.body));
});

app.get('/api/users/1', (req, res) => {
  const user = {
    id: 1,
    name: 'Joe',
    age: 18,
  };
  res.json(user);
});

app.get('/api/users/2', (req, res) => {
  const user = {
    id: 2,
    name: 'John',
    age: 22,
  };
  res.json(user);
});

app.use(express.static('public'));

app.use((req, res) => res.send('404'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
