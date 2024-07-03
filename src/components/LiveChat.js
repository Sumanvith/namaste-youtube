import React from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      <ChatMessage name="Sumanvith" message="Peaks mama"></ChatMessage>
      <ChatMessage name="Sumanvith" message="Peaks mama"></ChatMessage>
      <ChatMessage name="Sumanvith" message="Peaks mama"></ChatMessage>
      <ChatMessage name="Sumanvith" message="Peaks mama"></ChatMessage>
    </div>
  );
};

export default LiveChat;