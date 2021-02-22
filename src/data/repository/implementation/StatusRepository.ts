import { injectable } from 'tsyringe'
import { getRepository, Repository } from 'typeorm'
import { IStatus } from '../../../domain/interface/IStatus'
import { StatusEntity } from '../../entity/StatusEntity'
import { IStatusRepository } from '../interface/IStatusRepository'

@injectable()
export class StatusRepository implements IStatusRepository {
  private readonly repository: Repository<StatusEntity>;
  constructor () {
    this.repository = getRepository(StatusEntity)
  }

  findAll (): Promise<IStatus[]> {
    return this.repository.find()
  }

  async findById (id:string): Promise<IStatus | undefined> {
    try {
      const sellerFound = await this.repository.findOne(id)
      return sellerFound
    } catch (err) { throw new Error(err) }
  }
}
