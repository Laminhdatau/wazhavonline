import React, { useState, useEffect } from "react";
import { ChatListItem } from "./ChatListItem";
import Pusher from "pusher-js";

interface Chat {
  contact_name: string;
  no_penerima: string;
  lastMessage: string;
  timestamp: number;
  read_chat: string;
  message_id: string;
}

const ChatList: React.FC = () => {
  const [chatList, setChatList] = useState<Chat[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/message");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setChatList(data.chatList);
      } catch (error) {
        console.error("Error fetching chat list:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const pusher = new Pusher("040733438dea26246351", {
      cluster: "ap1",
    });

    // Berlangganan ke saluran 'chat'
    const channel = pusher.subscribe("wazhav");

    channel.bind("message", (data: Chat) => {
      setChatList((prevChatList) => {
        const existingChatIndex = prevChatList.findIndex(
          (chat) => chat.no_penerima === data.no_penerima
        );

        // Jika nomor penerima sudah ada, timpa pesan di chatList
        if (existingChatIndex !== -1) {
          const updatedChatList = [...prevChatList];
          updatedChatList[existingChatIndex] = data;
          return updatedChatList;
        } else {
          // Jika nomor penerima belum ada, tambahkan pesan baru ke chatList
          return [...prevChatList, data];
        }
      });
    });

    // Membersihkan langganan ketika komponen di-unmount
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  const getTimeAgo = (timestamp: number) => {
    const now = new Date().getTime();
    const elapsed = now - timestamp;

    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    const weeks = Math.floor(days / 7);

    if (weeks > 0) {
      return `${weeks} minggu yang lalu`;
    } else if (days > 0) {
      return `${days} hari yang lalu`;
    } else if (remainingHours > 0) {
      return `${remainingHours} jam yang lalu`;
    } else if (remainingMinutes > 0) {
      return `${remainingMinutes} menit yang lalu`;
    } else {
      return `${remainingSeconds} detik yang lalu`;
    }
  };

  console.log({chatList});

  return (
    <div className="w-1/4 border border-orange-500">
      {/* Sidebar ChatList */}
      <h2 className="text-xl font-bold p-4 shadow-md">Chat List</h2>
      {/* Daftar chat akan ditampilkan di sini */}
      <div
        className="overflow-y-auto 80vh flex-grow text-sm"
        style={{ maxHeight: "calc(80vh - 100px)" }}
      >
        {chatList.length === 0 ? (
          <p className="text-center text-gray-500">
            Tidak ada pesan yang ditemukan
          </p>
        ) : (
          chatList.map((chat, index) => (
            
            <ChatListItem
              key={index}
              contact_name={chat.contact_name}
              no_penerima={chat.no_penerima}
              lastMessage={chat.lastMessage}
              timestamp={getTimeAgo(chat.timestamp)}
              read_chat={chat.read_chat}
              message_id={chat.message_id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export { ChatList };
