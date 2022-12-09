import { Body, Controller, Param, Post } from '@nestjs/common'
import { CatalogService } from '@catalog/catalog.service'
import { UpdateModifierDto } from '@catalog/dto'

@Controller('catalog')
export class CatalogController {
  constructor(private catalogService: CatalogService) {}

  @Post('update/:id')
  async updateModifierStatus(@Param('id') id, @Body() updateModifierDto: UpdateModifierDto) {
    return this.catalogService.updateModifierStatus(id, updateModifierDto)
  }

  // @Post()
  // async createOne(@Body() body: any) {
  //   return this.catalogService.createOne(body)
  // }
}
