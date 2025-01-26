import { TransactionInstruction, PublicKey } from '@solana/web3.js';

export class RaydiumInstruction {
  static addLiquidity(instructionData: any): TransactionInstruction {
    const { poolAccount, userSource, userDestination, authority, amount, raydiumProgramId } = instructionData;

    if (!poolAccount || !userSource || !userDestination || !authority || !amount || !raydiumProgramId) {
      throw new Error('Invalid instruction data for adding liquidity');
    }

    const poolAccountPubkey = new PublicKey(poolAccount);
    const userSourcePubkey = new PublicKey(userSource);
    const userDestinationPubkey = new PublicKey(userDestination);
    const authorityPubkey = new PublicKey(authority);
    const raydiumProgramPubkey = new PublicKey(raydiumProgramId);

    const keys = [
      { pubkey: poolAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: userSourcePubkey, isSigner: false, isWritable: true },
      { pubkey: userDestinationPubkey, isSigner: false, isWritable: true },
      { pubkey: authorityPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'addLiquidity',
      amount,
    }));

    return new TransactionInstruction({
      keys,
      programId: raydiumProgramPubkey,
      data,
    });
  }

  static removeLiquidity(instructionData: any): TransactionInstruction {
    const { poolAccount, userSource, userDestination, authority, amount, raydiumProgramId } = instructionData;

    if (!poolAccount || !userSource || !userDestination || !authority || !amount || !raydiumProgramId) {
      throw new Error('Invalid instruction data for removing liquidity');
    }

    const poolAccountPubkey = new PublicKey(poolAccount);
    const userSourcePubkey = new PublicKey(userSource);
    const userDestinationPubkey = new PublicKey(userDestination);
    const authorityPubkey = new PublicKey(authority);
    const raydiumProgramPubkey = new PublicKey(raydiumProgramId);

    const keys = [
      { pubkey: poolAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: userSourcePubkey, isSigner: false, isWritable: true },
      { pubkey: userDestinationPubkey, isSigner: false, isWritable: true },
      { pubkey: authorityPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'removeLiquidity',
      amount,
    }));

    return new TransactionInstruction({
      keys,
      programId: raydiumProgramPubkey,
      data,
    });
  }

  static swapTokens(instructionData: any): TransactionInstruction {
    const { poolAccount, userSource, userDestination, authority, amountIn, minimumAmountOut, raydiumProgramId } = instructionData;

    if (!poolAccount || !userSource || !userDestination || !authority || !amountIn || !minimumAmountOut || !raydiumProgramId) {
      throw new Error('Invalid instruction data for swapping tokens');
    }

    const poolAccountPubkey = new PublicKey(poolAccount);
    const userSourcePubkey = new PublicKey(userSource);
    const userDestinationPubkey = new PublicKey(userDestination);
    const authorityPubkey = new PublicKey(authority);
    const raydiumProgramPubkey = new PublicKey(raydiumProgramId);

    const keys = [
      { pubkey: poolAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: userSourcePubkey, isSigner: false, isWritable: true },
      { pubkey: userDestinationPubkey, isSigner: false, isWritable: true },
      { pubkey: authorityPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'swapTokens',
      amountIn,
      minimumAmountOut,
    }));

    return new TransactionInstruction({
      keys,
      programId: raydiumProgramPubkey,
      data,
    });
  }
}