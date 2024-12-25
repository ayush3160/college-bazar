import { ProductCard } from "@/components/product-card";

const SAMPLE_PRODUCTS = [
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
  // Add more sample products...
];

const CATEGORIES = ["Popular", "Books", "Sports", "Electronics", "Furniture"];

export default function DashboardPage() {
  return (
    <div className="container py-8">
      {CATEGORIES.map((category) => (
        <section key={category} className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">{category}</h2>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              View all
            </a>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SAMPLE_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}