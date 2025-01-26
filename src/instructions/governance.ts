import { TransactionInstruction, PublicKey } from '@solana/web3.js';

export class GovernanceInstruction {
  static createProposal(instructionData: any): TransactionInstruction {
    const { governanceAccount, proposalAccount, proposer, title, description, governanceProgramId } = instructionData;

    if (!governanceAccount || !proposalAccount || !proposer || !title || !description || !governanceProgramId) {
      throw new Error('Invalid instruction data for creating proposal');
    }

    const governanceAccountPubkey = new PublicKey(governanceAccount);
    const proposalAccountPubkey = new PublicKey(proposalAccount);
    const proposerPubkey = new PublicKey(proposer);
    const governanceProgramPubkey = new PublicKey(governanceProgramId);

    const keys = [
      { pubkey: governanceAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: proposalAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: proposerPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'createProposal',
      title,
      description,
    }));

    return new TransactionInstruction({
      keys,
      programId: governanceProgramPubkey,
      data,
    });
  }

  static voteOnProposal(instructionData: any): TransactionInstruction {
    const { proposalAccount, voter, vote, governanceProgramId } = instructionData;

    if (!proposalAccount || !voter || !vote || !governanceProgramId) {
      throw new Error('Invalid instruction data for voting on proposal');
    }

    const proposalAccountPubkey = new PublicKey(proposalAccount);
    const voterPubkey = new PublicKey(voter);
    const governanceProgramPubkey = new PublicKey(governanceProgramId);

    const keys = [
      { pubkey: proposalAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: voterPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'voteOnProposal',
      vote,
    }));

    return new TransactionInstruction({
      keys,
      programId: governanceProgramPubkey,
      data,
    });
  }

  static executeProposal(instructionData: any): TransactionInstruction {
    const { proposalAccount, executor, governanceProgramId } = instructionData;

    if (!proposalAccount || !executor || !governanceProgramId) {
      throw new Error('Invalid instruction data for executing proposal');
    }

    const proposalAccountPubkey = new PublicKey(proposalAccount);
    const executorPubkey = new PublicKey(executor);
    const governanceProgramPubkey = new PublicKey(governanceProgramId);

    const keys = [
      { pubkey: proposalAccountPubkey, isSigner: false, isWritable: true },
      { pubkey: executorPubkey, isSigner: true, isWritable: false },
    ];

    const data = Buffer.from(JSON.stringify({
      instruction: 'executeProposal',
    }));

    return new TransactionInstruction({
      keys,
      programId: governanceProgramPubkey,
      data,
    });
  }
}