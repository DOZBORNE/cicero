import { Injectable } from '@nestjs/common'
import { SquareService } from '@square/square.service'
import { SQUARE_MODIFIER_LIST_IDS } from '@square/square.constants'
import { ApiResponse, BatchRetrieveCatalogObjectsResponse, CatalogApi } from 'square'

@Injectable()
export class SquareCatalogService {
  constructor(private squareService: SquareService) {}

  get catalogApi(): CatalogApi {
    return this.squareService.square.catalogApi
  }

  async batchRetrieveCatalogObjects(): Promise<ApiResponse<BatchRetrieveCatalogObjectsResponse>> {
    return this.squareService.square.catalogApi.batchRetrieveCatalogObjects({
      objectIds: SQUARE_MODIFIER_LIST_IDS,
    })
  }
}
