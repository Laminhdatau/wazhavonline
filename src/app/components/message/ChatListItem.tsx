import Image from "next/image";
import React from "react";

interface ChatListItemProps {
  contact_name: string;
  no_penerima: string;
  lastMessage: string;
  timestamp: string;
  read_chat: string;
  message_id: string;
  id: string;
}

const readMessage = async (wamid: string, id: string) => {
  try {
    if (wamid == "me") {
      return;
    }

    const response = await fetch(
      `http://localhost:8080/api/v1/message/readMessage/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ wamid }), // Send wamid as the request body
      }
    );

    if (!response.ok) {
      throw new Error("Failed to read message");
    }

    const data = await response.json();
    console.log(data); // Display response from the POST request (optional)

  } catch (error) {
    console.error("Error reading message:", error);
  }
};

export const ChatListItem: React.FC<ChatListItemProps> = ({
  contact_name,
  no_penerima,
  lastMessage,
  timestamp,
  read_chat,
  message_id,
  id,
}) => {
  // Function to format the timestamp into a human-readable format
  const handleClick = () => {
    readMessage(message_id, id); // Memanggil fungsi readMessage dengan message_id sebagai parameter
  };

  const moreChat = lastMessage.length > 10 ? lastMessage.substring(0, 10) + "..." : lastMessage

  const renderBadge = (read_chat: string) => {
    if (read_chat !== "0") {
      return (
        <div className="absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full"></div>
      );
    } else {
      return null; // Tidak menampilkan badge jika read_chat === "0"
    }
  };

  return (
    <div
      className="flex items-center p-2 border-b border-gray-300 hover:border-red-500 cursor-pointer"
      onClick={handleClick}
    >
      {/* Profile */}
      <div className="flex-shrink-0 mr-4 relative">
        <Image
          src={`https://ui-avatars.com/api/?name=${contact_name}&size=40`}
          alt={`${contact_name} Profile`}
          width={40}
          height={40}
          className={`rounded-full`}
        />
        {renderBadge(read_chat)}
      </div>
      {/* Chat Information */}
      <div className="flex flex-col">
        <h3 className="font-semibold">{contact_name}</h3>
        {/* Display phone number if there is no last message */}
        <p className="text-gray-600">
          {!moreChat ? no_penerima : moreChat}
        </p>
      </div>
      {/* Time */}
      <div className="ml-auto">
        {read_chat > "0" ? (
          <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            {read_chat}
          </span>
        ) : (
          <p className="text-gray-500">{timestamp}</p>
        )}
      </div>
    </div>
  );
};
