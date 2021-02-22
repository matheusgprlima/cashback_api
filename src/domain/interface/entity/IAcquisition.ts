import { ISeller } from './ISeller'
import { IStatus } from './IStatus'

export interface IAcquisition{
    code:string,
    value:number,
    date:Date,
    discount:number,
    cashback:number,
    seller: ISeller,
    status: IStatus
}
