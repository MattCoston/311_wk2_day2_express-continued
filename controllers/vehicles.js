
const vehicles = require("../data/vehicles");

const list = (req, res) => {
  res.json(vehicles);
};

const show = (req, res) => {
  res.json(vehicles.find((vehicle) => vehicle._id == req.params.id))
};

const create = (req, res) => {
  let payload = req.body;
  payload._id = 1;

  vehicles.map(item => {
    item._id += 1
  })

  vehicles.push(payload);

  res.send(vehicles);
};

module.exports = { list, show, create };