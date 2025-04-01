
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

// Define the footer config structure
export interface FooterConfig {
  storeName: string;
  storeDescription: string;
  address: string;
  phone: string;
  email: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
  };
}

// Default footer configuration
const defaultFooterConfig: FooterConfig = {
  storeName: 'ITASHOP',
  storeDescription: 'Experience quality products with our premium selection. We believe in simplicity, functionality, and exceptional customer service.',
  address: '123 Design Street, Creative City, 10001',
  phone: '+1 (555) 123-4567',
  email: 'support@itashop.com',
  socialLinks: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    youtube: '#'
  }
};

export const AdminFooterConfiguration = () => {
  const [footerConfig, setFooterConfig] = useState<FooterConfig>(defaultFooterConfig);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    // Load saved configuration from localStorage if it exists
    const savedConfig = localStorage.getItem('footerConfig');
    if (savedConfig) {
      setFooterConfig(JSON.parse(savedConfig));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    nestedKey?: keyof FooterConfig['socialLinks']
  ) => {
    const { name, value } = e.target;
    
    if (nestedKey) {
      setFooterConfig(prev => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [nestedKey]: value
        }
      }));
    } else {
      setFooterConfig(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const saveConfiguration = () => {
    setIsSaving(true);
    
    try {
      // Save to localStorage (in a real app, this would go to a database)
      localStorage.setItem('footerConfig', JSON.stringify(footerConfig));
      toast.success('Configurações do rodapé atualizadas com sucesso!');
    } catch (error) {
      toast.error('Erro ao salvar configurações');
      console.error('Error saving footer config:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Informações da Loja</CardTitle>
          <CardDescription>Configure as informações básicas exibidas no rodapé</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="storeName" className="text-sm font-medium">Nome da Loja</label>
              <Input 
                id="storeName"
                name="storeName"
                value={footerConfig.storeName} 
                onChange={handleChange}
              />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="storeDescription" className="text-sm font-medium">Descrição da Loja</label>
              <Textarea 
                id="storeDescription"
                name="storeDescription"
                value={footerConfig.storeDescription} 
                onChange={handleChange}
                rows={3}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Informações de Contato</CardTitle>
          <CardDescription>Configure as informações de contato da loja</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="address" className="text-sm font-medium">Endereço</label>
              <Input 
                id="address"
                name="address"
                value={footerConfig.address} 
                onChange={handleChange}
              />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-medium">Telefone</label>
              <Input 
                id="phone"
                name="phone"
                value={footerConfig.phone} 
                onChange={handleChange}
              />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input 
                id="email"
                name="email"
                value={footerConfig.email} 
                onChange={handleChange}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Redes Sociais</CardTitle>
          <CardDescription>Configure os links das redes sociais</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="facebook" className="text-sm font-medium">Facebook</label>
              <Input 
                id="facebook"
                value={footerConfig.socialLinks.facebook} 
                onChange={(e) => handleChange(e, 'facebook')}
              />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="twitter" className="text-sm font-medium">Twitter</label>
              <Input 
                id="twitter"
                value={footerConfig.socialLinks.twitter} 
                onChange={(e) => handleChange(e, 'twitter')}
              />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="instagram" className="text-sm font-medium">Instagram</label>
              <Input 
                id="instagram"
                value={footerConfig.socialLinks.instagram} 
                onChange={(e) => handleChange(e, 'instagram')}
              />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="youtube" className="text-sm font-medium">Youtube</label>
              <Input 
                id="youtube"
                value={footerConfig.socialLinks.youtube} 
                onChange={(e) => handleChange(e, 'youtube')}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Button 
        onClick={saveConfiguration} 
        disabled={isSaving}
        className="w-full"
      >
        {isSaving ? 'Salvando...' : 'Salvar Configurações'}
      </Button>
    </div>
  );
};
