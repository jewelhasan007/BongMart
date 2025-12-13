import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import HomeBanner from '@/components/ui/HomeBanner';
import React from 'react';

const page = () => {
  return (
    <Container className='m-3 p-5 border-amber-400 bg-shop_light_pink'>
     <HomeBanner></HomeBanner>
    </Container>
  );
};

export default page;