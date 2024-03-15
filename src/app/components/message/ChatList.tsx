import React from "react";
import { ChatListItem } from "./ChatListItem";

export const ChatList = () => {
  // Contoh data chatlist
  const chatList = [
    {
      name: "John Doe",
      phoneNumber: "+1234567890",
      lastMessage: "Halo, apa kabar?",
      time: "08:30 AM",
      read: "5",
    },
    {
      name: "Jane Smith",
      phoneNumber: "+0987654321",
      lastMessage: "",
      time: "10:15 AM",
      read: "0",
    },
    {
      name: "Alice Johnson",
      phoneNumber: "+9876543210",
      lastMessage: "Besok kita ketemu ya!",
      time: "Yesterday",
      read: "0",
    },
    
  ];

  return (
    <div className="w-1/4 border border-orange-500 ">
      {/* Sidebar ChatList */}
      <h2 className="text-xl font-bold p-4 shadow-md ">Chat List</h2>
      {/* Daftar chat akan ditampilkan di sini */}
      <div
        className="overflow-y-auto 80vh flex-grow text-sm"
        style={{ maxHeight: "calc(80vh - 100px)" }}
      >
        {chatList.map((chat, index) => (
          <ChatListItem key={index} {...chat} />
        ))}
      </div>
    </div>
  );
};
