"use client";
import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";

interface Laptop {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: string;
  savings: string;
  isTopDeal: boolean;
}
function Home() {
   const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/Laptops');
        const data = await response.json();
        setLaptops(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchLaptops();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
 const renderStars = (rating: number | null) => {
    if (rating === null) return null;
    
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar
          key={i}
          className={`${i < rating ? "text-yellow-400" : "text-gray-300"} inline text-sm`}
        />
      ));
  };
  
  return (
    <div className="min-h-screen ">
      {/* Header */}
      <h1 className="p-4 text-2xl font-medium text-gray-800">Microsoft Surface Devices</h1>

      {/* Hero Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-[#dbeafe] to-[#fef3c7]">
        {/* Text + CTA Column */}
        <div className="flex flex-col justify-center p-8 md:p-12 md:ml-16 lg:ml-28">
          <Image 
            src="/Microsoft.PNG" 
            alt="Microsoft Logo" 
            width={300} 
            height={100} 
            className="mb-6"
          />
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-4xl">
            Meet the new Surface <br /> 
            Copilot+ PCs.
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Incredible speed and battery life with signature Surface design.
          </p>
          
        </div>

        {/* Image Column */}
        <div className="flex items-center justify-center p-4 md:p-8">
          <Image 
            src="/laptop.webp" 
            alt="Surface Laptop" 
            width={500} 
            height={500}
            className="object-contain  hover:scale-105"
          />
        </div>
      </div>

      <div>
        <h1 className="text-3xl text-center mt-7 font-bold">Explore new releases</h1>
        <div className="grid grid-cols-2 justify-items-center mt-6 font-serif">
            <div className="hover:underline space-x-4">
                 <Image 
            src="/laptop2.PNG" 
            alt="Surface Laptop" 
            width={500} 
            height={500}
            className="object-contain  "
          />
          <h1 className="text-lg font-bold mt-6">The new Surface Pro 12-inch.</h1>
          <p>The most flexible Copilot+ PC in its class.</p>
          <p className="flex gap-2 text-blue-500">Pre-order now <SlArrowRight size={13} className="mt-1"/></p>
            </div>
            <div className="hover:underline space-x-4">
             <Image 
            src="/laptop3.PNG" 
            alt="Surface Laptop" 
            width={500} 
            height={500}
            className="object-contain"
          />
          <h1 className="text-lg font-bold mt-6">The new Surface Laptop 13-inch.</h1>
          <p>The most portable Copilot+ PC Surface Laptop.</p>
          <p className="flex gap-2 text-blue-500">Shop now <SlArrowRight size={13} className="mt-1"/></p>
            </div>

        </div>
      </div>


   <section className="py-12">
      <h1 className="text-3xl text-center font-bold text-gray-900 mb-8">
        Featured Products
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-48">
        {/* Product 1 */}
        <div className="flex flex-col items-center">
          <div className="relative h-32 w-full mb-3"> {/* Reduced height */}
            <Image 
              src="/laptop4.PNG" 
              alt="Surface Pro" 
              fill
              className="object-contain"
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
            />
          </div>
          <p className="text-blue-600 hover:text-blue-800 font-medium text-md text-center hover:underline transition-colors">
            Surface Pro
          </p>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center">
          <div className="relative h-32 w-full mb-3">
            <Image 
              src="/laptop5.PNG" 
              alt="Surface Laptop" 
              fill
              className="object-contain"
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
            />
          </div>
          <p className="text-blue-600 hover:text-blue-800 font-medium text-md text-center hover:underline transition-colors">
            Surface Laptop
          </p>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center">
          <div className="relative h-32 w-full mb-3">
            <Image 
              src="/laptop6.PNG" 
              alt="Surface Laptop Go 3" 
              fill
              className="object-contain"
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
            />
          </div>
          <p className="text-blue-600 hover:text-blue-800 font-medium text-md text-center hover:underline transition-colors">
            Surface Laptop Go 3
          </p>
        </div>

        {/* Product 4 */}
        <div className="flex flex-col items-center">
          <div className="relative h-32 w-full mb-3">
            <Image 
              src="/laptop7.PNG" 
              alt="Surface Laptop Studio 2" 
              fill
              className="object-contain"
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
            />
          </div>
          <p className="text-blue-600 hover:text-blue-800 font-medium text-md text-center hover:underline transition-colors">
            Surface Laptop Studio 2
          </p>
        </div>
      </div>
    </section>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 p-6">
      {laptops.map((laptop : Laptop) => (
        <div key={laptop.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="p-4">
           
            
            {/* Image placeholder - replace with actual image */}
            <div className=" h-40 flex items-center justify-center rounded mb-4">
              {laptop.image ? (
                <div>
                <img 
                  src={laptop.image} 
                  alt={laptop.name} 
                  className="object-contain"
                />
                 </div>
              ) : (
                <p className="text-gray-500">Image not available</p>
              )}
            </div>
            
            <div className="space-y-2">
              <div className=" items-center">
                <h3 className="text-lg font-normal mb-2 line-clamp-2 hover:underline">{laptop.name}</h3>
                <span className="font-bold mr-2">{laptop.price}</span>
                {laptop.savings && (
                  <span className="text-red-600 text-sm">{laptop.savings}</span>
                )}
              </div>{renderStars(laptop.rating)}
              {laptop.reviews !== undefined && (
                <div className="text-sm text-gray-500">
                  ({laptop.reviews} Review{laptop.reviews !== 1 ? 's' : ''})
                </div>
              )}
              
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Available online only</span>
              </div>
              
              
            </div>
          </div>
        </div>
      ))}
    </div>

    
    </div>
  );
}

export default Home;