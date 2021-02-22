import {
  IsNumber,
  IsPositive
} from 'class-validator'
import { IAcquisition } from '../../../domain/interface/entity/IAcquisition'
import { ICashbackExternal } from './IAcquisitionCashback'
export class acquisitionCashbackDTO implements ICashbackExternal {
  constructor (data: Partial<Omit<IAcquisition, 'discount|cashback|seller|status'>>) {
    Object.assign(this, data)
  }

        @IsNumber()
        @IsPositive()
        credit!: number
}
