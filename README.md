# Enora Library

![Enora](img.jpg)

The Enora library is an advanced interface designed for both users and AI agents to effortlessly convert natural language instructions into executable transactions on the Solana blockchain. Utilizing the OpenAI API, the library efficiently parses input and maps it to a robust set of transaction instructions, enabling seamless execution of blockchain operations. With its intuitive design, Enora facilitates diverse interactions, such as transferring SOL or managing tokens, simplifying these processes for both developers and AI systems. Its modular and scalable structure makes it an ideal tool for enhancing Solana-based transaction workflows, providing a user-friendly solution that bridges the gap between complex blockchain technology and accessible command execution.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Modules Overview](#modules-overview)
- [Security Considerations](#security-considerations)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Enora library is crafted to simplify complex blockchain interactions by translating natural language commands into actionable blockchain transactions. It is particularly tailored for the Solana blockchain, known for its high throughput and low transaction costs, making it an ideal platform for decentralized applications. The library's modular architecture allows for seamless integration and extension, enabling developers to add new functionalities as needed.

## Features

- **Natural Language Processing**: Converts user-friendly language into precise Solana transactions, removing the need for users to understand complex blockchain protocols.
- **OpenAI Integration**: Utilizes the OpenAI API to parse and interpret user commands, ensuring accurate transaction mapping.
- **Comprehensive Transaction Support**: Facilitates a wide array of Solana operations, including but not limited to system transactions, token management, staking, NFT operations, governance, lending, and more.
- **Security-Focused**: Incorporates robust security measures for handling sensitive information such as private keys, ensuring safe transaction execution.
- **Modular and Scalable**: Designed with a modular architecture, allowing for easy expansion and customization to accommodate additional transaction types and blockchain interactions.

## Technology Stack

The Enora library is built using a modern technology stack that ensures performance, scalability, and security:

- **TypeScript**: Provides static typing and modern JavaScript features, enhancing code quality and maintainability.
- **Node.js**: Serves as the runtime environment, offering a scalable and efficient platform for executing JavaScript code.
- **OpenAI API**: Powers the natural language processing capabilities, enabling the library to understand and process user commands.
- **Solana Web3.js**: Facilitates interaction with the Solana blockchain, providing the necessary tools to construct and send transactions.

## Installation

To install the Enora library, ensure you have Node.js and npm installed on your system. Then, execute the following command:

```bash
npm install enora-library
```

## Usage

The Enora library is designed to be user-friendly and intuitive. Below is a basic example demonstrating how to utilize the library to execute a transaction on the Solana blockchain:

```typescript
import { Enora } from 'enora-library';

const enora = new Enora({
  openAIToken: 'your-openai-token',
  solanaPrivateKey: 'your-solana-private-key'
});

const transactionFunction = enora.generate('Send 1 SOL to address XYZ');
transactionFunction().then(result => {
  console.log('Transaction successful:', result);
}).catch(error => {
  console.error('Transaction failed:', error);
});
```

## Project Structure

```
enora/
│
├── src/
│   ├── index.ts                    # Main entry point of the library and Enora class
│   ├── parser/
│   │   ├── index.ts                # Main parser logic for processing input strings
│   │   ├── openai.ts               # Handles interaction with the OpenAI API
│   │   └── mappings.ts             # Maps parsed data to specific instructions
│   ├── instructions/
│   │   ├── system.ts               # System account instructions (e.g., sending SOL)
│   │   ├── token.ts                # Token-related instructions
│   │   ├── staking.ts              # Staking-related instructions
│   │   ├── nft.ts                  # NFT-related instructions
│   │   ├── governance.ts           # Governance-related instructions
│   │   ├── lending.ts              # Lending and borrowing instructions
│   │   ├── raydium.ts              # Raydium-specific transactions
│   │   └── pumpfun.ts              # Pumpfun-specific transactions
│   ├── utils/
│   │   ├── security.ts             # Utilities for handling private keys and security
│   │   └── helper.ts               # General utility functions
│
├── package.json
├── tsconfig.json
├── .gitignore
├── .npmignore                      # Specifies files/folders to exclude from the npm package
└── README.md                       # Project documentation
```

## Modules Overview

- **Parser Module**: This module is responsible for processing user input and interacting with the OpenAI API. It includes:
  - `index.ts`: Core logic for parsing input strings.
  - `openai.ts`: Manages communication with the OpenAI API.
  - `mappings.ts`: Maps parsed data to specific Solana instructions.

- **Instructions Module**: Contains logic for constructing various types of Solana transactions. Key files include:
  - `system.ts`: Handles system-level transactions, such as sending SOL.
  - `token.ts`: Manages token-related operations.
  - `staking.ts`: Facilitates staking operations.
  - `nft.ts`: Supports NFT-related transactions.
  - `governance.ts`: Manages governance-related actions.
  - `lending.ts`: Handles lending and borrowing transactions.
  - `raydium.ts` and `pumpfun.ts`: Specific to Raydium and Pumpfun transactions.

- **Utils Module**: Provides essential utility functions, including:
  - `security.ts`: Ensures secure handling of private keys and transaction signing.
  - `helper.ts`: Offers general-purpose utility functions to support the library's operations.

## Security Considerations

Security is a paramount concern when dealing with blockchain transactions. The Enora library incorporates several measures to protect sensitive information:

- **Private Key Management**: The library includes utilities for securely handling private keys, ensuring they are never exposed or mishandled.
- **Environment Variables**: It is recommended to use environment variables or secure vaults to manage sensitive information such as API keys and private keys.
- **Transaction Signing**: All transactions are signed securely before being submitted to the Solana blockchain, preventing unauthorized access or manipulation.

## Contributing

We welcome contributions to the Enora library. To contribute, please follow these steps:

1. Fork the repository and create a new branch for your feature or bugfix.
2. Write clear, concise commit messages and include tests for any new functionality.
3. Ensure your code adheres to the project's coding standards and passes all tests.
4. Submit a pull request with a detailed description of your changes, including any relevant issue numbers.

## License

The Enora library is licensed under the MIT License. For more details, please refer to the LICENSE file included in the repository.