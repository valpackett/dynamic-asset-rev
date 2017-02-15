# dynamic-asset-rev [![npm version](https://img.shields.io/npm/v/dynamic-asset-rev.svg?style=flat)](https://www.npmjs.org/package/dynamic-asset-rev) [![npm downloads](https://img.shields.io/npm/dm/dynamic-asset-rev.svg?style=flat)](https://www.npmjs.org/package/dynamic-asset-rev) [![Dependency Status](https://img.shields.io/gemnasium/myfreeweb/dynamic-asset-rev.svg?style=flat)](https://gemnasium.com/myfreeweb/dynamic-asset-rev) [![Unlicense](https://img.shields.io/badge/un-license-green.svg?style=flat)](http://unlicense.org)

A module that provides dynamically updated file hashes for cache busting, using [chokidar] to watch for file changes and update their hashes.

[chokidar]: https://github.com/paulmillr/chokidar

## Installation

```bash
$ npm install --save dynamic-asset-rev
```

## Usage

```js
const assets = require('dynamic-asset-rev')('dist')

// ... use something like this in your HTML template:
assets.url('style.css')
// which is the same as:
'style.css?' + assets.hashes['style.css']

// When you overwrite style.css, the hash value will change!
```

## Contributing

Please feel free to submit pull requests!

By participating in this project you agree to follow the [Contributor Code of Conduct](http://contributor-covenant.org/version/1/4/).

## License

This is free and unencumbered software released into the public domain.  
For more information, please refer to the `UNLICENSE` file or [unlicense.org](http://unlicense.org).
