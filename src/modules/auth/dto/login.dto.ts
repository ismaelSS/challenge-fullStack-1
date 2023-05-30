import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString } from 'class-validator'

export class LoginDTO {
  @ApiProperty({
    description: 'email do usuário',
    type: String,
    default: 'usuaria@mail.com',
  })
  @IsEmail()
  email: string

  @ApiProperty({
    description: 'senha do usuário',
    type: String,
    default: 'Uusuari0!',
  })
  @IsString()
  password: string
}
