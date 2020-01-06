![@pfx/sample teaser][teaser]

`@pfx/sample` is a sample plugin for `pf`, the fast and extensible command-line data (e.g. JSON) processor and transformer.

See the [`pf` github repository][pf] for more details!

[![node version][shield-node]][node]
[![npm version][shield-npm]][npm-package]
[![license][shield-license]][license]
[![PRs Welcome][shield-prs]][contribute]
[![linux unit tests status][shield-unit-tests-linux]][actions]
[![macos unit tests status][shield-unit-tests-macos]][actions]
[![windows unit tests status][shield-unit-tests-windows]][actions]

## Installation

`@pfx/sample` is installed in `~/.pfrc/` as follows:

```bash
npm install @pfx/sample
```

The plugin is included in `~/.pfrc/index.js` as follows:

```js
const sample = require('@pfx/sample')

module.exports = {
  plugins:  [sample],
  context:  {},
  defaults: {}
}
```

For a much more detailed description, see the [`.pfrc` module documentation][pfrc-module].

## Extensions

This plugin comes with the following `pf` extensions:

|                     | Description                                                                     |
|---------------------|---------------------------------------------------------------------------------|
| `sample` lexer      | A sample lexer showcasing the structure and contents of a `pf` lexer.           |
| `sample` parser     | A sample parser showcasing the structure and contents of a `pf` parser.         |
| `sample` applicator | A sample applicator showcasing the structure and contents of a `pf` applicator. |
| `sample` marshaller | A sample marshaller showcasing the structure and contents of a `pf` marshaller. |

## Reporting Issues

Please report issues [in the tracker][issues]!

## License

`@pfx/sample` is [MIT licensed][license].

[actions]: https://github.com/Yord/pfx-sample/actions
[contribute]: https://github.com/Yord/pf
[issues]: https://github.com/Yord/pf/issues
[license]: https://github.com/Yord/pfx-core/blob/master/LICENSE
[node]: https://nodejs.org/
[npm-package]: https://www.npmjs.com/package/@pfx/sample
[pf]: https://github.com/Yord/pf
[pfrc-module]: https://github.com/Yord/pf#pfrc-module
[shield-license]: https://img.shields.io/badge/license-MIT-blue.svg?color=yellow&labelColor=313A42
[shield-node]: https://img.shields.io/node/v/@pfx/sample?color=red&labelColor=313A42
[shield-npm]: https://img.shields.io/npm/v/@pfx/sample.svg?color=orange&labelColor=313A42
[shield-prs]: https://img.shields.io/badge/PRs-welcome-green.svg?labelColor=313A42
[shield-unit-tests-linux]: https://github.com/Yord/pfx-sample/workflows/linux/badge.svg?branch=master
[shield-unit-tests-macos]: https://github.com/Yord/pfx-sample/workflows/macos/badge.svg?branch=master
[shield-unit-tests-windows]: https://github.com/Yord/pfx-sample/workflows/windows/badge.svg?branch=master
[teaser]: ./teaser.gif