import { TransactionInstruction, PublicKey } from '@solana/web3.js';

export class StakingInstruction {
  static stakeTokens(instructionData: any): TransactionInstruction {
    const { stakeAccount, source, authority, amount, stakingProgramId } = instructionData;

    if (!stakeAccount || !source || !authority || !amount || !stakingProgramId) {
      throw new Error('Invalid instruction data for staking tokens');
    }

    const stakeAccountPubkey = new PublicKey(stakeAccount);
    const sourcePubkey = new PublicKey(source);
    const authorityPubkey = new PublicKey(authority);
    const stakingProgramPubkey = new PublicKey(stakingProgramId);

    const keys = [
      { pubkey: stakeAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: sourcePubkey, isSigner: false, isWritable: true },
      { pubkey: authorityPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'stakeTokens',
      amount,
    }));

    return new TransactionInstruction({
      keys,
      programId: stakingProgramPubkey,
      data,
    });
  }

  static unstakeTokens(instructionData: any): TransactionInstruction {
    const { stakeAccount, destination, authority, amount, stakingProgramId } = instructionData;

    if (!stakeAccount || !destination || !authority || !amount || !stakingProgramId) {
      throw new Error('Invalid instruction data for unstaking tokens');
    }

    const stakeAccountPubkey = new PublicKey(stakeAccount);
    const destinationPubkey = new PublicKey(destination);
    const authorityPubkey = new PublicKey(authority);
    const stakingProgramPubkey = new PublicKey(stakingProgramId);

    const keys = [
      { pubkey: stakeAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: destinationPubkey, isSigner: false, isWritable: true },
      { pubkey: authorityPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'unstakeTokens',
      amount,
    }));

    return new TransactionInstruction({
      keys,
      programId: stakingProgramPubkey,
      data,
    });
  }

  static claimRewards(instructionData: any): TransactionInstruction {
    const { stakeAccount, rewardsAccount, authority, stakingProgramId } = instructionData;

    if (!stakeAccount || !rewardsAccount || !authority || !stakingProgramId) {
      throw new Error('Invalid instruction data for claiming rewards');
    }

    const stakeAccountPubkey = new PublicKey(stakeAccount);
    const rewardsAccountPubkey = new PublicKey(rewardsAccount);
    const authorityPubkey = new PublicKey(authority);
    const stakingProgramPubkey = new PublicKey(stakingProgramId);

    const keys = [
      { pubkey: stakeAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: rewardsAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: authorityPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'claimRewards',
    }));

    return new TransactionInstruction({
      keys,
      programId: stakingProgramPubkey,
      data,
    });
  }
}