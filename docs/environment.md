`u4ic-test environment`
===================

Commands for working with environment settings

* [`u4ic-test environment clean`](#u4ic-test-environmentclean)
* [`u4ic-test environment init`](#u4ic-test-environmentinit)
* [`u4ic-test environment set`](#u4ic-test-environmentset)
* [`u4ic-test environment show`](#u4ic-test-environmentshow)

## `u4ic-test environment clean`

Removes environment settings

```
USAGE
  $ u4ic-test environment clean

OPTIONS
  -e, --environment=production|qa|local  (required) used to activate environment
  -h, --help                             show CLI help
```

_See code: [lib/commands/environment/clean.js](https://github.com/youngcm2/oclif-test/blob/v2.2.1/packages/ci/lib/commands/environment/clean.js)_

## `u4ic-test environment init`

Used to initialize new environments

```
USAGE
  $ u4ic-test environment init

OPTIONS
  -e, --environment=production|qa|local  (required) environment to initialize
  -h, --help                             show CLI help
  --reset                                reset the configuration
```

_See code: [lib/commands/environment/init.js](https://github.com/youngcm2/oclif-test/blob/v2.2.1/packages/ci/lib/commands/environment/init.js)_

## `u4ic-test environment set`

Used to activate an environment

```
USAGE
  $ u4ic-test environment set

OPTIONS
  -e, --environment=production|qa|local  (required) used to activate environment
  -h, --help                             show CLI help
```

_See code: [lib/commands/environment/set.js](https://github.com/youngcm2/oclif-test/blob/v2.2.1/packages/ci/lib/commands/environment/set.js)_

## `u4ic-test environment show`

Used display current environment settings

```
USAGE
  $ u4ic-test environment show

OPTIONS
  -h, --help  show CLI help
```

_See code: [lib/commands/environment/show.js](https://github.com/youngcm2/oclif-test/blob/v2.2.1/packages/ci/lib/commands/environment/show.js)_
