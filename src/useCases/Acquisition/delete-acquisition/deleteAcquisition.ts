import { inject, injectable } from 'tsyringe'
import { IAcquisition } from '../../../domain/interface/entity/IAcquisition'
import { IAcquisitionRepository } from '../../../domain/interface/repository/IAcquisitionRepository'
import { IDeleteAcquisition } from './IDeleteAcquisition'
@injectable()
export class DeleteAcquisition implements IDeleteAcquisition {
  constructor (
        @inject('AcquisitionRepository')
        private readonly acquisitionRepository: IAcquisitionRepository
  ) {}

  public async execute (acquisitionInfo: IAcquisition) : Promise<void> {
    const acquisitionExist = await this.acquisitionRepository.findByCode(acquisitionInfo)
    if (!acquisitionExist) { throw new Error('Acquisition doesn\'t exist in our database yet') }
    if (String(acquisitionExist.status.id) === '2') { throw new Error('Acquisition already aproved') }
    this.acquisitionRepository.delete(acquisitionInfo)
  }
}
