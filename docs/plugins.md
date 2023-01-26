`u4ic-test plugins`
===============

list installed plugins

* [`u4ic-test plugins`](#u4ic-test-plugins)
* [`u4ic-test plugins inspect PLUGIN...`](#u4ic-test-pluginsinspect-plugin)
* [`u4ic-test plugins install PLUGIN...`](#u4ic-test-pluginsinstall-plugin)
* [`u4ic-test plugins link PLUGIN`](#u4ic-test-pluginslink-plugin)
* [`u4ic-test plugins uninstall PLUGIN...`](#u4ic-test-pluginsuninstall-plugin)
* [`u4ic-test plugins update`](#u4ic-test-pluginsupdate)

## `u4ic-test plugins`

list installed plugins

```
USAGE
  $ u4ic-test plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ u4ic-test plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.1/src/commands/plugins/index.ts)_

## `u4ic-test plugins inspect PLUGIN...`

displays installation properties of a plugin

```
USAGE
  $ u4ic-test plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default  .] plugin to inspect

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

EXAMPLE
  $ u4ic-test plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.1/src/commands/plugins/inspect.ts)_

## `u4ic-test plugins install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ u4ic-test plugins install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command 
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in 
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ u4ic-test plugins add

EXAMPLES
  $ u4ic-test plugins install myplugin 
  $ u4ic-test plugins install https://github.com/someuser/someplugin
  $ u4ic-test plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.1/src/commands/plugins/install.ts)_

## `u4ic-test plugins link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ u4ic-test plugins link PLUGIN

ARGUMENTS
  PATH  [default  .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' 
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLE
  $ u4ic-test plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.1/src/commands/plugins/link.ts)_

## `u4ic-test plugins uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ u4ic-test plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ u4ic-test plugins unlink
  $ u4ic-test plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.1/src/commands/plugins/uninstall.ts)_

## `u4ic-test plugins update`

update installed plugins

```
USAGE
  $ u4ic-test plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.1/src/commands/plugins/update.ts)_
