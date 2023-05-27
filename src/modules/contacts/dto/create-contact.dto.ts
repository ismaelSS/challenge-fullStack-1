import { IsString, IsNotEmpty, IsEmail } from 'class-validator'

export class CreateContactDto {
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
  @IsNotEmpty()
  userId?: string
}
