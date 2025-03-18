
import React from 'react';
import { Button } from '@/components/ui/button';

const DiscountSection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-display font-bold mb-4">
          Exclusive Discount
        </h2>
        <p className="text-lg mb-8">
          Get 20% off on all products this week only. Don't miss out on this
          amazing offer!
        </p>
        <Button size="lg" variant="secondary">
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default DiscountSection;
