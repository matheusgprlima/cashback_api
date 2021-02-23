import 'reflect-metadata'
import api from './api'
import { connectDatabase } from './data/database/databaseConnection'
import './core/dependency-injection'
async function appInit () {
  await connectDatabase()
  api.init()
  api.server.listen(process.env.PORT || 3000, () =>
    console.log('Server started successfully!')
  )
}

(async () => {
  await appInit()
})()
