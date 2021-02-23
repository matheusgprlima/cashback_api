import { inject, injectable } from 'tsyringe'
import { IAcquisition } from '../../../domain/interface/entity/IAcquisition'
import { IAcquisitionRepository } from '../../../domain/interface/repository/IAcquisitionRepository'
import { IAcquisitionFindAll } from './IAcquisitionFindAll'
@injectable()
export class AcquisitionFindAll implements IAcquisitionFindAll {
  constructor (
        @inject('AcquisitionRepository')
        private readonly acquisitionRepository: IAcquisitionRepository
  ) {}

  public async execute (cpf: string) : Promise<IAcquisition[]> {
    const Acquisitions = this.acquisitionRepository.findAllByCpf(cpf)
    return Acquisitions
  }
}
