import { ConnectionOptions } from 'typeorm'
import { join } from 'path'
const configuration : ConnectionOptions = {
  type: 'mssql',
  host: 'cashbackapi.database.windows.net',
  port: 1433,
  username: 'boticario',
  password: 'Cashback@!',
  database: 'cashback_database',
  logging: true,
  migrationsRun: true,
  entities: [join(__dirname, 'src/data/entity/**/*.[tj]s')],
  migrations: [join(__dirname, 'src/data/database/migration/**/*.[tj]s')],
  cli: {
    migrationsDir: 'src/data/database/migration',
    entitiesDir: 'src/data/entity'
  }
}
export default configuration
