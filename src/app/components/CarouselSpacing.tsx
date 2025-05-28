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

export function CarouselSpacing() {
    const SaleProduct = [
        {
            id: 1,
            image: "/sale1.PNG",
            title: "HP 15.6 Laptop - Jet Black (Intel Core i7-1355U/16GB RAM/1TB SSD/Windows 11)",
            link: "/",
            star : [<IoIosStarOutline />  , <IoIosStarOutline />, <IoIosStarOutline />, <IoIosStarOutline />, <IoIosStarOutline />] ,
            save: "Save $150",
            price: "$849.99",
            reviews : ""
        },
        {
            id: 2,
            image: "/sale2.PNG",
            title: "Samsung 55 4K UHD HDR OLED Tizen Smart TV (QN55S92DAFXZC) - 2024 - Graphite Black - Only at Best Buy",
            link: "/",
            star : [<MdOutlineStar />  , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />],
            save: "Save $400",
            price: "$1,499.99",
            reviews : "331 Reviews"
        },
        {
            id: 3,
            image: "/sale3.PNG",
            title: "Segway Ninebot KickScooter MAX G2 Electric Scooter (900 W Motor / 50km Range / 35.4km/h Top Speed) - Dark Grey",
            star : [<MdOutlineStar />  , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />],
            link: "/",
            save: "Save $200",
            price: "$1,199.99",
            reviews : "534 Reviews"
        },
        {
            id: 4,
            image: "/sale4.PNG",
            title: "Samsung Galaxy Tab S9 11 256GB Android Tablet with Snapdragon Gen 2 Processor - Graphite - Exclusive Retail Partner",
            link: "/",
            star : [<MdOutlineStar />  , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />],
            save: "Save $400",
            price: "$849.99",
            reviews : "72 Reviews"
        },
        {
            id: 5,
            image: "/sale5.PNG",
            title: "De’Longhi 3-in-1 Portable Air Conditioner - 12000 BTU (SACC 6900 BTU) - White",
            link: "/",
            star : [<MdOutlineStar />  , <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf /> , <IoIosStarOutline />],
            save: "Save $100",
            price: "$549.99",
            reviews: "64 Reviews"
        },
        {
            id: 6,
            image: "/sale6.PNG",
            title: "Apple Watch SE (GPS + Cellular) 40mm Midnight Aluminum Case with Midnight Sport Band - Small/Medium",
            link: "/",
            star : [<IoIosStarOutline />  , <IoIosStarOutline />,  <IoIosStarOutline />,<IoIosStarOutline />,<IoIosStarOutline />],
            save: "Save 70",
            price: "$329.99",
            reviews: ""
        },
        {
            id: 7,
            image: "/sale7.PNG",
            title: "Samsung Galaxy S25 128GB - Silver Shadow - Unlocked",
            link: "/",
            star : [<MdOutlineStar />  , <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf /> ,<IoIosStarOutline />],
            save: "Save $149",
            price: "$1,049.99",
            reviews: "18 Reviews"

        },
        {
            id: 8,
            image: "/sale8.PNG",
            title: "Dyson V7 Advanced Cordless Stick Vacuum - Silver",
            link: "/",
            star : [<MdOutlineStar />  , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoIosStarOutline />],
            save: "SAVE $150",
            price: "$349.99",
            reviews: "536 Reviews"
        }
    ,{
            id: 9,
            image: "/sale9.PNG",
            title: "Starlink Mini Kit",
            link: "/",
            star : [<MdOutlineStar />  , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />],
            save: "Save $200",
            price: "$1,699.99",
            reviews: "200 Review"
        },
        {
            id: 10,
            image: "/sale10.PNG",
            title: "Sony WH-1000XM4 Over-Ear Noise Cancelling Bluetooth Headphones - Black",
            link: "/",
            star : [<MdOutlineStar />  , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />],
            save: "SAVE $100",
            price: "$329.99",
            reviews: "13966 Review"
        },
        {
            id : 11 ,
            image: "/sale11.PNG",
            title: "Ninja Professional Plus Kitchen System with Auto-iQ, 1400-Watt(Peak) & 72 oz. Capacity - Only at Best Buy",
            link: "/",
            star : [<MdOutlineStar />  , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoStarHalf />],
            save: "Save $140",
            price: "$199.99",
            reviews: "2538 Review"
        },
        {
            id : 12 ,
            image: "/sale12.PNG",
            title: "Samsung 32 FHD 180Hz 1ms VA LED FreeSync Gaming Monitor (LS32DG302ENXZA) - Black",
            link: "/",
            star : [<MdOutlineStar />  , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />],
            save: "SAVE $110",
            price: "$199.99",
            reviews: "464 Review"
        },
        {
            id : 13 ,
            image: "/sale13.PNG",
            title: "Dyson Airwrap Styler Complete Long Diffuse Curling Iron - Special Edition - Strawberry Bronze/Blush Pink",
            link: "/",
            star : [<MdOutlineStar />  , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoIosStarHalf />],
            save: "SAVE $150",
            price: "$649.99",
            reviews: "2456 Review"
        },
        {
            id : 14 ,
            image: "/sale14.PNG",
            title: "JBL Bar 820-W 9.1 Ch Atmos 4K Dolby Vision Sound Bar w/ Wireless 10” Subwoofer and Surround Speakers - Only at Best Buy",
            link: "/",
            star : [<MdOutlineStar />  , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoIosStarHalf/>],
            save: "SAVE $698",
            price: "$799.99",
            reviews: "1626 Review"
        },
        {
            id : 15 ,
            image: "/sale15.PNG",
            title: "Samsung Galaxy Buds3 In-Ear Noise Cancelling True Wireless Earbuds - Silver",
            link: "/",
            star : [<MdOutlineStar />  , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStarHalf />, <IoIosStarOutline />],
            save: "SAVE $10",
            price: "$139.99",
            reviews: "138 Review"
        },
        {
            id : 16 ,
            image: "/sale16.PNG",
            title: "Canon EOS Rebel T7 DSLR Camera with 18-55mm IS Lens Kit",
            link: "/",
            star : [<MdOutlineStar />  , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />],
            save: "SAVE $50",
            price: "$599.99",
            reviews: "1416 Review"
        },
        {
            id : 17 ,
            image: "/sale17.PNG",
            title: "HP 27 All-in-One PC (AMD Ryzen 5 7520U/512GB SSD/16GB RAM/Windows 11) - Only at Best Buy",
            link: "/",
            star : [<MdOutlineStar />  , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoIosStarHalf />],
            save: "SAVE $400",
            price: "$899.99",
            reviews: "189 Review"
        },
        {
            id : 18 ,
            image: "/sale18.PNG",
            title: "Philips 800 Automatic Espresso Machine With Milk Frother - Matte Black - Only at Best Buy",
            link: "/",
            star : [<MdOutlineStar />  , <MdOutlineStar />, <MdOutlineStar />, <MdOutlineStar />, <IoIosStarOutline />],
            save: "SAVE $500",
            price: "$449.99",
            reviews: "107 Review"
        }
    ]

    
    return (
        <div>
        <div className="relative w-full max-w-4xl mx-auto mt-5 px-8"> {/* Added padding for button space */}
            <Carousel className="w-full">
                <CarouselContent>
                    {SaleProduct.map((product) => (
                        <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                            <Card className="h-full">
                                <CardContent className="flex flex-col items-center p-4 h-full">
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
    )
}