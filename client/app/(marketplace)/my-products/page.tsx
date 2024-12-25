"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const SAMPLE_USER_PRODUCTS = [
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

export default function MyProductsPage() {
  const [products, setProducts] = useState(SAMPLE_USER_PRODUCTS);
  const { toast } = useToast();

  const handleDelete = (productId: string) => {
    setProducts(products.filter((product) => product.id !== productId));
    toast({
      title: "Product deleted",
      description: "Your product has been removed from the marketplace.",
    });
  };

  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Products</h1>
        <Button>Add New Product</Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="relative">
            <ProductCard {...product} />
            <Button
              variant="destructive"
              size="sm"
              className="absolute right-2 top-2"
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}