import { Exclude, Type } from 'class-transformer'
import {
  IsString,
  IsEmail,
  IsDate
} from 'class-validator'
import { ISeller } from '../../../domain/interface/entity/ISeller'
export class loginValidationDTO implements ISeller {
  constructor (data: Partial<Omit<ISeller, 'password'>>) {
    Object.assign(this, data)
  }

  @Exclude()
  password!: string;

  @IsString()
  cpf!: string;

  @IsString()
  token?:string;

  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @Type(() => Date)
  @IsDate()
  createdAt!: Date;

  @Type(() => Date)
  @IsDate()
  updatedAt!: Date;
}
