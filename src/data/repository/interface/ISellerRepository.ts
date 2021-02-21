import { ISeller } from '../../../domain/interface/ISeller'

export interface ISellerRepository{
    save(seller : ISeller):Promise<ISeller>
    findByCpf(seller:ISeller):Promise<ISeller>
    update(seller:ISeller):Promise<ISeller>
    delete(seller:ISeller): Promise<ISeller>
}
