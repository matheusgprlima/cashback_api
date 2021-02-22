import { IAcquisition } from '../interface/entity/IAcquisition'
import { ISeller } from '../interface/entity/ISeller'
import { IStatus } from '../interface/entity/IStatus'

export class Acquisition implements IAcquisition {
  constructor (props: IAcquisition) {
    Object.assign(this, props)
  }

    code!: string;

    value!: number;

    status!: IStatus;

    date!: Date;

    discount!: number;

    cashback!: number;

    seller!: ISeller;
}
