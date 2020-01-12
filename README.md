![pxi-sample teaser][teaser]

🧚`pxi-sample` is a sample plugin for `pxi` (pixie), the small, fast, and magical command-line data processor.

See the [`pxi` github repository][pxi] for more details!

[![node version][shield-node]][node]
[![npm version][shield-npm]][npm-package]
[![license][shield-license]][license]
[![PRs Welcome][shield-prs]][contribute]
[![linux unit tests status][shield-unit-tests-linux]][actions]
[![macos unit tests status][shield-unit-tests-macos]][actions]
[![windows unit tests status][shield-unit-tests-windows]][actions]

## Installation

`pxi-sample` is installed in `~/.pxi/` as follows:

```bash
npm install pxi-sample
```

The plugin is included in `~/.pxi/index.js` as follows:

```js
const sample = require('pxi-sample')

module.exports = {
  plugins:  [sample],
  context:  {},
  defaults: {}
}
```

For a much more detailed description, see the [`.pxi` module documentation][pxi-module].

## Extensions

This plugin comes with the following `pxi` extensions:

|                       | Description                                                                          |
|-----------------------|--------------------------------------------------------------------------------------|
| `sample` chunker      | A sample chunker showcasing the structure and contents of a `pxi` chunker.           |
| `sample` deserializer | A sample deserializer showcasing the structure and contents of a `pxi` deserializer. |
| `sample` applier      | A sample applier showcasing the structure and contents of a `pxi` applier.           |
| `sample` serializer   | A sample serializer showcasing the structure and contents of a `pxi` serializer.     |

## Reporting Issues

Please report issues [in the tracker][issues]!

## License

`pxi-sample` is [MIT licensed][license].

[actions]: https://github.com/Yord/pxi-sample/actions
[contribute]: https://github.com/Yord/pxi
[issues]: https://github.com/Yord/pxi/issues
[license]: https://github.com/Yord/pxi-core/blob/master/LICENSE
[node]: https://nodejs.org/
[npm-package]: https://www.npmjs.com/package/pxi-sample
[pxi]: https://github.com/Yord/pxi
[pxi-module]: https://github.com/Yord/pxi#pxi-module
[shield-license]: https://img.shields.io/badge/license-MIT-blue.svg?color=yellow&labelColor=313A42
[shield-node]: https://img.shields.io/node/v/pxi-sample?color=red&labelColor=313A42
[shield-npm]: https://img.shields.io/npm/v/pxi-sample.svg?color=orange&labelColor=313A42
[shield-prs]: https://img.shields.io/badge/PRs-welcome-green.svg?labelColor=313A42
[shield-unit-tests-linux]: https://github.com/Yord/pxi-sample/workflows/linux/badge.svg?branch=master
[shield-unit-tests-macos]: https://github.com/Yord/pxi-sample/workflows/macos/badge.svg?branch=master
[shield-unit-tests-windows]: https://github.com/Yord/pxi-sample/workflows/windows/badge.svg?branch=master
[teaser]: https://github.com/Yord/pxi/blob/master/teaser.gif?raw=true