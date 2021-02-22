import 'reflect-metadata'
import api from './api'
import { connectDatabase } from './data/database/databaseConnection'

async function appInit () {
  await connectDatabase()
  api.init()
  api.server.listen(3000, () =>
    console.log('Server started successfully!')
  )
}

(async () => {
  await appInit()
})()
