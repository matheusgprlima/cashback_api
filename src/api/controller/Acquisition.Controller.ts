import {
  Get,
  Post,
  JsonController,
  Body,
  HttpCode,
  OnUndefined,
  Put,
  Delete,
  QueryParam
} from 'routing-controllers'
import { ResponseSchema } from 'routing-controllers-openapi'
import { container } from 'tsyringe'
import { IAcquisitionCashback } from '../../useCases/Acquisition/acquisition-cashback-accumulated/IAcquisitionCashback'
import { IAcquisitionFindAll } from '../../useCases/Acquisition/acquisition-find-all/IAcquisitionFindAll'
import { acquisitionRegisterDTO } from '../../useCases/Acquisition/acquisition-register/acquisitionRegisterDTO'
import { IAcquisitionRegister } from '../../useCases/Acquisition/acquisition-register/IAcquisitionRegister'
import { IDeleteAcquisition } from '../../useCases/Acquisition/delete-acquisition/IDeleteAcquisition'
import { IUpdateAcquisition } from '../../useCases/Acquisition/update-acquisition/IUpdateAcquisition'
import { updateAcquisitionDTO } from '../../useCases/Acquisition/update-acquisition/updateAcquisitionDTO'
import { deleteAcquisitionDTO } from '../../useCases/Acquisition/delete-acquisition/deleteAcquisitionDTO'
import { acquisitionCashbackDTO } from '../../useCases/Acquisition/acquisition-cashback-accumulated/acquisitionCashbackDTO'
  @JsonController()
export class AcquisitionController {
  public constructor (
      private readonly acquisitionRegister: IAcquisitionRegister = container.resolve('AcquisitionRegister'),
      private readonly updateAcquisition: IUpdateAcquisition = container.resolve('UpdateAcquisitio'),
      private readonly deleteAcquisition : IDeleteAcquisition = container.resolve('DeleteAcquisition '),
      private readonly acquisitionCashback: IAcquisitionCashback = container.resolve('AcquisitionCashback'),
      private readonly acquisitionFindAll: IAcquisitionFindAll = container.resolve('AcquisitionFindAll')
  ) {}

    @Post('/acquisition', { transformResponse: true })
    @HttpCode(201)
    @ResponseSchema(acquisitionRegisterDTO)
  public createAcquisition (@Body() acquisitionInfo: acquisitionRegisterDTO) {
    return this.acquisitionRegister.execute(acquisitionInfo, acquisitionInfo.cpf)
  }

    @Put('/acquisition/update', { transformResponse: true })
    @OnUndefined(404)
    @ResponseSchema(updateAcquisitionDTO)
    public Update (
        @Body() acquisitionInfo: updateAcquisitionDTO
    ) {
      return this.updateAcquisition.execute(acquisitionInfo)
    }

    @Delete('/acquisition/delete', { transformResponse: true })
    @ResponseSchema(deleteAcquisitionDTO)
    public Delete (@Body() acquisitionInfo: updateAcquisitionDTO) {
      return this.deleteAcquisition.execute(acquisitionInfo)
    }

    @Get('/acquisitions', { transformResponse: true })
    @OnUndefined(404)
    @ResponseSchema(acquisitionRegisterDTO, { isArray: true })
    public fetchAll (@Body() acquisitionInfo: acquisitionRegisterDTO) {
      return this.acquisitionFindAll.execute(acquisitionInfo.cpf)
    }

    @Get('/acquisition/cashback', { transformResponse: true })
    @OnUndefined(404)
    @ResponseSchema(acquisitionCashbackDTO)
    public fetchCashback (@QueryParam('cpf') cpf: string) {
      return this.acquisitionCashback.execute(cpf)
    }
}
