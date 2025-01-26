import { OpenAIParser } from './parser/openai';
import { mapParsedDataToInstructions } from './parser/mappings';
import { SecurityUtils } from './utils/security';
import { TransactionInstruction } from '@solana/web3.js';

interface EnoraConfig {
  openAIToken: string;
  solanaPrivateKey: string;
}

export class Enora {
  private openAIParser: OpenAIParser;
  private securityUtils: SecurityUtils;

  constructor(config: EnoraConfig) {
    this.openAIParser = new OpenAIParser(config.openAIToken);
    this.securityUtils = new SecurityUtils(config.solanaPrivateKey);
  }

  public async generate(input: string): Promise<() => Promise<string>> {
    try {
      const parsedInstructions = await this.openAIParser.parseInput(input);
      const transactionInstructions: TransactionInstruction[] = mapParsedDataToInstructions(parsedInstructions);

      return async () => {
        const signedTransaction = await this.securityUtils.signTransaction(transactionInstructions);
        const result = await this.securityUtils.sendTransaction(signedTransaction);
        return result;
      };
    } catch (error) {
      throw new Error(`Failed to generate transaction: ${error.message}`);
    }
  }
}