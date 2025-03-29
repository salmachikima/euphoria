import { useState } from "react";
import axios from "axios";
import "./ChatBox.css";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return; // Don't send empty messages

    try {
      const res = await axios.get('http://127.0.0.1:8000/api/chat', { params: { mood: message }
      });

      setResponses([...responses, { user: message, bot: res.data.response }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setResponses([...responses, { user: message, bot: "Error connecting to the server." }]);
    }

    setMessage(""); // Clear input after sending
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-4">Euphoria Chat</h1>
      <div className="flex-1 overflow-y-auto border border-gray-500 p-4 rounded-md">
        {responses.map((resp, index) => (
          <div key={index} className="mb-2">
            <p className="text-blue-400">You: {resp.user}</p>
            <p className="text-green-400">Euphoria: {resp.bot}</p>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          className="flex-1 p-2 border rounded text-black"
          placeholder="Type your mood..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-2 p-2 bg-blue-600 hover:bg-blue-800 rounded text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}
export default ChatBox;
