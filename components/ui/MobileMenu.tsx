"use client"
import React, { useState } from 'react';
import AlignLeft from './AlignLeft';
import SideMenu from './SideMenu';

const MobileMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    return (
        <>
            <button onClick={()=> setIsSidebarOpen(!isSidebarOpen)} className="hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer ">
                <AlignLeft ></AlignLeft>
            <SideMenu isOpen={isSidebarOpen} onClose={()=> setIsSidebarOpen(false)}></SideMenu>
            </button>
        </>
    );
};

export default MobileMenu;