import { CarouselSpacing } from "./CarouselSpacing";
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { IoIosStarHalf, IoIosStarOutline } from "react-icons/io"
import { MdOutlineStar, MdOutlineStarHalf } from "react-icons/md"
import { IoStarHalf } from "react-icons/io5"

function DiscoverMore() {
    const SaleProduct = [
            {
                id: 1,
                image: "/d1.PNG",
                title: "Lenovo ThinkPad P16s Gen 2 AMD Laptop, 16 400 nits, Ryzen 7 PRO 7840U, 64GB, 1TB SSD",
                link: "/",
                star : [<MdOutlineStar />  , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />] ,
                save: "Save $150",
                price: "$849.99",
                reviews : "183 Reviews"
            },
            {
                id: 2,
                image: "/d2.PNG",
                title: "Costway 8PCS Patio Rattan Furniture Set Fire Pit Table Tank Holder Cover Deck",
                link: "/",
                star : [<MdOutlineStar /> , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />] ,
                save: "SAVE $1,210",
                price: "$1,189.99",
                reviews : "1 Review"
            },
            {
                id: 3,
                image: "/d3.PNG",
                title: "Gyrocopters Flash 6.0 2025 Electric Scooter Adult & Teens, Upgraded Design, 8.5” Burst Proof Tires | UL 2272 Approved | Speed 30km/h, Long Range Upto 30km, 350W Motor, APP",
                link: "/",
                star : [<MdOutlineStar /> , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />] ,
                save: "Save $150",
                price: "$849.99",
                reviews : ""
            },
            {
                id: 4,
                image: "/d4.PNG",
                title: "Lenovo ThinkPad P16s Gen 2 AMD Laptop, 16 400 nits, Ryzen 7 PRO 7840U, 64GB, 1TB SSD",
                link: "/",
                star : [<MdOutlineStar /> , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />] ,
                save: "Save $150",
                price: "$849.99",
                reviews : ""
            },
            {
                id: 5,
                image: "/d5.PNG",
                title: "MotionGrey Ergo2 - Adjustable Electric Standing Desk with Memory Settings - 55x24 Dark Brown Top Black Frame - Ergonomic Sit-to-Stand Desk for Home and Office - With Cup Holder",
                link: "/",
                star : [<MdOutlineStar /> , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />] ,
                save: "Save $150",
                price: "$849.99",
                reviews : ""
            },
            {
                id: 6,
                image: "/d6.PNG",
                title: "Open Box - LG OLED65C4PUA 65 4K HDR / 144Hz / OLED evo webOS Smart TV",
                link: "/",
                star : [<MdOutlineStar /> , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />] ,
                save: "Save $150",
                price: "$849.99",
                reviews : ""
            },
            {
                id: 7,
                image: "/d7.PNG",
                title: "Open Box - Apple AirPods Max Over-Ear Noise Cancelling Bluetooth Headphones - Space Grey",
                link: "/",
                star : [<MdOutlineStar /> , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />] ,
                save: "Save $150",
                price: "$849.99",
                reviews : ""
            },
            {
                id: 8,
                image: "/d8.PNG",
                title: "Costway Zero Gravity SL Track Full Body Massage Chair with Voice Control Heat Foot Roller",
                link: "/",
                star : [<MdOutlineStar /> , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />] ,
                save: "Save $150",
                price: "$849.99",
                reviews : ""
            },
            {
                id: 9,
                image: "/d9.PNG",
                title: "Costway 10000 BTU Portable Air Conditioner 4-in-1 AC with Cool Fan Dehumidifier Sleep Mode",
                link: "/",
                star : [<MdOutlineStar /> , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />] ,
                save: "Save $150",
                price: "$849.99",
                reviews : ""
            },
            {
                id: 10,
                image: "/d10.PNG",
                title: "XGIMI MoGo 3 Pro Home Projector + PowerBase Stand Bundle, Home Theatre Setup, Portable for Outdoor Movies, 4k Support, Smart Mini Projector, Bluetooth/Speaker, Licensed Netflix",
                link: "/",
                star : [<MdOutlineStar /> , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />] ,
                save: "Save $150",
                price: "$849.99",
                reviews : ""
            },
            {
                id: 11,
                image: "/d11.PNG",
                title: "Refurbished (Excellent) - Dyson Official Outlet - Airwrap Styler Complete- Nickel/Copper - (1 Year Dyson Warranty)",
                link: "/",
                star : [<MdOutlineStar /> , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />] ,
                save: "Save $150",
                price: "$849.99",
                reviews : ""
            },
            {
                id: 12,
                image: "/d12.PNG",
                title: "Open Box - Apple AirPods Max Over-Ear Noise Cancelling Bluetooth Headphones - Space Grey",
                link: "/",
                star : [<MdOutlineStar /> , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />] ,
                save: "Save $150",
                price: "$849.99",
                reviews : ""
            },
            {
                id: 13,
                image: "/d13.PNG",
                title: "Canon IXY 650 Compact Digital Wi-Fi Camera - Black",
                link: "/",
                star : [<MdOutlineStar /> , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />] ,
                save: "Save $150",
                price: "$849.99",
                reviews : ""
            },
            {
                id: 14,
                image: "/d14.PNG",
                title: "BLACK+DECKER Small Portable Washer, Portable Washer 1.7 Sq. Ft. with 6 Cycles, Transparent Lid & LED Display",
                link: "/",
                star : [<MdOutlineStar /> , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />] ,
                save: "Save $150",
                price: "$849.99",
                reviews : ""
            },
        ]

    return ( 
        <div>
           <div className="bg-gradient-to-r from-[#0050d8] to-[#0074e8] grid grid-cols-1 lg:grid-cols-[30%_70%] mt-12 rounded-lg overflow-hidden">
                <div className="  mt-7 font-bold text-white p-7">
                  <p className="text-4xl">Discover more deals across an incredible selection.</p>
            </div>
            <div>
                <div>
        <div className="relative w-full max-w-4xl mx-auto mt-5 px-8"> {/* Added padding for button space */}
            <Carousel className="w-full" >
                <CarouselContent>
                    {SaleProduct.map((product) => (
                        <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                            <Card className="h-full">
                                <CardContent className="flex flex-col items-center p-4 ">
                                    <div className="w-full h-48 flex items-center justify-center mb-4">
                                        <img
                                            src={product.image}
                                            alt="Product"
                                            className="rounded-lg object-contain max-h-full max-w-full"
                                        />
                                    </div>
                                    <div className="text-center flex-grow flex flex-col">
                                        <Link className="text-sm mb-2 hover:underline" href={product.link}>{product.title}</Link>
                                        <div className="flex items-center justify-center mt-1.5 ">
                                            {product.star && product.star.map((star, index) => (
                                                <span key={index} className=" text-lg">{star}</span>
                                            ))} 
                                            </div>
                                            <div>
                                            {
                                                product.reviews && (
                                                    <p className="text-sm text-gray-500 ml-2">{product.reviews}</p>
                                                )
                                            }
                                            </div>
                                            
                                        
                                        <div className="mr-24">
                                            <p className="bg-red-700 rounded-lg text-white text-center mt-5">Top Deal</p>
                                        </div>
                                        <div>
                                        {product.save && (
                                            <p className="text-sm uppercase font-bold text-left text-red-800 mt-2">{product.save}</p>
                                        )}
                                       </div>
                                       <div>
                                        {product.price && (
                                            <p className="text-lg font-bold text-left text-red-800">{product.price}</p>
                                        )}

                                       </div>
                                       
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute  top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute  top-1/2 -translate-y-1/2"/>
            </Carousel>
        </div>



        
        </div>
            </div>
        </div>


        </div>
     );
}

export default DiscoverMore;