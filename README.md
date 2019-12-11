![@pf/sample teaser][teaser]

`@pf/sample` is a sample plugin for `pf`, the fast and extensible command-line data (e.g. JSON) processor and transformer.

See the [`pf` github repository][pf] for more details!

[![npm version](https://img.shields.io/npm/v/fx.svg?color=orange)](https://www.npmjs.com/package/fx)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?color=green)][license]

## Installation

`pf` requires **node v8.3.0** or higher.

Usually, `@pf/sample` is installed in `~/.pfrc/` as follows:

```bash
npm install @pf/sample
```

The plugin is included in `~/.pfrc/index.js` as follows:

```js
const samplePlugin = require('@pf/sample')

module.exports = {
  plugins:  [samplePlugin],
  context:  {},
  defaults: {}
}
```

For a much more detailed description, see the [`pf` repository][pf].

## License

This project is under the [MIT][license] license.

[license]: https://github.com/Yord/pf-core/blob/master/LICENSE
[teaser]: ./teaser.gif
[pf]: https://github.com/Yord/pf