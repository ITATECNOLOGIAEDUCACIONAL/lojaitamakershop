
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const Checkout = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [isProcessing, setIsProcessing] = useState(false);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">Seu carrinho está vazio</h1>
          <p className="mb-6">Adicione produtos ao carrinho para finalizar sua compra.</p>
          <Button onClick={() => navigate('/')}>Continuar comprando</Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      toast.success('Pedido realizado com sucesso!');
      navigate('/');
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Resumo do Pedido</CardTitle>
              <CardDescription>Confira os itens do seu carrinho</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="divide-y">
                {items.map((item) => (
                  <li key={item.id} className="py-4 flex">
                    {item.imageUrl && (
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                        <img 
                          src={item.imageUrl} 
                          alt={item.name}
                          className="h-full w-full object-cover object-center" 
                        />
                      </div>
                    )}
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium">
                        <h3>{item.name}</h3>
                        <p className="ml-4">{formatCurrency(item.price * item.quantity)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Quantidade: {item.quantity}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">{formatCurrency(getCartTotal())}</span>
            </CardFooter>
          </Card>
        </div>
        
        {/* Payment Methods */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Forma de Pagamento</CardTitle>
              <CardDescription>Escolha como deseja pagar</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <RadioGroup 
                  value={paymentMethod} 
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card">Cartão de Crédito</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pix" id="pix" />
                    <Label htmlFor="pix">PIX</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="boleto" id="boleto" />
                    <Label htmlFor="boleto">Boleto Bancário</Label>
                  </div>
                </RadioGroup>
                
                <Button 
                  type="submit" 
                  className="w-full mt-6"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processando...' : 'Finalizar Pedido'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
