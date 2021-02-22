import { IAcquisition } from '../../../domain/interface/entity/IAcquisition'

export interface IDeleteAcquisition {
    execute(acquisitionInfo:IAcquisition): Promise<void>
}
