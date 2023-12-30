import { SiGithub, SiInstagram, SiTelegram, SiSpotify, SiSteam } from "react-icons/si";
import { FaXTwitter, FaLastfm, FaGlobe } from "react-icons/fa6";
import Social from "../Social";

export default function Socials() {
  return (
    <div className="col-span-2 row-span-2 rounded-2xl bg-zinc-950 p-6 shadow md:p-8">
      <h2 className="mb-3 bg-gradient-to-tl from-zinc-500 to-zinc-300 bg-clip-text text-xl font-semibold text-transparent md:text-2xl">
        Socials
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <Social 
          name="X" 
          link="/x" 
          icon={<FaXTwitter className="h-5 w-5" />} />
        <Social 
          name="GitHub" 
          link="/github" 
          icon={<SiGithub className="h-5 w-5" />} />
        <Social 
          name="Instagram" 
          link="/insta" 
          icon={<SiInstagram className="h-5 w-5" />} />
        <Social 
          name="Telegram" 
          link="/tele" 
          icon={<SiTelegram className="h-5 w-5" />} />
        <Social 
          name="Steam" 
          link="/steam" 
          icon={<SiSteam className="h-5 w-5" />} />
        <Social
          name="Spotify"
          link="/spotify"
          icon={<SiSpotify className="h-5 w-5" />}
        />
        <Social
          name="Last.fm"
          link="/lf"
          icon={<FaLastfm className="h-5 w-5" />}
        />
              <Social
          name="Sobs"
          link="/sobs"
          icon={<FaGlobe className="h-5 w-5" />}
        />
              <Social
          name="Corrupt"
          link="/corrupt"
          icon={<FaGlobe className="h-5 w-5" />}
        />
      </div>
    </div>
  );
}
