import ChatBox from "./components/ChatBox";
import React from "react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-9xl font-bold text-center pt-20"
    style={{ fontFamily: "'Tektur', sans-serif", color: "001c1c", textShadow: '0px 0px 15px rgba(255, 15, 15, 0.8)' }}>
  Euphoria
</h1>

      <p className="text-lg mt-4">
        <h2 className="text-3xl font-semibold text-center mt-4 text-black"
    style={{ fontFamily: "'Tektur', sans-serif", textShadow: '0px 0px 10px rgba(255, 105, 105, 0.8)' }}>
  the pleasure of music
  </h2>

      </p>
      <button
  onClick={() => window.open("/chat", "_blank")} 
  className="px-6 py-3 mt-6 text-xl font-bold text-white bg-pink-600 rounded-lg shadow-md hover:bg-pink-700 transition-all"
>
  Start Now
</button>

    </div>
  );
}

export default App;
