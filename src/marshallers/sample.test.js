const {anything, assert, constant, property} = require('fast-check')
const {func: marshaller} = require('./sample')

test('returns input as toString without newlines', () => {
  const argv  = anything().chain(verbose => constant({verbose}))
  const jsons = anything()

  assert(
    property(argv, jsons, (argv, jsons) =>
      expect(
        marshaller(argv)(jsons)
      ).toStrictEqual(
        {err: [], str: ''}
      ) 
    )
  )
})