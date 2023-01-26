# Swimlane Turbine SDK

[![Version](https://img.shields.io/npm/v/@swimlane/turbine-sdk)](https://npmjs.org/package/@swimlane/turbine-sdk)
[![Downloads/week](https://img.shields.io/npm/dw/@swimlane/turbine-sdk)](https://npmjs.org/package/@swimlane/turbine-sdk)
[![License](https://img.shields.io/npm/l/@swimlane/turbine-sdk)](https://github.com/swimlane/turbine-sdk/blob/main/packages/cli/package.json)

<!-- toc -->

-   [Swimlane Turbine SDK](#swimlane-turbine-sdk)
-   [Requirements](#requirements)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Commands](#commands)
<!-- tocstop -->

# Requirements

-   Docker Desktop
-   Docker registry
    ```
      docker run -d -p 5000:5000 --name registry registry:2
    ```
-   nvm - (https://github.com/nvm-sh/nvm#installing-and-updating)
-   Node >= 16.13.0

# Installation

```shell
npm install -g @swimlane/turbine-sdk@latest
```

# Usage

<!-- usage -->

```sh-session
$ npm install -g @u4ic-test/oclif-test
$ u4ic-test COMMAND
running command...
$ u4ic-test (--version|-v)
@u4ic-test/oclif-test/2.6.1 darwin-x64 node-v16.17.1
$ u4ic-test --help [COMMAND]
USAGE
  $ u4ic-test COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

-   [`u4ic-test action test`](#u4ic-test-action-test)
-   [`u4ic-test autocomplete [SHELL]`](#u4ic-test-autocomplete-shell)
-   [`u4ic-test commands`](#u4ic-test-commands)
-   [`u4ic-test help [COMMAND]`](#u4ic-test-help-command)
-   [`u4ic-test plugins`](#u4ic-test-plugins)
-   [`u4ic-test plugins:install PLUGIN...`](#u4ic-test-pluginsinstall-plugin)
-   [`u4ic-test plugins:inspect PLUGIN...`](#u4ic-test-pluginsinspect-plugin)
-   [`u4ic-test plugins:install PLUGIN...`](#u4ic-test-pluginsinstall-plugin-1)
-   [`u4ic-test plugins:link PLUGIN`](#u4ic-test-pluginslink-plugin)
-   [`u4ic-test plugins:uninstall PLUGIN...`](#u4ic-test-pluginsuninstall-plugin)
-   [`u4ic-test plugins:uninstall PLUGIN...`](#u4ic-test-pluginsuninstall-plugin-1)
-   [`u4ic-test plugins:uninstall PLUGIN...`](#u4ic-test-pluginsuninstall-plugin-2)
-   [`u4ic-test plugins update`](#u4ic-test-plugins-update)
-   [`u4ic-test version`](#u4ic-test-version)
-   [`u4ic-test which`](#u4ic-test-which)

## `u4ic-test action test`

Update a connector action.

```
USAGE
  $ u4ic-test action test [-d <value>] [-h]

FLAGS
  -d, --directory=<value>  [default: ./] Root directory of the repository.
  -h, --help               Show CLI help.

DESCRIPTION
  Update a connector action.
```

## `u4ic-test autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ u4ic-test autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ u4ic-test autocomplete

  $ u4ic-test autocomplete bash

  $ u4ic-test autocomplete zsh

  $ u4ic-test autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.2.0/src/commands/autocomplete/index.ts)_

## `u4ic-test commands`

list all the commands

```
USAGE
  $ u4ic-test commands [--json] [-h] [--hidden] [--columns <value> | -x] [--sort <value>] [--filter <value>]
    [--output csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ]

FLAGS
  -h, --help         Show CLI help.
  -x, --extended     show extra columns
  --columns=<value>  only show provided columns (comma-separated)
  --csv              output is csv format [alias: --output=csv]
  --filter=<value>   filter property by partial string matching, ex: name=foo
  --hidden           show hidden commands
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --output=<option>  output in a more machine friendly format
                     <options: csv|json|yaml>
  --sort=<value>     property to sort by (prepend '-' for descending)

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  list all the commands
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v2.1.0/src/commands/commands.ts)_

## `u4ic-test help [COMMAND]`

Display help for u4ic-test.

```
USAGE
  $ u4ic-test help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for u4ic-test.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

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

## `u4ic-test version`

```
USAGE
  $ u4ic-test version
```

_See code: [@oclif/plugin-version](https://github.com/oclif/plugin-version/blob/v1.0.4/src/commands/version.ts)_

## `u4ic-test which`

Show which plugin a command is in.

```
USAGE
  $ u4ic-test which

DESCRIPTION
  Show which plugin a command is in.
```

_See code: [@oclif/plugin-which](https://github.com/oclif/plugin-which/blob/v2.1.0/src/commands/which.ts)_

<!-- commandsstop -->
