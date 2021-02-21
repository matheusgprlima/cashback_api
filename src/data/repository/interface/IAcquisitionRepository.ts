import { IAcquisition } from '../../../domain/interface/IAcquisition'

export interface ISellerRepository{
    save(acquisition : IAcquisition):Promise<IAcquisition>
    findByCode(acquisition:IAcquisition):Promise<IAcquisition>
    findAll(acquisition:IAcquisition):Promise<IAcquisition>
    update(acquisition:IAcquisition):Promise<IAcquisition>
    delete(acquisition:IAcquisition): Promise<IAcquisition>
}
