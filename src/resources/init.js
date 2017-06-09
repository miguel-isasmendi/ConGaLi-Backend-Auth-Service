const logger = require('log4js').getLogger('Resources Initializator')
const JWTConfigurator = require('./JWT/jwtConfigurator')

module.exports = (aConfig, aServer) => {
  logger.debug('Delegating JWT configuration...')

  JWTConfigurator(aConfig.jwt, aServer)

  logger.debug('Adding handlers...')

  
  /* aServer.post('/cipher', (req, res, next) => {
    res.contentType = 'application/json'
    let bodyObject = JSON.parse(req.body)
    let decoder = new SimpleDecoder()

    res.send(201, {text: decoder.decodeText(bodyObject.text)})

    return next()
  }) */
}
