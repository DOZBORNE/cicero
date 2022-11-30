import { Module } from '@nestjs/common'
import { CatalogController } from './catalog.controller'
import { CatalogService } from './catalog.service'
import { SquareModule } from '@square/square.module'

@Module({
  imports: [SquareModule],
  controllers: [CatalogController],
  providers: [CatalogService],
})
export class CatalogModule {}
