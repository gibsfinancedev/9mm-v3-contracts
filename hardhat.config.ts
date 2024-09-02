import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import '@nomicfoundation/hardhat-verify'

const chains = {
  369: {
    hardforkHistory: {
      merge: 17_233_000,
      shanghai: 17_233_001,
    },
  },
  943: {
    hardforkHistory: {
      merge: 15_537_394,
      shanghai: 15_537_395,
    },
  },
  11155111: {
    hardforkHistory: {
      merge: 1_000_000,
      shanghai: 1_000_001,
    },
  },
}

const hardhatConfigs = {
  pulsechain: {
    chainId: 369,
    forking: {
      url: 'https://rpc-pulsechain.g4mm4.io', // same with rpc.pulsechain.com
      blockNumber: 19_969_002,
    },
  },
  pulsechainV4: {
    chainId: 943,
    forking: {
      url: 'https://rpc-testnet-pulsechain.g4mm4.io', // same with rpc.pulsechain.com
      blockNumber: 19_969_002,
    },
  },
} as Record<string, {
  chainId: number;
  forking: {
    url: string;
  }
}>

const config: HardhatUserConfig = {
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10,
      },
    },
  },
  networks: {
    pulsechain: {
      url: hardhatConfigs.pulsechain.forking.url,
    },
  },
  sourcify: {
    enabled: true,
  },
  etherscan: {
    enabled: true,
    customChains: [{
      network: 'pulsechain',
      chainId: 369,
      urls: {
        apiURL: 'https://api.scan.pulsechain.com/api',
        browserURL: 'https://scan.pulsechain.com/#',
      },
    }, {
      network: 'pulsechainV4',
      chainId: 943,
      urls: {
        apiURL: 'https://api.scan.v4.testnet.pulsechain.com/api',
        browserURL: 'https://scan.v4.testnet.pulsechain.com/#',
      },
    }],
    apiKey: {
      pulsechainV4: 'abc',
      pulsechain: 'abc',
    },
  },
};

export default config;
