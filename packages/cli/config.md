`u4ic-test config`
==============

configuration commands

* [`u4ic-test config set`](#u4ic-test-config-set)
* [`u4ic-test config show`](#u4ic-test-config-show)

## `u4ic-test config set`

Use to set config options

```
USAGE
  $ u4ic-test config set [--git-protocol https|ssh] [--owner <value>] [-h]

FLAGS
  -h, --help               Show CLI help.
  --git-protocol=<option>  the protocol to use for git clone and push operations
                           <options: https|ssh>
  --owner=<value>          the default GitHub Owner

DESCRIPTION
  Use to set config options
```

## `u4ic-test config show`

Used display current config settings

```
USAGE
  $ u4ic-test config show [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Used display current config settings
```
