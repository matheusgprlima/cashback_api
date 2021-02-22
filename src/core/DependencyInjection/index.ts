import { container } from 'tsyringe'
import { AcquisitionRepository } from '../../data/repository/implementation/AcquisitionRepository'
import { SellerRepository } from '../../data/repository/implementation/SellerRepository'
import { StatusRepository } from '../../data/repository/implementation/StatusRepository'
import { IAcquisitionRepository } from '../../data/repository/interface/IAcquisitionRepository'
import { ISellerRepository } from '../../data/repository/interface/ISellerRepository'
import { IStatusRepository } from '../../data/repository/interface/IStatusRepository'
import { CreateSellerUseCase } from '../../useCases/createSeller/createSeller'

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
