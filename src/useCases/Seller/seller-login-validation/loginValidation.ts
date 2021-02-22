import { inject, injectable } from 'tsyringe'
import { ISellerRepository } from '../../../domain/interface/repository/ISellerRepository'
import { ISeller } from '../../../domain/interface/entity/ISeller'
import { ILoginValidation } from './ILoginValidation'
@injectable()
export class loginValidationrUseCase implements ILoginValidation {
  constructor (
        @inject('SellerRepository')
        private readonly sellerRepository : ISellerRepository
  ) {}

  public async execute (seller: ISeller) : Promise<ISeller> {
    try {
      const sellerExist = await this.sellerRepository.findByCpf(seller)
      if (!sellerExist) throw new Error("Seller doesn't exist")
      return sellerExist
    } catch (err) { throw new Error(err) }
  }
}
