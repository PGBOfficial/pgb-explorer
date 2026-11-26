# Persian Gulf explorer — change scope

Upstream: user-supplied apps-master archive, version 0.171.2-12-x.

## New files
- packages/apps/public/brand/pgb-theme.css — shared presentation for Midnight and Pearl.
- packages/apps/public/brand/pgb-logo.png — unchanged supplied logo.
- packages/apps/public/pgb-config.js — public endpoint configuration.
- packages/apps/src/brand/{Header,Footer,Waiting,PageIntro}.tsx.
- packages/react-components/src/Pgb/{DataWave,Hero}.tsx.
- scripts/pgb-serve.cjs and START-EXPLORER.cmd — dependency-free local serving of prebuilt assets.

## Modified integration points
- Apps and Content: branded shell, route introductions and honest connection state.
- BeforeInit and Connecting: branded initial state and notification positioning.
- Menu: native routes retained, project link, keyboard/touch dropdown controls.
- ChainInfo: do not show placeholder best number before API readiness.
- initSettings: public endpoint config, local fallback, Midnight for new installations only.
- page-explorer/Main: custom hero/live metrics, original block and event components, expandable original summary.
- SummaryBox: stable class for shared styling.
- react-api/Api: browser extension application name changed to Persian Gulf Explorer.
- HTML/manifest/build titles: project identity, mobile viewport and branding assets.
- webpack.base: clean only generated build output on rebuild.

No changes to runtime metadata, RPC implementations, signing, transaction serialization,
account storage, chain specifications, dependency declarations or pallet APIs.
Additional branded copy is English. Existing upstream translations are retained.
