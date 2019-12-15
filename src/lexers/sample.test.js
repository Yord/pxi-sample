const {assert, integer, property, string} = require('fast-check')
const {func: lexer} = require('./sample')

test('passes on data as one big token, ignoring lines completely', () => {
  const argv      = {}
  const lex       = lexer(argv)

  const data      = string()
  const prevLines = integer()

  assert(
    property(data, prevLines, (data, prevLines) =>
      expect(
        lex(data, prevLines)
      ).toStrictEqual(
        {err: [], tokens: [data], lines: [], lastLine: prevLines, rest: ''}
      )
    )
  )
})