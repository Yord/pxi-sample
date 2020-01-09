const {anything, array, assert, constant, property} = require('fast-check')
const {func: deserializer} = require('./sample')

test('always passes chunks on', () => {
  const argv   = anything().chain(verbose => constant({verbose}))
  const chunks = array(anything())
  const lines  = anything()

  assert(
    property(argv, chunks, (argv, chunks) =>
      expect(
        deserializer(argv)(chunks, lines)
      ).toStrictEqual(
        {err: [], jsons: []}
      )
    )
  )
})