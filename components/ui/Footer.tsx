
import Container from './Container';
import FooterTop from './FooterTop';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import { SubText, SubTitle } from './Text';
import { categoriesData, quickLinksData } from '@/constants/data';
import Link from 'next/link';
import { Input } from './input';
import { Button } from './button';


const Footer = () => {
    return (
       <footer className='bg-white border-t'>
 <Container >
  <FooterTop></FooterTop>
  <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
    <div className='space-y-4'><Logo></Logo>
    <SubText> Discover curated furniture collections at BongMart, blending
              style and comfort to elevate your living spaces.</SubText>
    <SocialMedia className='text-darkColor/60' iconClassName='border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green'
    tooltipClassName='bg-drkColor text-white'></SocialMedia>
    </div>
    <div ><SubTitle>Quick Links
      <ul className='space-y-3 mt-4'>
          {
          quickLinksData?.map((item) =>(
            <li key={item?.title}>
              <Link href={item?.href} className='hover:text-shop_light_green hoverEffect font-medium'>{item?.title}</Link>
            </li>
          ))}
      </ul>
      </SubTitle>
    </div>
    <div><SubTitle>Categories
      <ul className='space-y-3 mt-4'>
          {
          categoriesData?.map((item) =>(
            <li key={item?.title}>
              <Link href={`/category/${item?.href}`} className='hover:text-shop_light_green hoverEffect font-medium'>{item?.title}</Link>
            </li>
          ))}
      </ul>
      </SubTitle>
    </div>
    <div>
      <SubTitle> Newsletter</SubTitle>
      <SubText>Subscribe to our newsletter to receive updates and exclusive offers</SubText>
      <form className='space-y-3'>
           <Input placeholder='Enter your email' type='email' required></Input>
           <Button className='w-full'>Subscribe</Button>
           </form>
    </div>
  </div>
  <div className='py-6 border-t text-center text-sm text-gray-600'>
    <div className='text-sm'>
      © {new Date().getFullYear()} <Logo ></Logo>  All
            rights reserved.
    </div>
  </div>
        </Container>

       </footer>
    );
};

export default Footer;