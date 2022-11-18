# MainnetForkHardhat

- Creation of a mainnet fork via ganache-cli
- Running RPC commands to simulate ETH transfer from Vitalik's account.
- Homework 17 of Encode Club bootcamp by ETHDenver.

Steps:

1. Run Ganache-CLI:

```
npx ganache --fork https://mainnet.infura.io/v3/<YOUR_KEY> --unlock 0x1Db3439a222C519ab44bb1144fC28167b4Fa6EE6

```

2. Run the script:

```
npx hardhat --network ganache run scripts/deploy.ts

```
