import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShieldCheck, Users, Zap } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description: "Chat directly with sellers and buyers to negotiate prices and arrange meetups.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Transactions",
    description: "Our platform ensures safe and secure transactions between students.",
  },
  {
    icon: Users,
    title: "College Community",
    description: "Connect with students from your college for buying and selling items.",
  },
  {
    icon: Zap,
    title: "Quick & Easy",
    description: "List items for sale or find what you need in minutes.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Computer Science Student",
    content: "Found my textbooks at half the bookstore price. This platform is a game-changer!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Michael Chen",
    role: "Engineering Student",
    content: "Sold my old calculator and laptop easily. Great way to make extra money!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Emily Davis",
    role: "Business Student",
    content: "The chat feature makes it so easy to negotiate and arrange meetups.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-blue-600/90">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80"
            alt="College campus"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-6">
            Your College Marketplace
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Buy and sell items within your college community. Connect with fellow students, 
            find great deals, and make extra money.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose CollegeMarket?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm">
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-3">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}