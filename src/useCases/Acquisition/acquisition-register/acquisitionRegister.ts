import { inject, injectable } from 'tsyringe'
import { IAcquisition } from '../../../domain/interface/entity/IAcquisition'
import { IAcquisitionRepository } from '../../../domain/interface/repository/IAcquisitionRepository'
import { ISellerRepository } from '../../../domain/interface/repository/ISellerRepository'
import { IStatusRepository } from '../../../domain/interface/repository/IStatusRepository'
import { IAcquisitionRegister } from './IAcquisitionRegister'
@injectable()
export class AcquisitionRegister implements IAcquisitionRegister {
  constructor (
        @inject('SellerRepository')
        private readonly sellerRepository : ISellerRepository,
        @inject('AcquisitionRepository')
        private readonly acquisitionRepository: IAcquisitionRepository,
        @inject('StatusRepository')
        private readonly statusRepository: IStatusRepository
  ) {}

  private calculateCashback (value: number, cashback: number): number {
    return (value * (cashback / 100))
  }

  private calculateDiscount (value: number) {
    let cashback
    if (value < 1000) {
      cashback = 10
    } else if (value >= 1000 && value < 1500) {
      cashback = 15
    } else {
      cashback = 20
    }
    return cashback
  }

  public async execute (acquisitionInfo: Partial<IAcquisition>, cpf:string) : Promise<IAcquisition> {
    const [seller, status] = await Promise.all([
      this.sellerRepository.findByCpf(cpf),
      this.statusRepository.findById(cpf === '15350946056' ? '2' : '1')
    ])

    if (!seller || !status) {
      throw new Error("Seller doesn't exist in our database")
    }

    const discount = this.calculateDiscount(Number(acquisitionInfo.value)).toFixed(3)

    const cashback = this.calculateCashback(Number(acquisitionInfo.value), Number(discount)).toFixed(3)

    const acquisition : IAcquisition = {
      code: String(acquisitionInfo.code),
      value: Number(acquisitionInfo.value),
      date: new Date(Date.now()),
      discount: Number(discount),
      cashback: Number(cashback),
      seller: seller,
      status: status
    }

    return this.acquisitionRepository.save(acquisition)
  }
}
