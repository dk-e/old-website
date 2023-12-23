"use client";

import { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import { SiDiscord } from "react-icons/si";

const STATUS_MAP = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline",
  unknown: "Unknown",
};

export default function DiscordSocial() {
  const [status, setStatus] = useState<keyof typeof STATUS_MAP>();

  useEffect(() => {
    fetch(`https://api.lanyard.rest/v1/users/745631824163766412`)
      .then((response) => response.json())
      .then(({ data }) => setStatus(data.discord_status));
  }, [status]);

  return (
    <>
        <SiDiscord className="h-5 w-5" />
        <span>Discord</span>
        <span
          className={`h-2 w-2 rounded-full ${
            status === "online"
              ? "bg-green-500"
              : status === "idle"
              ? "bg-amber-500"
              : status === "dnd"
              ? "bg-red-500"
              : "bg-zinc-500"
          }`}
        />
      </>
  )
        }