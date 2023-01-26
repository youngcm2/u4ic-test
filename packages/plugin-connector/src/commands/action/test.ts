/* eslint-disable camelcase */
import {CliUx, Flags} from '@oclif/core'
import {Base} from '@u4ic-test/core'

// noinspection JSUnusedGlobalSymbols
export class Add extends Base {
  static description = 'Update a connector action.'

  static flags = {
    ...Base.flags,
    directory: Flags.string({
      char: 'd',
      description: 'Root directory of the repository.',
      default: './',
    }),
    help: Flags.help({
      char: 'h',
    }),
  }

  async run(): Promise<void> {
    const {
      flags,
    } = await this.parse(Add)

    const {
      directory,
    } = flags

    CliUx.ux.action.start('Testing')
    CliUx.ux.log(`Current directory: ${directory}`)
    CliUx.ux.action.stop()
  }
}
