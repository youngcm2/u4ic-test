FROM node:15

RUN npm i -g lerna

RUN mkdir -p /sdk/.yarn \
    mkdir -p /sdk/.yarn/offline-mirror \
    mkdir -p .cache-keys

RUN yarn config set cache-folder /cli/.yarn/cache
RUN yarn config set yarn-offline-mirror /cli/.yarn/offline-mirror

RUN yarn --version >> .cache-keys/yarn-version \
    sha256sum yarn.lock >> .cache-keys/yarn-lock \
    node --version >> .cache-keys/node-version

    # offline mirror cache file
RUN cat \
      .cache-keys/yarn-version \
      .cache-keys/yarn-lock \
      > .cache-keys/yarn-offline-mirror
    # yarn cache (which is separate from offline mirror) cache file
    # but dependent on node version.
    # Represents the final directories in yarn's cache after it un-tars
    # tarballs from the offline-mirror AND runs install scripts.
RUN  cat \
      .cache-keys/yarn-offline-mirror \
      .cache-keys/node-version \
      > .cache-keys/yarn-cache

COPY . /sdk
WORKDIR /sdk

RUN yarn --frozen-lockfile --prefer-offline
#RUN lerna bootstrap --force-local --ci
#RUN npx lerna run build --scope=@u4ic-test/turbine-sdk
RUN npx oclif-dev pack --root=packages/cli

CMD ["sh"]
