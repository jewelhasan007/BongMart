"use client"
import React from 'react';
import { Button } from './button';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props{
    product: Product;
    className?: string;
}
const AddToCartButton = ({product, className}: Props) => {
    const isOutStock = product?.stock === 0;
    const handleAddToCart = () =>{
        window.alert("Added to Cart")
    }
    return (
        <div>
            <Button 
            onClick={handleAddToCart}
            disabled={isOutStock}
            className={cn(
            "w-full bg-shop_btn_dark_green/80 text-shop_light_bg shadow-none border border-shop_btn_dark_green/80 font-semibold tracking-wide hover:text-white hover:bg-shop_btn_dark_green hover:border-shop_btn_dark_green hoverEffect",
            className
          )}
            >
                <ShoppingBag></ShoppingBag>
                {isOutStock ? "Out of Stock" : "Add to Cart"}
            </Button>
        </div>
    );
};

export default AddToCartButton;