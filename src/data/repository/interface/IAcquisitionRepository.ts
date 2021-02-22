import { IAcquisition } from '../../../domain/interface/IAcquisition'
import { ISeller } from '../../../domain/interface/ISeller'

export interface IAcquisitionRepository{
    save(acquisition : IAcquisition):Promise<IAcquisition>
    findByCode(acquisition:IAcquisition):Promise<IAcquisition | undefined>
    findAllByCpf(seller:ISeller):Promise<IAcquisition[]>
    update(acquisition:Partial<IAcquisition>):Promise<void>
    delete(acquisition:IAcquisition): Promise<void>
}
