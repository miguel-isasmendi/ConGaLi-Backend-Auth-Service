const logger = require('log4js').getLogger('Storage Initializator')
const AuthStatusDAO = require('./DAOs/AuthStatusDAO')
const AerospikeConnector = require('./aeroSpikeConnector')

module.exports = (aConfig, aServer) => {
  logger.debug('Delegating to Storage connector...')

  AerospikeConnector(aConfig, new AuthStatusDAO())
}