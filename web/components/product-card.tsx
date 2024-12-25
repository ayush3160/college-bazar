import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <div className="group relative rounded-lg border bg-white p-4 transition-shadow hover:shadow-lg">
      <div className="aspect-square overflow-hidden rounded-md">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-6 top-6 bg-white/80 hover:bg-white"
      >
        <Heart className="h-5 w-5" />
      </Button>
      <div className="mt-4 space-y-2">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{category}</p>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-blue-600">${price}</p>
          <Link href={`/chat/${id}`}>
            <Button size="sm">Chat with Seller</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}