const {anything, assert, constant, property} = require('fast-check')
const {func: serializer} = require('./sample')

test('returns input as toString without newlines', () => {
  const argv  = anything().chain(verbose => constant({verbose}))
  const jsons = anything()

  assert(
    property(argv, jsons, (argv, jsons) =>
      expect(
        serializer(argv)(jsons)
      ).toStrictEqual(
        {err: [], str: ''}
      ) 
    )
  )
})