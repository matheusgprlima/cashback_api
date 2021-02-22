import { IStatus } from '../../../domain/interface/IStatus'

export interface IStatusRepository{
    findAll():Promise<IStatus[]>
    findById(id:string):Promise<IStatus | undefined>
}
