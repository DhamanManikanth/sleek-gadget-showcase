
import { useState } from "react";
import { motion } from "framer-motion";
import { Laptop, ShoppingCart, ChevronRight, Smartphone, Watch, Headphones, GamepadIcon, Camera, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Products", icon: ShoppingCart },
    { id: "laptops", label: "Laptops", icon: Laptop },
    { id: "phones", label: "Smartphones", icon: Smartphone },
    { id: "wearables", label: "Wearables", icon: Watch },
    { id: "audio", label: "Audio", icon: Headphones },
    { id: "gaming", label: "Gaming", icon: GamepadIcon },
    { id: "cameras", label: "Cameras", icon: Camera },
    { id: "tv", label: "TV & Home", icon: Tv },
  ];

  const products = [
    {
      id: 1,
      category: "laptops",
      name: "Ultra Book Pro",
      price: 1299,
      description: "Powerful performance meets portability",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      category: "phones",
      name: "SmartPhone X",
      price: 899,
      description: "Next-gen mobile technology",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      category: "wearables",
      name: "Smart Watch Elite",
      price: 299,
      description: "Your health companion",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      category: "audio",
      name: "Pro Wireless Buds",
      price: 199,
      description: "Immersive sound experience",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      category: "gaming",
      name: "Gaming Console Pro",
      price: 499,
      description: "Next-level gaming experience",
      image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      category: "cameras",
      name: "Pro Camera X100",
      price: 799,
      description: "Capture perfect moments",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden section-padding">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent" />
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 text-primary">
              Featured Products
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Experience the Future
              <br />
              <span className="text-primary">Today</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover our latest collection of innovative tech gadgets designed to elevate your everyday experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass">
                Shop Now <ShoppingCart className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-background/50">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background/50">
        <div className="container mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group relative overflow-hidden rounded-xl glass p-6"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">${product.price}</span>
                  <Button variant="secondary" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-to-b from-background to-background/90">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-muted-foreground mb-6">
                We are passionate about bringing you the latest and most innovative tech gadgets. Our carefully curated selection ensures that you always stay ahead of the curve.
              </p>
              <Button variant="outline">
                Learn Our Story <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80"
                alt="About Us"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

