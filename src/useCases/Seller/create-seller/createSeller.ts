import { inject, injectable } from 'tsyringe'

import { ISeller } from '../../../domain/interface/entity/ISeller'
import { ISellerRepository } from '../../../domain/interface/repository/ISellerRepository'
import { ICreateUseCase } from './ICreateSeller'
@injectable()
export class CreateSellerUseCase implements ICreateUseCase {
  constructor (
        @inject('SellerRepository')
        private readonly sellerRepository : ISellerRepository
  ) {}

  public async execute (seller: Partial<ISeller>) : Promise<ISeller> {
    return this.sellerRepository.save(seller)
  }
}
