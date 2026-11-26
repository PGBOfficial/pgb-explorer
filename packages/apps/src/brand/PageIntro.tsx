import React from 'react';

const descriptions: Record<string, [string, string]> = {
  accounts: ['Your accounts. One clear view.', 'Manage your accounts, balances and transfers with the tools you already know.'],
  addresses: ['Your network of connections.', 'Keep the addresses you use close at hand.'],
  staking: ['Help secure the network.', 'Explore validators, nominations and staking activity.'],
  'staking-async': ['Help secure the network.', 'Manage staking with the connected runtime.'],
  assets: ['Assets, in perspective.', 'Discover and manage assets issued on this network.'],
  nfts: ['Unique by design.', 'Explore collections and their on-chain ownership.'],
  democracy: ['A voice in what comes next.', 'Review proposals, referendums and collective decisions.'],
  referenda: ['Shape the next chapter.', 'Follow on-chain referendums and participate in governance.'],
  council: ['Collective decisions. On-chain.', 'Explore council membership, motions and voting.'],
  treasury: ['Resources for the network.', 'Review the treasury and its on-chain proposals.'],
  bounties: ['Build what matters.', 'Follow bounties and work funded by the network.'],
  contracts: ['Ideas, made executable.', 'Deploy and interact with smart contracts supported by your runtime.'],
  extrinsics: ['Direct access to the chain.', 'Compose and submit calls with the original transaction and signing tools.'],
  chainstate: ['Read the state of the network.', 'Inspect pallet storage, constants and runtime state.'],
  rpc: ['A closer connection.', 'Query your node through its available RPC methods.'],
  js: ['Your on-chain workspace.', 'Explore the connected API with the JavaScript console.'],
  settings: ['Make it yours.', 'Configure your interface, network connection and account preferences.'],
  sudo: ['Privileged network operations.', 'Use the runtime’s existing administrative tools with care.'],
  explorer: ['Inside the network.', 'Inspect blocks, node health and network activity in detail.'],
  utilities: ['The tools behind the details.', 'Work with addresses, signatures and cryptographic utilities.']
};
export default function PageIntro ({ name, text, pathname }: { name: string; text: string; pathname: string }): React.ReactElement | null {
  if (name === 'explorer' && /^\/explorer\/?$/.test(pathname)) return null;
  const [title, description] = descriptions[name] || [text, 'Explore the connected network with the full suite of original Polkadot Apps tools.'];
  return <section className='pgb-page-intro'><div><span className='pgb-eyebrow'>PERSIAN GULF / {text.toUpperCase()}</span><h1>{title}</h1><p>{description}</p></div><div aria-hidden='true' className='pgb-page-motif'><i /><i /><i /><span>◇</span></div></section>;
}
