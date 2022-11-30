import { Injectable } from '@nestjs/common'
import { UpdateModifierDto } from '@catalog/dto'
import { SquareCatalogService } from '@square/catalog/square-catalog.service'

@Injectable()
export class CatalogService {
  constructor(private squareCatalogService: SquareCatalogService) {}

  updateModifierStatus(updateModifierDto: UpdateModifierDto) {
    // const { enabled } = updateModifierDto
    return 'hi'
  }
}
