import { IAcquisition } from '../entity/IAcquisition'
export interface IAcquisitionRepository{
    save(acquisition : IAcquisition):Promise<IAcquisition>
    findByCode(code:string):Promise<IAcquisition | undefined>
    findAllByCpf(cpf:string):Promise<IAcquisition[]>
    update(acquisition:Partial<IAcquisition>):Promise<IAcquisition>
    delete(code:string): Promise<void>
}
