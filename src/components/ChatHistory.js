import React, { useState } from "react";
import { FaTrash, FaFolderOpen } from "react-icons/fa";

const ChatHistory = ({ onSelectChat, onClearHistory }) => {
  const [chats, setChats] = useState([
    { id: 1, title: "Chat with ChatGPT" },
    { id: 2, title: "Business Strategy Talk" },
    { id: 3, title: "AI Research Discussion" },
  ]);

  const handleClearHistory = () => {
    setChats([]);
    onClearHistory();
  };

  return (
    <div className="w-64 bg-white border-r p-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Chat History</h2>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={handleClearHistory}
        >
          <FaTrash />
        </button>
      </div>

      <div className="space-y-2">
        {chats.length > 0 ? (
          chats.map((chat) => (
            <button
              key={chat.id}
              className="w-full flex items-center space-x-3 p-2 rounded-md hover:bg-gray-200"
              onClick={() => onSelectChat(chat.id)}
            >
              <FaFolderOpen className="text-blue-500" />
              <span>{chat.title}</span>
            </button>
          ))
        ) : (
          <p className="text-gray-500">No chat history available.</p>
        )}
      </div>
    </div>
  );
};

export default ChatHistory;
