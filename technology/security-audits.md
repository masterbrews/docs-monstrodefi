---
description: Independent verification for the Monstro ecosystem.
---

# Security Audits

Security is a core pillar of Monstro. High-impact contracts are designed with simplicity, public verification, and minimal trusted assumptions wherever possible.

This page lists third-party audit reports for contracts across the Monstro ecosystem, including $MONSTRO, staking, mUSDC, and future product integrations.

Contracts that involve token custody, emissions, treasury flows, or vault accounting are prioritized for independent review before public release whenever possible.

***

## **Audit Reports**

<table><thead><tr><th>Contract</th><th width="150">Auditor</th><th width="135">Status</th><th>Notes</th></tr></thead><tbody><tr><td><strong>$MONSTRO Token (ERC-20)</strong></td><td><a href="https://hashlock.com/audits/monstro">Hashlock</a></td><td>Completed</td><td>Fixed-supply token with no minting, no taxes, and renounced ownership.</td></tr><tr><td><strong>$MONSTRO Staking Contract</strong></td><td><a href="https://hashlock.com/audits/monstro">Hashlock</a></td><td>Completed</td><td>Single-stake system, penalty decay, emissions logic, auto-stake activation.</td></tr><tr><td><strong>mUSDC Vault</strong></td><td><a href="https://hashlock.com/audits/monstro">Hashlock</a></td><td>Completed</td><td>Non-upgradeable ERC-4626 USDC vault with immutable mint/redeem fees. mUSDC shares are backed by USDC held in the vault.</td></tr></tbody></table>

Audit reports will be published here immediately upon completion.

***

## **Our Security Approach**

* **Simple, immutable smart contracts**\
  No proxies, upgradeability, or privileged minting functions.
* **DAO-controlled parameters only**\
  Staking has adjustable settings (penalty splits, tiers, emissions rate) but **no user fund custody or admin withdrawal rights**.
* **Transparent public wallets and multisigs**\
  All treasury flows are publicly trackable.
* **Conservative contract design**\
  Minimal surface area, no unnecessary complexity, no opaque logic.
* **Independent audits + continuous internal review**\
  All future high-impact contracts will be externally audited.\
  Labs also performs thorough internal analysis during development.
