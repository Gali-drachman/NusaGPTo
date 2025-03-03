import React from "react";

const ChatBox = () => {
  return (
    <div className="flex flex-col flex-1 p-4 overflow-y-auto bg-gray-50">
      {/* Pesan Chat */}
      <div className="space-y-4">
        {/* Contoh Pesan User */}
        <div className="flex justify-end">
          <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
            Hi, AI! How are you?
          </div>
        </div>

        {/* Contoh Pesan AI */}
        <div className="flex justify-start">
          <div className="bg-white text-gray-800 p-3 rounded-lg shadow-md max-w-xs">
            Hello! I'm here to assist you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
