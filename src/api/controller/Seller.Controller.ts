import {
  Post,
  JsonController,
  Body,
  HttpCode
} from 'routing-controllers'
import { ResponseSchema } from 'routing-controllers-openapi'
import { container } from 'tsyringe'
import { createSellerDTO } from '../../useCases/createSeller/createSellerDTO'
import { ICreateUseCase } from '../../useCases/createSeller/ICreateSellerUseCase'

  @JsonController()
export class SellerController {
  public constructor (
      private readonly CreateUseCase: ICreateUseCase = container.resolve(
        'CreateSellerUseCase'
      )
  ) {}

    @Post('/seller', { transformResponse: true })
    @HttpCode(201)
    @ResponseSchema(createSellerDTO)
  public createConsultant (@Body() data: createSellerDTO) {
    return this.CreateUseCase.execute(data)
  }
}
