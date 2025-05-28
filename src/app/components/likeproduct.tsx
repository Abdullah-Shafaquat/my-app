import React from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const LikeProduct = () => {
const products = [
  // First set of products
  {
    id: 1,
    name: "Starlink Mini Kit",
    image: "/like1.PNG",
    rating: 5,
    reviews: 212,
    price: "$399.99",
    savings: "SAVE $200",
    isTopDeal: true,
    badge: "Top Deal"
  },
  {
    id: 2,
    name: "GE 2.8 Cu. Ft. Electric Washer & Dryer Combo (GFQ14ESSNWW) - White",
    image: "/like2.PNG",
    rating: 4,
    reviews: 10109,
    price: "$99.99",
    savings: "SAVE $299",
    isTopDeal: false
  },
  {
    id: 3,
    name: "Dyson V7 Advanced Cordless Stick Vacuum - Silver",
    image: "/like3.PNG",
    rating: 5,
    reviews: 3790,
    price: "$1,649.99",
    savings: "SAVE $269",
    isTopDeal: true,
    badge: "Top Deal",
    additionalInfo: "Plus $0.35 EHF"
  },
  {
    id: 4,
    name: "Samsung 50 4K UHD HDR LED Tizen Smart TV (UN50DU6900FXZC) - 2024",
    image: "/like4.PNG",
    rating: 5,
    reviews: 12,
    price: "$3,499.99",
    savings: "SAVE $500",
    badge: "Discount Added In Cart",
    additionalInfo: "Plus $18.25 EHF"
  },
  {
    id: 5,
    name: "The Bigly Brothers All-in-1 Smart Watch for Women, Sports Watch with Call/Text, Heart Rate, Blood Oxygen Level Monitor, Sleep Tracker, 110+ Sport Modes, IP68 Waterproof",
    image: "/like5.PNG",
    rating: 5,
    reviews: 278,
    price: "$249.98",
    savings: "SAVE $100",
    isTopDeal: false
  },
  // Second set of products (new additions)
  {
    id: 6,
    name: "Sony STR-DH190 2.0 Bluetooth, A/B Speaker, Stereo Receiver",
    image: "/like6.PNG",
    rating: null, // Not shown in image
    reviews: 542,
    price: "$349.99",
    savings: "SAVE $150",
    isTopDeal: true,
    badge: "Top Deal",
    isSponsored: true
  },
  {
    id: 7,
    name: "Outsunny Replacement Mosquito Netting for Gazebo 10' x 10' Black Screen Walls for Canopy with Zippers for Parties and Outdoor Activities, Beige",
    image: "/like7.PNG",
    rating: null, // Not shown in image
    reviews: 2414,
    price: "$399.99",
    savings: "SAVE $50",
    additionalInfo: "Plus $18.25 EHF"
  },
  {
    id: 8,
    name: "Withings Body Smart Wi-Fi Digital Smart Scale - Black",
    image: "/like8.PNG",
    rating: null, // Not shown in image
    reviews: null, // Not shown in image
    price: "$3,495.00",
    savings: "SAVE $2,004", // Fixed the typo from $2.004 to $2,004
    isFeatured: true
  },
  {
    id: 9,
    name: "Amazon Echo Spot Smart Alarm Clock with Alexa - Black",
    image: "/like9.PNG",
    rating: null, // Not shown in image
    reviews: 356,
    price: "$409.99",
    additionalInfo: "Plus $0.98 EHF"
  },
  {
    id: 10,
    name: "Anker SOLIX C1000X Solar Generator (1*200W Solar Panel Included)-Dark Gray",
    image: "/like10.PNG",
    rating: null, // Not shown in image
    reviews: 17,
    price: "$1,379.99",
    savings: "SAVE $20",
    isTopDeal: true,
    badge: "Top Deal"
  },
   {
    id: 11,
    name: "Microsoft Surface Pro (LCD) Copilot+ PC 13 512GB Tablet with Snapdragon X Plus/16GB RAM (2024) - Dune - Device Only",
    image: "/like11.PNG",
    rating: null, // Not shown in image
    reviews: 17,
    price: "$1,379.99",
    savings: "SAVE $20",
    isTopDeal: true,
    badge: "Top Deal"
  },
   {
    id: 12,
    name: "COWSAR Countertop Ice Maker 30LBS/24H Portable Ice Machine w/ Top External Water Tank Self-Cleaning Function 16 Pcs Ice Cube/13 Mins Ice Scoop & Basket Perfect for Home Party Black",
    image: "/like12.PNG",
    rating: null, // Not shown in image
    reviews: 17,
    price: "$1,379.99",
    savings: "SAVE $20",
    isTopDeal: true,
    badge: "Top Deal"
  },
  {
    id: 13,
    name: "Outsunny 9' x 5' Grill Gazebo, Hardtop BBQ Gazebo Canopy with 2-Tier Polycarbonate Roof, Shelves Serving Tables and Hooks, for Backyard Patio Lawn, Black and Coffee",
    image: "/like13.PNG",
    rating: null, // Not shown in image
    reviews: 17,
    price: "$1,379.99",
    savings: "SAVE $20",
    isTopDeal: true,
    badge: "Top Deal"
  }
];

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
    <div className="max-w-[1800px] mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-2xl sm:text-3xl text-center font-bold text-gray-900 mb-6 sm:mb-8">
        Products we think you'll love
      </h1>

      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: false,
            slidesToScroll: "auto",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1 sm:-ml-2">
            {products.map((product) => (
              <CarouselItem 
                key={product.id} 
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-1 sm:pl-2"
              >
                <div className="h-full">
                  <div className="bg-white rounded-lg shadow-sm sm:shadow-md overflow-hidden hover:shadow-md sm:hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border border-gray-100 sm:border-none">
                    {/* Product Image */}
                    <div className="w-full h-32 sm:h-40 overflow-hidden bg-gray-50 flex items-center justify-center p-1 sm:p-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    
                    <div className="p-2 sm:p-3 flex-grow flex flex-col">
                      <Link href="#" className="block">
                        <h3 className="text-xs sm:text-sm font-medium text-gray-900 mb-1 line-clamp-2 leading-tight">
                          {product.name}
                        </h3>
                        {product.rating !== null && (
                          <div className=" mb-1">
                            <div className="flex">
                              {renderStars(product.rating)}
                            </div>
                            <span className="text-[10px] sm:text-xs text-gray-500 ml-1">
                              ({product.reviews?.toLocaleString()})
                            </span>
                          </div>
                        )}
                      </Link>
                      <div className="mt-auto">
                        {product.badge && (
                          <span className={`inline-block ${
                            product.badge === "Top Deal" 
                              ? "bg-red-100 text-red-800" 
                              : "bg-red-100 text-red-800"
                          } text-[9px] sm:text-[10px] font-semibold px-1 sm:px-1.5 py-0.5 rounded mb-1`}>
                            {product.badge}
                          </span>
                        )}
                        <div className="flex items-center gap-2">
                          <span className="text-sm sm:text-base font-bold text-red-600">
                            {product.price}
                          </span>
                          {product.savings && (
                            <span className="text-[10px] sm:text-xs font-semibold text-red-600">
                              {product.savings}
                            </span>
                          )}
                        </div>
                        {product.additionalInfo && (
                          <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">
                            {product.additionalInfo}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-sm sm:shadow-md hover:bg-gray-100 -ml-2 sm:-ml-4" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-sm sm:shadow-md hover:bg-gray-100 -mr-2 sm:-mr-4" />
        </Carousel>
      </div>
    </div>
  );
};

export default LikeProduct;