const {array, assert, integer, jsonObject, property} = require('fast-check')
const {func: applicator} = require('./sample')

test('does not apply function, returns input unchanged as output', () => {
  const fs        = undefined
  const argv      = {}
  const apply     = applicator(fs, argv)

  const jsons     = array(jsonObject())
  const lines     = integer()

  assert(
    property(jsons, lines, (jsons, lines) =>
      expect(
        apply(jsons, lines)
      ).toStrictEqual(
        {err: [], jsons}
      )
    )
  )
})