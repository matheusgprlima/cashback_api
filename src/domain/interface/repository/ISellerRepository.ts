import { ISeller } from '../entity/ISeller'

export interface ISellerRepository{
    save(seller : Partial<ISeller>):Promise<ISeller>
    findByCpf(cpf:string):Promise<ISeller|undefined>
    update(seller:Partial<ISeller>):void
    delete(seller:ISeller): void
}
