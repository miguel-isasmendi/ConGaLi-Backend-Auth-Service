const logger = require('log4js').getLogger('JWT configurator')
const jwt = require('restify-jwt')

module.exports = (aJWTConfig, aServer) => {
  logger.debug('Adding jwt configuration...')
  let secret = new Buffer(aJWTConfig.secret, 'base64')

  for (let i = aJWTConfig.endpointConfigs.length - 1; i >= 0; i--) {
    let jwtConfig = aJWTConfig.endpointConfigs[i]
    let jwtRawConfig = {secret: secret}

    if (jwtConfig.audience) {
      jwtRawConfig.audience = jwtConfig.audience
    }

    if (jwtConfig.issuer) {
      jwtRawConfig.issuer = jwtConfig.issuer
    }

    let newJWTinterceptor = jwt(jwtRawConfig)

    if (jwtConfig.unlessPaths) {
      newJWTinterceptor = newJWTinterceptor.unless({path: jwtConfig.unlessPaths})
    }

    aServer.use(newJWTinterceptor)

  }
}