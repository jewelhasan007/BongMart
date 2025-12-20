"use client"

import { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productType } from "@/constants/data";
import { client } from "@/sanity/lib/client";
import {motion} from "motion/react"
import { LoaderIcon } from "lucide-react";

const ProductGrid = () => {
    const [products, setProducts] = useState([])
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
       {!loading ? <div className="fles flex-col items-center justify-center py-10 min-h-80 gap-4 bg-gray-100 w-full mt-10">
        <div className="space-x-2 flex items-center text-blue-600"><LoaderIcon className="w-5 h-6 animate-spin"></LoaderIcon> <span>Product is laoding...</span>
        
        </div >
       </div> : <>products</> }
        </div>
    );
};

export default ProductGrid;