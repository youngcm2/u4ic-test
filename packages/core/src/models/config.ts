export type ConfigType = {
    [key: string]: string | Date | undefined;
    gitProtocol: string;
    owner?: string;
    lastRepoCheck?: Date;
};

export const ConfigTypeDefault = {
    gitProtocol: "https",
};
