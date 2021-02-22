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
// import { controllers } from './controllers'

class App {
  public server!: Application;

  private readonly routingControllersOptions: RoutingControllersOptions = {
    routePrefix: '/api',
    controllers: [join(__dirname, '/controller/*.ts')],
    classTransformer: true
    // authorizationChecker: (action: Action) =>
    //   new Promise<boolean>((resolve, reject) => {
    //     this.passport.authenticate('jwt', (err, user) => {
    //       if (err) {
    //         return reject(err)
    //       }
    //       if (!user) {
    //         return resolve(false)
    //       }
    //       action.request.user = user
    //       return resolve(true)
    //     })(action.request, action.response, action.next)
    //   }),
    // currentUserChecker: (action: Action) => action.request.user
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
