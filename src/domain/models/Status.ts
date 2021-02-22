import { IAcquisition } from '../interface/entity/IAcquisition'
import { IStatus } from '../interface/entity/IStatus'

export class Status implements IStatus {
  constructor (props: IStatus) {
    Object.assign(this, props)
  }

  id!: number;

  description!: string;

  acquisition?: IAcquisition[];
}
