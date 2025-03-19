
import React from 'react';
import { useCart } from '@/context/CartContext';
import { Scissors, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

interface LaserCutProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

interface PriceFormValues {
  price: string;
}

const LaserCutProducts = () => {
  const { addItem } = useCart();
  const { toast } = useToast();
  
  const [products, setProducts] = React.useState<LaserCutProduct[]>([
    {
      id: "laser-1",
      name: "Chaveiro Raspadinha",
      imageUrl: "/lovable-uploads/6d7f8dc0-1202-4955-b4af-b78f3bf72338.png",
      price: 14.90,
      description: "Chaveiro personalizado em formato de raspadinha, perfeito para lembrança de eventos e presentes."
    },
    {
      id: "laser-2",
      name: "Mini Caixinha Deslizante",
      imageUrl: "/lovable-uploads/8d793d72-29ee-4be1-a48e-161c861a6476.png",
      price: 19.90,
      description: "Caixinha deslizante em MDF, perfeita para guardar pequenos objetos ou dar de presente."
    },
    {
      id: "laser-3",
      name: "Placa Desafio R$ 5.000,00",
      imageUrl: "/lovable-uploads/ca72f799-386e-4bff-844e-9ba5dfb4d28d.png",
      price: 24.90,
      description: "Placa desafio personalizada em MDF, ideal para jogos e brincadeiras em grupo."
    },
    {
      id: "laser-4",
      name: "Calendário Permanente",
      imageUrl: "/lovable-uploads/cf4c9862-c666-4875-b74e-cbe191bdb8f1.png",
      price: 29.90,
      description: "Calendário permanente em MDF com design elegante e personalizável."
    },
    {
      id: "laser-5",
      name: "Mapa do Brasil em Camadas",
      imageUrl: "/lovable-uploads/ebb6abe4-b25d-4ef0-8161-c24cec3b6112.png",
      price: 89.90,
      description: "Mapa do Brasil em MDF com camadas, mostrando os estados com detalhes territoriais."
    }
  ]);

  const handleAddToCart = (product: LaserCutProduct) => {
    addItem({
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
        images: [product.imageUrl]
      },
      quantity: 1
    });
    
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho`,
      duration: 3000,
    });
  };

  const updateProductPrice = (productId: string, newPrice: number) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId 
          ? { ...product, price: newPrice } 
          : product
      )
    );
    
    toast({
      title: "Preço atualizado!",
      description: "O preço do produto foi atualizado com sucesso",
      duration: 3000,
    });
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Scissors className="mr-2 h-6 w-6 text-primary" />
          <h1 className="text-3xl font-display font-bold text-center">Produtos de Corte a Laser</h1>
        </div>
        
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Produtos personalizados feitos com precisão através de corte a laser em diversos materiais.
          Ideal para presentes, decoração e uso pessoal.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 h-20 overflow-hidden">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-primary text-xl font-semibold mr-2">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                    <PriceEditDialog 
                      productId={product.id} 
                      currentPrice={product.price} 
                      onPriceUpdate={updateProductPrice} 
                    />
                  </div>
                  <Button onClick={() => handleAddToCart(product)} className="flex items-center">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Adicionar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PriceEditDialog = ({ 
  productId, 
  currentPrice, 
  onPriceUpdate 
}: { 
  productId: string; 
  currentPrice: number; 
  onPriceUpdate: (productId: string, newPrice: number) => void 
}) => {
  const form = useForm<PriceFormValues>({
    defaultValues: {
      price: currentPrice.toString()
    }
  });

  const handleSubmit = (values: PriceFormValues) => {
    const newPrice = parseFloat(values.price.replace(',', '.'));
    if (!isNaN(newPrice) && newPrice > 0) {
      onPriceUpdate(productId, newPrice);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
            <path d="m15 5 4 4"/>
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Preço</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 pt-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço (R$)</FormLabel>
                  <FormControl>
                    <Input placeholder="0,00" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Salvar</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default LaserCutProducts;
