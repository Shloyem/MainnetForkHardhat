import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const INFURA_API_KEY = process.env.INFURA_API_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545",
      chainId: 1337
    },
    hardhat: {
      forking: {
        url: "https://mainnet.infura.io/v3/" + INFURA_API_KEY,
        blockNumber: 16690099,
      }
    }
  }
};

export default config;
