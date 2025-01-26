import { OpenAIParser } from './openai';

/**
 * The Parser class is responsible for handling the parsing of natural language input strings.
 * It utilizes the OpenAIParser to interact with the OpenAI API and process the input into a structured format.
 */
export class Parser {
  private openAIParser: OpenAIParser;

  /**
   * Constructs a new instance of the Parser class.
   * @param openAIToken - The API token for accessing OpenAI services.
   */
  constructor(openAIToken: string) {
    this.openAIParser = new OpenAIParser(openAIToken);
  }

  /**
   * Parses the input string using the OpenAI API to extract meaningful transaction instructions.
   * @param input - The natural language input provided by the user.
   * @returns A promise that resolves to the parsed data containing transaction details.
   * @throws An error if the parsing process fails.
   */
  public async parseInput(input: string): Promise<any> {
    try {
      // Log the input for debugging purposes
      console.log(`Parsing input: ${input}`);

      // Process the input using the OpenAIParser
      const parsedData = await this.openAIParser.processInput(input);

      // Log the parsed data for debugging purposes
      console.log(`Parsed data: ${JSON.stringify(parsedData)}`);

      return parsedData;
    } catch (error) {
      // Log the error for debugging purposes
      console.error(`Error parsing input: ${error.message}`);
      throw new Error(`Failed to parse input: ${error.message}`);
    }
  }
}