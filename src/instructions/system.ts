import { TransactionInstruction, SystemProgram, PublicKey } from '@solana/web3.js';

export class SystemInstruction {
  /**
   * Creates a transaction instruction for a system-level operation, such as transferring SOL.
   * @param instructionData - The data required to construct the transaction.
   * @returns A TransactionInstruction object for the system operation.
   */
  static create(instructionData: any): TransactionInstruction {
    const { fromPubkey, toPubkey, lamports } = instructionData;

    // Validate input data
    if (!fromPubkey || !toPubkey || !lamports) {
      throw new Error('Invalid instruction data for system transaction');
    }

    // Create a transfer instruction using Solana's SystemProgram
    return SystemProgram.transfer({
      fromPubkey: new PublicKey(fromPubkey),
      toPubkey: new PublicKey(toPubkey),
      lamports: lamports,
    });
  }
}