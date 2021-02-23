import { Exclude } from 'class-transformer'
import {
  IsString,
  IsEmail
} from 'class-validator'
import { ISeller } from '../../../domain/interface/entity/ISeller'
export class inputLogin implements ISeller {
  constructor (data: Partial<ISeller>) {
    Object.assign(this, data)
  }

  @IsString()
  password!: string;

  @Exclude()
  cpf!: string;

  @Exclude()
  name!: string;

  @IsEmail()
  email!: string;
}
