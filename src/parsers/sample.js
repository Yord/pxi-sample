module.exports = {
  name: 'sample',
  desc: 'is a sample parser.',
  func: (verbose, failEarly, argv) => (tokens, lines) => (
    {err: '', jsons: tokens}
  )
}