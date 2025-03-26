import React from "react";
import ChatBox from "./components/ChatBox";

const Chat = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-6xl font-bold mb-6 text-purple-400">how are you feeling today?</h1>
      <ChatBox />
    </div>
  );
};
export default Chat;
