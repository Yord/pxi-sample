module.exports = {
  name: 'sample',
  desc: 'is a sample parser.',
  func: ({}) => (tokens, lines) => (
    {err: [], jsons: tokens}
  )
}