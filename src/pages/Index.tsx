
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, ShoppingCart, ChevronRight, Smartphone, Watch, Headphones, GamepadIcon, Camera, Tv, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const heroProducts = [
    {
      id: 1,
      name: "Next Gen Laptop Pro",
      tagline: "Power. Beauty. Intelligence.",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1920&q=80",
      description: "Experience computing like never before"
    },
    {
      id: 2,
      name: "Ultra Watch Elite",
      tagline: "Time. Redefined.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=1920&q=80",
      description: "The future on your wrist"
    },
    {
      id: 3,
      name: "Pro Audio Max",
      tagline: "Immerse in Pure Sound",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1920&q=80",
      description: "Revolutionary audio experience"
    }
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
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <span className="text-2xl font-bold">TechElite</span>
              <div className="hidden md:flex space-x-6">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`text-sm font-medium transition-colors ${
                      selectedCategory === category.id ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <section className="pt-16">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {heroProducts.map((product) => (
              <CarouselItem key={product.id}>
                <div className="relative h-[90vh] w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent">
                    <div className="container mx-auto h-full flex items-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                      >
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">
                          {product.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-2">
                          {product.tagline}
                        </p>
                        <p className="text-lg mb-8">
                          {product.description}
                        </p>
                        <div className="flex gap-4">
                          <Button size="lg" className="glass">
                            Buy Now <ShoppingCart className="ml-2 h-4 w-4" />
                          </Button>
                          <Button size="lg" variant="outline">
                            Learn More <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2 glass hover:scale-105 transition-transform"
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
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
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
                className="group relative overflow-hidden rounded-xl glass hover:scale-105 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">${product.price}</span>
                    <Button variant="secondary" className="glass">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/90">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Innovation Redefined</h2>
              <p className="text-muted-foreground mb-6">
                We are passionate about bringing you the latest and most innovative tech gadgets. Our carefully curated selection ensures that you always stay ahead of the curve.
              </p>
              <Button variant="outline" className="glass">
                Learn Our Story <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1920&q=80"
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

