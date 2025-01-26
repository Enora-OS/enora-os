import { TransactionInstruction, PublicKey } from '@solana/web3.js';

export class LendingInstruction {
  static depositCollateral(instructionData: any): TransactionInstruction {
    const { lendingMarket, collateralAccount, user, amount, lendingProgramId } = instructionData;

    if (!lendingMarket || !collateralAccount || !user || !amount || !lendingProgramId) {
      throw new Error('Invalid instruction data for depositing collateral');
    }

    const lendingMarketPubkey = new PublicKey(lendingMarket);
    const collateralAccountPubkey = new PublicKey(collateralAccount);
    const userPubkey = new PublicKey(user);
    const lendingProgramPubkey = new PublicKey(lendingProgramId);

    const keys = [
      { pubkey: lendingMarketPubkey, isSigner: false, isWritable: true },
      { pubkey: collateralAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: userPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'depositCollateral',
      amount,
    }));

    return new TransactionInstruction({
      keys,
      programId: lendingProgramPubkey,
      data,
    });
  }

  static withdrawCollateral(instructionData: any): TransactionInstruction {
    const { lendingMarket, collateralAccount, user, amount, lendingProgramId } = instructionData;

    if (!lendingMarket || !collateralAccount || !user || !amount || !lendingProgramId) {
      throw new Error('Invalid instruction data for withdrawing collateral');
    }

    const lendingMarketPubkey = new PublicKey(lendingMarket);
    const collateralAccountPubkey = new PublicKey(collateralAccount);
    const userPubkey = new PublicKey(user);
    const lendingProgramPubkey = new PublicKey(lendingProgramId);

    const keys = [
      { pubkey: lendingMarketPubkey, isSigner: false, isWritable: true },
      { pubkey: collateralAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: userPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'withdrawCollateral',
      amount,
    }));

    return new TransactionInstruction({
      keys,
      programId: lendingProgramPubkey,
      data,
    });
  }

  static borrow(instructionData: any): TransactionInstruction {
    const { lendingMarket, borrowAccount, user, amount, lendingProgramId } = instructionData;

    if (!lendingMarket || !borrowAccount || !user || !amount || !lendingProgramId) {
      throw new Error('Invalid instruction data for borrowing');
    }

    const lendingMarketPubkey = new PublicKey(lendingMarket);
    const borrowAccountPubkey = new PublicKey(borrowAccount);
    const userPubkey = new PublicKey(user);
    const lendingProgramPubkey = new PublicKey(lendingProgramId);

    const keys = [
      { pubkey: lendingMarketPubkey, isSigner: false, isWritable: true },
      { pubkey: borrowAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: userPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'borrow',
      amount,
    }));

    return new TransactionInstruction({
      keys,
      programId: lendingProgramPubkey,
      data,
    });
  }

  static repay(instructionData: any): TransactionInstruction {
    const { lendingMarket, repayAccount, user, amount, lendingProgramId } = instructionData;

    if (!lendingMarket || !repayAccount || !user || !amount || !lendingProgramId) {
      throw new Error('Invalid instruction data for repaying');
    }

    const lendingMarketPubkey = new PublicKey(lendingMarket);
    const repayAccountPubkey = new PublicKey(repayAccount);
    const userPubkey = new PublicKey(user);
    const lendingProgramPubkey = new PublicKey(lendingProgramId);

    const keys = [
      { pubkey: lendingMarketPubkey, isSigner: false, isWritable: true },
      { pubkey: repayAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: userPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'repay',
      amount,
    }));

    return new TransactionInstruction({
      keys,
      programId: lendingProgramPubkey,
      data,
    });
  }
}