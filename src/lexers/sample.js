module.exports = {
  name: 'sample',
  desc: 'is a sample lexer.',
  func: (verbose, failEarly, argv) => (data, prevLines) => (
    {err: '', tokens: [data], lines: [], lastLine: -1, rest: ''}
  )
}