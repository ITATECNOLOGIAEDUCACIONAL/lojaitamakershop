
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Categories = () => {
  const categories = [
    {
      id: '1',
      name: 'Impressão 3D',
      description: 'Produtos personalizados impressos em 3D com alta qualidade e precisão.',
      path: '/impressao-3d',
      imageUrl: '/lovable-uploads/987e2d86-9830-4f2d-9168-b9e29c4ae67a.png'
    },
    {
      id: '2',
      name: 'Corte a Laser',
      description: 'Itens fabricados com corte a laser para detalhes precisos e acabamento profissional.',
      path: '/corte-a-laser',
      imageUrl: '/lovable-uploads/1cb996d5-511a-4835-9e3e-dca5c687c977.png'
    },
    {
      id: '3',
      name: 'Kits de Robótica',
      description: 'Kits educacionais e componentes para iniciantes e entusiastas de robótica.',
      path: '/produtos/robotica',
      imageUrl: '/lovable-uploads/6d7f8dc0-1202-4955-b4af-b78f3bf72338.png'
    }
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex items-center mb-8">
        <Button asChild variant="ghost" className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Categorias</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link key={category.id} to={category.path}>
            <Card className="h-full transition-all hover:shadow-lg">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={category.imageUrl} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-2">{category.name}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
