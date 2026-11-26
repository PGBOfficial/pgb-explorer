import React, { useState } from 'react';
import { settings } from '@polkadot/ui-settings';
import Hero from '@polkadot/react-components/Pgb/Hero';

export default function Waiting ({ error }: { error?: string | null }): React.ReactElement {
  const [rpc, setRpc] = useState(settings.apiUrl);
  const [invalid, setInvalid] = useState('');
  function connect (event: React.FormEvent): void {
    event.preventDefault();
    try {
      const url = new URL(rpc.trim());
      if (!['ws:', 'wss:'].includes(url.protocol) || !url.hostname) throw new Error('Use a valid ws:// or wss:// address.');
      if (window.location.protocol === 'https:' && url.protocol === 'ws:' && !['localhost', '127.0.0.1'].includes(url.hostname)) throw new Error('This secure page requires a wss:// endpoint.');
      const next = new URL(window.location.href);
      next.searchParams.set('rpc', url.toString());
      window.location.assign(next.toString());
    } catch (e) { setInvalid((e as Error).message); }
  }
  return <div className='pgb-waiting'>
    <Hero />
    <div className='pgb-stat-grid pgb-placeholder-stats'>{['Latest block', 'Finalized block', 'Total issuance', 'Block interval'].map((label, i) => <div className='pgb-stat' key={label}><div className='pgb-stat-label'><span className='pgb-stat-symbol'>{['◇', '◎', '◈', '◷'][i]}</span>{label}</div><strong>—</strong><small>Awaiting live connection</small></div>)}</div>
    <section className='pgb-connect-panel'>
      <div className='pgb-connect-title'><span className='pgb-radar'>◎</span><div><h2>Connect to your network</h2><p>Live blocks and activity appear as soon as your node is connected.</p></div></div>
      <form onSubmit={connect}><label htmlFor='pgb-rpc'>WebSocket endpoint</label><div className='pgb-rpc-input'><input id='pgb-rpc' onChange={(e) => setRpc(e.target.value)} placeholder='wss://your-node.example' spellCheck={false} value={rpc} /><button type='submit'>Connect ↗</button></div></form>
      {(invalid || error) && <p className='pgb-field-error' role='alert'>{invalid || error}</p>}
      <p className='pgb-connection-note'>No sample balances or simulated transactions. Your network, directly from your node.</p>
    </section>
    <div className='pgb-waiting-tables'>{['Recent blocks', 'Recent events'].map((title) => <section className='pgb-empty-panel' key={title}><div className='pgb-panel-heading'><h2>{title}</h2><span>LIVE FEED</span></div><div className='pgb-empty-lines'>{[1, 2, 3].map((i) => <div key={i}><i /><span /><b /></div>)}</div><p>Waiting for network data</p></section>)}</div>
  </div>;
}
