# Integration Task CLI Plugin

![U4IC Logo](https://swimlane.com/assets/images/swimlane-svg-logo.svg)

[![Version](https://img.shields.io/npm/v/@u4ic-test/plugin-task)](https://npmjs.org/package/@u4ic-test/plugin-task)
[![Downloads/week](https://img.shields.io/npm/dw/@u4ic-test/plugin-task)](https://npmjs.org/package/@u4ic-test/plugin-task)
[![License](https://img.shields.io/npm/l/@u4ic-test/plugin-task)](https://github.com/youngcm2/oclif-test/blob/main/packages/cli/package.json)

<!-- toc -->
* [Integration Task CLI Plugin](#integration-task-cli-plugin)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @u4ic-test/plugin-connector
$ u4ic-test-connector COMMAND
running command...
$ u4ic-test-connector (--version)
@u4ic-test/plugin-connector/2.6.1 darwin-x64 node-v16.17.1
$ u4ic-test-connector --help [COMMAND]
USAGE
  $ u4ic-test-connector COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`u4ic-test-connector action:cwd`](#u4ic-test-connector-actioncwd)

## `u4ic-test-connector action:cwd`

Update a connector action.

```
USAGE
  $ u4ic-test-connector action:cwd [-d <value>] [-h]

FLAGS
  -d, --directory=<value>  [default: ./] Root directory of the repository.
  -h, --help               Show CLI help.

DESCRIPTION
  Update a connector action.
```

_See code: [lib/commands/action/cwd.js](https://github.com/youngcm2/oclif-test/blob/v2.6.1/lib/commands/action/cwd.js)_
<!-- commandsstop -->
