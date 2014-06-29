var fs = require('fs');
var Module = require('module');
var assert = require('assert-plus');
var sh = require('execSync');
var cwd = process.cwd();

require('zeriousify').test();

var clearRequireCache = function () {
  var cache = require.cache;
  for (var path in require.cache) {
    if (/requiry/.test(path)) {
      delete cache[path];
    }
  }
};

describe('API', function () {

  it('does not interfere with non-dev environments', function () {
    clearRequireCache();
    process.env.NODE_ENV = 'prod';
    var requiry = require('../requiry');
    requiry.enable();
    assert.equal(Module._load.toString().indexOf('MODULE_NOT_FOUND'), -1);
  });

  it('installs packages in dev environments', function (done) {
    clearRequireCache();
    process.env.NODE_ENV = 'dev';
    var requiry = require('../requiry');
    var doNothing = function () {};
    requiry.setLogger({
      error: doNothing,
      warn: doNothing,
      log: doNothing
    });
    assert.ok(Module._load.toString().indexOf('MODULE_NOT_FOUND') > -1);
    var plans = require('plans');
    sh.exec('rm -rf node_modules/plans');
    var json = require('../package.json');
    delete json.dependencies.plans;
    json = JSON.stringify(json, null, '  ');
    fs.writeFile('../package.json', json, function (err) {
      if (err) throw err;
      done();
    });
  });

  it('can be disabled in dev environments', function (done) {
    clearRequireCache();
    process.env.NODE_ENV = 'dev';
    var requiry = require('../requiry');
    var doNothing = function () {};
    requiry.setLogger({
      error: doNothing,
      warn: doNothing,
      log: doNothing
    });
    requiry.enable(false);
    try {
      var plans = require('plans');
    }
    catch (e) {
      done();
    }
  });

});
