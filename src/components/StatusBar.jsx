import { useEffect } from "react";
import { useState } from "react";

export default function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);

  // when user is online
  function handleOnline() {
    setIsOnline(true);
  }
  //when user is offline
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

  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected' } </h1>;
}
