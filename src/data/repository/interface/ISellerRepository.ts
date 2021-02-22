import { ISeller } from '../../../domain/interface/ISeller'

export interface ISellerRepository{
    save(seller : ISeller):Promise<ISeller>
    findByCpf(seller:ISeller):Promise<ISeller|undefined>
    update(seller:Partial<ISeller>):void
    delete(seller:ISeller): void
}
