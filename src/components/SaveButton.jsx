import useOnlineStatus from "../hooks/onlineStatus";

export default function SaveButton() {
  const isOnline = useOnlineStatus();
  function handleSave() {
    alert("Saved successfully");
  }
  return (
    <button onClick={() => handleSave()} disabled={!isOnline}>
      {isOnline ? "Save Progress" : "re-connecting....."}
    </button>
  );
}
