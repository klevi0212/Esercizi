// Create a React application that simulates a simple chat interface. The application should display a list of messages
//  where each message appears as a speech bubble aligned to the right or left, depending on whether the message was sent or received.

import React, { useState } from "react";
import "./App.css";
import BubbleChat from "./BubbleChat";

export default function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Ciao! Come va?", sender: "received" },
    { id: 2, text: "Tutto bene, grazie! E tu?", sender: "sent" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return; // Se l’input è vuoto o solo spazi, non fa nulla.

    setMessages((prev) => [
      // Altrimenti, aggiunge un nuovo messaggio all’array (setMessages).
      ...prev,
      { id: Date.now(), text: input, sender: "sent" }, // Date.now() crea un ID unico.
    ]);
    setInput(""); // Dopo l'invio, svuota l'input.
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-box">
        {messages.map((msg) => (
          <BubbleChat key={msg.id} text={msg.text} sender={msg.sender} /> // Cicla ogni messaggio e mostra una BubbleChat.
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Scrivi un messaggio..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Invia</button>
        {/* Campo input con gestione del testo e invio con Enter o clic su bottone */}
      </div>
    </div>
  );
}
