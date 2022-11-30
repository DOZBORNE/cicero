import { registerAs } from '@nestjs/config'
import { RegisteredConfig } from '../types/registered-config.type'
import { MONGO_CONFIG_TOKEN } from './config.constants'

const { MONGO_DB_URL } = process.env

type MongoConfigOptions = {
  URL: string
}

export const MongoConfig: RegisteredConfig<MongoConfigOptions> = registerAs(
  MONGO_CONFIG_TOKEN,
  (): MongoConfigOptions => {
    return {
      URL: MONGO_DB_URL,
    }
  },
)
