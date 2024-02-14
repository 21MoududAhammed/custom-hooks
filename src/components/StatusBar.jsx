import useOnlineStatus from "../hooks/onlineStatus";

export default function StatusBar() {
  const isOnline = useOnlineStatus();

  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"} </h1>;
}
