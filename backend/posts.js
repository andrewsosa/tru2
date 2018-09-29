const db = require('monk')('localhost/tru');

const posts = db.get('posts');

module.exports = {
  get: (req, res) => {
    posts.find({}, { sort: { created_at: -1 } }).then((data) => {
      res.json(data);
    });
  },
  post: (req, res) => {
    const post = req.body;
    post.created_at = new Date();
    posts.insert(post);
    req.io.emit('posts', { post });
    res.status(201).json('OK!');
  },
};
