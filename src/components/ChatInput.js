import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center p-4 bg-white border-t">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleSend}
      >
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default ChatInput;
