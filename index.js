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
  serializers:   [
    require('./src/serializers/sample')
  ]
}