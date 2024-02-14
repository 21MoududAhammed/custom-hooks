import { useEffect, useState } from "react";

export default function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  // set true while the user is online
  function handleOnline() {
    setIsOnline(true);
  }
  // set false while the user is offline
  function handleOffline() {
    setIsOnline(false);
  }

  useEffect(() => {
    //synchronizing
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // clean up
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}
