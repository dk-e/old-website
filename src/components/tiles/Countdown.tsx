/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { DateTime } from "luxon";

const MONTH = 4 as const;
const DAY = 1 as const;

export default function Countdown() {
  const [days, setDays] = useState<number>();

  useEffect(() => {
    const now = DateTime.now().startOf("day");

    const countdownPassed = now.month > MONTH || (now.month === MONTH && now.day >= DAY);
    const countdown = DateTime.fromObject({
      year: countdownPassed ? now.year + 1 : now.year,
      month: MONTH,
      day: DAY,
    });

    setDays(countdown.diff(now, "days").days);
  }, []);

  return (
    <div className="group col-span-2 row-span-1 rounded-2xl bg-zinc-800 p-4 text-center shadow md:col-span-1">
      <h2 className="mb-0.5 bg-gradient-to-tl from-white to-gray-400 bg-clip-text text-xl font-medium text-transparent md:mb-2">
        {days ? (days === 365 ? "Today" : `${days} day${days !== 1 ? "s" : ""}`) : "--"}
      </h2>
      {days === 365 ? (
        <p className="text-xs">It&apos;s April Fools Day! (Happy birthday Yanis, i fr love you bro. Mashallah.) 🎉</p>
      ) : (
        <>
          <p className="text-xs group-hover:hidden">until April Fools Day</p>
          <p className="hidden text-xs group-hover:block">
            until <strong>1 April</strong>
          </p>
        </>
      )}
    </div>
  );
}
