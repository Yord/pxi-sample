module.exports = {
  chunkers:      [
    require('./src/chunkers/sample')
  ],
  deserializers: [
    require('./src/deserializers/sample')
  ],
  appliers:      [
    require('./src/appliers/sample')
  ],
  serializers:   [
    require('./src/serializers/sample')
  ]
}