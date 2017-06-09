const Aerospike = require('aerospike')
const logger = require('log4js').getLogger('Aerospike connector')

module.exports = (config, daoObjects...) => {
  Aerospike.connect(
    { hosts: config.host },
    (error, client) => {
      if (error) {
        logger.error('Connecting to Aerospike cluster: ${error.message} [${error.code}]\n${error.stack}')
        throw error
      }

      for (let i = daoObjects.length - 1; i >= 0; i--) {
        daoObject.configureUsingClient(daoObjects[daoObjects.length - 1 - i])
      }
    }
  )
}