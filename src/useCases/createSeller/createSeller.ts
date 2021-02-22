import { inject, injectable } from 'tsyringe'
import { ISellerRepository } from '../../data/repository/interface/ISellerRepository'
import { ISeller } from '../../domain/interface/ISeller'
import { ICreateUseCase } from './ICreateSellerUseCase'
@injectable()
export class CreateSellerUseCase implements ICreateUseCase {
  constructor (
        @inject('SellerRepository')
        private readonly sellerRepository : ISellerRepository
  ) {}

  public async execute (seller: ISeller) : Promise<void> {
    this.sellerRepository.save(seller)
  }
}
