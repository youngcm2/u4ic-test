Integration Task CLI Plugin
============
![U4IC Logo](https://swimlane.com/assets/images/swimlane-svg-logo.svg)

[![Version](https://img.shields.io/npm/v/@u4ic-test/plugin-task)](https://npmjs.org/package/@u4ic-test/plugin-task)
[![Downloads/week](https://img.shields.io/npm/dw/@u4ic-test/plugin-task)](https://npmjs.org/package/@u4ic-test/plugin-task)
[![License](https://img.shields.io/npm/l/@u4ic-test/plugin-task)](https://github.com/youngcm2/oclif-test/blob/main/packages/cli/package.json)
<!-- toc -->
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
@u4ic-test/plugin-connector/1.0.0 darwin-x64 node-v16.16.0
$ u4ic-test-connector --help [COMMAND]
USAGE
  $ u4ic-test-connector COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`u4ic-test-connector action:add`](#u4ic-test-connector-actionadd)
* [`u4ic-test-connector action:generate:data`](#u4ic-test-connector-actiongeneratedata)
* [`u4ic-test-connector action:input`](#u4ic-test-connector-actioninput)
* [`u4ic-test-connector action:output`](#u4ic-test-connector-actionoutput)
* [`u4ic-test-connector action:run`](#u4ic-test-connector-actionrun)
* [`u4ic-test-connector asset:add`](#u4ic-test-connector-assetadd)
* [`u4ic-test-connector connector:build`](#u4ic-test-connector-connectorbuild)
* [`u4ic-test-connector connector:create`](#u4ic-test-connector-connectorcreate)
* [`u4ic-test-connector connector:create-source`](#u4ic-test-connector-connectorcreate-source)
* [`u4ic-test-connector connector:logo`](#u4ic-test-connector-connectorlogo)
* [`u4ic-test-connector connector:save`](#u4ic-test-connector-connectorsave)
* [`u4ic-test-connector connector:sign`](#u4ic-test-connector-connectorsign)
* [`u4ic-test-connector connector:update`](#u4ic-test-connector-connectorupdate)
* [`u4ic-test-connector connector:validate`](#u4ic-test-connector-connectorvalidate)

## `u4ic-test-connector action:add`

Update a connector action.

```
USAGE
  $ u4ic-test-connector action:add [-d <value>] [-t node_18|python_310_definition|python_3.7_swimlane] [-h]

FLAGS
  -d, --directory=<value>  [default: ./] Root directory of the repository.
  -h, --help               Show CLI help.
  -t, --template=<option>  [default: python_310_definition] action template to scaffold
                           <options: node_18|python_310_definition|python_3.7_swimlane>

DESCRIPTION
  Update a connector action.
```

_See code: [lib/commands/action/add.js](https://github.com/youngcm2/oclif-test/blob/v1.0.0/lib/commands/action/add.js)_

## `u4ic-test-connector action:generate:data`

Use to test a task in an integration

```
USAGE
  $ u4ic-test-connector action:generate:data --asset <value> [-h] [-i <value> | -v 3.6|3.7] [-n <value>] [-d <value>] [-g]
    [--inputs <value>] [-t <value>] [-s] [-f] [-d code] [--pycharm-host <value>] [--pycharm-port <value>]

FLAGS
  -d, --debug=<option>           enable debugging
                                 <options: code>
  -d, --directory=<value>        [default: ./] current directory to mount
  -f, --force-rebuild            forces nocache on the image build
  -g, --generate                 generates the asset and input files in the current directory
  -h, --help                     Show CLI help.
  -i, --image=<value>            image to use
  -n, --name=<value>             task name to run
  -s, --skip-pull                skips pulling the image
  -t, --generate-test=<value>    Generate a test case using this run. Provide the name of the test
  -v, --python-version=<option>  [default: 3.6] python version to use
                                 <options: 3.6|3.7>
  --asset=<value>                (required) [default: data/asset.json] asset json
  --inputs=<value>               Filename for JSON inputs, defaults to the task name under the data folder. ie:
                                 data/my_task.json
  --pycharm-host=<value>         [default: host.docker.internal] pycharm debugging host
  --pycharm-port=<value>         [default: 30000] pycharm debugging port

DESCRIPTION
  Use to test a task in an integration
```

_See code: [lib/commands/action/generate/data.js](https://github.com/youngcm2/oclif-test/blob/v1.0.0/lib/commands/action/generate/data.js)_

## `u4ic-test-connector action:input`

Update action input schema.

```
USAGE
  $ u4ic-test-connector action:input [-a <value>] [-d <value>] [--amend] [--action-config-path <value>]
    [--input-path <value> ] [-h]

FLAGS
  -a, --action=<value>          Action name to run
  -d, --directory=<value>       [default: ./] Root directory of the repository.
  -h, --help                    Show CLI help.
  --action-config-path=<value>  Override path to action configuration file. Defaults to
                                /connector/config/actions/<action>.yaml
  --amend                       Merge with existing schema.
  --input-path=<value>          Relative path to the output data JSON file, defaults to the task name under the data
                                folder. ie: /data/<taskName>_output.json

DESCRIPTION
  Update action input schema.
```

_See code: [lib/commands/action/input.js](https://github.com/youngcm2/oclif-test/blob/v1.0.0/lib/commands/action/input.js)_

## `u4ic-test-connector action:output`

Update a connector action.

```
USAGE
  $ u4ic-test-connector action:output [-a <value>] [-d <value>] [--action-config-path <value>] [--amend]
    [--output-path <value> ] [-h]

FLAGS
  -a, --action=<value>          Action name to run
  -d, --directory=<value>       [default: ./] Root directory of the repository.
  -h, --help                    Show CLI help.
  --action-config-path=<value>  Override path to action configuration file. Defaults to /connector/config/<action>.yaml
  --amend                       Merge with existing schema.
  --output-path=<value>         Relative path to the output data JSON file, defaults to the task name under the data
                                folder. ie: /data/<taskName>_output.json

DESCRIPTION
  Update a connector action.
```

_See code: [lib/commands/action/output.js](https://github.com/youngcm2/oclif-test/blob/v1.0.0/lib/commands/action/output.js)_

## `u4ic-test-connector action:run`

Runs a connector action. (Defaults to current image version in local repository).

```
USAGE
  $ u4ic-test-connector action:run [-a <value>] [-d <value>] [--input-path <value>] [--output-path <value>]
    [--error-path <value>] [--asset-path <value>] [-i <value> | --build | --latest] [--template
    python_3.7|node_18|python_310_definition] [-f ] [-h]

FLAGS
  -a, --action=<value>     Action name to run
  -d, --directory=<value>  [default: ./] Root directory of the repository.
  -f, --force-rebuild      forces nocache on the image build
  -h, --help               Show CLI help.
  -i, --image=<value>      The connector image to run.
  --asset-path=<value>     File to asset data JSON file, defaults to /data/asset.json
  --build                  Builds image and runs it.
  --error-path=<value>     File to write the errors to, defaults to /data/<action>_error.json
  --input-path=<value>     File to input data JSON file, defaults to /data/<action>.json
  --latest                 Use the latest release image from quay.
  --output-path=<value>    File to write the outputs to, defaults to /data/<action>_output.json
  --template=<option>      [default: python_310_definition] connector template
                           <options: python_3.7|node_18|python_310_definition>

DESCRIPTION
  Runs a connector action. (Defaults to current image version in local repository).
```

_See code: [lib/commands/action/run.js](https://github.com/youngcm2/oclif-test/blob/v1.0.0/lib/commands/action/run.js)_

## `u4ic-test-connector asset:add`

Update a connector action.

```
USAGE
  $ u4ic-test-connector asset:add [-d <value>] [-s custom|apikey|client_credentials|basic|bearer] [-h]

FLAGS
  -d, --directory=<value>  [default: ./] Root directory of the repository.
  -h, --help               Show CLI help.
  -s, --scheme=<option>    asset template to scaffold
                           <options: custom|apikey|client_credentials|basic|bearer>

DESCRIPTION
  Update a connector action.
```

_See code: [lib/commands/asset/add.js](https://github.com/youngcm2/oclif-test/blob/v1.0.0/lib/commands/asset/add.js)_

## `u4ic-test-connector connector:build`

Builds a local docker image of the connector.

```
USAGE
  $ u4ic-test-connector connector:build --template python_3.7_swimlane|node_18|python_310_definition (--key-name
    <value> ) [-d <value>] [-f] [--signing-password <value> --save] [--registry <value> ] [-h]

FLAGS
  -d, --directory=<value>     [default: ./] root directory of the repository.
  -f, --force-rebuild         forces nocache on the image build
  -h, --help                  Show CLI help.
  --key-name=<value>          (required) name used for the key (default: username)
  --registry=<value>          [default: localhost:5000] registry to use for signing
  --save                      saves docker image as tar in local directory.
  --signing-password=<value>  password used for the private key
  --template=<option>         (required) [default: python_310_definition] connector language
                              <options: python_3.7_swimlane|node_18|python_310_definition>

DESCRIPTION
  Builds a local docker image of the connector.
```

_See code: [lib/commands/connector/build.js](https://github.com/youngcm2/oclif-test/blob/v1.0.0/lib/commands/connector/build.js)_

## `u4ic-test-connector connector:create`

Scaffold a new connector

```
USAGE
  $ u4ic-test-connector connector:create [-d <value>] [-t node_18|python_310_definition|python_3.7_swimlane]
    [--skip-repo] [--vendor <value>] [--product <value>] [--keywords <value>] [--description <value>] [--logoPath
    <value>] [--author <value>] [--authorEmail <value>] [--homepage <value>] [-h]

FLAGS
  -d, --directory=<value>  [default: ./] root directory for where to store connectors, the connector directory will be
                           generated.
  -h, --help               Show CLI help.
  -t, --template=<option>  [default: python_310_definition] connector template to scaffold
                           <options: node_18|python_310_definition|python_3.7_swimlane>
  --author=<value>         Connector Author
  --authorEmail=<value>    Connector Author Email
  --description=<value>    Description (e.g. CrowdStrike Host Query API)
  --homepage=<value>       Connector Author Support URL
  --keywords=<value>       Please enter keyword (Comma-Separated)
  --logoPath=<value>       URL or absolute path to logo file
  --product=<value>        Product (e.g. Falcon)
  --skip-repo              skips the repository creation process
  --vendor=<value>         Vendor (e.g. CrowdStrike)

DESCRIPTION
  Scaffold a new connector
```

_See code: [lib/commands/connector/create.js](https://github.com/youngcm2/oclif-test/blob/v1.0.0/lib/commands/connector/create.js)_

## `u4ic-test-connector connector:create-source`

Generates 11x source from 10x

```
USAGE
  $ u4ic-test-connector connector:create-source [-d <value>] [-h]

FLAGS
  -d, --directory=<value>  [default: ./] root directory of the repository.
  -h, --help               Show CLI help.

DESCRIPTION
  Generates 11x source from 10x
```

_See code: [lib/commands/connector/create-source.js](https://github.com/youngcm2/oclif-test/blob/v1.0.0/lib/commands/connector/create-source.js)_

## `u4ic-test-connector connector:logo`

Update a connector.

```
USAGE
  $ u4ic-test-connector connector:logo -p <value> [-d <value>] [-h]

FLAGS
  -d, --directory=<value>  [default: .] root directory of the connector folder.
  -h, --help               Show CLI help.
  -p, --path=<value>       (required) path or URL to product logo in PNG format.

DESCRIPTION
  Update a connector.
```

_See code: [lib/commands/connector/logo.js](https://github.com/youngcm2/oclif-test/blob/v1.0.0/lib/commands/connector/logo.js)_

## `u4ic-test-connector connector:save`

Save a docker image locally as .tar.gz

```
USAGE
  $ u4ic-test-connector connector:save -o <value> -i <value> [-d <value>] [-s] [-h]

FLAGS
  -d, --directory=<value>  [default: .] Root directory of the repo.
  -h, --help               Show CLI help.
  -i, --image=<value>      (required) image to save.
  -o, --output=<value>     (required) output file to where to store the image.
  -s, --skip-pull          skips pulling the image

DESCRIPTION
  Save a docker image locally as .tar.gz
```

_See code: [lib/commands/connector/save.js](https://github.com/youngcm2/oclif-test/blob/v1.0.0/lib/commands/connector/save.js)_

## `u4ic-test-connector connector:sign`

Builds a local docker image of the connector.

```
USAGE
  $ u4ic-test-connector connector:sign --image <value> --key-name <value> [-d <value>] [--signing-password <value>]
    [--save] [--registry <value>] [-h]

FLAGS
  -d, --directory=<value>     [default: ./] root directory of the repository.
  -h, --help                  Show CLI help.
  --image=<value>             (required) image name to sign
  --key-name=<value>          (required) name used for the key (default: username)
  --registry=<value>          [default: localhost:5000] registry to use for signing
  --save                      saves docker image as tar in local directory.
  --signing-password=<value>  password used for the private key

DESCRIPTION
  Builds a local docker image of the connector.
```

_See code: [lib/commands/connector/sign.js](https://github.com/youngcm2/oclif-test/blob/v1.0.0/lib/commands/connector/sign.js)_

## `u4ic-test-connector connector:update`

Update a connector.

```
USAGE
  $ u4ic-test-connector connector:update [-d <value>] [-v <value>] [-f <value>] [-h]

FLAGS
  -d, --directory=<value>      [default: .] root directory of the connector folder.
  -f, --manifest-path=<value>  [default: /connector/connector.yaml] connector manifest path relative to directory.
  -h, --help                   Show CLI help.
  -v, --version=<value>        new version of the connector.

DESCRIPTION
  Update a connector.
```

_See code: [lib/commands/connector/update.js](https://github.com/youngcm2/oclif-test/blob/v1.0.0/lib/commands/connector/update.js)_

## `u4ic-test-connector connector:validate`

Use to validate an integration

```
USAGE
  $ u4ic-test-connector connector:validate -c <value> [-h] [-i <value>] [--key <value> --signed] [-s] [-d <value>]

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

_See code: [lib/commands/connector/validate.js](https://github.com/youngcm2/oclif-test/blob/v1.0.0/lib/commands/connector/validate.js)_
<!-- commandsstop -->
