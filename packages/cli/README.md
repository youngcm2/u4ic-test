# Swimlane Turbine SDK

[![Version](https://img.shields.io/npm/v/@swimlane/turbine-sdk)](https://npmjs.org/package/@swimlane/turbine-sdk)
[![Downloads/week](https://img.shields.io/npm/dw/@swimlane/turbine-sdk)](https://npmjs.org/package/@swimlane/turbine-sdk)
[![License](https://img.shields.io/npm/l/@swimlane/turbine-sdk)](https://github.com/swimlane/turbine-sdk/blob/main/packages/cli/package.json)

<!-- toc -->
* [Swimlane Turbine SDK](#swimlane-turbine-sdk)
* [Requirements](#requirements)
* [Installation](#installation)
* [Usage](#usage)
* [Commands](#commands)
* [Command Topics](#command-topics)
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
# Command Topics

* [`u4ic-test action`](../../docs/action.md) - Local connector action commands
* [`u4ic-test autocomplete`](../../docs/autocomplete.md) - display autocomplete installation instructions
* [`u4ic-test commands`](../../docs/commands.md) - list all the commands
* [`u4ic-test help`](../../docs/help.md) - Display help for u4ic-test.
* [`u4ic-test plugins`](../../docs/plugins.md) - List installed plugins.
* [`u4ic-test version`](../../docs/version.md)
* [`u4ic-test which`](../../docs/which.md) - Show which plugin a command is in.

<!-- commandsstop -->
