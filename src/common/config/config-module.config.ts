import { ConfigModuleOptions } from '@nestjs/config'

import { SquareConfig } from './square.config'

export const ConfigModuleConfig: ConfigModuleOptions = {
  isGlobal: true,
  // load: [SquareConfig, MongoConfig],
  load: [SquareConfig],
}
