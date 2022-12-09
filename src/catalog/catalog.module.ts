import { Module } from '@nestjs/common'
import { SquareModule } from '@square/square.module'
import { CatalogService } from '@catalog/catalog.service'
import { CatalogController } from '@catalog/catalog.controller'
// import { MongooseModule } from '@nestjs/mongoose'
// import { Catalog, CatalogSchema } from '@catalog/entities/catalog.entity'

@Module({
  imports: [
    SquareModule,
    // MongooseModule.forFeature([
    //   {
    //     name: Catalog.name,
    //     schema: CatalogSchema,
    //   },
    // ]),
  ],
  controllers: [CatalogController],
  providers: [CatalogService],
})
export class CatalogModule {}
