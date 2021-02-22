import { IAcquisition } from '../../../domain/interface/entity/IAcquisition'

export interface IAcquisitionFindAll {
    execute(cpf:string): Promise<IAcquisition[]>
}
