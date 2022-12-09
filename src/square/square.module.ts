import { Module } from '@nestjs/common'
import { SquareCatalogService } from '@square/catalog/square-catalog.service'
import { SquareService } from '@square/square.service'

@Module({
  providers: [SquareCatalogService, SquareService],
  exports: [SquareCatalogService, SquareService],
})
export class SquareModule {}
