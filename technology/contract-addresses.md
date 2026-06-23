---
description: Official smart contracts powering the Monstro ecosystem on Base.
---

# Contract Addresses

Monstro contracts are deployed on Base for efficiency, transparency, and public verification.\
\
This page lists the official contract addresses for $MONSTRO, staking, mUSDC, and related Monstro ecosystem contracts.\
Each address links to BaseScan where available.

***

{% hint style="warning" %}
Only use contract addresses published here or shared through official Monstro X / Discord announcements. Never rely on third-party listings, screenshots, DMs, or search results for contract addresses.
{% endhint %}

## **Core Contracts (Base Network)**

| Contract             | Address                                                                                                               | Notes                                                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **$MONSTRO Token**   | [0x1d3bE1CC80cA89DDbabe5b5C254AF63200e708f7](https://basescan.org/token/0x1d3bE1CC80cA89DDbabe5b5C254AF63200e708f7)   | Fixed-supply token with no minting, no taxes, and renounced ownership.                                        |
| **$MONSTRO Staking** | [0x99741758A3BCD7A95B80845E124C5C499DF4742b](https://basescan.org/address/0x99741758a3bcd7a95b80845e124c5c499df4742b) | Single-stake system with penalty decay, emissions logic, and auto-stake activation.                           |
| mUSDC Vault          | [0xfA68Ac5cA298aB4B96bCE6542ec74bB9516b0397](https://basescan.org/address/0xfa68ac5ca298ab4b96bce6542ec74bb9516b0397) | Non-upgradeable vault with immutable mint and redeem fees. mUSDC shares are backed by USDC held in the vault. |
| xMONSTRO             | [0xE187FCa3fF7Ba74B91A6376920E5B974631E4ffe](https://basescan.org/address/0xe187fca3ff7ba74b91a6376920e5b974631e4ffe) | Non-upgradeable, ownerless bonding-curve vault token backed by MONSTRO. 75% of each mint is burned; 25% backs redemptions. |

***

## **About These Contracts**

* Deployed on Base
* Verified on BaseScan where available
* No upgradeability proxies unless explicitly noted
* No privileged minting or hidden owner controls
* DAO-controlled parameters apply only where stated, such as staking configuration
* Treasury flows happen through public multisig wallets where applicable
