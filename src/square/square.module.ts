import { Module } from '@nestjs/common'
import { SquareCatalogService } from '@square/catalog/square-catalog.service'
import { SquareService } from './square.service';

@Module({
  providers: [SquareCatalogService, SquareService],
  exports: [SquareCatalogService],
})
export class SquareModule {}
