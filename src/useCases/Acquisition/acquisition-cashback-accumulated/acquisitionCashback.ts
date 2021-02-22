import { inject, injectable } from 'tsyringe'
import { IAcquisitionRepository } from '../../../domain/interface/repository/IAcquisitionRepository'
import { fetchCashback } from '../../../Service/axios/apiCashbackService'
import { IAcquisitionCashback, ICashbackExternal } from './IAcquisitionCashback'
@injectable()
export class AcquisitionCashback implements IAcquisitionCashback {
  constructor (
        @inject('AcquisitionRepository')
        private readonly acquisitionRepository: IAcquisitionRepository
  ) {}

  public async execute (cpf:string) : Promise<ICashbackExternal> {
    if (!cpf) { throw new Error('CPF can not be null') }

    const [acquisition, credit] = await Promise.all([
      this.acquisitionRepository.findAllByCpf(cpf),
      fetchCashback(cpf)
    ])

    const cashback = acquisition.reduce(
      (prev, current) => prev + current.value,
      credit.body.credit
    )
    return cashback
  }
}
