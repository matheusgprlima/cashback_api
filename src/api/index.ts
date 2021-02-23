import { Application } from 'express'
import {
  getMetadataArgsStorage,
  RoutingControllersOptions,
  createExpressServer
} from 'routing-controllers'
import * as swaggerUiExpress from 'swagger-ui-express'
import { routingControllersToSpec } from 'routing-controllers-openapi'
import { validationMetadatasToSchemas } from 'class-validator-jsonschema'
import { defaultMetadataStorage } from 'class-transformer/storage'
import { join } from 'path'

class App {
  public server!: Application;

  private readonly routingControllersOptions: RoutingControllersOptions = {
    routePrefix: '/api',
    controllers: [join(__dirname, '/controller/*.[tj]s')],
    cors: true,
    classTransformer: true
  };

  public init () {
    this.server = createExpressServer(
      this.routingControllersOptions
    )
    this.addSwagger()

    return this.server
  }

  private addSwagger () {
    const schemas = validationMetadatasToSchemas({
      classTransformerMetadataStorage: defaultMetadataStorage,
      refPointerPrefix: '#/components/schemas/'
    })

    const spec = routingControllersToSpec(
      getMetadataArgsStorage(),
      this.routingControllersOptions,
      {
        components: {
          schemas,
          securitySchemes: {
            Authorization: {
              description: 'API Token',
              type: 'http',
              name: 'Authorization',
              scheme: 'bearer',
              bearerFormat: 'JWT',
              in: 'header'
            }
          }
        },
        info: {
          title: 'cashback_api',
          version: '1.0.0',
          contact: {
            name: 'Matheus Gomes',
            url: 'https://github.com/matheusgprlima/cashback_api'
          }
        }
      }
    )

    this.server.use(
      '/api-docs',
      swaggerUiExpress.serve,
      swaggerUiExpress.setup(spec)
    )
  }
}

export default new App()
