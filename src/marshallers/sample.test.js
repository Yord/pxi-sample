const {array, assert, integer, jsonObject, property} = require('fast-check')
const {func: marshaller} = require('./sample')

test('returns input as toString without newlines', () => {
  const argv    = {}
  const marshal = marshaller(argv)

  const jsons   = array(jsonObject())

  assert(
    property(jsons, jsons => {
      const str = (
        jsons
        .map(json => json === null ? '' : json.toString())
        .join('')
      )

      expect(
        marshal(jsons)
      ).toStrictEqual(
        {err: [], str}
      ) 
    })
  )
})