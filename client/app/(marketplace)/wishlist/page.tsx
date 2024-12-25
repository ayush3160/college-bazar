"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { useToast } from "@/components/ui/use-toast";

const SAMPLE_WISHLIST = [
  {
    id: "1",
    name: "Calculus Textbook",
    price: 45,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600",
    category: "Books",
  },
  {
    id: "2",
    name: "Basketball",
    price: 25,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600",
    category: "Sports",
  },
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(SAMPLE_WISHLIST);
  const { toast } = useToast();

  const removeFromWishlist = (productId: string) => {
    setWishlist(wishlist.filter((product) => product.id !== productId));
    toast({
      title: "Removed from wishlist",
      description: "The product has been removed from your wishlist.",
    });
  };

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-2xl font-bold">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your wishlist is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wishlist.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
}