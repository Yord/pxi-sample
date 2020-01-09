module.exports = {
  name: 'sample',
  desc: 'is a sample chunker.',
  func: ({verbose}) => (data, prevLines) => (
    // * Turn data into an array of chunks
    // * Count lines for better error reporting throughout pxi
    // * Collect error reports: {msg: String, line: Number, info: String}
    //   If verbose > 0, include line in error reports
    //   If verbose > 1, include info in error reports
    // * Return errors, chunks, lines, the last line, and all unchunked data
    {err: [], chunks: [], lines: [], lastLine: 0, rest: ''}
  )
}