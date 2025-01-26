import { Keypair, Transaction, Connection } from '@solana/web3.js';
import bs58 from 'bs58';

export class SecurityUtils {
  static loadKeypairFromSecret(secret: string): Keypair {
    try {
      const secretKey = bs58.decode(secret);
      return Keypair.fromSecretKey(secretKey);
    } catch (error) {
      throw new Error('Invalid secret key');
    }
  }

  static signTransaction(transaction: Transaction, keypair: Keypair): Transaction {
    try {
      transaction.sign(keypair);
      return transaction;
    } catch (error) {
      throw new Error('Failed to sign transaction');
    }
  }

  static async sendTransaction(connection: Connection, transaction: Transaction, keypair: Keypair): Promise<string> {
    try {
      const signedTransaction = this.signTransaction(transaction, keypair);
      const rawTransaction = signedTransaction.serialize();
      return await connection.sendRawTransaction(rawTransaction);
    } catch (error) {
      throw new Error('Failed to send transaction');
    }
  }

  static encryptData(data: string, key: string): string {
    // Placeholder for encryption logic
    return data; // Replace with actual encryption
  }

  static decryptData(encryptedData: string, key: string): string {
    // Placeholder for decryption logic
    return encryptedData; // Replace with actual decryption
  }

  static validatePrivateKey(privateKey: string): boolean {
    try {
      bs58.decode(privateKey);
      return true;
    } catch {
      return false;
    }
  }

  static async confirmTransaction(connection: Connection, txid: string): Promise<void> {
    try {
      const confirmation = await connection.confirmTransaction(txid, 'confirmed');
      if (!confirmation.value.err) {
        console.log('Transaction confirmed');
      } else {
        throw new Error('Transaction failed');
      }
    } catch (error) {
      throw new Error('Failed to confirm transaction');
    }
  }
}