"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";

const SAMPLE_CHATS = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
    lastMessage: "Is the calculator still available?",
    timestamp: "2:30 PM",
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
    lastMessage: "Thanks for the textbook!",
    timestamp: "Yesterday",
  },
];

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(SAMPLE_CHATS[0]);
  const [message, setMessage] = useState("");

  return (
    <div className="container grid h-[calc(100vh-4rem)] grid-cols-12 gap-0">
      {/* Chat List */}
      <div className="col-span-3 border-r">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search chats..." className="pl-8" />
          </div>
        </div>
        <div className="space-y-2">
          {SAMPLE_CHATS.map((chat) => (
            <div
              key={chat.id}
              className={`cursor-pointer p-4 transition-colors hover:bg-gray-100 ${
                selectedChat.id === chat.id ? "bg-gray-100" : ""
              }`}
              onClick={() => setSelectedChat(chat)}
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={chat.avatar} />
                  <AvatarFallback>{chat.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="font-medium">{chat.name}</p>
                  <p className="text-sm text-gray-500">{chat.lastMessage}</p>
                </div>
                <span className="text-xs text-gray-500">{chat.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="col-span-9 flex flex-col">
        {/* Chat Header */}
        <div className="border-b p-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={selectedChat.avatar} />
              <AvatarFallback>{selectedChat.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-medium">{selectedChat.name}</h2>
              <p className="text-sm text-gray-500">Online</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Add messages here */}
        </div>

        {/* Message Input */}
        <div className="border-t p-4">
          <div className="flex space-x-2">
            <Input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}