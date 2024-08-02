LW3Punks
--------

### Overview

LW3Punks is an NFT minting application deployed on the Sepolia testnet. It allows users to mint unique LW3Punk NFTs in exchange for 0.01 sepETH. The project consists of two main components:

-   **foundry-app**: Contains the smart contracts for NFT minting and LW3Token management, built using the Foundry framework.
-   **next-app**: The frontend application built with Next.js and Rainbow Kit for interacting with the smart contracts and managing user wallets.

### Getting Started

**Prerequisites:**

-   Node.js and npm (or yarn) installed
-   Foundry installed
-   A Sepolia testnet Ethereum node (e.g., Alchemy, Infura)

**Clone the repository:**

Bash

```
git clone https://github.com/your-username/LW3Punks.git

```

Use code [with caution.](/faq#coding)

**Install dependencies:**

Bash

```
# In the foundry-app directory
forge install

# In the next-app directory
cd next-app
npm install

```

Use code [with caution.](/faq#coding)

**Configure environment variables:** Create a `.env.local` file in the `next-app` directory and add the following variable:

```
ALCHEMY_API_KEY=your_alchemy_api_key

```

**Smart Contract Address:** The LW3Punks smart contract is deployed at the following address on the Sepolia testnet:

```
0x14A688D63cDC6a7720980c28E3fD5Bb412b8bF48

```

You can verify the contract on Sepolia Etherscan.

**Run the frontend:**

Bash

```
# In the next-app directory
npm run dev

```

Use code [with caution.](/faq#coding)

### License

This project is licensed under the MIT License. See the LICENSE file for details.

### Contributing

Contributions are welcome! Please open an issue or pull request if you have any improvements or bug fixes.