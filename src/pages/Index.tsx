
import React from 'react';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import DiscountSection from '@/components/home/DiscountSection';
import NewArrivals from '@/components/home/NewArrivals';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <DiscountSection />
      <NewArrivals />
      <Newsletter />
    </div>
  );
};

export default Index;
