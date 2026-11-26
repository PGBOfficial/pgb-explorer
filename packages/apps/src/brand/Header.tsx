import React from 'react';
import { useTheme } from '@polkadot/react-hooks';
import { settings } from '@polkadot/ui-settings';

export default function Header (): React.ReactElement {
  const { theme } = useTheme();
  return <div className='pgb-masthead'>
    <a aria-label='Persian Gulf explorer home' className='pgb-brand' href='#/explorer'>
      <img alt='' height='54' src='./brand/pgb-logo.png' width='57' />
      <span><strong>PERSIAN GULF</strong><small>BLOCKCHAIN EXPLORER</small></span>
    </a>
    <div className='pgb-masthead-right'><span className='pgb-edition'>THE NETWORK. IN FOCUS.</span>
      <button aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} className='pgb-theme-switch' onClick={() => settings.set({ uiTheme: theme === 'dark' ? 'light' : 'dark' })} type='button'>
        <span aria-hidden='true'>{theme === 'dark' ? '☀' : '☾'}</span><span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
      </button>
      <a className='pgb-wallet-link' href='#/accounts'>My accounts <span aria-hidden='true'>↗</span></a>
    </div>
  </div>;
}
