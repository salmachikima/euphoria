import { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);

    // Simulate AI response (we’ll connect this to the backend later)
    setTimeout(() => {
      const botResponse = { text: "I'm still learning! Real AI coming soon.", sender: "bot" };
      setMessages([...messages, newMessage, botResponse]);
    }, 1000);

    setInput(""); // Clear input field
  };

  return (
    <div className="flex flex-col w-full h-screen bg-deepBlue p-6 text-white">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 my-1 rounded-lg ${msg.sender === "user" ? "bg-gold text-black self-end" : "bg-purple-500"}`}>
            {msg.text}
          </div>
        ))}
      </div>
      
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()} 
          className="flex-1 p-2 rounded-lg border-none focus:ring-2 focus:ring-gold text-black"
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} className="ml-2 bg-neonPink px-4 py-2 rounded-lg">Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
