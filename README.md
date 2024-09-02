# 9mm-v3-contracts

### setup

```bash
npm i
npm run build
# finally, run any of the verification commands below
```

### verification
"SmartRouter": "0xa9444246d80d6E3496C9242395213B4f22226a59"
```bash
➜  9mm-contracts git:(main) ✗ npx hardhat --network pulsechain verify 0xa9444246d80d6E3496C9242395213B4f22226a59 --force 0x3a0fa7884dd93f3cd234bbe2a0958ef04b05e13b 0x00f37661fa1b2b8a530cfb7b6d5a5a6aed74177b 0xe50dbdc88e87a2c92984d794bcf3d1d76f619c68 0xcc05bf158202b4f461ede8843d76dcd7bbad07f2 0x0000000000000000000000000000000000000000 0x0000000000000000000000000000000000000000 0xa1077a294dde1b09bb078844df40758a5d0f9a27
Successfully submitted source code for contract
contracts/router/SmartRouter.sol:SmartRouter at 0xa9444246d80d6E3496C9242395213B4f22226a59
for verification on the block explorer. Waiting for verification result...

Successfully verified contract SmartRouter on the block explorer.
https://scan.pulsechain.com/#/address/0xa9444246d80d6E3496C9242395213B4f22226a59#code

The contract 0xa9444246d80d6E3496C9242395213B4f22226a59 has already been verified on Sourcify.
https://repo.sourcify.dev/contracts/partial_match/369/0xa9444246d80d6E3496C9242395213B4f22226a59/
```

"SmartRouterHelper": "0xb7ef0a4d0EC7DEE58a7762EfB707ed0a646E92A9"
```bash
➜  9mm-contracts git:(main) ✗ npx hardhat --network pulsechain verify 0xb7ef0a4d0EC7DEE58a7762EfB707ed0a646E92A9 --force --contract contracts/router/libraries/SmartRouterHelper.sol:SmartRouterHelper

Successfully verified contract SmartRouterHelper on Sourcify.
https://repo.sourcify.dev/contracts/partial_match/369/0xb7ef0a4d0EC7DEE58a7762EfB707ed0a646E92A9/
hardhat-verify found one or more errors during the verification process:

Etherscan:
The block explorer's API responded that the contract contracts/router/libraries/SmartRouterHelper.sol:SmartRouterHelper at 0xb7ef0a4d0EC7DEE58a7762EfB707ed0a646E92A9 is already verified.
This can happen if you used the '--force' flag. However, re-verification of contracts might not be supported
by the explorer (e.g., Etherscan), or the contract may have already been verified with a full match.
```
