import { ISeller } from './ISeller'
import { IStatus } from './IStatus'

export interface IAcquisition{
    code:string,
    value:string,
    date:Date,
    discount:number,
    cashback:number,
    sellers: ISeller[],
    status: IStatus[]
}
