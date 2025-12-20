
import { Title } from './Text';
import Link from 'next/link';
import Image from 'next/image';
import { banner_1 } from '@/images';

const HomeBanner = () => {
    return (
        <div className='py-16 md:py-0 bg-shop_light_pink rounded-lg lg:px-24 flex items-center justify-between'>
          
            <div className='space-y-5'>
                <Title>Grab Upto 50% off on <br />
                Selected headphone
                </Title>
                <Link href={"/shop"} className="bg-shop_btn_dark_green text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_btn_dark_green hoverEffect">Buy Now</Link>
            </div>
            <div>
            <Image src={banner_1} alt='banner_1' className='hidden md:inline-flex w-96'></Image>
            </div>
        </div>
    );
};

export default HomeBanner;