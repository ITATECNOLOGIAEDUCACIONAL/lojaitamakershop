
import React from 'react';
import { ArrowRight, ShoppingBag, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent z-0"></div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 relative z-10">
        <div className="space-y-6 mt-12 lg:mt-0 animate-slide-up">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm">Produtos dias das mães!!</Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-tight font-bold">
            Bem-vindo à <br className="hidden sm:block" />
            <span className="text-primary">ItaMakerShop</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-justify">
            A ItaMaker Shop nasceu com o propósito de levar inovação e criatividade ao alcance de todos. Somos especializados em robótica educacional, cultura maker, impressão 3D e corte a laser, oferecendo produtos personalizados e soluções práticas para professores, alunos e entusiastas da tecnologia.
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
    </section>
  );
};

export default Hero;
