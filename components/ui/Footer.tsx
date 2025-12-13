import React from 'react';
import Container from './Container';
import FooterTop from './FooterTop';
import Logo from './Logo';
import SocialMedia from './SocialMedia';

const Footer = () => {
    return (
       <footer className='bg-white border-t'>
 <Container >
  <FooterTop></FooterTop>
  <div className='py-12 grid grid-cols-1 md:grid-col-2 lg:grid-col-4 gap-8'>
    <div className='space-y-4'><Logo></Logo>
    <p className='text-gray-600 text-sm'> Discover curated furniture collections at BongMart, blending
              style and comfort to elevate your living spaces.</p>
    <SocialMedia className='text-darkColor/60' iconClassName='border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green'
    tooltipClassName='bg-drkColor text-white'></SocialMedia>
    </div>
    <div></div>
    <div></div>
    <div></div>
  </div>
        </Container>

       </footer>
    );
};

export default Footer;