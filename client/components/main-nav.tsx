"use client";

import Link from "next/link";
import { ShoppingBag, Heart, MessageCircle, PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import { SearchBar } from "./search-bar";
import { UserNav } from "./user-nav";

export function MainNav() {
  return (
    <div className="border-b bg-white">
      <div className="flex h-16 items-center px-4">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <ShoppingBag className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-blue-600">College-Bazar</span>
        </Link>
        <div className="ml-8 mr-4 flex-1">
          <SearchBar />
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/add-product">
            <Button variant="ghost" size="icon">
              <PlusCircle className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/wishlist">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/chat">
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </Link>
          <UserNav />
        </div>
      </div>
    </div>
  );
}