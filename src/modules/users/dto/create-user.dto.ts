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

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  @IsString()
  phone_number: string

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
