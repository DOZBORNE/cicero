import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CatalogModule } from '@catalog/catalog.module'
import { SquareModule } from '@square/square.module'
import { ConfigModule } from '@nestjs/config'
import { ConfigModuleConfig } from './common/config'

@Module({
  imports: [
    ConfigModule.forRoot(ConfigModuleConfig),
    MongooseModule.forRoot(
      'mongodb+srv://devin:Devin3627!@cicero.tkg3u.mongodb.net/cicero-v2?retryWrites=true&w=majority',
    ),
    CatalogModule,
    SquareModule,
  ],
})
export class AppModule {}
