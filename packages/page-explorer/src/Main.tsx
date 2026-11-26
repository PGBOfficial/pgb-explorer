// Copyright 2017-2026 @polkadot/app-explorer authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AugmentedBlockHeader, KeyedEvent } from '@polkadot/react-hooks/ctx/types';

import React from 'react';

import Hero from '@polkadot/react-components/Pgb/Hero';
import { useApi } from '@polkadot/react-hooks';
import { BestFinalized, BestNumber, TotalIssuance } from '@polkadot/react-query';

import { Columar } from '@polkadot/react-components';

import BlockHeaders from './BlockHeaders.js';
import Events from './Events.js';
import useLatency from './Latency/useLatency.js';
import Summary from './Summary.js';

interface Props {
  eventCount: number;
  events: KeyedEvent[];
  headers: AugmentedBlockHeader[];
}

function Main ({ eventCount, events, headers }: Props): React.ReactElement<Props> {
  const { api, isApiConnected, systemChain } = useApi();
  const { isLoaded, timeAvg } = useLatency();

  return (
    <>
      <div className='pgb-home hasOwnMaxWidth'>
        <Hero chain={systemChain} connected={isApiConnected} />
        <div className='pgb-stat-grid'>
          <div className='pgb-stat'><div className='pgb-stat-label'><span className='pgb-stat-symbol'>◇</span>Latest block</div><strong><BestNumber /></strong><small><span className='pgb-status-dot is-live' /> Best chain head</small></div>
          <div className='pgb-stat'><div className='pgb-stat-label'><span className='pgb-stat-symbol'>◎</span>Finalized block</div><strong>{api.query.grandpa ? <BestFinalized /> : '—'}</strong><small>Confirmed on-chain</small></div>
          <div className='pgb-stat'><div className='pgb-stat-label'><span className='pgb-stat-symbol'>◈</span>Total issuance</div><strong>{api.query.balances ? <TotalIssuance /> : '—'}</strong><small>Native network supply</small></div>
          <div className='pgb-stat'><div className='pgb-stat-label'><span className='pgb-stat-symbol'>◷</span>Block interval</div><strong>{isLoaded ? (timeAvg / 1000).toFixed(2) : '—'}<em> s</em></strong><small>Average of observed blocks</small></div>
        </div>
        <div className='pgb-activity-title'><div><span className='pgb-eyebrow'>ON-CHAIN ACTIVITY</span><h2>The network, as it happens.</h2></div><span className='pgb-live-label'><span className='pgb-status-dot is-live' /> Live updates</span></div>
      </div>
      <div className='pgb-native-feed'>
      <Columar>
        <Columar.Column><BlockHeaders headers={headers} /></Columar.Column>
        <Columar.Column><Events events={events} showToggle /></Columar.Column>
      </Columar>
      </div>
      <details className='pgb-network-details'><summary>Network details <span>Sessions, issuance &amp; event count</span></summary><Summary
        eventCount={eventCount}
        headers={headers}
      />
      </details>
    </>
  );
}

export default React.memo(Main);
