/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import type { NextPage } from "next";
import Link from "next/link";
import { useState, useEffect } from "react";

async function fetchUserData() {
  const body: any = await fetch("https://api.lanyard.rest/v1/users/745631824163766412").then((res: any) => res.json());
  return body.data;
}

interface SpotifyData {
  spotify: {
    album_art_url: string;
    song: string;
    artist: string;
    timestamps: {
      start: number;
      end: number;
    };
  } | null;
}

const Home: NextPage = () => {
  const [data, setData] = useState<SpotifyData>({ spotify: null });

  const [second, addSecond] = useState(0);
  let count = 0;

  const updateData = (newData: any) => {
    addSecond(count++);
  };

  useEffect(() => {
    const fetchData = async () => {
      let newData = await fetchUserData();
      if (newData.spotify !== data.spotify) setData(newData);
    };

    updateData(data);

    const interval = setInterval(() => {
      updateData(data);
    }, 1000);

    const spotifyInterval = setInterval(fetchData, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(spotifyInterval);
    };
  }, [data]);

  if (data.spotify === null) {
    return (

      <Link href="/spotify" className="col-span-3 row-span-2 rounded-2xl bg-black p-6 shadow md:col-span-2 md:p-8">
        <h2 className="mb-3 bg-gradient-to-tl from-zinc-500 to-zinc-300 bg-clip-text text-xl font-semibold text-transparent md:text-2xl">
          Spotify
        </h2> <br />
        Not listening to anything right now &gt;_&lt;
      </Link> 
    );
  }

  const progress = ((new Date().getTime() - data.spotify.timestamps.start) / (data.spotify.timestamps.end - data.spotify.timestamps.start)) * 100;

  return (
    <div
      className="col-span-3 row-span-2 rounded-2xl bg-teal-950 p-6 shadow md:col-span-2 md:p-8 relative"
      style={{
        backgroundImage: `url(${data.spotify.album_art_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="backdrop-filter backdrop-blur-md rounded-2xl p-6"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          position: "absolute",
          zIndex: 1,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <h2 className="mb-3 bg-gradient-to-tl text-white bg-clip-text text-xl font-semibold text-transparent md:text-2xl">
          Spotify
        </h2> <br />
        <p><strong>Listening to: {data.spotify.song}</strong></p>
        <p><strong>By: {data.spotify.artist}</strong></p>
        <div className="absolute bottom-0 left-0 right-0 h-[0.35rem] rounded-full overflow-hidden">
          <div
            className="bg-gray-300 h-[0.35rem] rounded-full overflow-hidden"
            style={{
              width: `${progress > 100 ? 100 : progress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const initialData = await fetchUserData();
  return {
    props: {
      data: initialData,
    },
  };
}

export default Home;
