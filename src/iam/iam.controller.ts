import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common'
import { JwtAuthGuard, LocalAuthGuard } from '../auth/guards'
import { AuthService } from '../auth/auth.service'

@Controller('iam')
export class IamController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
