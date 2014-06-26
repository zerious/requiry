# Requiry

[![NPM Version](https://badge.fury.io/js/requiry.png)](http://badge.fury.io/js/requiry)
[![Build Status](https://travis-ci.org/zerious/requiry.png?branch=master)](https://travis-ci.org/zerious/requiry)
[![Code Coverage](https://coveralls.io/repos/zerious/requiry/badge.png?branch=master)](https://coveralls.io/r/zerious/requiry)
[![Dependencies](https://david-dm.org/zerious/requiry.png?theme=shields.io)](https://david-dm.org/zerious/requiry)
[![Support](http://img.shields.io/gittip/zerious.png)](https://www.gittip.com/zerious/)

Requiry checks process.env.NODE_ENV, and if you are in a "dev" or "debug"
environment, it will overwrite global.require with a function that will try to
auto-install a package if it's not installed.
