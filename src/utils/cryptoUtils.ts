// utils/cryptoUtils.ts
import CryptoJS from "crypto-js";

/**
 * Utility class providing cryptographic operations including encryption, decryption, hashing and token generation.
 *
 * Encrypts a string using AES encryption
 * @param data - The string to encrypt
 * @returns The encrypted string
 *
 * Decrypts an AES encrypted string
 * @param encryptedData - The encrypted string to decrypt
 * @returns The decrypted string
 *
 * Hashes data using specified algorithm
 * @param data - The string to hash
 * @param algorithm - The hashing algorithm to use (SHA256 or MD5)
 * @returns The hashed string
 *
 * Generates a random token string
 * @param length - The length of the token to generate (default: 32)
 * @returns A random token string
 *
 * @example
 * ```typescript
 * // Encryption/Decryption
 * const encrypted = CryptoUtils.encrypt("sensitive data");
 * const decrypted = CryptoUtils.decrypt(encrypted);
 *
 * // Hashing
 * const sha256Hash = CryptoUtils.hash("data"); // default SHA256
 * const md5Hash = CryptoUtils.hash("data", "MD5");
 *
 * // Token Generation
 * const token = CryptoUtils.generateToken(); // generates 32 char token
 * const customToken = CryptoUtils.generateToken(16); // generates 16 char token
 *
 */
export class CryptoUtils {
  private static SECRET_KEY = "your-secret-key";

  static encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, this.SECRET_KEY).toString();
  }

  static decrypt(encryptedData: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  static hash(data: string, algorithm: "SHA256" | "MD5" = "SHA256"): string {
    switch (algorithm) {
      case "SHA256":
        return CryptoJS.SHA256(data).toString();
      case "MD5":
        return CryptoJS.MD5(data).toString();
    }
  }

  static generateToken(length = 32): string {
    return Array.from(crypto.getRandomValues(new Uint32Array(length)))
      .map((x) => x.toString(36))
      .join("");
  }
}
