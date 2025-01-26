import { TransactionInstruction, PublicKey } from '@solana/web3.js';

export class PumpfunInstruction {
  static stakePumpfun(instructionData: any): TransactionInstruction {
    const { pumpfunAccount, source, authority, amount, pumpfunProgramId } = instructionData;

    if (!pumpfunAccount || !source || !authority || !amount || !pumpfunProgramId) {
      throw new Error('Invalid instruction data for staking Pumpfun');
    }

    const pumpfunAccountPubkey = new PublicKey(pumpfunAccount);
    const sourcePubkey = new PublicKey(source);
    const authorityPubkey = new PublicKey(authority);
    const pumpfunProgramPubkey = new PublicKey(pumpfunProgramId);

    const keys = [
      { pubkey: pumpfunAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: sourcePubkey, isSigner: false, isWritable: true },
      { pubkey: authorityPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'stakePumpfun',
      amount,
    }));

    return new TransactionInstruction({
      keys,
      programId: pumpfunProgramPubkey,
      data,
    });
  }

  static unstakePumpfun(instructionData: any): TransactionInstruction {
    const { pumpfunAccount, destination, authority, amount, pumpfunProgramId } = instructionData;

    if (!pumpfunAccount || !destination || !authority || !amount || !pumpfunProgramId) {
      throw new Error('Invalid instruction data for unstaking Pumpfun');
    }

    const pumpfunAccountPubkey = new PublicKey(pumpfunAccount);
    const destinationPubkey = new PublicKey(destination);
    const authorityPubkey = new PublicKey(authority);
    const pumpfunProgramPubkey = new PublicKey(pumpfunProgramId);

    const keys = [
      { pubkey: pumpfunAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: destinationPubkey, isSigner: false, isWritable: true },
      { pubkey: authorityPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'unstakePumpfun',
      amount,
    }));

    return new TransactionInstruction({
      keys,
      programId: pumpfunProgramPubkey,
      data,
    });
  }

  static claimPumpfunRewards(instructionData: any): TransactionInstruction {
    const { pumpfunAccount, rewardsAccount, authority, pumpfunProgramId } = instructionData;

    if (!pumpfunAccount || !rewardsAccount || !authority || !pumpfunProgramId) {
      throw new Error('Invalid instruction data for claiming Pumpfun rewards');
    }

    const pumpfunAccountPubkey = new PublicKey(pumpfunAccount);
    const rewardsAccountPubkey = new PublicKey(rewardsAccount);
    const authorityPubkey = new PublicKey(authority);
    const pumpfunProgramPubkey = new PublicKey(pumpfunProgramId);

    const keys = [
      { pubkey: pumpfunAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: rewardsAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: authorityPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'claimPumpfunRewards',
    }));

    return new TransactionInstruction({
      keys,
      programId: pumpfunProgramPubkey,
      data,
    });
  }
}