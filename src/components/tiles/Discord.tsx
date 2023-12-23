/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import type { NextPage } from "next";
import Link from "next/link";
import { useState, useEffect } from "react";

export async function fetchUserData() {
  let body: any = await fetch("https://api.lanyard.rest/v1/users/745631824163766412").then((res: any) => res.json());
  return body.data;
}

interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  bot: boolean;
  global_name: string;
  avatar_decoration_data: any;
  display_name: string;
  public_flags: number;
}

interface DiscordData {
  discord_user: DiscordUser;
  discord_status: string;
  active_on_discord_web: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  listening_to_spotify: boolean;
  success: boolean;
}

const Discord: NextPage<{ data: DiscordData }> = ({ data }) => {
  const [userData, setUserData] = useState<DiscordData>(data);

  const updateData = (newData: DiscordData) => {
    setUserData(newData);
  };

  useEffect(() => {
    const fetchData = async () => {
      let newData = await fetchUserData();
      if (JSON.stringify(newData) !== JSON.stringify(userData)) {
        updateData(newData);
      }
    };

    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    const spotifyInterval = setInterval(fetchData, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(spotifyInterval);
    };
  }, [userData]);

  // Define color based on discord_status
  const status = userData?.discord_status.toLowerCase();

  return (
    <Link href="/discord" className="col-span-2 row-span-2 rounded-2xl p-6 text-right shadow md:p-8 bg-zinc-950">
      <div className={``}>
        <div className="scale-[1] space-y-1 text-center md:scale-[1.2]">
          <div className="flex items-center justify-center mb-2">
            <img
              src={`https://cdn.discordapp.com/avatars/745631824163766412/${userData?.discord_user.avatar}.webp`}
              alt="User Avatar"
              className="h-14 w-14 rounded-full mr-2"
            />
            <span
              className={`h-3 w-3 rounded-full ${
                status === "online"
                  ? "bg-green-500"
                  : status === "idle"
                  ? "bg-amber-500"
                  : status === "dnd"
                  ? "bg-red-500"
                  : "bg-zinc-500"
              } animate-pulse`}
              style={{
                animation: "pulse 1.5s infinite",
              }}
            />
          </div>
          <h2>
            <span><strong>@{userData?.discord_user.username}</strong></span>
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default Discord;
