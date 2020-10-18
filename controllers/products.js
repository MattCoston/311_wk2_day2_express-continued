
const products = require("../data/products");

const list = (req, res) => {
  res.json(products);
};

const show = (req, res) => {
  res.json(products.find((product) => product._id == req.params.id))
};

const create = (req, res) => {
  let payload = req.body;
  payload._id = 1;

  products.map(item => {
    item._id += 1
  })

  products.push(payload);

  res.send(products);
};

module.exports = { list, show, create };