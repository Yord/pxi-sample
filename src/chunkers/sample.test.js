const {anything, assert, constant, property} = require('fast-check')
const {func: chunker} = require('./sample')

test('passes on data as one big chunk, ignoring lines completely', () => {
  const argv      = anything().chain(verbose => constant({verbose}))
  const data      = anything()
  const prevLines = anything()

  assert(
    property(argv, data, prevLines, (argv, data, prevLines) =>
      expect(
        chunker(argv)(data, prevLines, false)
      ).toStrictEqual(
        {err: [], chunks: [], lines: [], lastLine: 0, rest: ''}
      )
    )
  )
})