import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Catalog extends Document {
  @Prop()
  name: string

  @Prop()
  item: string
}

export const CatalogSchema = SchemaFactory.createForClass(Catalog)
