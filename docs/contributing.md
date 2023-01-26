Contributing
============

# Development Setup

1. Install NVM for managing Node versions.
   - [Node Version Manager Installation Docs](https://github.com/nvm-sh/nvm#installing-and-updating)
2. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
3. Use NVM to install Node version >= 16.13.0
   ```shell
   nvm install node  # "node" is an alias for the latest version
   ```
4. Setup docker registry
   ```
      docker run -d -p 5000:5000 --name registry registry:2
   ```
5. Optional: To link your IDE to Node so that you don't have to change project settings you can set up symlink.
   - [Setting up symlink in Webstorm](https://medium.com/@danielzen/using-nvm-with-webstorm-or-other-ide-d7d374a84eb1)
   - Now whenever you switch versions your project settings will automatically use the correct modules/Node.
   ```shell
   nvm use <version>
   ```
6. U4IC is now using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

# First time init
After pulling the code down, run the following commands in the base directory of the project.

```
yarn bootstrap
yarn dev:setup
yarn build:all
```

This project is built with [lerna](https://lerna.js.org/). The core plugins are located in [./packages](./packages). Run `yarn bootstrap` after cloning the repository to set it up.

The standard `oclif` `./bin/run` script serves as your entry point to the CLI in your local development environment.

# Using local docker images

Using local docker images is necessary when developing for the u4ic-test.  All commands that use docker images allow you 
to select a local `image id` using the `-i (--image)` flag.  You also have to pass in the `-s (--skip-pull)` flag so 
that it knows to look locally for the image.

For example, to run a task using a local `sdk-turbine-validate` image, you would use this command:
```
u4ic-test connecter validate -i {image id} -s
```
