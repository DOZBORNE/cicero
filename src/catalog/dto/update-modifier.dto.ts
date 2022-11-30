import { IsBoolean } from 'class-validator'

export class UpdateModifierDto {
  @IsBoolean()
  enabled: boolean
}
