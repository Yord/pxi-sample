![@pfx/sample teaser][teaser]

`@pfx/sample` is a sample plugin for `pf`, the fast and extensible command-line data (e.g. JSON) processor and transformer.

See the [`pf` github repository][pf] for more details!

[![npm version](https://img.shields.io/npm/v/fx.svg?color=orange)](https://www.npmjs.com/package/fx)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?color=green)][license]
[![unit tests status](https://github.com/Yord/pfx-sample/workflows/unit%20tests/badge.svg?branch=master)][actions]

## Installation

`pf` requires **node v8.3.0** or higher.

Usually, `@pfx/sample` is installed in `~/.pfrc/` as follows:

```bash
npm install @pfx/sample
```

The plugin is included in `~/.pfrc/index.js` as follows:

```js
const samplePlugin = require('@pfx/sample')

module.exports = {
  plugins:  [samplePlugin],
  context:  {},
  defaults: {}
}
```

For a much more detailed description, see the [`pf` repository][pf].

## License

`@pfx/sample` is [MIT licensed][license].

[license]: https://github.com/Yord/pfx-core/blob/master/LICENSE
[teaser]: ./teaser.gif
[pf]: https://github.com/Yord/pf
[actions]: https://github.com/Yord/pfx-sample/actions