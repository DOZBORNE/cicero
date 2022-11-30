import { Injectable } from '@nestjs/common'
import { SquareService } from '@square/square.service'

@Injectable()
export class SquareCatalogService {
  constructor(private squareService: SquareService) {}

  batchRetrieveCatalogObjects() {
    // this.squareService.square.catalogApi.batchRetrieveCatalogObjects()
  }
}
