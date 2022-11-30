import { Inject, Injectable } from '@nestjs/common'
import { Client } from 'square'
import { SquareConfig } from '../common/config'
import { ConfigType } from '@nestjs/config'

@Injectable()
export class SquareService {
  private readonly _square: Client
  constructor(@Inject(SquareConfig.KEY) config: ConfigType<typeof SquareConfig>) {
    this._square = new Client(config)
  }

  get square(): Client {
    return this._square
  }
}
