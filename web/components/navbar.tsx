"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <ShoppingBag className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-blue-600">CollegeMarket</span>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}