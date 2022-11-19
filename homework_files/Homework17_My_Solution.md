1. Done.
2. Checking the block height using the command line can be done in Windows by command:
```
curl --url 127.0.0.1:8545 -X POST -H "Content-Type: application/json" -d "{\"jsonrpc\":\"2.0\",\"method\":\"eth_blockNumber\",\"params\":[],\"id\":1}"
```
it returns the current latest Ethereum block, and stops there.
3. Performed in the script.