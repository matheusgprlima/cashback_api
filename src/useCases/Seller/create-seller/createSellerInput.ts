import {
  IsString,
  IsEmail
} from 'class-validator'
import { ISeller } from '../../../domain/interface/entity/ISeller'
export class inputSellerDTO implements ISeller {
  constructor (data: Partial<Omit<ISeller, 'password'>>) {
    Object.assign(this, data)
  }

  @IsString()
  password!: string;

  @IsString()
  cpf!: string;

  @IsString()
  name!: string;

  @IsEmail()
  email!: string;
}
