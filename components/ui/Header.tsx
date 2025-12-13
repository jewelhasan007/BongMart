import React from 'react';
import Container from './Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';
import FavoriteButton from './FavoriteButton';
import LogIn from './LogIn';
import MobileMenu from './MobileMenu';
import { currentUser } from '@clerk/nextjs/server';
import { ClerkLoaded, SignedIn, SignIn, UserButton } from '@clerk/nextjs';


const Header = async() => {
  const user = await currentUser()
  console.log(user)
    return (
        <header className='bg-white py-5 border-b border-b-black/20'>
     <Container className=' flex items-center justify-between text-lightColor '>
      <div className='w-auto md:w-1/3 flex item-center gap-2.5 justify-start md:gap-0'>
        <MobileMenu></MobileMenu>
        <Logo></Logo>
      </div>
       <HeaderMenu></HeaderMenu>
       <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'><SearchBar></SearchBar>
       <CartIcon></CartIcon>
       <FavoriteButton></FavoriteButton>
       <ClerkLoaded>
  <SignedIn>
    <UserButton></UserButton>
  </SignedIn>
{
  !user && <LogIn></LogIn>
}
       </ClerkLoaded>
       </div>
        </Container>
         </header>
   
    );
};

export default Header;