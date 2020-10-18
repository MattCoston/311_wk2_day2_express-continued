const express = require("express");
const bodyParser = require("body-parser");

const products = require("./routes/products.js")
const comments = require("./routes/comments.js")
const contacts = require("./routes/contacts.js")
const vehicles = require("./routes/vehicles.js")

const app = express();

const port = process.env.PORT || 4001;

app.use(express.static('public'))
app.use(bodyParser.json())

app.use(comments)
app.use(contacts)
app.use(products)
app.use(vehicles)

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});