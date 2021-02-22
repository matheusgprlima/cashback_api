import { container } from 'tsyringe'
import { AcquisitionRepository } from '../../data/repository/implementation/AcquisitionRepository'
import { SellerRepository } from '../../data/repository/implementation/SellerRepository'
import { StatusRepository } from '../../data/repository/implementation/StatusRepository'
import { IAcquisitionRepository } from '../../domain/interface/repository/IAcquisitionRepository'
import { ISellerRepository } from '../../domain/interface/repository/ISellerRepository'
import { IStatusRepository } from '../../domain/interface/repository/IStatusRepository'
import { CreateSellerUseCase } from '../../useCases/Seller/create-seller/createSeller'
import { loginValidationrUseCase } from '../../useCases/Seller/seller-login-validation/loginValidation'

container.register<IAcquisitionRepository>(
  'AcquisitionRepository',
  AcquisitionRepository
)
container.register<ISellerRepository>(
  'SellerRepository',
  SellerRepository
)
container.register<IStatusRepository>(
  'StatusRepository',
  StatusRepository
)
container.register<CreateSellerUseCase>(
  'CreateSellerUseCase',
  CreateSellerUseCase
)
container.register<loginValidationrUseCase>(
  'loginValidationrUseCase',
  loginValidationrUseCase
)
