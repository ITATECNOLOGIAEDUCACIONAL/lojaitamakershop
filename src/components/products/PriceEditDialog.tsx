
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface PriceFormValues {
  price: string;
}

interface PriceEditDialogProps {
  productId: string;
  currentPrice: number;
  onPriceUpdate: (productId: string, newPrice: number) => void;
}

export const PriceEditDialog: React.FC<PriceEditDialogProps> = ({ 
  productId, 
  currentPrice, 
  onPriceUpdate 
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
