module.exports = {
  name: 'sample',
  desc: 'is a sample applier.',
  func: (functions, {verbose}) => (jsons, lines) => (
    // * Turn jsons into other jsons by applying all functions
    // * Collect error reports: {msg: String, line: Number, info: Json}
    //   If verbose > 0, include line in error reports
    //   If verbose > 1, include info in error reports
    // * Return errors and serialized string
    {err: [], jsons: []}
  )
}