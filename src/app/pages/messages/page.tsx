import { ChatList } from '@/app/components/message/ChatList';
import { RoomChat } from '@/app/components/message/RoomChat';
import React from 'react';
export const MessagesPage = () => {
  return (
    <>
      <div className="flex">
        {/* Sidebar ChatList */}
        <ChatList />
        {/* Room Chat */}
        <RoomChat />
      </div>
    </>
  );
};
