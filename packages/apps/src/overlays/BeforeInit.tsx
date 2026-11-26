import React from 'react';
import GlobalStyle from '@polkadot/react-components/styles';
import { useTheme } from '@polkadot/react-hooks';
import Header from '../brand/Header.js';
import Footer from '../brand/Footer.js';
import Waiting from '../brand/Waiting.js';
export default function BeforeApiInit (): React.ReactElement {
  const { themeClassName } = useTheme();
  return <><GlobalStyle uiHighlight='#4268f5' /><div className={`apps--Wrapper ${themeClassName}`}><Header /><Waiting /><div id='portals' /></div><Footer /></>;
}
