module.exports = {
  name: 'sample',
  desc: 'is a sample lexer.',
  func: ({}) => (data, prevLines) => (
    {err: [], tokens: [data], lines: [], lastLine: prevLines, rest: ''}
  )
}