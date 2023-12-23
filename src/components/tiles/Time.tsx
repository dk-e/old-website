"use client";

import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

const TIMEZONE = 'Europe/London' as const;

export default function Time() {
  const timezone = DateTime.now().setZone(TIMEZONE).toFormat('Z');
  const [time, setTime] = useState('');
  const [isDaytime, setIsDaytime] = useState(true);

  useEffect(() => {
    const calculateDaytime = () => {
      const currentHour = DateTime.now().setZone(TIMEZONE).hour;
      setIsDaytime(currentHour >= 6 && currentHour < 18); // Assuming daytime is between 6 AM and 6 PM
    };

    calculateDaytime();
    const interval = setInterval(() => {
      setTime(DateTime.now().setZone(TIMEZONE).toFormat('T'));
      calculateDaytime();
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div
      className={`col-span-1 row-span-1 rounded-2xl p-4 text-center shadow ${
        isDaytime ? 'bg-blue-400' : 'bg-black'
      }`}
    >
      <h2
        className={`mb-0.5 h-7 text-xl font-medium md:mb-2 ${
          !isDaytime ? 'text-white' : 'text-white'
        }`}
        style={{
          textShadow: !isDaytime ? '0 0 8px rgba(255,255,255,0.8)' : '', // Apply white glow only at night
        }}
      >
        {time || '--'}
      </h2>
      <p className={`${isDaytime ? 'text-black' : 'text-white'} text-xs`}>
        in the uk
      </p>
    </div>
  );
}
