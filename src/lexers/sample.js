module.exports = {
  name: 'sample',
  desc: 'is a sample lexer.',
  func: ({verbose}) => (data, prevLines) => (
    // * Turn data into an array of tokens
    // * Count lines for better error reporting throughout pxi
    // * Collect error reports: {msg: String, line: Number, info: String}
    //   If verbose > 0, include line in error reports
    //   If verbose > 1, include info in error reports
    // * Return errors, tokens, lines, the last line, and all unlexed data
    {err: [], tokens: [], lines: [], lastLine: 0, rest: ''}
  )
}