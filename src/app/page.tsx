// Home.tsx

import Countdown from "../components/tiles/Countdown";
import Mail from "../components/tiles/Mail";
import Time from "../components/tiles/Time";
import Socials from "../components/tiles/Socials";
import Spotify from "../components/tiles/Spotify";
import Discord, { fetchUserData } from "../components/tiles/Discord";
import Domain from "../components/tiles/Domain";
import Image from "next/image";

interface HomeProps {
  discordData: any;
}

export default function Home({ discordData }: HomeProps) {
  return (
    <main>
      <div className="mx-4 flex items-center justify-center">
        <div className="grid max-w-prose grid-cols-3 grid-rows-2 gap-3 md:gap-6">
          <div className="col-span-3 row-span-2 flex items-center justify-center py-8 text-center">
            <div className="mr-2">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </div>
            <h1 className="mb-2 bg-gradient-to-tl from-white via-gray-400 to-pink-300 bg-300% bg-clip-text text-4xl font-bold text-transparent motion-safe:animate-gradient">
              zurly.lol &bull; moani.ng
            </h1>
          </div>
          <Domain />
          <Socials />
          <Spotify />
          <Time />
          <Countdown />
          <Mail />
          <Discord data={discordData} />
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const discordData = await fetchUserData();

  return {
    props: {
      discordData,
    },
  };
}
