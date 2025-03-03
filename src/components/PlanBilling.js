import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";
import AISelector from "../components/AISelector";
import ChatHistory from "../components/ChatHistory";
import UserDropdown from "../components/UserDropdown";
import PlanBilling from "../components/PlanBilling";

const Dashboard = () => {
  // State untuk AI yang dipilih, pesan chat, riwayat chat, dan info user
  const [selectedAI, setSelectedAI] = useState("ChatGPT");
  const [messages, setMessages] = useState([]);
  const [user] = useState({ name: "John Doe", plan: "Premium", tokens: 1000 });

  // Fungsi untuk memilih AI model
  const handleSelectAI = (ai) => {
    setSelectedAI(ai);
  };

  // Fungsi untuk mengirim pesan ke chat
  const handleSendMessage = (message) => {
    setMessages([...messages, { sender: "user", text: message }]);
  };

  // Fungsi untuk memilih chat dari history
  const handleSelectChat = (chatId) => {
    console.log("Chat selected:", chatId);
  };
  // Fungsi untuk menghapus riwayat chat
  const handleClearHistory = () => {
    setMessages([]);
  };

  return (
    <>
      <Sidebar />
      
      {/* Main Content - Panel utama */}
      <div className="flex flex-col flex-1 h-full">
        {/* Header - Bagian atas, berisi AI selector, billing info, dan user menu */}
        <div className="flex items-center justify-between p-4 bg-white shadow-md">
          {/* Dropdown untuk memilih AI yang digunakan */}
          <AISelector onSelectAI={handleSelectAI} />
          
          {/* Informasi Billing dan Menu User */}
          <div className="flex items-center space-x-4">
            <PlanBilling plan={user.plan} tokens={user.tokens} />  {/* Menampilkan paket & jumlah token */}
            <UserDropdown username={user.name} onLogout={() => console.log("Logout clicked")} />
          </div>
        </div>

        {/* Chat Section - Area utama chat */}
        <div className="flex flex-1 overflow-hidden">
          {/* Panel Riwayat Chat - Menampilkan history chat sebelumnya */}
          <ChatHistory onSelectChat={handleSelectChat} onClearHistory={handleClearHistory} />
          
          {/* Panel Chat Utama - Area utama chat user dengan AI */}
          <div className="flex flex-col flex-1">
            <ChatBox messages={messages} selectedAI={selectedAI} />
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
