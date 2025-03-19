
import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Printer, Scissors, CircuitBoard, Gift } from 'lucide-react';

const Categories = () => {
  const categories = [
    { name: "Robótica", icon: Bot, path: "/produtos/robotica" },
    { name: "Impressão 3D", icon: Printer, path: "/impressao-3d" },
    { name: "Corte a Laser", icon: Scissors, path: "/corte-a-laser" },
    { name: "Componentes", icon: CircuitBoard, path: "/produtos/componentes" },
    { name: "Personalizados", icon: Gift, path: "/produtos/personalizados" }
  ];
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-center mb-8">
          🤖 Loja de robótica, impressão 3D e corte a laser 🎨
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
          Conectando tecnologia e criatividade!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map(category => (
            <Link 
              key={category.name} 
              to={category.path} 
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
                {React.createElement(category.icon, { className: "w-8 h-8" })}
              </div>
              <p className="text-center font-medium text-gray-700">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
