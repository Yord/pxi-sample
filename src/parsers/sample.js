module.exports = {
  name: 'sample',
  desc: 'is a sample parser.',
  func: ({verbose}) => (tokens, lines) => (
    // * Parse tokens to jsons
    // * Collect error reports: {msg: String, line: Number, info: Token}
    //   If verbose > 0, include line in error reports
    //   If verbose > 1, include info in error reports
    // * Return errors and parsed jsons
    {err: [], jsons: []}
  )
}