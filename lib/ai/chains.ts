export type Chain = {
  id: string;
  name: string;
  description: string;
  chainId: string;
};

export const chains: Chain[] = [
  // Ethereum
  {
    id: "ethereum-mainnet",
    name: "Ethereum Mainnet",
    description: "Mainnet (1)",
    chainId: "0x1",
  },
  {
    id: "ethereum-sepolia",
    name: "Ethereum Sepolia",
    description: "Testnet (11155111)",
    chainId: "0xaa36a7",
  },
  {
    id: "ethereum-holesky",
    name: "Ethereum Holesky",
    description: "Testnet (17000)",
    chainId: "0x4268",
  },

  // Polygon
  {
    id: "polygon-mainnet",
    name: "Polygon Mainnet",
    description: "Mainnet (137)",
    chainId: "0x89",
  },
  {
    id: "polygon-amoy",
    name: "Polygon Amoy",
    description: "Testnet (80002)",
    chainId: "0x13882",
  },

  // BSC
  {
    id: "bsc-mainnet",
    name: "Binance Smart Chain Mainnet",
    description: "Mainnet (56)",
    chainId: "0x38",
  },
  {
    id: "bsc-testnet",
    name: "Binance Smart Chain Testnet",
    description: "Testnet (97)",
    chainId: "0x61",
  },

  // Arbitrum
  {
    id: "arbitrum-one",
    name: "Arbitrum",
    description: "Mainnet (42161)",
    chainId: "0xa4b1",
  },
  {
    id: "arbitrum-sepolia",
    name: "Arbitrum Sepolia",
    description: "Testnet (421614)",
    chainId: "0x66eee",
  },

  // Base
  {
    id: "base-mainnet",
    name: "Base",
    description: "Mainnet (8453)",
    chainId: "0x2105",
  },
  {
    id: "base-sepolia",
    name: "Base Sepolia",
    description: "Testnet (84532)",
    chainId: "0x14a34",
  },

  // Optimism
  {
    id: "optimism-mainnet",
    name: "Optimism",
    description: "Mainnet (10)",
    chainId: "0xa",
  },
  {
    id: "optimism-sepolia",
    name: "Optimism Sepolia",
    description: "Testnet (11155420)",
    chainId: "0xaa37dc",
  },

  // Linea
  {
    id: "linea-mainnet",
    name: "Linea",
    description: "Mainnet (59144)",
    chainId: "0xe708",
  },
  {
    id: "linea-sepolia",
    name: "Linea Sepolia",
    description: "Testnet (59141)",
    chainId: "0xe705",
  },

  // Avalanche
  {
    id: "avalanche-c",
    name: "Avalanche",
    description: "Mainnet (43114)",
    chainId: "0xa86a",
  },

  // Fantom
  {
    id: "fantom-mainnet",
    name: "Fantom Mainnet",
    description: "Mainnet (250)",
    chainId: "0xfa",
  },
  {
    id: "fantom-testnet",
    name: "Fantom Testnet",
    description: "Testnet (4002)",
    chainId: "0xfa2",
  },

  // Cronos
  {
    id: "cronos-mainnet",
    name: "Cronos Mainnet",
    description: "Mainnet (25)",
    chainId: "0x19",
  },

  // Gnosis
  {
    id: "gnosis",
    name: "Gnosis",
    description: "Mainnet (100)",
    chainId: "0x64",
  },
  {
    id: "gnosis-chiado",
    name: "Gnosis Chiado",
    description: "Testnet (10200)",
    chainId: "0x27d8",
  },

  // Chiliz
  {
    id: "chiliz-mainnet",
    name: "Chiliz Mainnet",
    description: "Mainnet (88888)",
    chainId: "0x15b38",
  },
  {
    id: "chiliz-testnet",
    name: "Chiliz Testnet",
    description: "Testnet (88882)",
    chainId: "0x15b32",
  },

  // Moonbeam family
  {
    id: "moonbeam",
    name: "Moonbeam",
    description: "Mainnet (1284)",
    chainId: "0x504",
  },
  {
    id: "moonriver",
    name: "Moonriver",
    description: "Testnet (1285)",
    chainId: "0x505",
  },
  {
    id: "moonbase",
    name: "Moonbase",
    description: "Testnet (1287)",
    chainId: "0x507",
  },

  // Blast
  {
    id: "blast",
    name: "Blast",
    description: "Mainnet (81457)",
    chainId: "0x13e31",
  },
  {
    id: "blast-sepolia",
    name: "Blast Sepolia",
    description: "Testnet (168587773)",
    chainId: "0xa0c71fd",
  },

  // zkSync
  {
    id: "zksync",
    name: "zkSync",
    description: "Mainnet (324)",
    chainId: "0x144",
  },
  {
    id: "zksync-sepolia",
    name: "zkSync Sepolia",
    description: "Testnet (300)",
    chainId: "0x12c",
  },

  // Mantle
  {
    id: "mantle",
    name: "Mantle",
    description: "Mainnet (5000)",
    chainId: "0x1388",
  },
  {
    id: "mantle-sepolia",
    name: "Mantle Sepolia",
    description: "Testnet (5003)",
    chainId: "0x138b",
  },

  // opBNB
  { id: "opbnb", name: "opBNB", description: "Mainnet (204)", chainId: "0xcc" },

  // Polygon zkEVM
  {
    id: "polygon-zkevm",
    name: "Polygon zkEVM",
    description: "Mainnet (1101)",
    chainId: "0x44d",
  },
  {
    id: "polygon-zkevm-cardona",
    name: "Polygon zkEVM Cardona",
    description: "Testnet (2442)",
    chainId: "0x98a",
  },

  // ZetaChain
  {
    id: "zetachain",
    name: "Zetachain",
    description: "Mainnet (7000)",
    chainId: "0x1b58",
  },
  {
    id: "zetachain-testnet",
    name: "Zetachain Testnet",
    description: "Testnet (7001)",
    chainId: "0x1b59",
  },

  // Flow (EVM)
  { id: "flow", name: "Flow", description: "Mainnet (747)", chainId: "0x2eb" },
  {
    id: "flow-testnet",
    name: "Flow Testnet",
    description: "Testnet (545)",
    chainId: "0x221",
  },

  // Ronin
  {
    id: "ronin",
    name: "Ronin",
    description: "Mainnet (2020)",
    chainId: "0x7e4",
  },
  {
    id: "ronin-saigon",
    name: "Ronin Saigon Testnet",
    description: "Testnet (2021)",
    chainId: "0x7e5",
  },

  // Lisk
  { id: "lisk", name: "Lisk", description: "Mainnet (1135)", chainId: "0x46f" },
  {
    id: "lisk-sepolia",
    name: "Lisk Sepolia Testnet",
    description: "Testnet (4202)",
    chainId: "0x106a",
  },

  // Pulsechain
  {
    id: "pulsechain",
    name: "Pulsechain",
    description: "Mainnet (369)",
    chainId: "0x171",
  },

  // HyperEVM
  {
    id: "hyperevm",
    name: "HyperEVM",
    description: "Mainnet (999)",
    chainId: "0x3e7",
  },

  // Sei (EVM)
  { id: "sei", name: "Sei", description: "Mainnet (1329)", chainId: "0x531" },
];

export const defaultChain = chains[0]; // Ethereum Mainnet
