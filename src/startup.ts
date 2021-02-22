import 'reflect-metadata'
import api from './api'
import { connectDatabase } from './data/database/databaseConnection'

async function main () {
  await connectDatabase()
  api.init()
  api.server.listen(3000, () =>
    console.log('Server started')
  )
}

(async () => {
  await main()
})()
