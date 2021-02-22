import {
  Post,
  JsonController,
  OnUndefined,
  Body,
  HttpCode,
  Get
} from 'routing-controllers'
import { ResponseSchema } from 'routing-controllers-openapi'
import { container } from 'tsyringe'
import { createSellerDTO } from '../../useCases/Seller/create-seller/createSellerDTO'
import { loginValidationDTO } from '../../useCases/Seller/seller-login-validation/loginValidationDTO'
import { ICreateUseCase } from '../../useCases/Seller/create-seller/ICreateSeller'
import { ILoginValidation } from '../../useCases/Seller/seller-login-validation/ILoginValidation'

  @JsonController()
export class SellerController {
  public constructor (
      private readonly CreateUseCase: ICreateUseCase = container.resolve(
        'CreateSellerUseCase'
      ),
      private readonly loginValidationrUseCase: ILoginValidation = container.resolve(
        'CreateSellerUseCase'
      )
  ) {}

    @Post('/signup', { transformResponse: true })
    @HttpCode(200)
    @ResponseSchema(createSellerDTO)
    @OnUndefined(400)
  public createConsultant (@Body() sellerInfo: createSellerDTO) {
    const { cpf, email, password } = sellerInfo

    if (!cpf) throw new Error('Cpf not provided')
    if (!email) throw new Error('email not provided')
    if (!password) throw new Error('password not provided')
    return this.CreateUseCase.execute(sellerInfo)
  }

  @Get('/signin', { transformResponse: true })
  @HttpCode(200)
  @ResponseSchema(loginValidationDTO)
  @OnUndefined(404)
    public loginValidation (@Body() loginInfo:loginValidationDTO) {
      const { email, password } = loginInfo
      if (!email) throw new Error('email not provided')
      if (!password) throw new Error('password not provided')
      return this.loginValidationrUseCase.execute(loginInfo)
    }
}
