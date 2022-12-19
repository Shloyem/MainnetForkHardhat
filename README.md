# MainnetForkHardhat

- Creation of a mainnet fork via ganache-cli
- Running RPC commands to simulate ETH transfer from Vitalik's account.
- Homework 17 of Encode Club bootcamp by ETHDenver.

Steps:

1. Using Ganache:
    - Run Ganache-CLI:
      ```
      npx ganache --fork https://mainnet.infura.io/v3/<YOUR_KEY>@16690099 --unlock 0x1Db3439a222C519ab44bb1144fC28167b4Fa6EE6
      ```
      Where 16690099 is the block number for #2 example screenshot. It's optional and can be removed.

    - Run the script with ganache network option:
      ```
      npx hardhat --network ganache run scripts/deploy.ts
      ```

2. Or using Infura Mainnet Fork: 
    - Run the script with hardhat (forking) network option:
      ```
      npx hardhat --network hardhat run scripts/deploy.ts
      ```

Recommended output:
![Recommended output](homework_files/RecommendedOutput.JPG)