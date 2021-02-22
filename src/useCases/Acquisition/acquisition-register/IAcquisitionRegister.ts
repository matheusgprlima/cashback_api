import { IAcquisition } from '../../../domain/interface/entity/IAcquisition'

export interface IAcquisitionRegister {
    execute(acquisitionInfo: Partial<IAcquisition>, cpf:string): Promise<IAcquisition>
}
