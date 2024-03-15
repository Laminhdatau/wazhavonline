import Image from "next/image";
import React from "react";

interface ChatListItemProps {
  contact_name: string;
  no_penerima: string;
  lastMessage: string;
  timestamp: string;
  read_chat: string;
}

export const ChatListItem: React.FC<ChatListItemProps> = ({
  contact_name,
  no_penerima,
  lastMessage,
  timestamp,
  read_chat,
}) => {
  // Function to format the timestamp into a human-readable format
 

  return (
    <div className="flex items-center p-2 border-b border-gray-300 hover:border-red-500 cursor-pointer">
      {/* Profile */}
      <div className="flex-shrink-0 mr-4">
        <Image
          src={`https://ui-avatars.com/api/?name=${contact_name}&size=40`}
          alt={`${contact_name} Profile`}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      {/* Chat Information */}
      <div className="flex flex-col">
        <h3 className="font-semibold">{contact_name}</h3>
        {/* Display phone number if there is no last message */}
        <p className="text-gray-600">{!lastMessage ? no_penerima : lastMessage}</p>
      </div>
      {/* Time */}
      <div className="ml-auto">
        {read_chat > "0" ? (
          <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">{read_chat}</span>
        ) : (
          <p className="text-gray-500">{timestamp}</p>
        )}
      </div>
    </div>
  );
};
