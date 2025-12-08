import { Button } from '@/components/ui/button';
import React from 'react';

const page = () => {
  return (
    <div className='m-3 p-5 border-amber-400 bg-shop_light_pink'>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam odio tenetur possimus natus molestiae est, atque eos voluptatum alias cum sunt consectetur debitis soluta aspernatur reprehenderit dolores tempore unde laborum!</p>
    <Button size="lg" variant="outline" aria-label="Submit" className='bg-shop_orange' >Details...</Button>
    </div>
  );
};

export default page;