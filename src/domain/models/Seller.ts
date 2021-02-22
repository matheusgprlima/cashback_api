import { IAcquisition } from '../interface/entity/IAcquisition'
import { ISeller } from '../interface/entity/ISeller'

export class Seller implements ISeller {
  constructor (props: ISeller) {
    Object.assign(this, props)
  }

  cpf!: string;

  name!: string;

  email!: string;

  password!: string;

  acquisition?: IAcquisition[];
}
