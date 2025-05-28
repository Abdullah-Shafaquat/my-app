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

const Topseler = () => {
 const products = [
    {
      id: 1,
      name: "Starlink Mini Kit",
      image: "/t1.PNG",
      rating: 5,
      reviews: 211,
      price: "$399.99",
      savings: "SAVE $200",
       badge: "Top Deal",
    },
    {
      id: 2,
      name: "HP DeskJet 2755e Wireless All-In-One Inkjet Printer",
      image: "/t2.PNG",
      rating: 5,
      reviews: 5488,
      price: "$59.99",
      savings: "SAVE $45",
      isTopDeal: false,
    },
    {
      id: 3,
      name: "Frigidaire 26 Ib. Freestanding Ice Maker",
      image: "/t3.PNG",
      rating: 5,
      reviews: 13,
      price: "$89.99",
      savings: "SAVE $110",
       badge: "Top Deal",
    },
    {
      id: 4,
      name: "Insignia Dehumidifier - 35-Pint - White",
      image: "/t4.PNG",
      rating: 5,
      reviews: 1320,
      price: "$179.99",
      savings: "SAVE $150",
       badge: "Top Deal",
    },
    {
      id: 5,
      name: "Lenovo Tab M9 9\" 32GB Android 12 Tablet",
      image: "/t5.PNG",
      rating: 5,
      reviews: 921,
      price: "$99.99",
      savings: "SAVE $80",
       badge: "Top Deal",
    },
    {
      id: 6,
      name: "Philips Sonicare ProtectiveClean 6300 Electric Toothbrush",
      image: "/t6.PNG",
      rating: 5,
      reviews: 387,
      price: "$89.99",
      savings: "SAVE $80",
      isTopDeal: true,
      badge: "Top Deal",
    },
    {
      id: 7,
      name: "Insignia 3.0 Cu. Ft. Bar Fridge w/Top Freezer",
      image: "/t7.PNG",
      rating: 5,
      reviews: 4838,
      price: "$159.99",
      savings: "SAVE $140",
      isTopDeal: true,
      badge: "Top Deal",
    },
    {
      id: 8,
      name: "Segway F3 Pro Electric Scooter (1200 W Motor)",
      image: "/t8.PNG",
      rating: 0,
      reviews: null,
      price: "$1,199.99",
      savings: null,
      badge: "Discount Added in Cart",
    },
    {
      id: 9,
      name: "Samsung 50\" 4K UHD HDR LED Tizen Smart TV",
      image: "/t9.PNG",
      rating: 5,
      reviews: 2403,
      price: "$399.99",
      savings: "SAVE $50",
      additionalInfo: "Plus $18.25 EHF",
    },
    {
      id: 10,
      name: "Dyson V15 Detect Extra Cordless Stick Vacuum",
      image: "/t10.PNG",
      rating: 5,
      reviews: 2301,
      price: "$849.99",
      savings: "SAVE $200",
      isTopDeal: true,
      badge: "Top Deal",
    },
     {
      id: 11,
      name: "Gyrocopters Flash 6.0 2025 Electric Scooter Adult & Teens, Upgraded Design, 8.5” Burst Proof Tires | UL 2272 Approved | Speed 30km/h, Long Range Upto 30km, 350W Motor, APP",
      image: "/t11.PNG",
      rating: 3,
      reviews: 2,
      price: "$399.99",
      savings: "SAVE $50",
      additionalInfo: "Plus $18.25 EHF",
    },
    {
      id: 12,
      name: "HP 14 Laptop - Jet Black (Intel N100/8GB RAM/256GB SSD/Windows 11)",
      image: "/t12.PNG",
      rating: 5,
      reviews: 1,
      price: "$849.99",
      savings: "SAVE $200",
      isTopDeal: true,
      badge: "Top Deal",
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
        Top Selling and Popular Products
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

export default Topseler;