`u4ic-test config`
==============

configuration commands

* [`u4ic-test config set`](#u4ic-test-configset)
* [`u4ic-test config show`](#u4ic-test-configshow)

## `u4ic-test config set`

Used to set config options

```
USAGE
  $ u4ic-test config set

OPTIONS
  -h, --help                show CLI help
  --git-protocol=https|ssh  the protocol to use for git clone and push operations
  --owner=owner             The default GitHub Owner
```

_See code: [@u4ic-test/plugin-config](https://github.com/youngcm2/oclif-test/blob/v3.2.0/lib/commands/config/set.js)_

## `u4ic-test config show`

Used display current config settings

```
USAGE
  $ u4ic-test config show

OPTIONS
  -h, --help  show CLI help
```

_See code: [@u4ic-test/plugin-config](https://github.com/youngcm2/oclif-test/blob/v3.2.0/lib/commands/config/show.js)_
