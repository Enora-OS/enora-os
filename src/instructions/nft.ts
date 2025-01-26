import { TransactionInstruction, PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

export class NFTInstruction {
  static mintNFT(instructionData: any): TransactionInstruction {
    const { mint, destination, authority, metadata } = instructionData;

    if (!mint || !destination || !authority || !metadata) {
      throw new Error('Invalid instruction data for minting NFT');
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
      instruction: 'mintNFT',
      metadata,
    }));

    return new TransactionInstruction({
      keys,
      programId: TOKEN_PROGRAM_ID,
      data,
    });
  }

  static transferNFT(instructionData: any): TransactionInstruction {
    const { source, destination, authority } = instructionData;

    if (!source || !destination || !authority) {
      throw new Error('Invalid instruction data for transferring NFT');
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
      instruction: 'transferNFT',
    }));

    return new TransactionInstruction({
      keys,
      programId: TOKEN_PROGRAM_ID,
      data,
    });
  }

  static burnNFT(instructionData: any): TransactionInstruction {
    const { account, mint, authority } = instructionData;

    if (!account || !mint || !authority) {
      throw new Error('Invalid instruction data for burning NFT');
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
      instruction: 'burnNFT',
    }));

    return new TransactionInstruction({
      keys,
      programId: TOKEN_PROGRAM_ID,
      data,
    });
  }
}