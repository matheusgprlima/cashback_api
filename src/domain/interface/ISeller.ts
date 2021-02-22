import { IAcquisition } from './IAcquisition'

export interface ISeller{
    cpf:string,
    name:string,
    email:string,
    password:string,
    acquisition?:IAcquisition[]

}
