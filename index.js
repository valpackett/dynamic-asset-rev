var fs = require('fs')
var hash = require('rev-hash')
var chokidar = require('chokidar')
var log = require('debug')('dynamic-asset-rev')

module.exports = function (dirpath, options) {
	if (!options) options = {}
	var obj = {
		hashes: {},
		prefix: '/',
		url: function (path) {
			return this.prefix + path + '?' + this.hashes[path]
		}
	}
	chokidar.watch(dirpath, options.chokidar || {})
		.on('all', function (event, path) {
			if (event === 'unlink' || event === 'unlinkDir') {
				delete obj.hashes[path]
				return
			}
			fs.readFile(path, function (err, data) {
				if (err) {
					log('watching[event %s]: error while reading file %s: %o', event, path, err)
				} else {
					obj.hashes[path] = hash(data)
					log('watching[event %s]: set hash of %s to %s', event, path, obj.hashes[path])
				}
			})
		})
	return obj
}
