import { Exclude, Type } from 'class-transformer'
import {
  IsString,
  IsNumber,
  IsPositive,
  IsDate
} from 'class-validator'
import { IAcquisition } from '../../../domain/interface/entity/IAcquisition'
import { ISeller } from '../../../domain/interface/entity/ISeller'
import { IStatus } from '../../../domain/interface/entity/IStatus'
export class inputAcquisitionRegister implements IAcquisition {
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

    @Exclude()
    discount!: number

    @Exclude()
    cashback!: number

    @Exclude()
    seller!: ISeller

    @Exclude()
    status!: IStatus
}
