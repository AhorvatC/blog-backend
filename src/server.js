require('./database');
const express = require('express');
const Blog = require('./models/blog');
const app = express();
var cors = require('cors');
app.use(cors());

app.use(express.json());
app.listen(1234, (req, res) => {
  console.log('app running in port 1234');
});

app.get('/', (rep, res) => {
  res.send('hello world');
});
app.get('/intro', async (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then(blog => {
      res.status(201).send(blog);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});
app.get('/intro/:id', async (req, res) => {
  Blog.findById(req.params.id)
    .then(blog => {
      if (!blog) {
        return res.status(404).send();
      }
      res.send(blog);
    })
    .catch(err => console.log('there was and error ->', err));
});
