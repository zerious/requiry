# <a href="http://lighter.io/requiry" style="font-size:40px;text-decoration:none;color:#000"><img src="https://cdn.rawgit.com/lighterio/lighter.io/master/public/requiry.svg" style="width:90px;height:90px"> Requiry</a>
[![NPM Version](https://img.shields.io/npm/v/requiry.svg)](https://npmjs.org/package/requiry)
[![Downloads](https://img.shields.io/npm/dm/requiry.svg)](https://npmjs.org/package/requiry)
[![Build Status](https://img.shields.io/travis/lighterio/requiry.svg)](https://travis-ci.org/lighterio/requiry)
[![Code Coverage](https://img.shields.io/coveralls/lighterio/requiry/master.svg)](https://coveralls.io/r/lighterio/requiry)
[![Dependencies](https://img.shields.io/david/lighterio/requiry.svg)](https://david-dm.org/lighterio/requiry)
[![Support](https://img.shields.io/gratipay/Lighter.io.svg)](https://gratipay.com/Lighter.io/)

Requiry checks process.env.NODE_ENV, and if you are in a "dev" environment, it
will auto-install packages when you `require` packages that are not installed.

## Quick Start

Install `requiry` in your project directory:
```bash
npm install --save requiry
```

Require `requiry`, then require a package which might not be installed:
```javascript
require('requiry');

var plans = require('plans');
```

If you run your application without specifying an environment, or specifying
an environment other than "dev", the `require` function will operate as usual,
triggering a `MODULE_NOT_FOUND` error if `something` isn't installed.  However,
if you run in "dev" mode, it will install `something` for you.

Here's how to run `app.js` in "dev" mode:
```bash
NODE_ENV=dev node app
```

## API

### .setLogger(logger)
You can make requiry use a custom logger by passing it in.

### .enable(boolean)
If you would like to disable Requiry, even in "dev" mode, you can call
`requiry.enable(false)`.

<!--resolve,main,extensions,registerExtension,cache-->


## Acknowledgements

We would like to thank all of the amazing people who use, support,
promote, enhance, document, patch, and submit comments & issues.
Requiry couldn't exist without you.

Additionally, huge thanks go to [TUNE](http://www.tune.com) for employing
and supporting [Requiry](http://lighter.io/requiry) project maintainers,
and for being an epically awesome place to work (and play).


## MIT License

Copyright (c) 2014 Sam Eubank

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## How to Contribute

We welcome contributions from the community and are happy to have them.
Please follow this guide when logging issues or making code changes.

### Logging Issues

All issues should be created using the
[new issue form](https://github.com/lighterio/requiry/issues/new).
Please describe the issue including steps to reproduce. Also, make sure
to indicate the version that has the issue.

### Changing Code

Code changes are welcome and encouraged! Please follow our process:

1. Fork the repository on GitHub.
2. Fix the issue ensuring that your code follows the
   [style guide](http://lighter.io/style-guide).
3. Add tests for your new code, ensuring that you have 100% code coverage.
   (If necessary, we can help you reach 100% prior to merging.)
   * Run `npm test` to run tests quickly, without testing coverage.
   * Run `npm run cover` to test coverage and generate a report.
   * Run `npm run report` to open the coverage report you generated.
4. [Pull requests](http://help.github.com/send-pull-requests/) should be made
   to the [master branch](https://github.com/lighterio/requiry/tree/master).

### Contributor Code of Conduct

As contributors and maintainers of Requiry, we pledge to respect all
people who contribute through reporting issues, posting feature requests,
updating documentation, submitting pull requests or patches, and other
activities.

If any participant in this project has issues or takes exception with a
contribution, they are obligated to provide constructive feedback and never
resort to personal attacks, trolling, public or private harassment, insults, or
other unprofessional conduct.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, edits, issues, and other contributions
that are not aligned with this Code of Conduct. Project maintainers who do
not follow the Code of Conduct may be removed from the project team.

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by opening an issue or contacting one or more of the project
maintainers.

We promise to extend courtesy and respect to everyone involved in this project
regardless of gender, gender identity, sexual orientation, ability or
disability, ethnicity, religion, age, location, native language, or level of
experience.
