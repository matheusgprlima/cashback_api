import { createConnection } from 'typeorm'
import configuration from '../../../ormconfig'
export async function connectDatabase () {
  try {
    await createConnection(configuration).then(() =>
      console.log('Database connected successfully')
    )
  } catch (error) {
    throw new Error(error)
  }
}
