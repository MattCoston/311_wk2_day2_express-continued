const comments = require("../data/comments");

const list = (req, res) => {
  res.json(comments);
};

const show = (req, res) => {
  res.json(comments.find((comment) => comment._id == req.params.id))
};

const create = (req, res) => {
  let payload = req.body;
  payload._id = 1;

  comments.map(item => {
    item._id += 1
  })

  comments.push(payload);

  res.send(comments);
};

module.exports = { list, show, create };