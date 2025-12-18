import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import HomeBanner from '@/components/ui/HomeBanner';
import ProductGrid from '@/components/ui/ProductGrid';
import React from 'react';

const page = () => {
  return (
    <Container>
     <HomeBanner ></HomeBanner>
    <div className='py-10'>
       <ProductGrid></ProductGrid>
    </div>
    </Container>
  );
};

export default page;