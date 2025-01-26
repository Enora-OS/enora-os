import { PublicKey } from '@solana/web3.js';

export class HelperUtils {
  static parsePublicKey(key: string): PublicKey {
    try {
      return new PublicKey(key);
    } catch (error) {
      throw new Error(`Invalid public key: ${key}`);
    }
  }

  static validateAmount(amount: any): number {
    const parsedAmount = Number(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      throw new Error(`Invalid amount: ${amount}`);
    }
    return parsedAmount;
  }

  static formatTransactionResult(result: any): string {
    if (!result || typeof result !== 'object') {
      throw new Error('Invalid transaction result');
    }
    return `Transaction successful: ${JSON.stringify(result)}`;
  }

  static generateRandomId(length: number = 8): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  static delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static isValidAddress(address: string): boolean {
    try {
      new PublicKey(address);
      return true;
    } catch {
      return false;
    }
  }

  static convertLamportsToSol(lamports: number): number {
    return lamports / 1_000_000_000;
  }