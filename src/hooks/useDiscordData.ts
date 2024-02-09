// useDiscordData.ts
import { useEffect as useReactEffect, useState as useReactState } from "react";

export function useDiscordData(useEffect = useReactEffect, useState = useReactState) {
  const [discordData, setDiscordData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://api.lanyard.rest/v1/users/745631824163766412");
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    };

    const fetchData = async () => {
      const data = await fetchUserData();
      setDiscordData(data);
    };

    fetchData();
    const interval = setInterval(fetchData, 10000); // Fetch data every 10 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return discordData;
}
