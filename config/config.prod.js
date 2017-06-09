module.exports = {
  port: process.env.PORT || 8087,
  jwt: {
    secret: 'the secret string',
    endpointConfigs: [
      {
        /* audience: 'http://myapi/protected',
        issuer: 'http://issuer',
        unlessPaths: '' */
      }
    ]
  }
}
