import React from "react";
interface ChatListItemProps {
  name: string;
  phoneNumber: string;
  lastMessage: string;
  time: string;
  read: string; // Menetapkan tipe data string untuk prop time
}

export const ChatListItem: React.FC<ChatListItemProps> = ({
  name,
  phoneNumber,
  lastMessage,
  time,
  read,
}) => {
  return (
    <div className="flex items-center p-2 border-b border-gray-300 hover:border-red-500 cursor-pointer">
      {/* Profil */}
      <div className="flex-shrink-0 mr-4">
        <img
          src={`https://ui-avatars.com/api/?name=${name}&size=40`}
          alt={`${name} Profile`}
          className="w-10 h-10 rounded-full"
        />
      </div>
      {/* Informasi Chat */}
      <div className="flex flex-col">
        <h3 className="font-semibold">{name}</h3>
        {/* Tampilkan nomor telepon jika tidak ada pesan terakhir */}
        <p className="text-gray-600">
          {!lastMessage ? phoneNumber : lastMessage}
        </p>
      </div>
      {/* Waktu */}
     <div className="ml-auto">
       {read > "0" ? (
         <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">{read}</span>
       ) : (
         <p className="text-gray-500">{time}</p>
       )}
     </div>
     
    </div>
  );
};
