import { ISeller } from '../../../domain/interface/entity/ISeller'

export interface ICreateUseCase{
    execute(seller: Partial<ISeller>): Promise<ISeller>
}
