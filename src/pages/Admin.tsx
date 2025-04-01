
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AdminProductManagement } from '@/components/admin/AdminProductManagement';
import { AdminCustomerManagement } from '@/components/admin/AdminCustomerManagement';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Simple admin authentication (this should be replaced with a proper auth system)
  const handleLogin = () => {
    // This is a temporary admin password
    if (password === 'admin123') {
      localStorage.setItem('isAdminAuthenticated', 'true');
      setIsAuthenticated(true);
      toast.success('Login realizado com sucesso!');
    } else {
      toast.error('Senha incorreta!');
    }
  };

  useEffect(() => {
    // Check if admin is already authenticated
    const authStatus = localStorage.getItem('isAdminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    setIsAuthenticated(false);
    navigate('/');
    toast.success('Logout realizado com sucesso!');
  };

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Área Administrativa</h1>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Senha</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Digite a senha de administrador"
              />
            </div>
            <Button className="w-full" onClick={handleLogin}>
              Acessar
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Painel Administrativo</h1>
        <Button variant="destructive" onClick={handleLogout}>
          Sair
        </Button>
      </div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="products">Gerenciar Produtos</TabsTrigger>
          <TabsTrigger value="customers">Gerenciar Clientes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="products" className="mt-6">
          <AdminProductManagement />
        </TabsContent>
        
        <TabsContent value="customers" className="mt-6">
          <AdminCustomerManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
