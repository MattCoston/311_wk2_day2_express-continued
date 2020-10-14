const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const contacts = require('.data/contacts')
const vehicles = require('.data/vehicles')
const comments = require('.data/comments')
const products = require('./data/products')

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/contacts', (req, res) => {
    res.json(contacts)
})
app.get('/vehicles', (req, res) => {
    res.json(vehicles)
})
app.get('/comments', (req, res) => {
    res.json(comments)
})
app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/contacts/:id', (req, res) => {
    res.json(products.find(product => {
        product._id == req.params.id
    }))
})

app.get('/vehicles/:id', (req, res) => {
    res.json(products.find(product => {
        product._id == req.params.id
    }))
})
app.get('/comments/:id', (req, res) => {
        res.json(products.find(product => {
            product._id == req.params.id
        })
        )
app.get('/products/:id', (req, res) => {
            res.json(products.find(product => {
                product._id == req.params.id
            })
    )})
        })
const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
