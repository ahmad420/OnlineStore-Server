const express = require('express')
const products = require('./data/products')
const server = express()

server.get('/', (req, res) => {
  res.send('<h1>hello express</h1>')
})

server.get('/api/products', (req, res) => {
  res.json(products)
})

server.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

server.listen(5000, () =>
  console.log('Server listening on http:localhost:5000')
)
