import { Injectable } from '@nestjs/common'
import { UpdateModifierDto } from '@catalog/dto'
import { SquareCatalogService } from '@square/catalog/square-catalog.service'
// import { InjectModel } from '@nestjs/mongoose'
// import { Catalog } from '@catalog/entities/catalog.entity'
// import { Model } from 'mongoose'
import { ApiResponse, BatchRetrieveCatalogObjectsResponse } from 'square'
import { MODIFIER_IDS, MODIFIER_KEYS } from '@square/square.constants'
import { nanoid } from 'nanoid'
import { SquareService } from '@square/square.service'

@Injectable()
export class CatalogService {
  constructor(
    private squareCatalogService: SquareCatalogService,
    private square: SquareService, // @InjectModel(Catalog.name) private readonly catalogModel: Model<Catalog>,
  ) {}

  // createOne(body: any) {
  //   const created = new this.catalogModel(body)
  //   return created.save()
  // }

  async updateModifierStatus(id: number, updateModifierDto: UpdateModifierDto) {
    const modifierLists = await this.squareCatalogService.batchRetrieveCatalogObjects()

    const updatedModifierLists = this.updateModifierInList(id, modifierLists, updateModifierDto)

    const idempotencyKey = nanoid()

    const result = await this.squareCatalogService.catalogApi.batchUpsertCatalogObjects({
      idempotencyKey,
      batches: [
        {
          objects: [...updatedModifierLists],
        },
      ],
    })

    return result.result
  }

  private updateModifierInList(
    id: number,
    modifierLists: ApiResponse<BatchRetrieveCatalogObjectsResponse>,
    updateModifierDto: UpdateModifierDto,
  ) {
    console.dir(modifierLists, { depth: null })
    return modifierLists.result.objects.map((modifierList) => {
      const modifier = modifierList.modifierListData.modifiers.find((modifier) => {
        return MODIFIER_IDS[id].includes(modifier.id)
      })

      if (updateModifierDto.enabled) {
        modifier.modifierData.name = MODIFIER_KEYS[id]
      } else modifier.modifierData.name = 'Unavailable'

      return modifierList
    })
  }
}
