import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  // Check if Online or Offline
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    }
    const handleOffline = () => {
      setIsOnline(false);
    }

    // Event Listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup - Taught in Live Clsses
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // return true if online, otherewise return false
  return isOnline;
};

export default useOnlineStatus;
