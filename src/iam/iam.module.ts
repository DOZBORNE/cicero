import { Module } from '@nestjs/common'
import { IamController } from './iam.controller'
import { AuthModule } from '../auth/auth.module'

@Module({
  imports: [AuthModule],
  controllers: [IamController],
})
export class IamModule {}
