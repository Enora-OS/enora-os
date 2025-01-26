import { TransactionInstruction } from '@solana/web3.js';
import { SystemInstruction } from '../instructions/system';
import { TokenInstruction } from '../instructions/token';
import { StakingInstruction } from '../instructions/staking';
import { NFTInstruction } from '../instructions/nft';
import { GovernanceInstruction } from '../instructions/governance';
import { LendingInstruction } from '../instructions/lending';
import { RaydiumInstruction } from '../instructions/raydium';
import { PumpfunInstruction } from '../instructions/pumpfun';

export function mapParsedDataToInstructions(parsedData: any): TransactionInstruction[] {
  const instructions: TransactionInstruction[] = [];

  parsedData.forEach((instructionData: any) => {
    switch (instructionData.type) {
      case 'system':
        instructions.push(SystemInstruction.create(instructionData));
        break;
      case 'token':
        instructions.push(TokenInstruction.create(instructionData));
        break;
      case 'staking':
        instructions.push(StakingInstruction.create(instructionData));
        break;
      case 'nft':
        instructions.push(NFTInstruction.create(instructionData));
        break;
      case 'governance':
        instructions.push(GovernanceInstruction.create(instructionData));
        break;
      case 'lending':
        instructions.push(LendingInstruction.create(instructionData));
        break;
      case 'raydium':
        instructions.push(RaydiumInstruction.create(instructionData));
        break;
      case 'pumpfun':
        instructions.push(PumpfunInstruction.create(instructionData));
        break;
      default:
        throw new Error(`Unsupported instruction type: ${instructionData.type}`);
    }
  });

  return instructions;
}