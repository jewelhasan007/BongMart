import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { FC } from 'react';

interface LogoProps {
    className?: string;
    spanDesign?: string;
    as?: 'button' | 'div' | 'span';
    onClick?: () => void;
}   
        
const Logo: FC<LogoProps> = ({className, spanDesign, as: Component = 'div', onClick}:{className?: string, spanDesign?: string}) => {
    return (
        <Component onClick={onClick} className={className} href={"/"}>
            <h2 className={cn("text-2xl text-shop_btn_dark_green font-black tracking-wider uppercase hover:text-shop_light_green", className )}> BongMar
                <span  className={cn("text-shop_light_green group-hover:text-shop_btn_dark_green hoverEffect", spanDesign)}>t</span>
                </h2>
        </Component>
    );
};

export default Logo;