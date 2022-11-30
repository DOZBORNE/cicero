import { registerAs } from '@nestjs/config'
import { RegisteredConfig } from '../types/registered-config.type'
import { SQUARE_CONFIG_TOKEN } from './config.constants'
import { Configuration, Environment } from 'square'

const { SQUARE_ENVIRONMENT, SQUARE_ACCESS_TOKEN } = process.env

export const SquareConfig: RegisteredConfig<Partial<Configuration>> = registerAs(
  SQUARE_CONFIG_TOKEN,
  (): Partial<Configuration> => {
    return {
      environment:
        SQUARE_ENVIRONMENT.toUpperCase() === 'PRODUCTION'
          ? Environment.Production
          : Environment.Sandbox,
      accessToken: SQUARE_ACCESS_TOKEN,
    }
  },
)
