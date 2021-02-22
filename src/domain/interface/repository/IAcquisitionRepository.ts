import { IAcquisition } from '../entity/IAcquisition'
export interface IAcquisitionRepository{
    save(acquisition : IAcquisition):Promise<IAcquisition>
    findByCode(acquisition:IAcquisition):Promise<IAcquisition | undefined>
    findAllByCpf(cpf:string):Promise<IAcquisition[]>
    update(acquisition:Partial<IAcquisition>):Promise<void>
    delete(acquisition:IAcquisition): Promise<void>
}
