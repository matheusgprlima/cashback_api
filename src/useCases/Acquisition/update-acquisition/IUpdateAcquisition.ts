import { IAcquisition } from '../../../domain/interface/entity/IAcquisition'

export interface IUpdateAcquisition {
    execute(acquisitionInfo:IAcquisition): Promise<IAcquisition>
}
