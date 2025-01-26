import { TransactionInstruction, PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, Token } from '@solana/spl-token';

export class TokenInstruction {
  static createTokenAccount(instructionData: any): TransactionInstruction {
    const { account, mint, owner } = instructionData;

    if (!account || !mint || !owner) {
      throw new Error('Invalid instruction data for creating token account');
    }

    const accountPubkey = new PublicKey(account);
    const mintPubkey = new PublicKey(mint);
    const ownerPubkey = new PublicKey(owner);

    const keys = [
      { pubkey: accountPubkey, isSigner: false, isWritable: true },
      { pubkey: mintPubkey, isSigner: false, isWritable: false },
      { pubkey: ownerPubkey, isSigner: false, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'createTokenAccount',
    }));

    return new TransactionInstruction({
      keys,
      programId: TOKEN_PROGRAM_ID,
      data,
    });
  }

  static transferTokens(instructionData: any): TransactionInstruction {
    const { source, destination, authority, amount } = instructionData;

    if (!source || !destination || !authority || !amount) {
      throw new Error('Invalid instruction data for transferring tokens');
    }

    const sourcePubkey = new PublicKey(source);
    const destinationPubkey = new PublicKey(destination);
    const authorityPubkey = new PublicKey(authority);

    const keys = [
      { pubkey: sourcePubkey, isSigner: false, isWritable: true },
      { pubkey: destinationPubkey, isSigner: false, isWritable: true },
      { pubkey: authorityPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'transferTokens',
      amount,
    }));

    return new TransactionInstruction({
      keys,
      programId: TOKEN_PROGRAM_ID,
      data,
    });
  }

  static mintTokens(instructionData: any): TransactionInstruction {
    const { mint, destination, authority, amount } = instructionData;

    if (!mint || !destination || !authority || !amount) {
      throw new Error('Invalid instruction data for minting tokens');
    }

    const mintPubkey = new PublicKey(mint);
    const destinationPubkey = new PublicKey(destination);
    const authorityPubkey = new PublicKey(authority);

    const keys = [
      { pubkey: mintPubkey, isSigner: false, isWritable: true },
      { pubkey: destinationPubkey, isSigner: false, isWritable: true },
      { pubkey: authorityPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'mintTokens',
      amount,
    }));

    return new TransactionInstruction({
      keys,
      programId: TOKEN_PROGRAM_ID,
      data,
    });
  }

  static burnTokens(instructionData: any): TransactionInstruction {
    const { account, mint, authority, amount } = instructionData;

    if (!account || !mint || !authority || !amount) {
      throw new Error('Invalid instruction data for burning tokens');
    }

    const accountPubkey = new PublicKey(account);
    const mintPubkey = new PublicKey(mint);
    const authorityPubkey = new PublicKey(authority);

    const keys = [
      { pubkey: accountPubkey, isSigner: false, isWritable: true },
      { pubkey: mintPubkey, isSigner: false, isWritable: true },
      { pubkey: authorityPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'burnTokens',
      amount,
    }));

    return new TransactionInstruction({
      keys,
      programId: TOKEN_PROGRAM_ID,
      data,
    });
  }
}