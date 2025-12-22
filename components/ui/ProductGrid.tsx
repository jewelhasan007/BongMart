"use client"

import { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productType } from "@/constants/data";
import { client } from "@/sanity/lib/client";
import {animate, AnimatePresence, motion} from "motion/react"
import { LoaderIcon } from "lucide-react";
import NoProductAvailable from "./NoProductAvailable";
import ProductCart from "./ProductCart";
import { Product } from "@/sanity.types";

const ProductGrid = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)
    const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "")

    const query = `*[_type == "product" && variant == "gadget"]`
    const params = {variant: selectedTab.toLocaleLowerCase()}
    useEffect(() =>{
        const fetchData = async () =>{
            setLoading(true);
            try {
                const response = await client.fetch(query, params)
                setProducts(response);
            } catch (error) {
            console.error("Product fetching Error", error);
            }finally{setLoading(false)}
        }
        fetchData();
    },[selectedTab])
    
    return (
        <div>
       <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab}></HomeTabBar>
       {loading ? (<div className="fles flex-col items-center justify-center py-10 min-h-80 gap-4 bg-gray-100 w-full mt-10">
        <div className="space-x-2 flex justify-center text-blue-600"><LoaderIcon className="w-5 h-6 animate-spin"></LoaderIcon> <span>Product is laoding...</span>
        
        </div >
       </div>) : products?.length? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">{
    products?.map((product) =>(
        <AnimatePresence key={product?._id}>
            <motion.div 
            layout 
            initial={{opacity: 0.2}} 
            animate={{opacity:1}} 
            exit={{opacity:0}}>
                <ProductCart product={product}></ProductCart>
            </motion.div>
        </AnimatePresence>
    ))}
    </div>):(<NoProductAvailable></NoProductAvailable>) }
        </div>
    );
};

export default ProductGrid;