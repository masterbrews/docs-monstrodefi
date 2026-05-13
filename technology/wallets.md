---
description: Public DAO and ecosystem wallets for full on-chain transparency.
---

# Wallets

The Monstro ecosystem uses public, verifiable wallets for all treasury operations, liquidity deployment, emissions management, and legacy product maintenance.\
\
This page lists all official wallets used by the DAO and Labs, allowing anyone to independently verify every transaction.

***

## **DAO Multisig Wallets (Base Network)**

Each wallet is governed by the same Monstro DAO Council using a 5-of-7 multisig configuration.

<table><thead><tr><th width="195">Wallet</th><th width="317">Address</th><th>Notes</th></tr></thead><tbody><tr><td><strong>Treasury</strong></td><td><a href="https://basescan.org/address/0x4713b3ab36C9759043694757E6Cb8123915a8dd0">0x4713b3ab36C9759043694757E6Cb8123915a8dd0</a></td><td>Primary DAO treasury. Receives protocol revenue and funds operations approved by governance.</td></tr><tr><td><strong>Contract Owner</strong></td><td><a href="https://basescan.org/address/0xa673566A818e3525E57292b22311AD0be114085C">0xa673566A818e3525E57292b22311AD0be114085C</a></td><td>Holds administrative ownership of protocol contracts, including parameter changes and emergency actions.</td></tr><tr><td><strong>Stake</strong></td><td><a href="https://basescan.org/address/0xA6Cd9800EfF0994B3f64c330de4E55925d5404DC">0xA6Cd9800EfF0994B3f64c330de4E55925d5404DC</a></td><td>Holds and manages the DAO’s staked MONSTRO position to align governance incentives with participants.</td></tr><tr><td><strong>POL</strong></td><td><a href="https://basescan.org/address/0xCb7c195De077B9CADBC5c086Ba7932149B9f4391">0xCb7c195De077B9CADBC5c086Ba7932149B9f4391</a></td><td>Reserves tokens for LP incentives, farm rewards, and future ecosystem programs.</td></tr><tr><td><strong>Emissions Reserve</strong></td><td><a href="https://basescan.org/address/0xce45B2ae92c9dc7E39EbB9d9dB6920897A6F6b4a">0xce45B2ae92c9dc7E39EbB9d9dB6920897A6F6b4a</a></td><td>Manages DAO-owned liquidity positions and collects protocol liquidity fees.</td></tr></tbody></table>

***

## **Operational Wallets (DAO-Authorized)**

Operational wallets authorized by the Monstro DAO for protocol deployment and day-to-day execution. These wallets do not custody treasury funds and operate under policies approved by the DAO.

<table><thead><tr><th width="122">Wallet</th><th width="436">Address</th><th>Purpose</th></tr></thead><tbody><tr><td><strong>Deployer</strong></td><td><a href="https://basescan.org/address/0xBd395a6b355957AA1C25Fd12c561CDB2E4C836b6">0xBd395a6b355957AA1C25Fd12c561CDB2E4C836b6</a></td><td>One-time contract deployment and initial configuration</td></tr><tr><td><strong>Operator</strong></td><td><a href="https://basescan.org/address/0x238ddfdb0927b8831e9782318393fe50f3167157">0x238ddfdb0927b8831e9782318393fe50f3167157</a></td><td>Day-to-day execution of DAO-approved operational actions</td></tr></tbody></table>

> These wallets are not treasury wallets.\
> They exist solely to perform authorized operational actions such as contract deployment and execution on behalf of the DAO.

***

## **Moonbagz Treasury Wallets (Multi-Chain)**

Moonbagz assets are DAO-owned and stored across multiple chains. These will be liquidated strategically during favorable market conditions.

<table><thead><tr><th width="155">Chain</th><th>Address</th></tr></thead><tbody><tr><td><strong>EVM</strong></td><td><a href="https://debank.com/profile/0xe25A3032b0D895c50cdBABFD5E859b45A55b14c4">0x5197F5F2C1b21F72C75eddEA6ce6b799e0a5Cb02</a> (Multisig)</td></tr><tr><td><strong>Solana</strong></td><td><a href="https://solscan.io/account/8CV2rBmPnq5ivy4HG8VmjfK8ocyGLuYLYxkijBizddZy">8CV2rBmPnq5ivy4HG8VmjfK8ocyGLuYLYxkijBizddZy</a></td></tr><tr><td><strong>TON</strong></td><td><a href="https://tonviewer.com/UQBOVjxQAE3pjOsUOvZmvI7Apvzxzd7s3qKiADPNToBouiCp">UQBOVjxQAE3pjOsUOvZmvI7Apvzxzd7s3qKiADPNToBouiCp</a></td></tr><tr><td><strong>Bitcoin</strong></td><td><a href="https://blockchair.com/bitcoin/address/bc1q084tdm0kr480jznatesa6nqdkskvmhmyr47qf5">bc1q084tdm0kr480jznatesa6nqdkskvmhmyr47qf5</a></td></tr></tbody></table>

***

## **Final Notes**

* Only trust wallet addresses listed here or published through official Monstro channels.
* The deployer wallet (`0xBd39…836b6`) will be used exclusively for contract deployments and should **never** receive or send treasury funds.
