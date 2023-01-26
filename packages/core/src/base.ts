import { CliUx, Command, Flags } from "@oclif/core";
import type { ConfigType } from "./models";
import { ConfigService } from "./config-service";

// Noinspection JSUnusedGlobalSymbols
export abstract class Base extends Command {
    sdkConfig: ConfigType = {
        gitProtocol: "https",
        owner: "swimlane",
        lastRepoCheck: new Date(1977, 1, 8),
    };

    environment: string | null = null;

    static BaseFlags = {
        "log-level": Flags.string({ options: ["debug"], hidden: true }),
    };

    async init(): Promise<void> {
        const entry = this.config.configDir;
        const { flags } = (await this.parse(this.constructor as typeof Command)) as any;

        if (flags["log-level"] === "debug") {
            CliUx.ux.config.outputLevel = "debug";
        }

        const configService = new ConfigService(entry);

        const config = await configService.loadConfig() || {
            gitProtocol: "https",
            owner: "swimlane",
            lastRepoCheck: new Date(1977, 1, 8),
        };
        this.sdkConfig = config as any;
    }

    protected async saveConfig(key: string, value: string | Date): Promise<void> {
        const entry = this.config.configDir;
        const configService = new ConfigService(entry);
        const loadedConfig = await configService.loadConfig();

        if (!loadedConfig) {
            return;
        }

        loadedConfig[key] = value;

        await configService.saveConfig(loadedConfig);
    }
}
