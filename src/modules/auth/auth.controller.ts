import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './local-auth.guard'
import { ApiTags } from '@nestjs/swagger'
import { LoginDTO } from './dto/login.dto'

interface IUserLogin {
  email: string
  password: string
}

@ApiTags('Login')
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('')
  @UseGuards(LocalAuthGuard)
  async login(@Body() user: LoginDTO) {
    return this.authService.login(user.email)
  }
}
