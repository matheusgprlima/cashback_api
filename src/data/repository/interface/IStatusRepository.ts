import { IStatus } from '../../../domain/interface/IStatus'

export interface IStatusRepository{
    findAll(status:IStatus):Promise<IStatus>
    findById(status:IStatus):Promise<IStatus>
    update(status:IStatus):Promise<IStatus>
    delete(status:IStatus):Promise<IStatus>
}
