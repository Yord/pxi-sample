const {array, assert, integer, property, string} = require('fast-check')
const {func: parser} = require('./sample')

test('always passes tokens on', () => {
  const argv   = {}
  const parse  = parser(argv)

  const tokens = array(string())
  const lines  = integer()

  assert(
    property(tokens, tokens =>
      expect(
        parse(tokens, lines)
      ).toStrictEqual(
        {err: [], jsons: tokens}
      )
    )
  )
})