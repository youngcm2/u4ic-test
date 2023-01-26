`u4ic-test plugins`
===============

List installed plugins.

* [`u4ic-test plugins`](#u4ic-test-plugins)
* [`u4ic-test plugins install PLUGIN...`](#u4ic-test-pluginsinstall-plugin)
* [`u4ic-test plugins inspect PLUGIN...`](#u4ic-test-pluginsinspect-plugin)
* [`u4ic-test plugins install PLUGIN...`](#u4ic-test-pluginsinstall-plugin-1)
* [`u4ic-test plugins link PLUGIN`](#u4ic-test-pluginslink-plugin)
* [`u4ic-test plugins uninstall PLUGIN...`](#u4ic-test-pluginsuninstall-plugin)
* [`u4ic-test plugins uninstall PLUGIN...`](#u4ic-test-pluginsuninstall-plugin-1)
* [`u4ic-test plugins uninstall PLUGIN...`](#u4ic-test-pluginsuninstall-plugin-2)
* [`u4ic-test plugins update`](#u4ic-test-plugins-update)

## `u4ic-test plugins`

List installed plugins.

```
USAGE
  $ u4ic-test plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ u4ic-test plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `u4ic-test plugins install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ u4ic-test plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ u4ic-test plugins add

EXAMPLES
  $ u4ic-test plugins:install myplugin 

  $ u4ic-test plugins:install https://github.com/someuser/someplugin

  $ u4ic-test plugins:install someuser/someplugin
```

## `u4ic-test plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ u4ic-test plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ u4ic-test plugins:inspect myplugin
```

## `u4ic-test plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ u4ic-test plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ u4ic-test plugins add

EXAMPLES
  $ u4ic-test plugins:install myplugin 

  $ u4ic-test plugins:install https://github.com/someuser/someplugin

  $ u4ic-test plugins:install someuser/someplugin
```

## `u4ic-test plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ u4ic-test plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ u4ic-test plugins:link myplugin
```

## `u4ic-test plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ u4ic-test plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ u4ic-test plugins unlink
  $ u4ic-test plugins remove
```

## `u4ic-test plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ u4ic-test plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ u4ic-test plugins unlink
  $ u4ic-test plugins remove
```

## `u4ic-test plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ u4ic-test plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ u4ic-test plugins unlink
  $ u4ic-test plugins remove
```

## `u4ic-test plugins update`

Update installed plugins.

```
USAGE
  $ u4ic-test plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
