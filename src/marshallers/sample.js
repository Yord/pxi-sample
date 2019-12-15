module.exports = {
  name: 'sample',
  desc: 'is a sample marshaller.',
  func: ({}) => jsons => (
    {err: [], str: jsons.map(json => json === null ? '' : json.toString()).join('')}
  )
}