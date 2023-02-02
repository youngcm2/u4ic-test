import type { NetrcEntry } from "../models";
import Netrc from "netrc-parser";
import { Protector } from "./protector";

export async function saveToken(entry: NetrcEntry): Promise<void> {
    const host = entry.host;
    await Netrc.load();
    if (!Netrc.machines[host]) {
        Netrc.machines[host] = {};
    }
    Netrc.machines[host].login = entry.login;
    Netrc.machines[host].password = new Protector().encrypt(entry.password);
    delete Netrc.machines[host].method;
    delete Netrc.machines[host].org;

    if (Netrc.machines._tokens) {
        for (const token of Netrc.machines._tokens as any) {
            if (host === token.host) {
                token.internalWhitespace = "\n  ";
            }
        }
    }

    await Netrc.save();
}

/*
Foo Bar
 */
export async function getToken(host: string): Promise<NetrcEntry | null> {
    await Netrc.load();
    if (!Netrc.machines[host]) {
        return null;
    }

    let pwd = Netrc.machines[host].password;
    if (pwd) {
        pwd = new Protector().decrypt(pwd);
    }

    return {
        host: host,
        login: Netrc.machines[host].login || "",
        password: pwd || "",
    };
}

export async function deleteToken(host: string): Promise<void> {
    await Netrc.load();
    delete Netrc.machines[host];
    await Netrc.save();
}
