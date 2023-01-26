import type {ConfigType} from './models'
import {readJson, writeJson} from 'fs-extra'
import {join} from 'node:path'
import {fileExists} from './utils'

export class ConfigService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private _basePath: string) {}

  public async loadConfig():Promise<ConfigType | null> {
    const configPath = join(this._basePath, '.u4ic-testrc.json')

    if (!await fileExists(configPath)) {
      return null
    }

    const result = await readJson(configPath)

    if (!result) {
      return null
    }

    return result
  }

  public async saveConfig({owner, gitProtocol, lastRepoCheck}: ConfigType): Promise<void> {
    const configPath = join(this._basePath, '.u4ic-testrc.json')
    let configValues = {
      owner: 'swimlane',
      gitProtocol: 'https',
    }
    if (await fileExists(configPath)) {
      configValues = Object.assign(configValues, (await readJson(configPath)))
    }

    Object.assign(configValues, {
      owner,
      gitProtocol,
      lastRepoCheck,
    })

    await writeJson(configPath, configValues, {spaces: 2, EOL: '\n'})
  }
}
