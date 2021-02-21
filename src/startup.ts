import {} from 'reflect-metadata'
import express from 'express'
import '../src/data/database/databaseConnection'
const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

app.listen(3333)
