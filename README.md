![@pfx/sample teaser][teaser]

`@pfx/sample` is a sample plugin for `pf`, the fast and extensible command-line data (e.g. JSON) processor and transformer.

See the [`pf` github repository][pf] for more details!

[![node version][node-shield]][node]
[![npm version][npm-shield]][npm-package]
[![license][license-shield]][license]
[![PRs Welcome][prs-shield]][pfx-how-to-contribute]
[![linux unit tests status][linux-unit-tests-shield]][actions]
[![macos unit tests status][macos-unit-tests-shield]][actions]
[![windows unit tests status][windows-unit-tests-shield]][actions]

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

For a much more detailed description, see the [`.pfrc` module documentation][pf-pfrc-module] in the [`pf` repository][pf].

## Extensions

This plugin comes with the following `pf` extensions:

|                     | Description                                                                     |
|---------------------|---------------------------------------------------------------------------------|
| `sample` lexer      | A sample lexer showcasing the structure and contents of a `pf` lexer.           |
| `sample` parser     | A sample parser showcasing the structure and contents of a `pf` parser.         |
| `sample` applicator | A sample applicator showcasing the structure and contents of a `pf` applicator. |
| `sample` marshaller | A sample marshaller showcasing the structure and contents of a `pf` marshaller. |

## Reporting Issues

Please report issues [at the `pf` repository][issues]!

## License

`@pfx/sample` is [MIT licensed][license].

[npm-package]: https://www.npmjs.com/package/@pfx/sample
[license]: https://github.com/Yord/pfx-core/blob/master/LICENSE
[teaser]: ./teaser.gif
[pf]: https://github.com/Yord/pf
[actions]: https://github.com/Yord/pfx-sample/actions
[npm-shield]: https://img.shields.io/npm/v/@pfx/sample.svg?color=orange
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?color=yellow
[unit-tests-shield]: https://github.com/Yord/pfx-sample/workflows/unit%20tests/badge.svg?branch=master
[node-shield]: https://img.shields.io/node/v/@pfx/sample?color=red
[node]: https://nodejs.org/
[prs-shield]: https://img.shields.io/badge/PRs-welcome-green.svg
[pfx-how-to-contribute]: https://github.com/Yord/pf
[linux-unit-tests-shield]: https://img.shields.io/github/workflow/status/Yord/pfx-json/linux/master?label=linux&logo=github&color=#5A5A5A&logoColor=#5A5A5A
[macos-unit-tests-shield]: https://img.shields.io/github/workflow/status/Yord/pfx-json/macos/master?label=macos&logo=github&color=#5A5A5A&logoColor=#5A5A5A
[windows-unit-tests-shield]: https://img.shields.io/github/workflow/status/Yord/pfx-json/windows/master?label=windows&logo=github&color=#5A5A5A&logoColor=#5A5A5A
[issues]: https://github.com/Yord/pf/issues
[pf-pfrc-module]: https://github.com/Yord/pf#pfrc-module