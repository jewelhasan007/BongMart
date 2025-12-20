import { cn } from '@/lib/utils';
import Link from 'next/link';
import  { FC } from 'react';

interface LogoProps {
    className?: string;
    spanDesign?: string;
    as?: 'button' | 'div' | 'span';
    onClick?: () => void;
}   
        
const Logo: FC<LogoProps> = ({className, spanDesign}:{className?: string, spanDesign?: string}) => {
    return (
        <Link href={"/"} className="inline-flex">
      <h2
        className={cn(
          "text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans",
          className
        )}
      >
        BongMar
        <span
          className={cn(
            "text-shop_light_green group-hover:text-shop_dark_green hoverEffect",
            spanDesign
          )}
        >
          t
        </span>
      </h2>
    </Link>
    );
};

export default Logo;