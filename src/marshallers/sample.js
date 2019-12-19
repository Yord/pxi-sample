module.exports = {
  name: 'sample',
  desc: 'is a sample marshaller.',
  func: ({verbose}) => jsons => (
    // * Turn jsons into a string
    // * Collect error reports: {msg: String, line: Number, info: Json}
    //   If verbose > 0, include line in error reports
    //   If verbose > 1, include info in error reports
    // * Return errors and marshalled string
    {err: [], str: ''}
  )
}