# PGB Explorer

A branded distribution of [Polkadot.js Apps](https://github.com/polkadot-js/apps) for **Persian Gulf Blockchain Testnet**. Explore live blocks, extrinsics and events; manage accounts, view assets, staking, governance and treasury features exposed by the connected runtime.

[فارسی](README-fa.md) · [Website](https://persiangulfchain.com) · [Live explorer](https://explorer.persiangulfchain.com) · [GitHub](https://github.com/PGBOfficial) · [Issues](https://github.com/PGBOfficial/pgb-explorer/issues)

## Network

| Setting | Value |
|---|---|
| Name | Persian Gulf Blockchain Testnet |
| RPC | `wss://rpc.persiangulfchain.com` |
| Token | PGC |
| Decimals | 18 |
| SS58 | 42 |

PGB is the fresh-profile default. An explicit `?rpc=` parameter and an existing saved endpoint retain upstream precedence; to update an old selection, select the official endpoint or open `/?rpc=wss://rpc.persiangulfchain.com#/explorer`. Do not clear account storage to change networks. Runtime properties and capabilities are read from the connected chain; no runtime or chain configuration is modified by this project.

## Requirements and source build

Node.js >=18.14, Corepack, Yarn 4.6.0 (the pinned Yarn file and yarn.lock are included). Use a current Node 24 build environment for the provided CI.

```sh
corepack enable
ELECTRON_SKIP_BINARY_DOWNLOAD=1 yarn install --immutable
yarn build:images
yarn build:www
```

`ELECTRON_SKIP_BINARY_DOWNLOAD=1` avoids an unnecessary desktop Electron download when preparing the web application; Electron functionality/source is retained. On Windows PowerShell, set `$env:ELECTRON_SKIP_BINARY_DOWNLOAD='1'` before `yarn install --immutable`.

Production output: `packages/apps/build`. Run existing automated tests with `yarn test`. Build/test results and exact limitations of this delivery are in FINAL-TEST-REPORT.md. A successful build does not prove a signed on-chain transaction or all runtime modules.

## Local development and production preview

```sh
yarn start
```

For the already-built web output:

```sh
node scripts/pgb-serve.cjs
```

Open `http://localhost:3000/#/explorer`. The included server binds only to loopback and is for local preview, not a public production server. The separate final Build ZIP contains ready-to-host static files; the Source ZIP contains source and requires dependency installation/build.

## Deployment

Serve the contents of `packages/apps/build` at the root of an HTTPS static host. Hash-based application routes do not require a server-side router. Keep the generated chunk filenames and subresource-integrity metadata intact. Serve `index.html`, `env-config.js` and `pgb-config.js` without stale caching; hashed assets may be cached immutably. Keep the public default in `packages/apps/public/pgb-config.js` for rebuilds. Never put credentials or private keys in browser configuration. Use HTTPS and the official WSS endpoint. No server deployment or GitHub push is performed by this handoff.

## Design and supported operations

The existing Midnight/Pearl palettes, layout, PGB logo and animated data wave are retained. The footer links now identify PGBOfficial and the official website. The upstream implementation for accounts, signing, RPC and runtime-gated pages is retained. Availability of Assets, Staking, Governance and Treasury depends on runtime pallets and may change after a chain upgrade.

PGB Signer uses the standard injected-extension API. Use the approved extension, authorize the intended explorer origin, and review the network, destination, amount and estimated fee before signing. A confirmed signature is not proof of successful execution; check finalization and events. No user funds or real keys are needed to inspect this source.

## Security and privacy

This is experimental Testnet software. Use disposable test accounts, protect recovery phrases and encrypted backups, and never send secrets in issues or logs. On-chain data is public. Browser-local accounts and authorized extensions use the upstream storage/signing behavior. Other network options, public-service links and optional integrations remain available; review the destination and endpoint you select. See SECURITY-AUDIT.md for confirmed fixes, dependency findings and unresolved limitations. Passing tests is not independent security certification.

## License and attribution

Apache License 2.0: see LICENSE, NOTICE, original source headers and UPSTREAM-README.md. Based on user-supplied Polkadot.js Apps version `0.171.2-12-x`; the input archive does not include the upstream Git commit. This is a modified PGB distribution, not an official release of the Polkadot.js team. Technical @polkadot package names and dependency identities are preserved. Original publishing workflows are archived under upstream-notices/workflows and are not active; the current CI only tests/builds.

Target repository: https://github.com/PGBOfficial/pgb-explorer. Nothing is automatically published. Review the audit and test reports before approving publication.
