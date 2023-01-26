U4IC Turbine SDK
============

[![Version](https://img.shields.io/npm/v/@u4ic-test/turbine-sdk)](https://npmjs.org/package/@u4ic-test/turbine-sdk)
[![Downloads/week](https://img.shields.io/npm/dw/@u4ic-test/turbine-sdk)](https://npmjs.org/package/@u4ic-test/turbine-sdk)
[![License](https://img.shields.io/npm/l/@u4ic-test/turbine-sdk)](https://github.com/youngcm2/oclif-test/blob/main/packages/cli/package.json)

<!-- toc -->
* [Requirements](#requirements)
* [Installation](#installation)
* [Usage](#usage)
* [Commands](#commands)

<!-- tocstop -->

# Requirements

  * Docker Desktop
  * Docker registry
    ```
      docker run -d -p 5000:5000 --name registry registry:2
    ```
  * nvm - (https://github.com/nvm-sh/nvm#installing-and-updating)
  * Node >= 16.13.0  

# Installation

```shell
npm install -g @u4ic-test/turbine-sdk@latest
```

# Usage
<!-- usage -->
```sh-session
$ npm install -g @u4ic-test/turbine-sdk
$ u4ic-test COMMAND
running command...
$ u4ic-test (--version|-v)
@u4ic-test/turbine-sdk/1.0.0 darwin-x64 node-v16.17.0
$ u4ic-test --help [COMMAND]
USAGE
  $ u4ic-test COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`u4ic-test asset add`](#u4ic-test-asset-add)
* [`u4ic-test autocomplete [SHELL]`](#u4ic-test-autocomplete-shell)
* [`u4ic-test commands`](#u4ic-test-commands)
* [`u4ic-test connector save`](#u4ic-test-connector-save)
* [`u4ic-test connector sign`](#u4ic-test-connector-sign)
* [`u4ic-test connector update`](#u4ic-test-connector-update)
* [`u4ic-test connector validate`](#u4ic-test-connector-validate)
* [`u4ic-test help [COMMAND]`](#u4ic-test-help-command)
* [`u4ic-test plugins`](#u4ic-test-plugins)
* [`u4ic-test plugins:install PLUGIN...`](#u4ic-test-pluginsinstall-plugin)
* [`u4ic-test plugins:inspect PLUGIN...`](#u4ic-test-pluginsinspect-plugin)
* [`u4ic-test plugins:install PLUGIN...`](#u4ic-test-pluginsinstall-plugin-1)
* [`u4ic-test plugins:link PLUGIN`](#u4ic-test-pluginslink-plugin)
* [`u4ic-test plugins:uninstall PLUGIN...`](#u4ic-test-pluginsuninstall-plugin)
* [`u4ic-test plugins:uninstall PLUGIN...`](#u4ic-test-pluginsuninstall-plugin-1)
* [`u4ic-test plugins:uninstall PLUGIN...`](#u4ic-test-pluginsuninstall-plugin-2)
* [`u4ic-test plugins update`](#u4ic-test-plugins-update)
* [`u4ic-test turbine connector keys generate`](#u4ic-test-turbine-connector-keys-generate)
* [`u4ic-test turbine connector keys list`](#u4ic-test-turbine-connector-keys-list)
* [`u4ic-test turbine connector push`](#u4ic-test-turbine-connector-push)
* [`u4ic-test turbine login`](#u4ic-test-turbine-login)
* [`u4ic-test version`](#u4ic-test-version)
* [`u4ic-test which`](#u4ic-test-which)

## `u4ic-test asset add`

Update a connector action.

```
USAGE
  $ u4ic-test asset add [-d <value>] [-s custom|apikey|client_credentials|basic|bearer] [-h]

FLAGS
  -d, --directory=<value>  [default: ./] Root directory of the repository.
  -h, --help               Show CLI help.
  -s, --scheme=<option>    asset template to scaffold
                           <options: custom|apikey|client_credentials|basic|bearer>

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

## `u4ic-test connector save`

Save a docker image locally as .tar.gz

```
USAGE
  $ u4ic-test connector save -o <value> -i <value> [-d <value>] [-s] [-h]

FLAGS
  -d, --directory=<value>  [default: .] Root directory of the repo.
  -h, --help               Show CLI help.
  -i, --image=<value>      (required) image to save.
  -o, --output=<value>     (required) output file to where to store the image.
  -s, --skip-pull          skips pulling the image

DESCRIPTION
  Save a docker image locally as .tar.gz
```

## `u4ic-test connector sign`

Builds a local docker image of the connector.

```
USAGE
  $ u4ic-test connector sign --image <value> --key-name <value> [-d <value>] [--signing-password <value>] [--save]
    [--registry <value>] [-h]

FLAGS
  -d, --directory=<value>     [default: ./] root directory of the repository.
  -h, --help                  Show CLI help.
  --image=<value>             (required) image name to sign
  --key-name=<value>          (required) name used for the key (default: username)
  --registry=<value>          [default: localhost:50000] registry to use for signing
  --save                      saves docker image as tar in local directory.
  --signing-password=<value>  password used for the private key

DESCRIPTION
  Builds a local docker image of the connector.
```

## `u4ic-test connector update`

Update a connector.

```
USAGE
  $ u4ic-test connector update [-d <value>] [-v <value>] [-f <value>] [-h]

FLAGS
  -d, --directory=<value>      [default: .] root directory of the connector folder.
  -f, --manifest-path=<value>  [default: /connector/connector.yaml] connector manifest path relative to directory.
  -h, --help                   Show CLI help.
  -v, --version=<value>        new version of the connector.

DESCRIPTION
  Update a connector.
```

## `u4ic-test connector validate`

Use to validate an integration

```
USAGE
  $ u4ic-test connector validate -c <value> [-h] [-i <value>] [--key <value> --signed] [-s] [-d <value>]

FLAGS
  -c, --connector=<value>  (required) connector to validate (relative to directory)
  -d, --directory=<value>  [default: ./] current directory to mount
  -h, --help               Show CLI help.
  -i, --image=<value>      image to use
  -s, --skip-pull          skips pulling the image
  --key=<value>            public key for verfication
  --signed                 validates a signed connector

DESCRIPTION
  Use to validate an integration
```

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

## `u4ic-test turbine connector keys generate`

Use to push an integration to Turbine

```
USAGE
  $ u4ic-test turbine connector keys generate --turbine-url <value> [-u <value>] [-p <value>] [--signing-password <value>] [--key-name
    <value>] [-h]

FLAGS
  -h, --help                  Show CLI help.
  -p, --password=<value>      Turbine password
  -u, --username=<value>      Turbine username
  --key-name=<value>          name used for the key (default: username)
  --signing-password=<value>  password used for the private key
  --turbine-url=<value>       (required) the url of the turbine instance [https://turbine.acme.com]

DESCRIPTION
  Use to push an integration to Turbine
```

## `u4ic-test turbine connector keys list`

Use to push an integration to Turbine

```
USAGE
  $ u4ic-test turbine connector keys list [-h]

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Use to push an integration to Turbine
```

## `u4ic-test turbine connector push`

Use to push an integration to Turbine

```
USAGE
  $ u4ic-test turbine connector push -f <value> --turbine-url <value> [-u <value>] [-p <value>] [-h]

FLAGS
  -f, --file=<value>      (required) path of the file to be uploaded to Turbine
  -h, --help              Show CLI help.
  -p, --password=<value>  Turbine password
  -u, --username=<value>  Turbine username
  --turbine-url=<value>   (required) the url of the turbine instance [https://turbine.acme.com]

DESCRIPTION
  Use to push an integration to Turbine
```

## `u4ic-test turbine login`

Use to login to Turbine

```
USAGE
  $ u4ic-test turbine login --turbine-url <value> [-u <value>] [-p <value>] [-h]

FLAGS
  -h, --help              Show CLI help.
  -p, --password=<value>  Turbine password
  -u, --username=<value>  Turbine username
  --turbine-url=<value>   (required) the url of the turbine instance [https://turbine.acme.com]

DESCRIPTION
  Use to login to Turbine
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

Quickstart
==========

See [Quickstart](./quickstart.md)

Contributing
==========

See [Contributing](./contributing.md)

Troubleshooting
==========

See [Troubleshooting Guide](./troubleshooting.md)
