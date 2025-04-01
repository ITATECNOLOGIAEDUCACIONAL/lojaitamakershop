
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'sonner';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  isVerified: boolean;
  createdAt: string;
}

// Sample customer data - in a real app this would come from a database
const initialCustomers: Customer[] = [
  {
    id: '1',
    name: 'Ana Silva',
    email: 'ana.silva@email.com',
    phone: '(11) 98765-4321',
    address: 'Av. Paulista, 1000, São Paulo, SP',
    isVerified: true,
    createdAt: '2023-05-15T10:30:00',
  },
  {
    id: '2',
    name: 'Carlos Oliveira',
    email: 'carlos@email.com',
    phone: '(21) 99876-5432',
    address: 'Rua Copacabana, 500, Rio de Janeiro, RJ',
    isVerified: false,
    createdAt: '2023-06-20T14:45:00',
  },
];

export const AdminCustomerManagement = () => {
  const [customers, setCustomers] = useState<Customer[]>(() => {
    const savedCustomers = localStorage.getItem('adminCustomers');
    return savedCustomers ? JSON.parse(savedCustomers) : initialCustomers;
  });

  const [filter, setFilter] = useState<'all' | 'verified' | 'unverified'>('all');

  useEffect(() => {
    localStorage.setItem('adminCustomers', JSON.stringify(customers));
  }, [customers]);

  const filteredCustomers = () => {
    switch (filter) {
      case 'verified':
        return customers.filter(customer => customer.isVerified);
      case 'unverified':
        return customers.filter(customer => !customer.isVerified);
      default:
        return customers;
    }
  };

  const handleVerifyCustomer = (id: string) => {
    const updatedCustomers = customers.map(customer =>
      customer.id === id ? { ...customer, isVerified: true } : customer
    );
    setCustomers(updatedCustomers);
    toast.success('Cliente verificado com sucesso!');
  };

  const handleUnverifyCustomer = (id: string) => {
    const updatedCustomers = customers.map(customer =>
      customer.id === id ? { ...customer, isVerified: false } : customer
    );
    setCustomers(updatedCustomers);
    toast.success('Verificação do cliente removida!');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Clientes</h2>
        <Tabs value={filter} onValueChange={(value) => setFilter(value as 'all' | 'verified' | 'unverified')}>
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="verified">Verificados</TabsTrigger>
            <TabsTrigger value="unverified">Não Verificados</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="space-y-4">
        {filteredCustomers().length === 0 ? (
          <p className="text-center py-8 text-gray-500">Nenhum cliente encontrado.</p>
        ) : (
          filteredCustomers().map((customer) => (
            <Card key={customer.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">{customer.name}</CardTitle>
                  <div className="flex items-center">
                    {customer.isVerified ? (
                      <span className="flex items-center text-green-600">
                        <CheckCircle className="mr-1 h-5 w-5" />
                        Verificado
                      </span>
                    ) : (
                      <span className="flex items-center text-red-600">
                        <XCircle className="mr-1 h-5 w-5" />
                        Não Verificado
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p>{customer.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefone</p>
                    <p>{customer.phone}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500">Endereço</p>
                    <p>{customer.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Data de Cadastro</p>
                    <p>{formatDate(customer.createdAt)}</p>
                  </div>
                </div>
                <div className="mt-4 flex space-x-2">
                  {!customer.isVerified ? (
                    <Button onClick={() => handleVerifyCustomer(customer.id)} className="flex-1">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Verificar Cliente
                    </Button>
                  ) : (
                    <Button variant="outline" onClick={() => handleUnverifyCustomer(customer.id)} className="flex-1">
                      <XCircle className="mr-2 h-4 w-4" />
                      Remover Verificação
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};
