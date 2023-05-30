import { hashSync } from 'bcryptjs'
import { Transform } from 'class-transformer'
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  Matches,
  // validate,
  // ValidationError,
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    type: String,
    default: 'usuario da Silva',
  })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({
    description: 'email do usuário',
    type: String,
    default: 'usuaria@mail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string

  @ApiProperty({
    description: 'telefone do usuário',
    type: String,
    default: '11123456789',
  })
  @IsNotEmpty()
  @IsString()
  phone_number: string

  @ApiProperty({
    description: 'senha do usuário',
    type: String,
    default: 'Uusuari0!',
  })
  @IsString()
  @MinLength(8, {
    message: 'The password must be at least 8 characters long.',
  })
  @Matches(/^(?=.*[a-z])/, {
    message: 'The password must contain at least one lowercase letter.',
  })
  @Matches(/^(?=.*[A-Z])/, {
    message: 'The password should contain at least one uppercase character.',
  })
  @Matches(/^(?=.*\d)/, {
    message: 'The password must contain at least one number.',
  })
  @Matches(/^(?=.*[@$!%*?&])/, {
    message: 'The password must contain at least one special character.',
  })
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string

  // async validate(): Promise<ValidationError[]> {
  //   return await validate(this, { validationError: { target: false } })
  // }
}
