import React from 'react';
import { useCart } from '@/context/CartContext';
import { Printer, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

interface PrintProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

interface PriceFormValues {
  price: string;
}

const ThreeDPrintProducts = () => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [products, setProducts] = React.useState<PrintProduct[]>([
    {
      id: "3d-1",
      name: "Cofre Creeper",
      imageUrl: "/lovable-uploads/45c78b88-2ca7-46ab-9b46-0a39a1de9230.png",
      price: 35.90,
      description: "Cofre personalizado em formato de Creeper do Minecraft, perfeito para guardar moedas e pequenos objetos. Impressão 3D em PLA."
    },
    {
      id: "3d-2",
      name: "Chaveiro Personalizado",
      imageUrl: "/lovable-uploads/a0604a35-c9b5-49fd-9865-2693ac0bc7cc.png",
      price: 15.90,
      description: "Chaveiro personalizado com nome 'Beatriz', feito em impressão 3D com cores vibrantes. Personalizamos com o nome que desejar."
    },
    {
      id: "3d-3",
      name: "Chaveiro Instagram",
      imageUrl: "/lovable-uploads/d87b419b-263a-4dc0-ba9e-692ff3c26ecd.png",
      price: 12.90,
      description: "Chaveiro em formato do logo do Instagram, impresso em 3D com acabamento de qualidade. Perfeito para presentes."
    },
    {
      id: "3d-4",
      name: "Organizador de Chaveiros",
      imageUrl: "/lovable-uploads/a64e8e68-1ae5-4065-abdf-960953868eb2.png",
      price: 45.90,
      description: "Suporte giratório para organizar e exibir chaveiros, feito em impressão 3D. Ideal para coleções ou uso comercial."
    },
    {
      id: "3d-5",
      name: "Cofre Mecânico",
      imageUrl: "/lovable-uploads/1cb996d5-511a-4835-9e3e-dca5c687c977.png",
      price: 55.90,
      description: "Cofre mecânico com design exclusivo e engrenagens visíveis, produzido em impressão 3D. Combina funcionalidade e estilo."
    }
  ]);

  const handleAddToCart = (product: PrintProduct) => {
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
          <Printer className="mr-2 h-6 w-6 text-primary" />
          <h1 className="text-3xl font-display font-bold text-center">Produtos de Impressão 3D</h1>
        </div>
        
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Produtos personalizados feitos com tecnologia de impressão 3D de alta resolução.
          Ideais para presentes, decoração ou uso pessoal com design exclusivo.
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

export default ThreeDPrintProducts;
