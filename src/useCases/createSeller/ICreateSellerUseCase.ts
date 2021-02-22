import { ISeller } from '../../domain/interface/ISeller'

export interface ICreateUseCase{
    execute(seller:ISeller): Promise<void>
}
