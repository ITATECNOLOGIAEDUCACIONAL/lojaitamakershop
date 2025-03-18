import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
const Hero = () => {
  return <section className="relative min-h-[90vh] flex items-center py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent z-0"></div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 relative z-10">
        <div className="space-y-6 mt-12 lg:mt-0 animate-slide-up">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm">Produtos dias das mães!!</Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-tight font-bold">
            Bem-vindo à <br className="hidden sm:block" />
            <span className="text-primary">ItaMakerShop</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-justify">A ItaMaker Shop nasceu com o propósito de levar inovação e criatividade ao alcance de todos. Somos especializados em robótica educacional, cultura maker, impressão 3D e corte a laser, oferecendo produtos personalizados e soluções práticas para professores, alunos e entusiastas da tecnologia.
        </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" className="gap-2">
              Shop Now <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Explore Collections
            </Button>
          </div>
        </div>
        
        <div className="relative lg:ml-auto flex items-center justify-center">
          <div className="relative w-full max-w-lg aspect-square animate-blur-in">
            <img alt="Featured Product" className="w-full h-full object-cover rounded-2xl" src="/lovable-uploads/fc5db65d-ee8a-4d66-8b00-9b2caf955109.png" />
            
            <div className="absolute -bottom-8 -left-8 p-4 bg-white rounded-xl shadow-lg animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">New Arrivals</p>
                  <p className="text-xs text-muted-foreground">50+ new products</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 p-4 bg-white rounded-xl shadow-lg animate-slide-down" style={{
            animationDelay: '0.4s'
          }}>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Top Rated</p>
                  <p className="text-xs text-muted-foreground">Premium quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
const Categories = () => {
  const categories = ["Electronics", "Clothing", "Home & Living", "Books", "Sports & Outdoors"];
  return <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-center mb-8">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map(category => <Link key={category} to={`/products?category=${category}`} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
                {/* Replace with category-specific icons */}
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="text-center font-medium text-gray-700">{category}</p>
            </Link>)}
        </div>
      </div>
    </section>;
};
const FeaturedProducts = () => {
  const products = [{
    id: 1,
    name: "Minimalist Watch",
    imageUrl: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "$79.99"
  }, {
    id: 2,
    name: "Leather Wallet",
    imageUrl: "https://images.unsplash.com/photo-1585323348432-c9d93c08011c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "$49.99"
  }, {
    id: 3,
    name: "Wireless Earbuds",
    imageUrl: "https://images.unsplash.com/photo-1583394842264-10b2e4659d56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "$99.99"
  }];
  return <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-medium text-lg text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.price}</p>
                <Button className="mt-4 w-full">Add to Cart</Button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
const DiscountSection = () => {
  return <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-display font-bold mb-4">
          Exclusive Discount
        </h2>
        <p className="text-lg mb-8">
          Get 20% off on all products this week only. Don't miss out on this
          amazing offer!
        </p>
        <Button size="lg" variant="secondary">
          Shop Now
        </Button>
      </div>
    </section>;
};
const NewArrivals = () => {
  const newArrivals = [{
    id: 4,
    name: "Smart Backpack",
    imageUrl: "https://images.unsplash.com/photo-1556020619-7bc4bf2344ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "$129.99"
  }, {
    id: 5,
    name: "Ceramic Mug Set",
    imageUrl: "https://images.unsplash.com/photo-1555858254-696695948c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "$39.99"
  }];
  return <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-center mb-8">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newArrivals.map(product => <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-medium text-lg text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.price}</p>
                <Button className="mt-4 w-full">View Product</Button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
const Newsletter = () => {
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-8">
            Stay updated with our latest products, exclusive offers, and design insights.
            We promise not to spam your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input type="email" placeholder="Enter your email" className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
            <Button className="h-12">Subscribe</Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our <Link to="/privacy" className="underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </section>;
};
const Index = () => {
  return <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <DiscountSection />
      <NewArrivals />
      <Newsletter />
    </div>;
};
export default Index;