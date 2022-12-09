import { registerAs } from '@nestjs/config'
import { RegisteredConfig } from '../types/registered-config.type'
import { MONGO_CONFIG_TOKEN } from './config.constants'

const { DB_NAME, DB_PASSWORD, DB_USERNAME } = process.env

type MongoConfigOptions = {
  URL: string
}

export const MongoConfig: RegisteredConfig<MongoConfigOptions> = registerAs(
  MONGO_CONFIG_TOKEN,
  (): MongoConfigOptions => {
    return {
      URL: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_NAME}.tkg3u.mongodb.net/cicero-v2?retryWrites=true&w=majority`,
    }
  },
)
