"use client";

import Countdown from "../components/tiles/Countdown";
import Mail from "../components/tiles/Mail";
import Time from "../components/tiles/Time";
import Sites from "../components/tiles/Sites";
import Spotify from "../components/tiles/Spotify";
import Discord from "../components/tiles/Discord";
import Github from "../components/tiles/Github";
import Image from "next/image";
import { useDiscordData } from "../hooks/useDiscordData";

const Home = () => {
  const discordData = useDiscordData();

  return (
    <main>
      <div className="mx-4 flex items-center justify-center">
        <div className="grid max-w-prose grid-cols-3 grid-rows-2 gap-3 md:gap-6">
          <div className="col-span-3 row-span-2 flex items-center justify-center py-8 text-center"></div>
          <Github />
          <Sites />
          <Spotify />
          <Time />
          <Countdown />
          <Mail />
          {discordData && <Discord data={discordData} />}
        </div>
      </div>
    </main>
  );
};

export default Home;
// test