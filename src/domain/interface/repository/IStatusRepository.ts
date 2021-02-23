import { IStatus } from '../entity/IStatus'

export interface IStatusRepository{
    findAll():Promise<IStatus[]>
    findById(id:string):Promise<IStatus | undefined>
}
