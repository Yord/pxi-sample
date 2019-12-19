const {anything, array, assert, constant, property} = require('fast-check')
const {func: parser} = require('./sample')

test('always passes tokens on', () => {
  const argv   = anything().chain(verbose => constant({verbose}))
  const tokens = array(anything())
  const lines  = anything()

  assert(
    property(argv, tokens, (argv, tokens) =>
      expect(
        parser(argv)(tokens, lines)
      ).toStrictEqual(
        {err: [], jsons: []}
      )
    )
  )
})