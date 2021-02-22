import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import products from './data/products.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()
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

const PORT = process.env.PORT || 5000
server.listen(PORT, () =>
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.green
      .underline.bold
  )
)
