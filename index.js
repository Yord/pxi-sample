module.exports = {
  chunkers:      [
    require('./src/chunkers/sample')
  ],
  deserializers: [
    require('./src/deserializers/sample')
  ],
  applicators:   [
    require('./src/applicators/sample')
  ],
  marshallers:   [
    require('./src/marshallers/sample')
  ]
}