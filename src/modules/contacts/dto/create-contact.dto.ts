import { IsString, IsNotEmpty, IsEmail } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateContactDto {
  @ApiProperty({
    description: 'Nome do contato',
    type: String,
    default: 'contato da silva',
  })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({
    description: 'email do contato',
    type: String,
    default: 'contato@mail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string

  @ApiProperty({
    description: 'numero de telefone do contato',
    type: String,
    default: '11987654321',
  })
  @IsNotEmpty()
  @IsString()
  phone_number: string
}
