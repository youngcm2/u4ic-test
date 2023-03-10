import {
    ReadableOptions as ReadableNodeStreamOptions,
    Readable as ReadableStream,
    WritableOptions as WritableNodeStreamOptions,
    Writable as WritableStream,
} from "node:stream";
import { Buffer } from "node:buffer";

export interface ReadableStreamOptions extends Omit<ReadableNodeStreamOptions, "read"> {
    /**
   The amount of data to stream in bytes.

   Set it to `Infinity` to make it produce data until you manually destroy the stream.

   @default 0
   */
    readonly size?: number;
}

export type WritableStreamOptions = Omit<WritableNodeStreamOptions, "write">;

// Noinspection JSUnusedGlobalSymbols
export function readableNoopStream({
    size = 0,
    ...options
}: ReadableStreamOptions): NodeJS.ReadableStream {
    let producedSize = 0;

    return new ReadableStream({
        ...options,
        read(readSize) {
            let shouldEnd = false;

            if (producedSize + readSize >= size) {
                readSize = size - producedSize;
                shouldEnd = true;
            }

            setImmediate(() => {
                if (size === 0) {
                    this.push(null);
                }

                producedSize += readSize;
                this.push(Buffer.alloc(readSize));

                if (shouldEnd) {
                    this.push(null);
                }
            });
        },
    });
}

// Noinspection JSUnusedGlobalSymbols
export function writableNoopStream(options?: WritableStreamOptions): NodeJS.WritableStream {
    return new WritableStream({
        ...options,
        write(chunk, encding, callback) {
            setImmediate(callback);
        },
    });
}
