import { Body, Controller, Post } from '@nestjs/common'
import { CatalogService } from '@catalog/catalog.service'
import { UpdateModifierDto } from '@catalog/dto'

@Controller('catalog')
export class CatalogController {
  constructor(private catalogService: CatalogService) {}

  @Post('update/:id')
  async updateModifierStatus(@Body() updateModifierDto: UpdateModifierDto) {
    this.catalogService.updateModifierStatus(updateModifierDto)
  }
}
