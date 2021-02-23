import { Exclude, Type } from 'class-transformer'
import {
  IsString,
  IsNumber,
  IsPositive,
  IsDate,
  ValidateNested
} from 'class-validator'
import { IAcquisition } from '../../../domain/interface/entity/IAcquisition'
import { IStatus } from '../../../domain/interface/entity/IStatus'
import { createSellerDTO } from '../../Seller/create-seller/createSellerDTO'
export class acquisitionRegisterDTO implements IAcquisition {
  constructor (data: Partial<Omit<IAcquisition, 'discount|cashback|seller|status'>>) {
    Object.assign(this, data)
  }

    @IsString()
    cpf!: string

    @IsString()
    code!: string

    @IsNumber()
    @IsPositive()
    value!: number

    @Type(() => Date)
    @IsDate()
    date!: Date

    @IsNumber()
    @IsPositive()
    discount!: number

    @IsNumber()
    @IsPositive()
    cashback!: number

    @ValidateNested()
    seller!: createSellerDTO

    @Exclude()
    status!: IStatus
}
