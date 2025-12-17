import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import {ClerkProvider} from "@clerk/nextjs"


export const metadata: Metadata = {
  title: {
    template: "%s - BongMart online store",
    default: "BongMart online store",
  },
  description: "BongMart online store, Your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

      
   <div className="flex flex-col min-h-screen">
         <Header></Header>
    <main className="flex-1">
          {children}
    </main>
        <Footer></Footer>
   </div>
   
    </ClerkProvider>
  );
}
