const restify = require('restify')
const process = require('process')
const logger = require('log4js').getLogger('Main App')

let programArgs = require('commander')

programArgs
  .version('0.0.1')
  .option('-e, --environment [String]', 'Environment option ["dev", "prod"]("prod" is the default and fallback configuration)')
  .parse(process.argv)

let configFileName = ''

switch (programArgs.environment) {
  case 'dev':
    configFileName = 'dev'
    logger.info('Building development config...')
    break;
  default:
    configFileName = 'prod'
    logger.info('Building production config...')
}

const config = require(`./config/config.${configFileName}`)

logger.info('Configuration read:')
logger.info(JSON.stringify(config))

logger.info('Starting App...')

const server = restify.createServer()
server.use(restify.bodyParser())

require('./src/resources/init')(config, server)

server.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.send(401, 'invalid token...');
  }
})

server.listen(
    config.port,
    () => {
        logger.info(`Listening with PID ${process.pid} on ${config.hostName} on port ${config.port}`)
        logger.info(`This platform is ${process.platform}`)
    }
);
