import { ConfigModuleOptions } from '@nestjs/config'

import { SquareConfig } from './square.config'
import { MongoConfig } from './mongo.config'

export const ConfigModuleConfig: ConfigModuleOptions = {
  isGlobal: true,
  load: [SquareConfig, MongoConfig],
}
