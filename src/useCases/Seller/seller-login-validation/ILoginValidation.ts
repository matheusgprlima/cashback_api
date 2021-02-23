import { ISeller } from '../../../domain/interface/entity/ISeller'

export interface ILoginValidation{
    execute(seller:Partial<ISeller>): Promise<ISeller>
}
