
import React from 'react';
import { Button } from '@/components/ui/button';

const NewArrivals = () => {
  const newArrivals = [
    {
      id: 4,
      name: "Smart Backpack",
      imageUrl: "https://images.unsplash.com/photo-1556020619-7bc4bf2344ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$129.99"
    }, 
    {
      id: 5,
      name: "Ceramic Mug Set",
      imageUrl: "https://images.unsplash.com/photo-1555858254-696695948c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$39.99"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-center mb-8">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newArrivals.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-medium text-lg text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.price}</p>
                <Button className="mt-4 w-full">View Product</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
