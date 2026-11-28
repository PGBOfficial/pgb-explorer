# PGB Explorer

**Official Blockchain Explorer for Persian Gulf Blockchain**

PGB Explorer is the official web interface for **Persian Gulf Blockchain Testnet (PGB)**, developed using [Polkadot.js Apps](https://github.com/polkadot-js/apps) with PGB branding, network configuration and user interface customizations.

It provides access to blockchain data, account management, transactions, digital assets, staking, governance and treasury operations supported by the connected runtime.

[فارسی](README-fa.md) · [Website](https://persiangulfchain.com) · [Live Explorer](https://explorer.persiangulfchain.com) · [GitHub](https://github.com/PGBOfficial) · [Issues](https://github.com/PGBOfficial/pgb-explorer/issues)

## Access PGB Explorer

### [Launch PGB Explorer](https://explorer.persiangulfchain.com)

Users can explore public blockchain data without installing a browser extension.

To manage accounts and sign transactions, users can install the official **PGB Signer** extension.

### [Download PGB Signer for Chrome](https://github.com/PGBOfficial/pgb-signer/releases/download/v0.64.1-pgb-testnet.2/pgb-signer-release-chrome.zip)

For installation instructions and account management documentation, visit the [PGB Signer repository](https://github.com/PGBOfficial/pgb-signer).

## Features

- Explore live blockchain blocks.
- View finalized blocks, extrinsics and events.
- View account balances and blockchain account information.
- Connect accounts through PGB Signer.
- Transfer native PGC tokens.
- View and manage supported digital assets.
- Access staking and nomination features.
- View validator information.
- Access supported governance operations.
- Explore treasury information and operations.
- Interact with additional features exposed by the connected runtime.
- Switch between Midnight and Pearl visual themes.
- Access the official PGB network through its public RPC endpoint.

Available operations depend on the connected runtime, account permissions and network configuration.

## PGB Testnet Configuration

| Setting | Value |
|---|---|
| Network | Persian Gulf Blockchain Testnet |
| RPC Endpoint | `wss://rpc.persiangulfchain.com` |
| Native Token | PGC |
| Decimals | 18 |
| SS58 Prefix | 42 |
| Genesis Hash | `0x723184e0d2628f7bd203c580101778cf0b3428736d617dd59699b29c14d1fb6a` |
| Explorer | https://explorer.persiangulfchain.com |
| Network Status | Testnet |

PGB is the default network for new browser profiles.

An explicit `?rpc=` parameter and previously saved endpoints retain their upstream precedence.

To update an existing network selection, select the official PGB endpoint or open:

[Connect directly to PGB Testnet](https://explorer.persiangulfchain.com/?rpc=wss://rpc.persiangulfchain.com#/explorer)

Do not clear account storage to change networks.

Runtime properties and available features are read directly from the connected blockchain. PGB Explorer does not modify the runtime or blockchain configuration.

## Getting Started

### 1. Install PGB Signer

Download the official Chrome extension:

[pgb-signer-release-chrome.zip](https://github.com/PGBOfficial/pgb-signer/releases/download/v0.64.1-pgb-testnet.2/pgb-signer-release-chrome.zip)

1. Extract the downloaded ZIP file to a permanent local directory.
2. Open Google Chrome.
3. Navigate to `chrome://extensions`.
4. Enable **Developer mode**.
5. Select **Load unpacked**.
6. Select the extracted directory containing `manifest.json`.
7. Confirm that the installed extension is named **PGB Signer**.

### 2. Create a Testnet Account

1. Open PGB Signer.
2. Select the option to create a new account.
3. Generate and securely store a new recovery phrase.
4. Select Persian Gulf Blockchain Testnet.
5. Enter an account name and a strong password.
6. Complete account creation.

Use a newly created testnet account. Never import recovery phrases associated with real funds or valuable mainnet assets.

### 3. Connect to PGB Explorer

1. Open the [official PGB Explorer](https://explorer.persiangulfchain.com).
2. Confirm that Persian Gulf Blockchain Testnet is selected.
3. Review the extension connection request.
4. Verify the requesting website origin.
5. Authorize access to the intended accounts.
6. Open the Accounts section and verify that your account is available.

### 4. Submit a Testnet Transaction

A funded testnet account is required for operations that incur transaction fees.

1. Select the intended operation in PGB Explorer.
2. Select your PGB Signer account.
3. Enter the required transaction information.
4. Review the network, destination, amount, estimated fee and any warnings.
5. Approve or reject the signing request in PGB Signer.
6. Check transaction inclusion, finalization and associated events.

A confirmed signature does not prove successful transaction execution.

PGB Signer manages account keys and signing requests. PGB Explorer manages network communication, transaction construction and broadcasting.

## Explorer Modules

| Module | Description |
|---|---|
| Explorer | Blockchain blocks, extrinsics and events |
| Accounts | Account information, balances and transfers |
| Assets | Supported digital assets and asset operations |
| Staking | Staking, validators and nominations |
| Governance | Supported network governance operations |
| Treasury | Treasury information and supported operations |
| Developer | Runtime metadata and supported developer tools |

Module availability depends on the connected runtime and may change following a runtime upgrade.

## Build from Source

### Requirements

- Node.js >=18.14
- Corepack
- Yarn 4.6.0

The pinned Yarn file and `yarn.lock` are included in the repository.

Use a Node.js 24 build environment for the provided CI configuration.

### Linux and macOS

```sh
corepack enable
ELECTRON_SKIP_BINARY_DOWNLOAD=1 yarn install --immutable
yarn build:images
yarn build:www
```

### Windows PowerShell

```powershell
corepack enable
$env:ELECTRON_SKIP_BINARY_DOWNLOAD='1'
yarn install --immutable
yarn build:images
yarn build:www
```

The `ELECTRON_SKIP_BINARY_DOWNLOAD` environment variable avoids an unnecessary desktop Electron download when preparing the web application.

Electron functionality and source code are retained.

The production build output is located at:

```text
packages/apps/build
```

### Automated Tests

```sh
yarn test
```

See [FINAL-TEST-REPORT.md](FINAL-TEST-REPORT.md) for recorded build results, automated tests and environment limitations.

A successful build does not prove successful signed on-chain transactions or complete functionality across all runtime modules.

## Local Development

Start the development environment:

```sh
yarn start
```

To preview the already-built web application:

```sh
node scripts/pgb-serve.cjs
```

Open:

```text
http://localhost:3000/#/explorer
```

The included preview server binds only to loopback and is intended for local development and testing.

It is not intended to serve as a public production server.

## Deployment

Serve the contents of:

```text
packages/apps/build
```

at the root of an HTTPS static host.

Deployment requirements:

- Use HTTPS for the web application.
- Use the official secure WSS endpoint.
- Preserve generated chunk filenames and subresource-integrity metadata.
- Avoid stale caching of `index.html`, `env-config.js` and `pgb-config.js`.
- Hashed static assets may be cached immutably.
- Hash-based application routes do not require a server-side router.
- Preserve the public default configuration in `packages/apps/public/pgb-config.js` for rebuilds.
- Never include credentials, private keys or other secrets in browser configuration.

## Design and User Interface

PGB Explorer incorporates the visual identity of Persian Gulf Blockchain.

The interface includes:

- Midnight dark theme.
- Pearl light theme.
- Official PGB logo.
- Animated data wave.
- PGB branding and official project links.
- Existing account identification and navigation features.

The upstream implementation for accounts, signing, RPC communication and runtime-dependent pages is retained.

Technical package names and dependency identities are preserved for compatibility.

## Security and Privacy

PGB Explorer is experimental Testnet software.

Use disposable testnet accounts and protect recovery phrases, private keys and encrypted backups.

On-chain blockchain data is public.

Browser-managed accounts and authorized extensions retain the upstream account storage and signing behavior.

Other network options, public-service links and optional integrations remain available. Always review the selected network, endpoint and destination.

### Important Security Notice

- Use testnet accounts only.
- Do not use real funds or valuable mainnet assets.
- Never disclose recovery phrases or private keys.
- Verify the website origin before authorizing extension access.
- Review transaction information before signing.
- Download PGB Signer only from official PGB sources.
- Never include sensitive information in public reports, issues or logs.

See [SECURITY-AUDIT.md](SECURITY-AUDIT.md) for documented security fixes, dependency findings and unresolved limitations.

Passing automated tests does not constitute independent security certification.

## Verification and Limitations

The repository provides source code, build instructions and documented test results.

Manual browser integration, live transaction verification and independent security review remain important requirements before production or mainnet use.

The current Testnet distribution must not be treated as a production security certification.

Additional technical information:

- [Final Test Report](FINAL-TEST-REPORT.md)
- [Security Audit](SECURITY-AUDIT.md)
- [PGB Changes](PGB-CHANGES.md)
- [Upstream README](UPSTREAM-README.md)

## Support and Feedback

Developers, validators and testnet participants are welcome to report installation problems, compatibility issues and general bugs.

[Report an Issue](https://github.com/PGBOfficial/pgb-explorer/issues)

Do not include passwords, private keys, recovery phrases or other sensitive information in public issue reports.

Potential security vulnerabilities should be responsibly coordinated with the project team before public disclosure.

## License and Attribution

PGB Explorer is a modified distribution of **Polkadot.js Apps**, based on version `0.171.2-12-x`.

The exact upstream Git commit was not available in the original source archive.

The software is distributed under the **Apache License 2.0**.

PGB Explorer is not an official release of the Polkadot.js team.

Original copyright headers and attribution are preserved.

See:

- [LICENSE](LICENSE)
- [NOTICE](NOTICE)
- [UPSTREAM-README.md](UPSTREAM-README.md)

Technical `@polkadot` package names and dependency identities are retained.

Original upstream publishing workflows are archived under `upstream-notices/workflows` and are not active.

The current CI configuration is intended for testing and building.

## Official PGB Resources

| Resource | Link |
|---|---|
| Website | https://persiangulfchain.com |
| Explorer | https://explorer.persiangulfchain.com |
| GitHub Organization | https://github.com/PGBOfficial |
| Network Repository | https://github.com/PGBOfficial/persian-gulf-blockchain |
| Documentation | https://github.com/PGBOfficial/PGB-Docs |
| PGB Signer | https://github.com/PGBOfficial/pgb-signer |
| Whitepaper | https://github.com/PGBOfficial/pgb-whitepaper |

## About Persian Gulf Blockchain

Persian Gulf Blockchain (PGB) is an independent Layer-1 blockchain project developed using the Polkadot SDK.

PGB Explorer provides a web interface for interacting with the network, exploring blockchain data and accessing supported on-chain operations.

The current distribution is part of the Persian Gulf Blockchain Testnet development and evaluation process.

---

**Persian Gulf Blockchain | PGB**

Website: https://persiangulfchain.com

Explorer: https://explorer.persiangulfchain.com

GitHub: https://github.com/PGBOfficial

**Testnet Release — Not for Production or Mainnet Assets.**
