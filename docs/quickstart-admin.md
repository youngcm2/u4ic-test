Quickstart
============

<!-- toc -->
* [Commit Message Format](#commit-message-format)
* [Development Environment Setup](#development-environment-setup)
* [How do I install the SDK?](#how-do-i-install-the-sdk)
* [How do I create a new plugin repository and scaffolding?](#how-do-i-create-a-new-plugin-repository-and-scaffolding)
* [How do I migrate a plugin?](#how-do-i-migrate-a-plugin)
<!-- tocstop -->

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
* Do not capitalize the first letter
* No dot (.) at the end

# Development Environment Setup
1. Install NVM for managing Node versions.
   - [Node Version Manager Installation Docs](https://github.com/nvm-sh/nvm#installing-and-updating)
2. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
3. Use NVM to install Node version >= 16.0.0
   ```shell
   $ nvm install node  # "node" is an alias for the latest version
   ```
5. Optional: To link your IDE to Node so that you don't have to change project settings you can set up symlink.
   - [Setting up symlink in Webstorm](https://medium.com/@danielzen/using-nvm-with-webstorm-or-other-ide-d7d374a84eb1)
   - Now whenever you switch versions your project settings will automatically use the correct modules/Node.
   ```shell
   $ nvm use <version>
   ```
6. U4IC is now using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

# How do I install the SDK?
1. Open a terminal and `nvm use <version>` to switch to your Node version.
2. Install the SDK.
   ```shell
   $ npm install -g @u4ic-test/turbine-sdk@latest
   ```
3. Verify the install
   ```shell
   $ u4ic-test version
   ```
4. **Optional** Setup autocomplete:
   ```shell
   $ u4ic-test autocomplete # For instructions
   ```
5. Login to npm **Note: You may need to create an account at [npm](https://www.npmjs.com/)**
   - After you create your account you will need to be invited by U4IC org via Chris Young.
   ```shell
   $ npm login
   ```
6. Install the admin plugin.
   ```shell
   $ u4ic-test plugins:install @u4ic-test/u4ic-test-admin@latest
   ```
7. Link the admin plugin to the CLI, please note that you need to insert the absolute path for your plugin.
   ```shell
   $ u4ic-test plugins:link <your-path-to-cli>/turbine-sdk/node_modules/@u4ic-test/u4ic-test-admin
   ```
8. Make sure docker desktop is running when using the CLI.
9. Use the auth plugin to login to Github.
   ```shell
   $ u4ic-test auth:github:login
   ```
10. Login/Create [codacy](https://app.codacy.com/organizations) account using GH and link to U4IC org.
11. Create an API token through the Codacy UI
    - Click your avatar -> Your account -> Access Management -> Create API Token
12. Login via the CLI with your token
    ```shell
    $ u4ic-test auth:codacy:login -k <your API token>
    ```
13. SDK is ready for use. Please familiarize with the [docs/](docs)

# How do I create a new plugin repository and scaffolding?
1. Create a directory where you want to store the repos.
   ```shell
   $ mkdir <path/to/store/repos>
   ```
2. We will use the **admin** plugin to create a new repo and plugin scaffolding.
   ```shell
     USAGE
   $ u4ic-test admin:create
   
   OPTIONS
   -d, --directory=directory   directory where to store the repo
   -h, --help                  show CLI help
   -n, --name=name             (required) name of the new integration (repo name and final directory name)
   -t, --clone-type=ssh|https  [default: ssh] protocol to use to clone repo
   --skip-scaffold             skips the scaffolding process
   ```
   In this example I just cd into the directory where I store my repos. 
   **Note: Name must start with sw_vendor_product**.
   ```shell
   $ u4ic-test admin:create -t https -n sw_swimlane_test
   ```
3. The repo will now be on GH and the plugin scaffolding in the directory on branch `migrating/repo`.
4. 

# How do I migrate a plugin?
1. Migrating a plugin from the bundles repository to its own is done via the master branch. Therefore, this must be done prior to any code changes.
2. Either cd into where you store your repos or use the `-d` flag to specify the location.
   ```shell
   USAGE
   $ u4ic-test-admin migrate:start
   
   OPTIONS
   -d, --directory=directory  root directory to clone the repo
   -h, --help                 show CLI help
   -n, --name=name            (required) repo name and final directory name - must be `sw_vendor_product`
   -s, --source=source        (required) source directory of the integration in the bundle repo /src/{bundle}
   -t, --clone-type=ssh|https  [default: ssh] protocol to use to clone repo
   ```
   Example: 
   ```shell
   $ u4ic-test migrate:start -n sw_swimlane_test -s ../bundles/src/swimlane_email -d ../plugins -t https
   ```
