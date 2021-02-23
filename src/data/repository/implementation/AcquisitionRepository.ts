import { injectable } from 'tsyringe'
import { getRepository, Repository } from 'typeorm'
import { IAcquisition } from '../../../domain/interface/entity/IAcquisition'
import { AcquisitionEntity } from '../../entity/AcquisitionEntity'
import { IAcquisitionRepository } from '../../../domain/interface/repository/IAcquisitionRepository'

@injectable()
export class AcquisitionRepository implements IAcquisitionRepository {
  private readonly repository: Repository<AcquisitionEntity>;
  constructor () {
    this.repository = getRepository(AcquisitionEntity)
  }

  async save (Acquisition: IAcquisition): Promise<IAcquisition> {
    const exist = await this.repository.findOne(Acquisition.code) ? 'Seller already exists' : 'Seller not found'
    if (exist === 'Seller already exists') {
      throw new Error(exist)
    }
    try {
      const acquisitionCreated = this.repository.create(Acquisition)
      return this.repository.save(acquisitionCreated)
    } catch (err) {
      throw new Error(err)
    }
  }

  async findByCode (code:string): Promise<IAcquisition | undefined> {
    try {
      const acquisitionFound = await this.repository.findOne(code, {
        relations: ['seller', 'status']
      })
      return acquisitionFound
    } catch (err) { throw new Error(err) }
  }

  findAllByCpf (cpf:string): Promise<IAcquisition[]> {
    return this.repository.find({ where: { seller: { cpf: cpf } }, relations: ['seller', 'status'] })
  }

  async update (acquisition: Partial<IAcquisition>): Promise<IAcquisition> {
    console.log(acquisition)
    try { return this.repository.save(acquisition) } catch (err) { throw new Error(err) }
  }

  async delete (code:string): Promise<void> {
    const exist = await this.repository.findOne(code)
    if (!exist) { throw new Error('No acquisition found') }
    try { await this.repository.delete(code) } catch (err) {
      throw new Error(err)
    }
  }
}
