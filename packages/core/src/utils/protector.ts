import {createCipheriv, createDecipheriv, pbkdf2Sync} from 'node:crypto'
import type {Cipher} from '../models'
import {userInfo} from 'node:os'
export class Protector {
  private key: Cipher;

  constructor() {
    const info = userInfo()
    const uid = info.username
    this.key = Protector.keyFromPassword(uid)
  }

  // Uses the PBKDF2 algorithm to stretch the string 's' to an arbitrary size,
  // in a way that is completely deterministic yet impossible to guess without
  // knowing the original string
  private static stretchString(s: string, salt: string | Buffer, outputLength: number) {
    return pbkdf2Sync(s, salt, 100_000, outputLength, 'sha512')
  }

  // Stretches the password in order to generate a key (for encrypting)
  // and a large salt (for hashing)
  private static keyFromPassword(password: string): Cipher {
    // We need 24 bytes for the key, and another 48 bytes for the salt
    const keyPlusHashingSalt = Protector.stretchString(password, 'salt', 24 + 48)
    return {
      cipherKey: keyPlusHashingSalt.slice(0, 24),
      hashingSalt: keyPlusHashingSalt.slice(24),
    }
  }

  // Encrypts data using the key generated using the 'keyFromPassword' function
  encrypt(sourceData: string): string {
    const iv = Buffer.alloc(16, 0) // Initialization vector
    const cipher = createCipheriv('aes-192-cbc', this.key.cipherKey, iv)
    let encrypted = cipher.update(sourceData, 'ascii', 'base64')
    encrypted += cipher.final('base64')
    return encrypted
  }

  // Decrypts data using the key generated using the 'keyFromPassword' function
  decrypt(encryptedData: string): string {
    const iv = Buffer.alloc(16, 0) // Initialization vector
    const decipher = createDecipheriv('aes-192-cbc', this.key.cipherKey, iv)
    let decrypted = decipher.update(encryptedData, 'base64', 'ascii')
    decrypted += decipher.final('ascii')
    return decrypted
  }

  // Computes a unique (integer) hash from the given data, using the salt
  // we generated from the password (using 'keyFromPassword')
  hash(sourceData: string): number {
    const hashBuffer = Protector.stretchString(sourceData, this.key.hashingSalt, 6)
    return hashBuffer.readUIntLE(0, 6)
  }
}
