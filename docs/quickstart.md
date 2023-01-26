Quickstart
============

This How To Guide will change once the SDK is out of Preview.

<!-- toc -->
* [PREVIEW: How do I request a feature or report a bug?](#preview-how-do-i-request-a-feature-or-report-a-bug)
* [PREVIEW: How do I request access to an connector?](#preview-how-do-i-request-access-to-an-connector)
* [Commit Message Format](#commit-message-format)
* [Development Environment Setup](#development-environment-setup)
* [How do I install the SDK?](#how-do-i-install-the-sdk)
* [What is the recommended directory structure](#what-is-the-recommended-directory-structure)
* [How do I pull an connector on to my computer](#how-do-i-pull-an-connector-on-to-my-computer)
* [How do I create a new plugin?](#how-do-i-create-a-new-plugin)
* [How do I build an connector](#how-do-i-build-an-connector)
* [How do I generate test data to run an connector](#how-do-i-generate-test-data-to-run-an-connector)
* [How do I run an connector](#how-do-i-run-an-connector)
* [How do I debug an connector](#how-do-i-debug-an-connector)
<!-- tocstop -->

# (PREVIEW) How do I request a feature or report a bug?
Please send an email connectors@u4ic-test.com with the following template.
Subject: u4ic-test Bug or Feature

```
What is the current behavior?
If the current behavior is a bug, please provide the steps to reproduce.

What is the expected behavior?
Please mention your u4ic-test and OS version. Please state if you are behind an HTTP proxy or company firewall as well.
```

# (PREVIEW) How do I request access to an connector?

Please send an email connectors@u4ic-test.com with the following template.
Subject: u4ic-test Bug or Feature

```
Github Username: {username}
Connectors
- connector 1
- connector 2
```

# Commit Message Format
Please use conventional commits for structuring commit messages

```
<type>(<ticket #>): <short summary>
│       │             │
│       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
│       │
│       └─⫸ Ticket #: #SC-15487
│
└─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

## Type

Must be one of the following:

* **build**: changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)
* **docs**: documentation only changes
* **feat**: a new feature
* **fix**: a bug fix
* **perf**: a code change that improves performance
* **refactor**: a code change that neither fixes a bug nor adds a feature
* **test**: adding missing tests or correcting existing tests

## Summary

Use the summary field to provide a succinct description of the change:

* Use the imperative, present tense: "change" not "changed" nor "changes"
* do not capitalize the first letter
* No dot (.) at the end

# Development Environment Setup
1. Install NVM for managing Node versions.
   - [Node Version Manager Installation Docs](https://github.com/nvm-sh/nvm#installing-and-updating)
2. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
3. Use NVM to install Node version >= 16.0.0
   
   ```shell
   nvm install node  # "node" is an alias for the latest version
   ```
5. Optional: To link your IDE to Node so that you don't have to change project settings you can set up symlink.
   - [Setting up symlink in Webstorm](https://medium.com/@danielzen/using-nvm-with-webstorm-or-other-ide-d7d374a84eb1)
   - Now whenever you switch versions your project settings will automatically use the correct modules/Node.
   
   ```shell
   nvm use <version>
   ```
6. U4IC is now using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

# How do I install the SDK?
1. Open a terminal and `nvm use <version>` to switch to your Node version.
2. Install the SDK.

   ```shell
   npm install -g @u4ic-test/turbine-sdk@latest
   ```
3. Verify the install
   
   ```shell
   u4ic-test version
   ```
4. **Optional** Setup autocomplete:
   
   ```shell
   u4ic-test autocomplete # For instructions
   ```
5. Make sure docker desktop is running when using the CLI.
6. SDK is ready for use. 

# What is the recommended directory structure?
U4IC recommends have a single directory that holds all the connectors. The directory will be referred to as the connectors directory.

Example:

```
home 
   └─⫸projects
		└─⫸ connectors (Connectors Directory)
               └─⫸ t_virustotal (Connector)
               └─⫸ t_crowdstrike_falcon
               └─⫸ custom_connector
```

```shell
Used to get an connector

USAGE
  $ u4ic-test connectors:get

OPTIONS
  -d, --directory=directory   [default: ./] root directory to clone the repo
  -h, --help                  show CLI help
  -n, --name=name             name of the new connector (repo name and final directory name)
  -t, --clone-type=ssh|https  [default: ssh] protocol to use to clone repo 
```

# How do I create a new plugin?
1. Create a directory where you want to store the repos.
   ```shell
   cd <Connectors Directory>
   mkdir <path/to/store/repos>
   cd <path/to/store/repos>
   ```
2. We will use the SDK to create connector scaffolding. If anything is required, it can be interactive.

```shell
Used to scaffold a new connector

USAGE
  $ u4ic-test connector scaffold

OPTIONS
  -d, --directory=directory
      [default: ./] directory to scaffold

  -h, --help
      show CLI help

  -i, --input-config=input-config
      input config file

  --author=author
      Connector Author

  --author-email=author-email
      Connector Author Email

  --description=description
      Description (e.g. CrowdStrike Host Query API)

  --family=Investigation|Endpoint Security & Management|Network Security & Management|Communication|SIEM & Log
  Management|Governance & Risk Management|Vulnerability & Patch Management|Ticket Management|DevOps & Application
  Security|Identity & Access Management|Infrastructure|Miscellaneous
      Connector Family

  --generate-examples
      Generate example code

  --logoPath=logoPath
      URL or absolute path to logo file

  --product=product
      Product (e.g. Falcon)

  --requirements=requirements
      Requirements, comma separated (e.g. requests,swimbundle-utils)

  --supported-swimlane-version=supported-swimlane-version
      What is the supported U4IC Version (>=10.3.0)

  --url=url
      Author URL

  --use-rest-template
      Use the basic rest template

  --vendor=vendor
      Vendor (e.g. CrowdStrike)     
```
   
# How do I build an connector?

1. Navigate to the connector directory. 
   
   ```shell
   cd <Connector Directory>/<Connector>
   ```
2. Run the connector:build command
   
   ```shell
   Used to build a .swimbundle

   USAGE
   $ u4ic-test connector:build
   
   ```
3. The tar.gz is in the output folder

# How do I generate test data to run an connector?

1. Navigate to the connector directory.

   ```shell
   cd <Connector Directory>/<Connector>
   ```
2. Run the action:run command

   ```shell
   u4ic-test action run --generate
   ```
3. Once a action is chosen the files are generated into the data folder.
   1. asset.json (connection data)
   2. < action_name >.json (action data)
4. Modify the json files with the correct data to be tested.
   
# How do I run an action in connector?

1. Navigate to the connector directory.

   ```shell
   cd <Connectors Directory>/<Connector>
   ```
2. Run the action:run command. If no arguments are passed, you will have to choose a action name.

   ```shell
   u4ic-test action run
   ```

