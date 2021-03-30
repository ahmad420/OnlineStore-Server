import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()
connectDB()
const server = express()

server.get('/', (req, res) => {
  res.send('<h1>express is running ... </h1>')
})

server.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000
server.listen(PORT, () =>
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.green
      .underline.bold
  )
)
