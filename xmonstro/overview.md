---
description: The deflationary, vault-backed form of MONSTRO.
---

# Overview

xMONSTRO is a non-upgradeable bonding-curve vault token backed by MONSTRO. Each xMONSTRO is backed by MONSTRO held in a shared vault, and the backing per token is designed to increase over time as redemption fees and scheduled DAO emissions add MONSTRO to the vault.

In simple terms: xMONSTRO turns MONSTRO into a deflationary, vault-backed asset with a redemption floor that is built to rise.

***

## Why xMONSTRO Exists

Every xMONSTRO minted permanently burns MONSTRO, thinning the circulating supply, while building a shared vault that backs redemptions.

The goal is twofold: remove MONSTRO from the market through real, on-chain burns, and give holders a vault-backed floor that climbs over time as the DAO funds the vault and as activity accumulates fees.

***

## How It Works

#### Mint

Pay the current curve price in MONSTRO. The price starts at 10,000 MONSTRO and rises by 1,000 with every xMONSTRO minted.

75% of the cost is permanently burned through MONSTRO's burn function. The remaining 25% enters the vault as backing.

#### Hold

Backing per token can grow as scheduled DAO emissions add MONSTRO to the vault, and as redemption fees from other holders stay behind.

No staking, claiming, or active management is required.

#### Redeem

Burn xMONSTRO to receive your pro-rata share of the vault, minus a 10% fee that stays in the vault for remaining holders.

The final holder pays no redeem fee and receives the full remaining vault.

***

## Key Mechanics

* xMONSTRO is backed by MONSTRO held live in the vault.
* Mint price rises by 1,000 MONSTRO per token along a fixed bonding curve.
* Every mint burns 75% of its cost and vaults the remaining 25%.
* Redemptions pay the pro-rata vault share, with a 10% fee retained for remaining holders.
* xMONSTRO has 0 decimals and is minted and redeemed in whole units.
* Minting and redeeming support batches of up to 100 in a single transaction.
* The contract is non-upgradeable and fully permissionless: no owner, no admin, no pause.

***

## The Burn, and What Backs Redemptions

This is the most important thing to understand before minting.

Most of what you pay to mint is burned, not stored. Only the 25% vault portion, plus DAO emissions and retained redemption fees, backs redemptions. So the redemption value per token is intentionally lower than the average mint price.

That is the trade-off by design. Minting is primarily a deflationary act that removes MONSTRO from supply forever. In return, the redemption floor is built to rise over time as DAO emissions and fees accumulate in the vault, and as redemptions reduce supply. xMONSTRO rewards holding, not immediate exit.

***

## The Redemption Floor

The floor is the MONSTRO you receive per xMONSTRO when redeeming, equal to 90% of the vault balance divided by supply.

It is designed to move in one direction. Every mint adds backing, every redemption leaves its 10% fee behind for remaining holders, and the DAO injects MONSTRO into the vault on a recurring schedule. Each of these lifts the floor for everyone still holding.

***

## Fees

Mint MONSTRO into xMONSTRO\
Burn: 75% of the mint cost is permanently burned.\
Vault: 25% of the mint cost stays in the vault as backing.

Redeem xMONSTRO into MONSTRO\
Fee: 10%\
The redeem fee stays in the vault for remaining holders. The final holder pays no fee.

***

## Risks & Notes

Smart contract risk applies.

Mint price rises with supply by design, so later mints cost more MONSTRO than earlier ones. Because 75% of every mint is burned, the redemption value per token starts well below the average mint price and is intended to grow over time, not to return your mint cost immediately.

Redemptions happen at the current vault rate. The 10% redeem fee is charged against the MONSTRO being redeemed and remains in the vault for remaining holders.

Always confirm the official xMONSTRO contract address before interacting.
