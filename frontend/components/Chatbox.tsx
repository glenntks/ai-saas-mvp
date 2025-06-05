import { useState } from "react";

export default function Chatbox() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    const res = await fetch("http://localhost:8000/generate-reply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: message, sender: "Bruker1" }),
    });
    const data = await res.json();
    setReply(data.reply);
  };

  return (
    <div>
      <textarea onChange={(e) => setMessage(e.target.value)}></textarea>
      <button onClick={sendMessage}>Send til AI</button>
      <div><strong>AI svar:</strong> {reply}</div>
    </div>
  );
}