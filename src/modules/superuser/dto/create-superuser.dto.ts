import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'

export class CreateSuperuserDTO {
  @IsNotEmpty()
  name: string

  @IsEmail()
  email: string

  @MinLength(6, {
    message: 'A senha precisa ter no mínimo 6 caracteres',
  })
  password: string
}
