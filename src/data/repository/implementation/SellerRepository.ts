import { injectable } from 'tsyringe'
import { getRepository, Repository } from 'typeorm'
import { ISeller } from '../../../domain/interface/entity/ISeller'
import { SellerEntity } from '../../entity/SellerEntity'
import { ISellerRepository } from '../../../domain/interface/repository/ISellerRepository'

@injectable()
export class SellerRepository implements ISellerRepository {
  private readonly repository: Repository<SellerEntity>;
  constructor () {
    this.repository = getRepository(SellerEntity)
  }

  async save (seller: Partial<ISeller>): Promise<ISeller> {
    const exist = await this.repository.findOne(seller.cpf) ? 'Seller already exists' : 'Seller not found'
    if (exist === 'Seller already exists') {
      throw new Error(exist)
    }
    try {
      const sellerCreation = this.repository.create(seller)
      return this.repository.save(sellerCreation)
    } catch (err) {
      throw new Error(err)
    }
  }

  async findByCpf (seller:ISeller): Promise<ISeller | undefined> {
    try {
      const sellerFound = await this.repository.findOne(seller.cpf)
      return sellerFound
    } catch (err) { throw new Error(err) }
  }

  async update (seller: Partial<ISeller>) {
    try { await this.repository.save(seller) } catch (err) { throw new Error(err) }
  }

  async delete (seller:ISeller): Promise<void> {
    const exist = await this.repository.findOne(seller.cpf)
    if (exist) {
      try { await this.repository.delete(seller) } catch (err) {
        throw new Error(err)
      }
      if (exist === undefined || null) { throw new Error('No one found with this cpf') }
    }
  }
}
