// Persian Gulf visual identity — decorative, zero network or wallet access.
import React, { useId, useMemo } from 'react';

export default function DataWave (): React.ReactElement {
  const id = useId().replace(/:/g, '');
  const paths = useMemo(() => Array.from({ length: 40 }, (_, row) => {
    const points = Array.from({ length: 101 }, (_, col) => {
      const x = col * 12;
      const y = 190 + (row - 20) * 4.7 + Math.sin(x / 155 + row * 0.034) * (54 + row * 1.05) + Math.sin(x / 360 - 0.8) * 35;
      return `${col ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
    return points;
  }), []);

  return <svg aria-hidden='true' className='pgb-wave' preserveAspectRatio='xMidYMid slice' viewBox='0 0 1200 420'>
    <defs>
      <linearGradient id={`flow-${id}`}><stop offset='0' stopColor='#235cff' stopOpacity='0' /><stop offset='.3' stopColor='#426bff' /><stop offset='.65' stopColor='#31d5e5' /><stop offset='1' stopColor='#779bff' stopOpacity='.15' /></linearGradient>
      <radialGradient id={`halo-${id}`}><stop stopColor='#3260fc' stopOpacity='.2' /><stop offset='1' stopColor='#3260fc' stopOpacity='0' /></radialGradient>
    </defs>
    <ellipse cx='700' cy='230' fill={`url(#halo-${id})`} rx='510' ry='190' />
    {paths.map((d, i) => <g key={i}>
      <path className='pgb-wave-line' d={d} fill='none' opacity={i % 5 === 0 ? .72 : .28} stroke={`url(#flow-${id})`} strokeWidth={i % 5 === 0 ? 1.25 : .65} />
      {i % 3 === 0 && <path className='pgb-wave-packet' d={d} fill='none' pathLength='1000' stroke='#7bedf4' strokeDasharray='1 290 2 707' strokeLinecap='round' strokeWidth='2' style={{ animationDelay: `${-i * .61}s`, animationDuration: `${8 + i % 4}s` }} />}
    </g>)}
  </svg>;
}

