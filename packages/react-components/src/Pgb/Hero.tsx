import React, { useState } from 'react';

import DataWave from './DataWave.js';

interface Props { connected?: boolean; chain?: string; }

export default function Hero ({ connected = false, chain }: Props): React.ReactElement {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  function search (event: React.FormEvent): void {
    event.preventDefault();
    const query = value.trim();
    if (!/^\d+$/.test(query) && !/^0x[0-9a-fA-F]{64}$/.test(query)) {
      setError('Enter a block number or a 32-byte block hash.');
      return;
    }
    setError('');
    window.location.hash = `/explorer/query/${query}`;
  }

  return <section className='pgb-hero' aria-label='Persian Gulf explorer'>
    <div className='pgb-hero-art'><DataWave /><div className='pgb-flow-caption'><span /> A NETWORK IN MOTION</div></div>
    <div className='pgb-hero-copy'>
      <div className='pgb-eyebrow'><span className='pgb-diamond' /> THE PERSIAN GULF EXPLORER</div>
      <h1>Every block.<br /><em>A new horizon.</em></h1>
      <p>A clear view of your network. Explore blocks,<br className='pgb-desktop-break' /> follow activity, and connect with confidence.</p>
      <form className='pgb-search' onSubmit={search} role='search'>
        <svg aria-hidden='true' fill='none' stroke='currentColor' strokeWidth='1.5' viewBox='0 0 24 24'><circle cx='10.5' cy='10.5' r='6.5' /><path d='m16 16 5 5' /></svg>
        <input aria-label='Block number or block hash' aria-describedby={error ? 'pgb-search-error' : undefined} aria-invalid={!!error} onChange={(e) => { setValue(e.target.value); setError(''); }} placeholder='Search by block number or block hash' value={value} />
        <button aria-label='Search block' type='submit'>↗</button>
      </form>
      {error && <p className='pgb-field-error' id='pgb-search-error' role='alert'>{error}</p>}
      <div className='pgb-hero-meta'><span className={`pgb-status-dot ${connected ? 'is-live' : ''}`} />{connected ? (chain || 'Network connected') : 'Waiting for your network'}<span className='pgb-meta-divider' />Direct on-chain data</div>
    </div>
  </section>;
}
