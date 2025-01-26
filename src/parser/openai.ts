import { Configuration, OpenAIApi } from 'openai';

/**
 * The OpenAIParser class handles interactions with the OpenAI API.
 * It is responsible for sending natural language input to the API and extracting transaction instructions from the response.
 */
export class OpenAIParser {
  private openai: OpenAIApi;

  /**
   * Constructs a new instance of the OpenAIParser class.
   * @param openAIToken - The API token for accessing OpenAI services.
   */
  constructor(openAIToken: string) {
    const configuration = new Configuration({
      apiKey: openAIToken,
    });
    this.openai = new OpenAIApi(configuration);
  }

  /**
   * Processes the input string by sending it to the OpenAI API and extracting transaction instructions.
   * @param input - The natural language input provided by the user.
   * @returns A promise that resolves to the extracted transaction instructions.
   * @throws An error if the API request fails or if no instructions are extracted.
   */
  public async processInput(input: string): Promise<any> {
    try {
      // Log the input for debugging purposes
      console.log(`Sending input to OpenAI: ${input}`);

      // Send the input to the OpenAI API and retrieve the response
      const response = await this.openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Extract transaction instructions from the following input: ${input}`,
        max_tokens: 150,
      });

      // Extract transaction instructions from the response
      const instructionsText = response.data.choices[0].text?.trim();
      if (!instructionsText) {
        throw new Error('No instructions extracted from OpenAI response');
      }

      // Log the extracted instructions for debugging purposes
      console.log(`Extracted transaction instructions: ${instructionsText}`);

      // Parse the instructions into a structured format
      const instructions = this.parseInstructions(instructionsText);

      return instructions;
    } catch (error) {
      // Log the error for debugging purposes
      console.error(`Error processing input with OpenAI: ${error.message}`);
      throw new Error(`Failed to process input with OpenAI: ${error.message}`);
    }
  }

  /**
   * Parses the extracted instructions text into a structured format.
   * @param instructionsText - The raw instructions text extracted from the OpenAI response.
   * @returns A structured representation of the transaction instructions.
   */
  private parseInstructions(instructionsText: string): any {
    // Implement parsing logic to convert instructionsText into a structured format
    // This is a placeholder implementation and should be replaced with actual parsing logic
    return JSON.parse(instructionsText);
  }
}