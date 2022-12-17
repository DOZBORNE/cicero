import { Controller, Request, Post, UseGuards } from '@nestjs/common'
import { LocalAuthGuard } from '../auth/guards'

@Controller('iam')
export class IamController {
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user
  }
}
