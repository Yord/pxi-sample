module.exports = {
  name: 'sample',
  desc: 'is a sample marshaller.',
  func: (verbose, failEarly, argv) => jsons => (
    {err: '', str: jsons.map(json => json.toString()).join('')}
  )
}