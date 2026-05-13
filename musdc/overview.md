---
description: The productive form of USDC.
---

# Overview

mUSDC is a non-upgradeable ERC-4626 vault that accepts USDC deposits and issues mUSDC shares. Each mUSDC share is backed by USDC held in the vault, and the exchange rate is designed to increase over time as vault fees and integrated protocol revenue enter the vault.

In simple terms: mUSDC is USDC in a more productive default state.

***

## Why mUSDC Exists

A lot of DeFi liquidity sits idle while waiting to be used.

mUSDC is designed to make idle USDC more productive across DeFi products, partner integrations, and protocols that want a simple USDC-backed vault asset.

Instead of leaving USDC inactive, users can hold mUSDC and benefit as vault backing per share increases over time.

The first major integration for mUSDC is Based Loans, where idle lender USDC can be held productively while waiting to be matched into loans.

***

## How It Works

#### Mint

Users deposit USDC and receive mUSDC shares.

A 0.05% mint fee stays in the vault, increasing USDC backing per mUSDC share.

#### Hold

Backing per share can grow as vault fees and integrated protocol revenue accumulate.

No staking, claiming, or active management is required.

#### Redeem

Users burn mUSDC to receive USDC at the current exchange rate.

A 0.25% redeem fee stays in the vault for remaining holders.

***

## Key Mechanics

* mUSDC is backed by USDC held in the vault.
* The vault uses the ERC-4626 standard.
* Mint and redeem fees are immutable constants set at deployment.
* The vault is non-upgradeable.
* There are no emissions required for mUSDC yield.
* Backing per share is designed to increase as fees and integrated protocol revenue enter the vault.

***

## Fees

Mint USDC into mUSDC\
Fee: 0.05%\
The mint fee stays in the vault and increases USDC backing per mUSDC share.

Redeem mUSDC into USDC\
Fee: 0.25%\
The redeem fee stays in the vault for remaining holders.

***

## Liquidity

mUSDC/USDC liquidity is live on Hydrex.

Users can swap mUSDC directly or provide liquidity to the mUSDC/USDC pool to earn swap fees as demand grows across integrations.

***

## Risks & Notes

Smart contract risk applies.

Large mints can noticeably increase the exchange rate when vault TVL is small. Share count may look lower, but position value reflects the deposit minus the mint fee.

Redemptions happen at the current exchange rate. The redeem fee is charged against the USDC value being redeemed and remains in the vault for remaining holders.

Always confirm the official mUSDC contract address before interacting.
