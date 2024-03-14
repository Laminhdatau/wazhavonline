import React, { useState } from "react";
import { ChatItem } from "./ChatItem";

function formatTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes}`;
}
export const RoomChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "other",
      content: "Hey How are you today?",
      time: formatTime(),
      read: 1,
    },
    {
      id: 2,
      sender: "other",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsa commodi illum saepe numquam maxime asperiores voluptate sit, minima perspiciatis.",
      time: formatTime(),
      read: 1,
    },
    // Tambahkan pesan dari Anda sendiri di sini dengan properti waktu
    {
      id: 3,
      sender: "me",
      content: "I am fine, thank you. How about you?",
      time: formatTime(),
      read: 2,
    },
  ]);

  return (
    <div className="flex flex-col px-6">
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10">
          {/* Foto profil bulat */}
          <img
            className="h-10 w-10 rounded-full border-2 border-red-500"
            src="./users.svg"
            alt="A"
          />
        </div>
        <div className="ml-3">
          {/* Nama kontak yang lagi chatting */}
          <p className="text-lg font-bold">Lamin H Datau</p>
          {/* Badge online */}
          <span className="inline-block bg-green-500 rounded-full h-2 w-2 mr-2"></span>
          Online
        </div>
      </div>

      <div
        className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 p-2"
        style={{
          backgroundImage: 'url("./message/bgchat.png")',
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="flex flex-col mb-2">
          <div className="flex">
            <div
              className="overflow-y-auto grid grid-cols-12 gap-y-1"
              style={{ maxHeight: "calc(75vh - 100px)" }}
            >
              {messages.map((message) => (
                  <ChatItem key={message.id} message={message} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AREA SEND */}
      <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
        <div>
          <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-grow ml-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Write a message..."
              className="flex w-full border rounded-xl focus:outline-none focus:border-red-500 pl-4 p-4"
            />
            <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="ml-4">
          <button className="flex items-center justify-center bg-gradient-to-r from-orange-400 to-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-400 rounded-xl text-white font-bold p-3 flex-shrink-0">
            <span>
              <svg
                className="w-4 h-4 transform rotate-45 -mt-px"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
