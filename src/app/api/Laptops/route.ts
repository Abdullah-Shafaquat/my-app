import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (id) {
    const product = Products.find((product) => product.id === parseInt(id));
    if (product) {
      return NextResponse.json(product);
    } 
  } else {
    return NextResponse.json(Products);
  }
};



const Products = [
   {
    id: 1,
    name: "Microsoft Surface Pro (LCD) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Plus/16GB RAM (2024) - Sapphire - Device Only",
    image: "/laptops/P1.png",
    rating: 4.5,
    reviews: 94,
    price: "$1,449.99",
    savings: "SAVE $250",
    isTopDeal: false
  },
  {
    id: 2,
    name: "Microsoft Surface Pro (LCD) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Plus/16GB RAM (2024) - Dune - Device Only",
    image: "/laptops/P2.png",
    rating: 4.4,
    reviews: 37,
    price: "$1,449.99",
    savings: "SAVE $250",
    isTopDeal: false
  },
  {
    id: 3,
    name: "Microsoft Surface Pro (OLED) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Elite/16GB RAM (2024) - Black - Device Only - Exclusive Retail Partner",
    image: "/laptops/P3.png",
    rating: 4.8,
    reviews: 118,
    price: "$1,749.99",
    savings: "SAVE $400",
    isTopDeal: true
  },
  {
    id: 4,
    name: "Microsoft Surface Laptop Studio 2 14.4\" (Intel Core i7-13700H/1TB SSD/32GB RAM/GeForce RTX 4050) -En -Exclusive Retail Partner",
    image: "/laptops/P4.png",
    rating: 4.7,
    reviews: 69,
    price: "$3,439.99",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 5,
    name: "Microsoft Surface Laptop 13\" Copilot+ PC Laptop - Violet (Snapdragon X Plus/16GB RAM/512GB SSD) - EN",
    image: "/laptops/P5.png",
    rating: 0,
    reviews: 0,
    price: "$1,499.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 6,
    name: "Microsoft Surface Pro (LCD) Copilot+ PC 12\" 512GB Tablet with Snapdragon X Plus/16GB RAM (2025) - Ocean - Device Only",
    image: "/laptops/P6.png",
    rating: 0,
    reviews: 0,
    price: "$1,349.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 7,
    name: "Microsoft Surface Laptop 13\" Copilot+ PC Laptop - Platinum (Snapdragon X Plus/16GB RAM/512GB SSD) - EN",
    image: "/laptops/P7.png",
    rating: 0,
    reviews: 0,
    price: "$1,499.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 8,
    name: "Microsoft Surface Pro (LCD) Copilot+ PC 12\" 512GB Tablet with Snapdragon X Plus/16GB RAM (2025) - Violet - Device Only",
    image: "/laptops/P8.png",
    rating: 0,
    reviews: 0,
    price: "$1,349.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 9,
    name: "Microsoft Surface Laptop 13\" Copilot+ PC Laptop - Ocean (Snapdragon X Plus/16GB RAM/512GB SSD) - EN",
    image: "/laptops/P9.png",
    rating: 0,
    reviews: 0,
    price: "$1,499.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 10,
    name: "Microsoft Surface Pro (LCD) Copilot+ PC 12\" 512GB Tablet with Snapdragon X Plus/16GB RAM (2025) - Platinum - Device Only",
    image: "/laptops/P10.png",
    rating: 0,
    reviews: 0,
    price: "$1,349.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 11,
    name: "Microsoft Surface Pro (LCD) Copilot+ PC 13\" 256GB Tablet with Snapdragon X Plus/16GB RAM (2024) - Platinum - Device Only",
    image: "/laptops/P11.png",
    rating: 4.5,
    reviews: 130,
    price: "$1,349.99",
    savings: "SAVE $100",
    isTopDeal: true
  },
  {
    id: 12,
    name: "Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) - Black - EN",
    image: "/laptops/P12.png",
    rating: 4.6,
    reviews: 89,
    price: "$1,399.99",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 13,
    name: "Microsoft Surface Laptop Studio 2 14.4\" (Intel Core i7-13700H/512GB SSD/16GB RAM/GeForce RTX 4050) -Exclusive Retail Partner",
    image: "/laptops/P13.png",
    rating: 4.2,
    reviews: 1,
    price: "$2,959.99",
    savings: "SAVE $340",
    isTopDeal: false
  },
  {
    id: 14,
    name: "Microsoft Surface Pro (OLED) Copilot+ PC 13\" 1TB Tablet with Snapdragon X Elite/16GB RAM (2024) - Sapphire - Device Only - Exclusive Retail Partner",
    image: "/laptops/P14.png",
    rating: 4.7,
    reviews: 22,
    price: "$1,999.99",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 15,
    name: "Microsoft Surface Pro (OLED) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Elite/16GB RAM (2024) - Sapphire - Device Only - Exclusive Retail Partner",
    image: "/laptops/P15.png",
    rating: 4.8,
    reviews: 101,
    price: "$1,749.99",
    savings: "SAVE $400",
    isTopDeal: true
  },
  {
    id: 16,
    name: "Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) - Dune - EN",
    image: "/laptops/P16.png",
    rating: 4.7,
    reviews: 161,
    price: "$1,399.99",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 17,
    name: "Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) - Sapphire - EN",
    image: "/laptops/P17.png",
    rating: 4.8,
    reviews: 118,
    price: "$1,399.99",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 18,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/256GB SSD) (2024) - Platinum",
    image: "/laptops/P18.png",
    rating: 4.0,
    reviews: 1,
    price: "$839.99",
    savings: "SAVE $610",
    isTopDeal: false
  },
  {
    id: 19,
    name: "Microsoft Surface Laptop Go 3 12.45\" Touchscreen Laptop - Sandstone (Intel i5-1235U/256GB SSD/8GB RAM) - Exclusive Retail Partner",
    image: "/laptops/P19.png",
    rating: 4.0,
    reviews: 2,
    price: "$1,099.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 20,
    name: "Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) - Platinum - EN",
    image: "/laptops/P20.png",
    rating: 4.7,
    reviews: 160,
    price: "$1,399.99",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 21,
    name: "Microsoft Surface Pro (OLED) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Elite/16GB RAM (2024) - Sapphire - Device Only - Exclusive Retail Partner",
    image: "/laptops/P21.png",
    rating: 4.8,
    reviews: 101,
    price: "$1,749.99",
    savings: "SAVE $400",
    isTopDeal: true
  },
  {
    id: 22,
    name: "Microsoft Surface Laptop Go 3 12.45\" Touchscreen Laptop - Ice Blue (Intel i5-1235U/256GB SSD/8GB RAM)",
    image: "/laptops/P22.png",
    rating: 4.0,
    reviews: 5,
    price: "$1,099.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 23,
    name: "Microsoft Surface Pro (OLED) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Elite/16GB RAM (2024) - Black - Device Only - Exclusive Retail Partner",
    image: "/laptops/P23.png",
    rating: 4.8,
    reviews: 118,
    price: "$1,749.99",
    savings: "SAVE $400",
    isTopDeal: true
  },
  {
    id: 24,
    name: "Microsoft Surface Pro (LCD) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Plus/16GB RAM (2024) - Platinum - Device Only",
    image: "/laptops/P24.png",
    rating: 4.3,
    reviews: 24,
    price: "$1,449.99",
    savings: "SAVE $250",
    isTopDeal: false
  },
  {
    id: 25,
    name: "Microsoft Surface Pro (OLED) Copilot+ PC 13\" 1TB Tablet with Snapdragon X Elite/16GB RAM (2024) - Sapphire - Device Only - Exclusive Retail Partner",
    image: "/laptops/P25.png",
    rating: 4.7,
    reviews: 22,
    price: "$1,999.99",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 26,
    name: "Refurbished (Excellent) Microsoft Surface Pro (LCD) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Plus/16GB RAM (2024) - Black (Accessories Sold Separately)",
    image: "/laptops/P26.png",
    rating: 0,
    reviews: 0,
    price: "$959.99",
    savings: "SAVE $740",
    isTopDeal: true
  },
  {
    id: 27,
    name: "Microsoft Surface Pro (LCD) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Plus/16GB RAM (2024) - Black - Device Only",
    image: "/laptops/P27.png",
    rating: 4.6,
    reviews: 109,
    price: "$1,449.99",
    savings: "SAVE $100",
    isTopDeal: false
  },
  {
    id: 28,
    name: "Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Black - EN",
    image: "/laptops/P28.png",
    rating: 4.7,
    reviews: 62,
    price: "$1,649.99",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 29,
    name: "Microsoft Surface Pro (LCD) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Plus/16GB RAM (2024) - Dune - Device Only",
    image: "/laptops/P29.png",
    rating: 4.4,
    reviews: 37,
    price: "$1,449.99",
    savings: "SAVE $250",
    isTopDeal: false
  },
  {
    id: 30,
    name: "Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) (2024) - Black - EN",
    image: "/laptops/P30.png",
    rating: 4.6,
    reviews: 49,
    price: "$2,049.99",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 31,
    name: "Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/256GB SSD) (2024) - Platinum - EN",
    image: "/laptops/P31.png",
    rating: 4.7,
    reviews: 237,
    price: "$1,849.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 32,
    name: "Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/32GB RAM/1TB SSD) (2024) - Black - EN",
    image: "/laptops/P32.png",
    rating: 4.5,
    reviews: 55,
    price: "$2,549.99",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 33,
    name: "Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) - Black - BIL",
    image: "/laptops/P33.png",
    rating: 0,
    reviews: 0,
    price: "$1,399.99",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 34,
    name: "Refurbished (Good) - Microsoft Surface Laptop 3 - 15\" Touchscreen Laptop- (Intel Core i5-1035G7/128GB SSD/8GB RAM) - Windows 11 Pro",
    image: "/laptops/P34.png",
    rating: 0,
    reviews: 0,
    price: "$379.00",
    savings: "SAVE $449",
    isTopDeal: false
  },
  {
    id: 35,
    name: "Microsoft Surface Pro 5 (Model 1796) - Intel Core i5-7300U 2.6GHz, 8GB RAM, 256GB SSD, with Surface Signature Type Cover (Keyboard) – Refurbished (Good)",
    image: "/laptops/P35.png",
    rating: 0,
    reviews: 0,
    price: "$459.00",
    savings: "SAVE $140",
    isTopDeal: false
  },
  {
    id: 36,
    name: "Refurbished (Excellent) Microsoft Surface Pro (OLED) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Elite/16GB RAM (2024) - Black (Accessories Sold Separately)",
    image: "/laptops/P36.png",
    rating: 0,
    reviews: 0,
    price: "$1,199.99",
    savings: "SAVE $950",
    isTopDeal: false
  },
  {
    id: 37,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 8 13\" 256GB Windows 11 Tablet w/ Intel i5/8GB RAM -Graphite",
    image: "/laptops/P37.png",
    rating: 0,
    reviews: 0,
    price: "$699.97",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 38,
    name: "Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/32GB RAM/1TB SSD)-2025-Black-EN",
    image: "/laptops/P38.png",
    rating: 4.6,
    reviews: 18,
    price: "$2,799.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 39,
    name: "Refurbished (Excellent) Microsoft Surface Laptop Go 3 – Intel Core i5-1235U, 8GB LPDDR5, 256GB SSD, Windows 11 Home, 12.4\" Touchscreen – Ice Blue",
    image: "/laptops/P39.png",
    rating: 0,
    reviews: 0,
    price: "$629.99",
    savings: "SAVE $470",
    isTopDeal: false
  },
  {
    id: 40,
    name: "Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Black - BIL",
    image: "/laptops/P40.png",
    rating: 0,
    reviews: 0,
    price: "$1,849.99",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 41,
    name: "Refurbished (Good) Microsoft Surface Laptop 4 i7 1185G7 4.80 GHz 13.5\" 2K Touch 16GB RAM 256GB SSD Win 11 PRO",
    image: "/laptops/P41.png",
    rating: 0,
    reviews: 0,
    price: "$546.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 42,
    name: "Refurbished (Good) - Microsoft Surface Pro 4 12.3\" Intel Core i5-6300U 8GB RAM 256GB SSD Wins 10 Pro - + Keyboard",
    image: "/laptops/P42.png",
    rating: 0,
    reviews: 0,
    price: "$349.00",
    savings: "SAVE $250",
    isTopDeal: false
  },
  {
    id: 43,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop Go 12.4\" Touchscreen Laptop -Sandstone (Intel i5-1035G1/128GB SSD/8GB RAM) -En",
    image: "/laptops/P43.png",
    rating: 0,
    reviews: 0,
    price: "$449.00",
    savings: "SAVE $650",
    isTopDeal: false
  },
  {
    id: 44,
    name: "Microsoft Surface Laptop Studio 2 14.4\" (Intel Core i7-13700H/512GB SSD/16GB RAM/GeForce RTX 4050) -En -Exclusive Retail Partner",
    image: "/laptops/P44.png",
    rating: 4.6,
    reviews: 144,
    price: "$2,959.99",
    savings: "SAVE $340",
    isTopDeal: false
  },
  {
    id: 45,
    name: "Refurbished Good Microsoft Surface Laptop 4 i5 1145G7 16GB RAM 512GB SSD Intel iris Xe Graphics 13.5\" Touch - Windows 11 Pro",
    image: "/laptops/P45.png",
    rating: 0,
    reviews: 0,
    price: "$590.00",
    savings: "SAVE $60",
    isTopDeal: false
  },
  {
    id: 46,
    name: "Refurbished (Excellent) -Microsoft Surface Laptop Studio 14.4\" (Intel Ci5-11300H/512GB SSD/16GB RAM/Windows 11) -En",
    image: "/laptops/P46.png",
    rating: 0,
    reviews: 0,
    price: "$999.97",
    savings: "SAVE $750",
    isTopDeal: false
  },
  {
    id: 47,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 5 (13 inch) - Intel Core i5-1235U, 8GB RAM, 512GB SSD, Windows 11 Home, Sage",
    image: "/laptops/P47.png",
    rating: 0,
    reviews: 0,
    price: "$769.99",
    savings: "SAVE $930",
    isTopDeal: false
  },
  {
    id: 48,
    name: "Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD)-2025-Sapphire-EN",
    image: "/laptops/P48.png",
    rating: 4.3,
    reviews: 7,
    price: "$1,699.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 49,
    name: "Refurbished (Excellent) Microsoft Surface Laptop Go 3 – Intel Core i5-1235U, 8GB LPDDR5, 256GB SSD, Windows 11 Home, 12.4\" Pixelsense Touchscreen – Sage",
    image: "/laptops/P49.png",
    rating: 0,
    reviews: 0,
    price: "$679.99",
    savings: "SAVE $420",
    isTopDeal: false
  },
  {
    id: 50,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/256GB SSD) - Platinum",
    image: "/laptops/P50.png",
    rating: 0,
    reviews: 0,
    price: "$1,049.99",
    savings: "SAVE $800",
    isTopDeal: false
  },
  {
    id: 51,
    name: "Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/32GB RAM/1TB SSD) (2024) - Black - BIL",
    image: "/laptops/P51.png",
    rating: 4.0,
    reviews: 2,
    price: "$2,549.99",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 52,
    name: "Refurbished (Excellent) Microsoft Surface Pro 9 - Intel Core i5-1235U/8GB LPDDR5/256GB SSD, Windows 11 Home, Graphite (Device Only)",
    image: "/laptops/P52.png",
    rating: 0,
    reviews: 0,
    price: "$898.00",
    savings: "SAVE $600",
    isTopDeal: false
  },
  {
    id: 53,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 5 Intel i5-7300U 8GB 128GB Windows10 Home Certified Refurb",
    image: "/laptops/P53.png",
    rating: 0,
    reviews: 0,
    price: "$549.00",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 54,
    name: "Refurbished (Excellent) Microsoft Surface Pro 13\" (LCD) Copilot+ PC (Snapdragon X Plus/16GB RAM/512GB SSD) - Sapphire - Device Only",
    image: "/laptops/P54.png",
    rating: 0,
    reviews: 0,
    price: "$1,069.99",
    savings: "SAVE $630",
    isTopDeal: false
  },
 {
    id: 55,
    name: "Open Box - Microsoft Surface Laptop 5 Touchscreen 15\" - Platinum (Intel Evo i7-1255U/256GB SSD/8GB RAM/Windows 11) - En",
    image: "/laptops/P55.png",
    rating: 0,
    reviews: 0,
    price: "$999.99",
    savings: "SAVE $900",
    isTopDeal: false
  },
  {
    id: 56,
    name: "Microsoft Surface Studio 1 – 14.4\" Touchscreen | Intel Core i7-11370H | 32GB RAM | 1TB SSD | NVIDIA RTX 3050 Ti | 2-in-1 Convertible Laptop - Refurbished Good",
    image: "/laptops/P56.png",
    rating: 0,
    reviews: 0,
    price: "$1,399.99",
    savings: "SAVE $500",
    isTopDeal: false
  },
  {
    id: 57,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 4 Intel Core i5-1135G7 16GB RAM 256GB SSD 13.5in 2256 x 1504 Touchscreen W11P - Matte Black",
    image: "/laptops/P57.png",
    rating: 0,
    reviews: 0,
    price: "$899.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 58,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/32GB RAM/1TB SSD) - Black",
    image: "/laptops/P58.png",
    rating: 0,
    reviews: 0,
    price: "$1,799.99",
    savings: "SAVE $1,150",
    isTopDeal: false
  },
  {
    id: 59,
    name: "Microsoft Surface Pro 9 13\" Core i7 1265U 16GB 256GB Windows 10 Pro Platinum",
    image: "/laptops/P59.png",
    rating: 0,
    reviews: 0,
    price: "$1,358.00",
    savings: "SAVE $641",
    isTopDeal: false
  },
  {
    id: 60,
    name: "Refurbished (Excellent) Microsoft Surface Pro 13\" (LCD) Copilot+ PC (Snapdragon X Plus/16GB RAM/1TB SSD) - Black - Device Only",
    image: "/laptops/P60.png",
    rating: 0,
    reviews: 0,
    price: "$1,199.99",
    savings: "SAVE $700",
    isTopDeal: false
  },
  {
    id: 61,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) - Black",
    image: "/laptops/P61.png",
    rating: 0,
    reviews: 0,
    price: "$1,339.99",
    savings: "SAVE $810",
    isTopDeal: false
  },
  {
    id: 62,
    name: "Microsoft Surface 9 Bundle 13\" 2880X1920 Intel i7-1255U 16GB 256GB Window 11 Home Graphite",
    image: "/laptops/P62.png",
    rating: 0,
    reviews: 0,
    price: "$1,450.00",
    savings: "SAVE $549",
    isTopDeal: false
  },
  {
    id: 63,
    name: "Refurbished Good - Microsoft Surface Pro 7 1866 i7 1065G7 16GB Ram 256GB SSD 12.3\" Touch Win 11 with Keyboard",
    image: "/laptops/P63.png",
    rating: 0,
    reviews: 0,
    price: "$690.00",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 64,
    name: "Refurbished (Fair) - Microsoft Surface Book 3 13.5\" 2-in-1 Laptop - Platinum (Intel Ci7-1065G7/256GB SSD/16GB RAM) - English",
    image: "/laptops/P64.png",
    rating: 0,
    reviews: 0,
    price: "$584.99",
    savings: "SAVE $2,215",
    isTopDeal: false
  },
  {
    id: 65,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop Studio 14.4\" - Platinum (Intel Core i5-11300H/256GB SSD/16GB RAM/Windows 11) -En",
    image: "/laptops/P65.png",
    rating: 0,
    reviews: 0,
    price: "$899.97",
    savings: "SAVE $900",
    isTopDeal: false
  },
  {
    id: 66,
    name: "Microsoft Surface Laptop 6 13.5\" Business Laptop-Black(Intel Core Ultra 7 165H/256GB SSD/32GB RAM/Windows 11)-(ZJY-00001)",
    image: "/laptops/P66.png",
    rating: 0,
    reviews: 0,
    price: "$2,851.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 67,
    name: "Open Box -Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024)-EN",
    image: "/laptops/P67.png",
    rating: 0,
    reviews: 0,
    price: "$1,499.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 68,
    name: "Refurbished (Good) Microsoft Surface Laptop 3 2K Touchscreen i7 1065G7 16GB DDR4 256GB SSD Win-11",
    image: "/laptops/P68.png",
    rating: 0,
    reviews: 0,
    price: "$559.00",
    savings: "SAVE $241",
    isTopDeal: false
  },
  {
    id: 69,
    name: "Refurbished Excellent Microsoft Surface GO 3 Intel Core i5 1235U 16GB DDR5 RAM 256GB SSD - 12.4\" Touchscreen - 2 Years Microsoft Warranty",
    image: "/laptops/P69.png",
    rating: 0,
    reviews: 0,
    price: "$785.00",
    savings: "SAVE $415",
    isTopDeal: false
  },
  {
    id: 70,
    name: "Microsoft Surface Pro 10 5G for Business - Intel Ultra 5 - 16GB RAM - 256GB SSD - - Win11 Pro - 13inch (Platinum) - NEW SEALED",
    image: "/laptops/P70.png",
    rating: 0,
    reviews: 0,
    price: "$1,699.00",
    savings: "SAVE $1,171",
    isTopDeal: false
  },
  {
    id: 71,
    name: "Refurbished (Good) - Microsoft Surface Book 2 - 13.5\" Touchscreen Laptop - Corei7-8650U/256GB SSD/8GB RAM - Windows 11 Pro",
    image: "/laptops/P71.png",
    rating: 0,
    reviews: 0,
    price: "$439.99",
    savings: "SAVE $110",
    isTopDeal: false
  },
  {
    id: 72,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) - Platinum",
    image: "/laptops/P72.png",
    rating: 0,
    reviews: 0,
    price: "$1,399.99",
    savings: "SAVE $850",
    isTopDeal: false
  },
  {
    id: 73,
    name: "Microsoft Surface Pro 9 Business 13\" Touch SQ3 8GB 128GB Windows 11 Home with 5G",
    image: "/laptops/P73.png",
    rating: 0,
    reviews: 0,
    price: "$1,178.00",
    savings: "SAVE $922",
    isTopDeal: false
  },
  {
    id: 74,
    name: "Open Box - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) - Black - EN",
    image: "/laptops/P74.png",
    rating: 0,
    reviews: 0,
    price: "$1,339.99",
    savings: "SAVE $60",
    isTopDeal: false
  },
  {
    id: 75,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 7+ Platinum Intel Core i7-1165G7 16GB 256GB SSD 12.3in 2736 x 1824 Touch W11P",
    image: "/laptops/P75.png",
    rating: 0,
    reviews: 0,
    price: "$980.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 76,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 9 13\" 512GB Windows 11 Tablet with Intel Evo Core i7-1265U/16GB RAM - Graphite",
    image: "/laptops/P76.png",
    rating: 0,
    reviews: 0,
    price: "$1,599.60",
    savings: "SAVE $800",
    isTopDeal: false
  },
  {
    id: 77,
    name: "Refurbished (Excellent) Microsoft Surface Pro (OLED) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Elite/16GB RAM (2024) - Sapphire (Accessories Sold Separately)",
    image: "/laptops/P77.png",
    rating: 0,
    reviews: 0,
    price: "$1,329.99",
    savings: "SAVE $820",
    isTopDeal: false
  },
  {
    id: 78,
    name: "Microsoft Surface Pro (OLED) Copilot+ PC 13\" 1TB Tablet with Snapdragon X Elite/32GB RAM (2024) - Platinum - Device Only",
    image: "/laptops/P78.png",
    rating: 4.5,
    reviews: 42,
    price: "$2,599.99",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 79,
    name: "Microsoft Surface Laptop 13\" Copilot+ PC Laptop - Platinum (Snapdragon X Plus/16GB RAM/256GB SSD) - Bilingual",
    image: "/laptops/P79.png",
    rating: 0,
    reviews: 0,
    price: "$1,349.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 80,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 3 - 15\" Touchscreen Laptop- (Intel Core i5-1035G7/128GB SSD/8GB RAM) - Windows 11 Pro",
    image: "/laptops/P80.png",
    rating: 0,
    reviews: 0,
    price: "$414.00",
    savings: "SAVE $474",
    isTopDeal: false
  },
  {
    id: 81,
    name: "Open Box - Microsoft Surface Laptop 5 Touchscreen 13.5\" - Sandstone (Intel Evo i5-1235U/512GB SSD/8GB RAM) - En",
    image: "/laptops/P81.png",
    rating: 0,
    reviews: 0,
    price: "$934.97",
    savings: "SAVE $165",
    isTopDeal: false
  },
  {
    id: 82,
    name: "Microsoft Surface Laptop SE Netbook N4120 8 GB 128 GB Windows 11 SE KF8-00001",
    image: "/laptops/P82.png",
    rating: 0,
    reviews: 0,
    price: "$249.99",
    savings: "SAVE $150",
    isTopDeal: false
  },
  {
    id: 83,
    name: "Microsoft Surface Laptop Go 2 12.4\" Touchscreen Laptop - Sandstone (Intel i5-1135G7/256GB SSD/8GB RAM) -En",
    image: "/laptops/P83.png",
    rating: 4.0,
    reviews: 45,
    price: "$699.97",
    savings: "",
    isTopDeal: false
  },
  {
    id: 84,
    name: "Refurbished (Good) - Microsoft Surface Pro 5 12.3\", Intel Core i5-7300 2.6GHz, 8GB Ram, 256GB Storage, Windows 10 Pro. (with Keyboard)",
    image: "/laptops/P84.png",
    rating: 0,
    reviews: 0,
    price: "$379.99",
    savings: "SAVE $120",
    isTopDeal: false
  },
  {
    id: 85,
    name: "Refurbished (Good) - Microsoft Surface Pro 5 12.3\" (1796) Intel Core i5 (7th Gen) 2.6Ghz, 256GB SSD, 8GB RAM w/ Surface Keyboard",
    image: "/laptops/P85.png",
    rating: 3.5,
    reviews: 2,
    price: "$389.99",
    savings: "SAVE $159",
    isTopDeal: false
  },
  {
    id: 86,
    name: "Microsoft Surface Laptop 13\" Copilot+ PC Laptop - Platinum (Snapdragon X Plus/16GB RAM/512GB SSD) - Bilingual",
    image: "/laptops/P86.png",
    rating: 0,
    reviews: 0,
    price: "$1,499.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 87,
    name: "Open Box - Microsoft Surface Laptop 5 V-PRO i7 1255U 16GB 256GB 13.3\" 2K Touch Win 11 Pro - 2 Years Microsoft Warranty",
    image: "/laptops/P87.png",
    rating: 0,
    reviews: 0,
    price: "$1,095.00",
    savings: "SAVE $505",
    isTopDeal: false
  },
  {
    id: 88,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 9 13\" 256GB Windows 11 Tablet with Intel Evo i5-1235U/8GB RAM - Forest",
    image: "/laptops/P88.png",
    rating: 0,
    reviews: 0,
    price: "$799.97",
    savings: "SAVE $600",
    isTopDeal: false
  },
  {
    id: 89,
    name: "Open Box - Microsoft Surface Pro 9 13\" 128GB Windows 11 Tablet with Intel Core i5-1235U/8GB RAM - Platinum",
    image: "/laptops/P89.png",
    rating: 0,
    reviews: 0,
    price: "$899.00",
    savings: "SAVE $200",
    isTopDeal: false
  },
  {
    id: 90,
    name: "Microsoft Surface Laptop Studio 2 14.4\" (Intel Core i7-13700H/1TB SSD/64GB RAM/GeForce RTX 4060) -En -Exclusive Retail Partner",
    image: "/laptops/P90.png",
    rating: 4.7,
    reviews: 15,
    price: "$4,099.99",
    savings: "SAVE $440",
    isTopDeal: false
  },
  {
    id: 91,
    name: "Open Box - Microsoft Surface Pro 9 (Graphite) UCI-00001 13\" Touchscreen 2-in-1 Laptop - Graphite (Intel i7-1255U / 16 GB RAM / 512 GB SSD / Windows 11 Home (Only Tablet))",
    image: "/laptops/P91.png",
    rating: 0,
    reviews: 0,
    price: "$1,211.11",
    savings: "SAVE $364",
    isTopDeal: false
  },
  {
    id: 92,
    name: "Microsoft Surface Laptop 6 for Business - 13.5\" - Intel Core Ultra 5 - 135H - 8GB RAM - 256GB SSD (Platinum)",
    image: "/laptops/P92.png",
    rating: 0,
    reviews: 0,
    price: "$1,049.00",
    savings: "SAVE $2,101",
    isTopDeal: false
  },
  {
    id: 93,
    name: "Open Box - Microsoft Surface 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/256GB SSD) -Platinum -EN",
    image: "/laptops/P93.png",
    rating: 4,
    reviews: 1,
    price: "$1,289.99",
    savings: "SAVE $160",
    isTopDeal: false
  },
  {
    id: 94,
    name: "Microsoft Surface Pro 11th Edition 12.9\" 120Hz Touchscreen Intel Core Ultra 7 266V 16GB RAM 512GB SSD - Platinum Model 2103",
    image: "/laptops/P94.png",
    rating: 0,
    reviews: 0,
    price: "$2,190.00",
    savings: "SAVE $403",
    isTopDeal: false
  },
  {
    id: 95,
    name: "Microsoft Surface Pro 9 13\" 1TB Windows 11 Tablet with Intel Evo Core i7-1255U/32GB RAM - Platinum",
    image: "/laptops/P95.png",
    rating: 4.5,
    reviews: 74,
    price: "$2,499.97",
    savings: "",
    isTopDeal: false
  },
  {
    id: 96,
    name: "Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD)-2025-Dune-EN",
    image: "/laptops/P96.png",
    rating: 4.3,
    reviews: 23,
    price: "$1,999.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 97,
    name: "Open Box - Microsoft Surface Laptop Studio 2 14.4\" (Intel Core i7-13700H/512GB SSD/16GB RAM/GeForce RTX 4050) -En",
    image: "/laptops/P97.png",
    rating: 0,
    reviews: 0,
    price: "$2,194.99",
    savings: "SAVE $765",
    isTopDeal: false
  },
  {
    id: 98,
    name: "Open Box - Microsoft Surface Pro (OLED) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Elite/16GB RAM (2024)-Blk - Device Only",
    image: "/laptops/P98.png",
    rating: 0,
    reviews: 0,
    price: "$1,484.99",
    savings: "SAVE $265",
    isTopDeal: false
  },
  {
    id: 99,
    name: "Refurbished (Good) - Microsoft Surface Pro 7 12.3\" Windows 10 Tablet with 10th Gen Intel Core i3 / 4GB RAM / 128GB Storage - Platinum",
    image: "/laptops/P99.png",
    rating: 0,
    reviews: 0,
    price: "$399.99",
    savings: "SAVE $299",
    isTopDeal: false
  },
  {
    id: 100,
    name: "Microsoft Surface Laptop 6 13.5\" Touchscreen – Intel Core Ultra 7 165H, 32GB RAM, 256GB SSD, Windows 11 – Black (Business Laptop)",
    image: "/laptops/P100.png",
    rating: 0,
    reviews: 0,
    price: "$1,699.99",
    savings: "SAVE $1,100",
    isTopDeal: false
  },
  {
    id: 101,
    name: "Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Black - BIL",
    image: "/laptops/P101.png",
    rating: 0,
    reviews: 0,
    price: "$1,649.99",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 102,
    name: "Microsoft Surface Pro (LCD) Copilot+ PC 13\" 1TB Tablet with Snapdragon X Plus/16GB RAM (2024) - Sapphire- NEW SEALED",
    image: "/laptops/P102.png",
    rating: 4,
    reviews: 4,
    price: "$1,449.00",
    savings: "SAVE $251",
    isTopDeal: false
  },
{
    id: 103,
    name: "Microsoft Surface Pro 5th Gen WiFi+LTE Intel i5-7300U 8GB 256GB Windows 10 Pro",
    image: "/laptops/P103.png",
    rating: 0,
    reviews: 0,
    price: "$699.00",
    savings: "SAVE $600",
    isTopDeal: false
  },
  {
    id: 104,
    name: "Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) (2024) - Black - BIL",
    image: "/laptops/P104.png",
    rating: 0,
    reviews: 0,
    price: "$2,049.99",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 105,
    name: "Refurbished (Excellent) Microsoft Surface Pro 13\" (OLED) Copilot+ PC (Snapdragon X Elite/32GB RAM/1TB SSD) - Platinum - Device Only",
    image: "/laptops/P105.png",
    rating: 0,
    reviews: 0,
    price: "$1,799.99",
    savings: "SAVE $1,150",
    isTopDeal: false
  },
  {
    id: 106,
    name: "Microsoft Surface Laptop Studio 2 14.4\" (Intel Core i7-13700H/512GB SSD/16GB RAM/GeForce RTX 4050) -Exclusive Retail Partner",
    image: "/laptops/P106.png",
    rating: 4,
    reviews: 1,
    price: "$2,959.99",
    savings: "SAVE $340",
    isTopDeal: false
  },
  {
    id: 107,
    name: "Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD)-2025-Black-EN",
    image: "/laptops/P107.png",
    rating: 4.6,
    reviews: 143,
    price: "$2,149.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 108,
    name: "Microsoft Surface Laptop 4 13.5 Touch i5-1135G7 8GB 256GB Windows 11 Pro Platinum Refurbished Good",
    image: "/laptops/P108.png",
    rating: 0,
    reviews: 0,
    price: "$546.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 109,
    name: "Refurbished Fair - Microsoft Surface Laptop 3 - 15\" Touchscreen Laptop (Intel Core i5-1035G7/128GB SSD/8GB RAM) - Windows 10 Pro - ENG",
    image: "/laptops/P109.png",
    rating: 0,
    reviews: 0,
    price: "$599.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 110,
    name: "Refurbished (Good) - Microsoft Surface Pro 3, 12\" MultiTouch With FREE Keyboard, Intel i5-4300U, 4GB RAM, 128GB SSD, Win 10 Pro.",
    image: "/laptops/P110.png",
    rating: 0,
    reviews: 0,
    price: "$199.99",
    savings: "SAVE $199",
    isTopDeal: false
  },
  {
    id: 111,
    name: "Refurbished (Excellent) - Microsoft Surface Book 2 13.5\" 2-in-1 Laptop (Intel Core i5-7300U/ 256GB SSD/ 8GB RAM) - French",
    image: "/laptops/P111.png",
    rating: 0,
    reviews: 0,
    price: "$499.00",
    savings: "SAVE $126",
    isTopDeal: false
  },
  {
    id: 112,
    name: "Refurbished (Excellent) Microsoft Surface Pro 13\" (OLED) Copilot+ PC (Snapdragon X Elite/16GB RAM/1TB SSD) - Sapphire - Device Only",
    image: "/laptops/P112.png",
    rating: 0,
    reviews: 0,
    price: "$1,499.99",
    savings: "SAVE $900",
    isTopDeal: false
  },
  {
    id: 113,
    name: "Refurbished Excellent Microsoft Surface laptop 5 13.5\" Touchscreen Intel i5 1245U 16 GB RAM 256GB SSD - Windows 11",
    image: "/laptops/P113.png",
    rating: 0,
    reviews: 0,
    price: "$790.00",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 114,
    name: "Microsoft Surface Laptop 4 13.5 Touch i5-1135G7 8GB 256GB Windows 10 Pro Refurbished Excellent",
    image: "/laptops/P114.png",
    rating: 0,
    reviews: 0,
    price: "$546.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 115,
    name: "Microsoft Surface Laptop 5 Touchscreen 15\" - Platinum (Intel Evo i7-1255U/256GB SSD/8GB RAM/Windows 11) - En",
    image: "/laptops/P115.png",
    rating: 0,
    reviews: 0,
    price: "$1,049.99",
    savings: "SAVE $850",
    isTopDeal: false
  },
  {
    id: 116,
    name: "Open Box - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) - Sapphire - EN",
    image: "/laptops/P116.png",
    rating: 0,
    reviews: 0,
    price: "$1,339.99",
    savings: "SAVE $60",
    isTopDeal: false
  },
  {
    id: 117,
    name: "Microsoft Surface Pro 11 Copilot+ PC Tablet - 13\" - vPro Technology - 16 GB - 256 GB SSD - Windows 11 Pro - Black - Core Ultra 7 Octa-core (8 Core) 266V 2.20 GHz - 2880 x 1920",
    image: "/laptops/P117.png",
    rating: 0,
    reviews: 0,
    price: "$2,890.00",
    savings: "SAVE $1,360",
    isTopDeal: false
  },
  {
    id: 118,
    name: "Refurbished (Fair) - Microsoft Surface Pro 7 12.3\" 128GB Windows 10 Tablet w/ 10th Gen Intel C i5/8GB RAM -Platinum",
    image: "/laptops/P118.png",
    rating: 0,
    reviews: 0,
    price: "$399.99",
    savings: "SAVE $199",
    isTopDeal: false
  },
  {
    id: 119,
    name: "Refurbished (Good) Microsoft Surface Laptop 4 Core i7 1185G7U /16gb RAM /256gb SSD 2K Touchscreen",
    image: "/laptops/P119.png",
    rating: 0,
    reviews: 0,
    price: "$559.99",
    savings: "SAVE $40",
    isTopDeal: false
  },
  {
    id: 120,
    name: "Open Box - Microsoft Surface Laptop 5 Touchscreen 15\" - Platinum (Intel Evo i7-1255U/256GB SSD/8GB RAM/Windows 11) - Fr",
    image: "/laptops/P120.png",
    rating: 0,
    reviews: 0,
    price: "$979.99",
    savings: "SAVE $820",
    isTopDeal: false
  },
  {
    id: 121,
    name: "Refurbished (Excellent) Microsoft Surface Pro 8 - Intel Core i7, 16GB RAM, 256GB SSD, Windows 11 Home, Platinum (Device Only)",
    image: "/laptops/P121.png",
    rating: 0,
    reviews: 0,
    price: "$899.00",
    savings: "SAVE $91",
    isTopDeal: false
  },
  {
    id: 122,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop Go 12.4\" Touchscreen Laptop -Sandstone (Intel i5-1035G1/128GB SSD/8GB RAM) -En",
    image: "/laptops/P122.png",
    rating: 0,
    reviews: 0,
    price: "$449.00",
    savings: "SAVE $450",
    isTopDeal: false
  },
  {
    id: 123,
    name: "Microsoft Surface Book 3 15\" Intel Core i7-1065G7 32GB RAM DDR4 2TB SSD Win 10 Home Platinum 2 in 1 Laptop (SNJ-00001)",
    image: "/laptops/P123.png",
    rating: 4.5,
    reviews: 36,
    price: "$3,969.98",
    savings: "SAVE $330",
    isTopDeal: false
  },
  {
    id: 124,
    name: "Open Box - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) - Dune - EN",
    image: "/laptops/P124.png",
    rating: 0,
    reviews: 0,
    price: "$1,339.99",
    savings: "SAVE $60",
    isTopDeal: false
  },
  {
    id: 125,
    name: "Refurbished (Excellent) Microsoft Surface Pro 13\" (LCD) Copilot+ PC (Snapdragon X Plus/16GB RAM/512GB SSD) - Dune - Device Only",
    image: "/laptops/P125.png",
    rating: 0,
    reviews: 0,
    price: "$1,069.99",
    savings: "SAVE $630",
    isTopDeal: false
  },
  {
    id: 126,
    name: "Refurbished (Excellent) Microsoft Surface Pro (OLED) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Elite/16GB RAM (2024) - Dune (Accessories Sold Separately)",
    image: "/laptops/P126.png",
    rating: 0,
    reviews: 0,
    price: "$1,199.99",
    savings: "SAVE $950",
    isTopDeal: false
  },
{
    id: 127,
    name: "Microsoft Surface Pro 5th Gen WiFi+LTE Intel i5-7300U 8GB 256GB Windows 10 Pro",
    image: "/laptops/P127.png",
    rating: 0,
    reviews: 0,
    price: "$699.00",
    savings: "SAVE $600",
    isTopDeal: false
  },
  {
    id: 128,
    name: "Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) (2024) - Black - BIL",
    image: "/laptops/P128.png",
    rating: 0,
    reviews: 0,
    price: "$2,049.99",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 129,
    name: "Refurbished (Excellent) Microsoft Surface Pro 13\" (OLED) Copilot+ PC (Snapdragon X Elite/32GB RAM/1TB SSD) - Platinum - Device Only",
    image: "/laptops/P129.png",
    rating: 0,
    reviews: 0,
    price: "$1,799.99",
    savings: "SAVE $1,150",
    isTopDeal: false
  },
  {
    id: 130,
    name: "Microsoft Surface Laptop Studio 2 14.4\" (Intel Core i7-13700H/512GB SSD/16GB RAM/GeForce RTX 4050) -Exclusive Retail Partner",
    image: "/laptops/P130.png",
    rating: 4,
    reviews: 1,
    price: "$2,959.99",
    savings: "SAVE $340",
    isTopDeal: false
  },
  {
    id: 131,
    name: "Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD)-2025-Black-EN",
    image: "/laptops/P131.png",
    rating: 4.6,
    reviews: 143,
    price: "$2,149.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 132,
    name: "Microsoft Surface Laptop 4 13.5 Touch i5-1135G7 8GB 256GB Windows 11 Pro Platinum Refurbished Good",
    image: "/laptops/P132.png",
    rating: 0,
    reviews: 0,
    price: "$546.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 133,
    name: "Refurbished Fair - Microsoft Surface Laptop 3 - 15\" Touchscreen Laptop (Intel Core i5-1035G7/128GB SSD/8GB RAM) - Windows 10 Pro - ENG",
    image: "/laptops/P133.png",
    rating: 0,
    reviews: 0,
    price: "$599.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 134,
    name: "Refurbished (Good) - Microsoft Surface Pro 3, 12\" MultiTouch With FREE Keyboard, Intel i5-4300U, 4GB RAM, 128GB SSD, Win 10 Pro.",
    image: "/laptops/P134.png",
    rating: 0,
    reviews: 0,
    price: "$199.99",
    savings: "SAVE $199",
    isTopDeal: false
  },
  {
    id: 135,
    name: "Refurbished (Excellent) - Microsoft Surface Book 2 13.5\" 2-in-1 Laptop (Intel Core i5-7300U/ 256GB SSD/ 8GB RAM) - French",
    image: "/laptops/P135.png",
    rating: 0,
    reviews: 0,
    price: "$499.00",
    savings: "SAVE $126",
    isTopDeal: false
  },
  {
    id: 136,
    name: "Refurbished (Excellent) Microsoft Surface Pro 13\" (OLED) Copilot+ PC (Snapdragon X Elite/16GB RAM/1TB SSD) - Sapphire - Device Only",
    image: "/laptops/P136.png",
    rating: 0,
    reviews: 0,
    price: "$1,499.99",
    savings: "SAVE $900",
    isTopDeal: false
  },
  {
    id: 137,
    name: "Refurbished Excellent Microsoft Surface laptop 5 13.5\" Touchscreen Intel i5 1245U 16 GB RAM 256GB SSD - Windows 11",
    image: "/laptops/P137.png",
    rating: 0,
    reviews: 0,
    price: "$790.00",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 138,
    name: "Microsoft Surface Laptop 4 13.5 Touch i5-1135G7 8GB 256GB Windows 10 Pro Refurbished Excellent",
    image: "/laptops/P138.png",
    rating: 0,
    reviews: 0,
    price: "$546.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 139,
    name: "Microsoft Surface Laptop 5 Touchscreen 15\" - Platinum (Intel Evo i7-1255U/256GB SSD/8GB RAM/Windows 11) - En",
    image: "/laptops/P139.png",
    rating: 0,
    reviews: 0,
    price: "$1,049.99",
    savings: "SAVE $850",
    isTopDeal: false
  },
  {
    id: 140,
    name: "Open Box - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) - Sapphire - EN",
    image: "/laptops/P140.png",
    rating: 0,
    reviews: 0,
    price: "$1,339.99",
    savings: "SAVE $60",
    isTopDeal: false
  },
  {
    id: 141,
    name: "Microsoft Surface Pro 11 Copilot+ PC Tablet - 13\" - vPro Technology - 16 GB - 256 GB SSD - Windows 11 Pro - Black - Core Ultra 7 Octa-core (8 Core) 266V 2.20 GHz - 2880 x 1920",
    image: "/laptops/P141.png",
    rating: 0,
    reviews: 0,
    price: "$2,890.00",
    savings: "SAVE $1,360",
    isTopDeal: false
  },
  {
    id: 142,
    name: "Refurbished (Fair) - Microsoft Surface Pro 7 12.3\" 128GB Windows 10 Tablet w/ 10th Gen Intel C i5/8GB RAM -Platinum",
    image: "/laptops/P142.png",
    rating: 0,
    reviews: 0,
    price: "$399.99",
    savings: "SAVE $199",
    isTopDeal: false
  },
  {
    id: 143,
    name: "Refurbished (Good) Microsoft Surface Laptop 4 Core i7 1185G7U /16gb RAM /256gb SSD 2K Touchscreen",
    image: "/laptops/P143.png",
    rating: 0,
    reviews: 0,
    price: "$559.99",
    savings: "SAVE $40",
    isTopDeal: false
  },
  {
    id: 144,
    name: "Open Box - Microsoft Surface Laptop 5 Touchscreen 15\" - Platinum (Intel Evo i7-1255U/256GB SSD/8GB RAM/Windows 11) - Fr",
    image: "/laptops/P144.png",
    rating: 0,
    reviews: 0,
    price: "$979.99",
    savings: "SAVE $820",
    isTopDeal: false
  },
  {
    id: 145,
    name: "Refurbished (Excellent) Microsoft Surface Pro 8 - Intel Core i7, 16GB RAM, 256GB SSD, Windows 11 Home, Platinum (Device Only)",
    image: "/laptops/P145.png",
    rating: 0,
    reviews: 0,
    price: "$899.00",
    savings: "SAVE $91",
    isTopDeal: false
  },
  {
    id: 146,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop Go 12.4\" Touchscreen Laptop -Sandstone (Intel i5-1035G1/128GB SSD/8GB RAM) -En",
    image: "/laptops/P146.png",
    rating: 0,
    reviews: 0,
    price: "$449.00",
    savings: "SAVE $450",
    isTopDeal: false
  },
  {
    id: 147,
    name: "Microsoft Surface Book 3 15\" Intel Core i7-1065G7 32GB RAM DDR4 2TB SSD Win 10 Home Platinum 2 in 1 Laptop (SNJ-00001)",
    image: "/laptops/P147.png",
    rating: 4.4,
    reviews: 36,
    price: "$3,969.98",
    savings: "SAVE $330",
    isTopDeal: false
  },
  {
    id: 148,
    name: "Open Box - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) - Dune - EN",
    image: "/laptops/P148.png",
    rating: 0,
    reviews: 0,
    price: "$1,339.99",
    savings: "SAVE $60",
    isTopDeal: false
  },
  {
    id: 149,
    name: "Refurbished (Excellent) Microsoft Surface Pro 13\" (LCD) Copilot+ PC (Snapdragon X Plus/16GB RAM/512GB SSD) - Dune - Device Only",
    image: "/laptops/P149.png",
    rating: 0,
    reviews: 0,
    price: "$1,069.99",
    savings: "SAVE $630",
    isTopDeal: false
  },
  {
    id: 150,
    name: "Refurbished (Excellent) Microsoft Surface Pro (OLED) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Elite/16GB RAM (2024) - Dune (Accessories Sold Separately)",
    image: "/laptops/P150.png",
    rating: 0,
    reviews: 0,
    price: "$1,199.99",
    savings: "SAVE $950",
    isTopDeal: false
  },
 {
    id: 151,
    name: "Open Box - Microsoft Surface Laptop 15\" TS Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/256GB SSD) - EN",
    image: "/laptops/P151.png",
    rating: 0,
    reviews: 0,
    price: "$1,699.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 152,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 4 15\" - AMD Ryzen 7, 8GB RAM, 512GB SSD, Windows 11 Home, Black",
    image: "/laptops/P152.png",
    rating: 0,
    reviews: 0,
    price: "$669.00",
    savings: "SAVE $330",
    isTopDeal: false
  },
  {
    id: 153,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 6 12.3\" i5 8GB 256GB SSD - Silver",
    image: "/laptops/P153.png",
    rating: 0,
    reviews: 0,
    price: "$479.99",
    savings: "SAVE $120",
    isTopDeal: false
  },
  {
    id: 154,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 6 for Business 13.5\" (Intel Core Ultra 5 135H / 16GB RAM / 512GB SSD / Windows 11 Pro) - Platinum",
    image: "/laptops/P154.png",
    rating: 0,
    reviews: 0,
    price: "$1,399.99",
    savings: "SAVE $900",
    isTopDeal: false
  },
  {
    id: 155,
    name: "Refurbished (Good) - Microsoft Surface Pro 7+ 12.3\" (Model 1960), Intel Core i7-11th Gen. 2.8GHz, 16GB, 256GB Storage, Windows 11 Pro. (With Keyboard)",
    image: "/laptops/P155.png",
    rating: 0,
    reviews: 0,
    price: "$799.99",
    savings: "SAVE $100",
    isTopDeal: false
  },
  {
    id: 156,
    name: "Refurbished (Good) - Microsoft Surface Pro 4 (1724) i5-6th Gen 2.4Ghz, 256GB SSD, 8GB RAM w/ Surface Keyboard",
    image: "/laptops/P156.png",
    rating: 0,
    reviews: 0,
    price: "$349.00",
    savings: "SAVE $250",
    isTopDeal: false
  },
  {
    id: 157,
    name: "Refurbished Excellent Microsoft Surface Laptop 5 13.5\" Touchscreen i5 1245U 16GB Ram/ 256GB SSD/ Intel iris Xe Graphics/ 3-Years MS Warranty",
    image: "/laptops/P157.png",
    rating: 0,
    reviews: 0,
    price: "$849.00",
    savings: "SAVE $151",
    isTopDeal: false
  },
  {
    id: 158,
    name: "Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/256GB SSD) (2024) - Platinum - BIL",
    image: "/laptops/P158.png",
    rating: 0,
    reviews: 0,
    price: "$1,849.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 159,
    name: "Microsoft Surface Pro 10 Tablet - 13\" - vPro Technology - 16 GB - 256 GB SSD",
    image: "/laptops/P159.png",
    rating: 0,
    reviews: 0,
    price: "$2,219.99",
    savings: "SAVE $270",
    isTopDeal: false
  },
  {
    id: 160,
    name: "Refurbished ( Excellent) Microsoft Surface Laptop Go - 12.4\" Touchscreen - Intel Core i5-1035G1- 16GB Ram -256GB SSD - Windows 11 Pro -Platinum - Certified Refurbished",
    image: "/laptops/P160.png",
    rating: 0,
    reviews: 0,
    price: "$799.00",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 161,
    name: "Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/32GB RAM/1TB SSD)-2025- Black-EN",
    image: "/laptops/P161.png",
    rating: 4.2,
    reviews: 33,
    price: "$2,949.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 162,
    name: "Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) - Platinum - EN",
    image: "/laptops/P162.png",
    rating: 0,
    reviews: 0,
    price: "$1,399.00",
    savings: "SAVE $600",
    isTopDeal: false
  },
  {
    id: 163,
    name: "Refurbished (Good) - Microsoft Surface Pro 3 Intel Core i5 1.9GHz 8GB RAM 256GB SSD Win10-",
    image: "/laptops/P163.png",
    rating: 0,
    reviews: 0,
    price: "$179.99",
    savings: "SAVE $520",
    isTopDeal: false
  },
  {
    id: 164,
    name: "Refurbished (Good) - Microsoft Surface Pro X 13\" 128GB Windows 10 LTE Tablet with SQ1 Processor/8GB RAM - Black",
    image: "/laptops/P164.png",
    rating: 0,
    reviews: 0,
    price: "$599.00",
    savings: "SAVE $200",
    isTopDeal: false
  },
  {
    id: 165,
    name: "Refurbished (Good) Microsoft Surface Laptop 5 - 13.5\" Touchscreen Model: R2I-00026 i7/512/15T Black English",
    image: "/laptops/P165.png",
    rating: 0,
    reviews: 0,
    price: "$789.99",
    savings: "SAVE $100",
    isTopDeal: false
  },
  {
    id: 166,
    name: "Refurbished (Excellent) - Microsoft Surface Book 2 13.5\" 2-in-1 Laptop (Intel Core i5-8350U/ 256GB SSD/ 8GB RAM) -Eng",
    image: "/laptops/P166.png",
    rating: 0,
    reviews: 0,
    price: "$549.00",
    savings: "SAVE $150",
    isTopDeal: false
  },
  {
    id: 167,
    name: "Microsoft Surface Pro 6 (Intel Core i7, 16GB RAM, 1TB) New",
    image: "/laptops/P167.png",
    rating: 0,
    reviews: 0,
    price: "$1,429.98",
    savings: "SAVE $140",
    isTopDeal: false
  },
  {
    id: 168,
    name: "Open Box - Surface Pro 8 1980 i5 1145G7 LTE 16GB 256GB 12.3\" PixelSense Touch with Slim Pen & Keyboard Win 11 Pro - 2 Years Microsoft Warranty Added",
    image: "/laptops/P168.png",
    rating: 0,
    reviews: 0,
    price: "$1,190.00",
    savings: "SAVE $310",
    isTopDeal: false
  },
  {
    id: 169,
    name: "Open Box -Microsoft Surface Laptop 13.8\" TS Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) -EN",
    image: "/laptops/P169.png",
    rating: 0,
    reviews: 0,
    price: "$1,499.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 170,
    name: "Refurbished (Good) - Microsoft Surface Pro 4 (1724) i5-6th Gen 2.4Ghz, 256GB SSD, 8GB RAM w/ Surface Keyboard",
    image: "/laptops/P170.png",
    rating: 0,
    reviews: 0,
    price: "$349.00",
    savings: "SAVE $250",
    isTopDeal: false
  },
  {
    id: 171,
    name: "Open Box - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/256GB SSD) (2024) - Platinum - BIL",
    image: "/laptops/P171.png",
    rating: 0,
    reviews: 0,
    price: "$1,298.98",
    savings: "SAVE $200",
    isTopDeal: false
  },
  {
    id: 172,
    name: "Refurbished(Good) - Microsoft Surface Laptop 3 - 13.5\" Touchscreen Laptop (Intel Core i7/16GB RAM/256GB SSD/Windows 11) Matte Black",
    image: "/laptops/P172.png",
    rating: 0,
    reviews: 0,
    price: "$669.99",
    savings: "SAVE $630",
    isTopDeal: false
  },
  {
    id: 173,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 5 - Intel Core i7-1255U/8GB LPDDR5x/256GB SSD/Windows 11 Home/15\" Screen – Platinum",
    image: "/laptops/P173.png",
    rating: 5,
    reviews: 1,
    price: "$979.99",
    savings: "SAVE $820",
    isTopDeal: false
  },
  {
    id: 174,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 4 - AMD Ryzen 5 4680U/16GB LPDDR4x/256GB SSD/Windows 11 Home/13.5\" Screen - Black",
    image: "/laptops/P174.png",
    rating: 0,
    reviews: 0,
    price: "$859.00",
    savings: "",
    isTopDeal: false
  },
{
    id: 175,
    name: "Surface Laptop (13.8\") - Microsoft Surface Laptop - Copilot+ PC - 13.8\" Touchscreen - Snapdragon X Elite",
    image: "/laptops/P175.png",
    rating: 4.5,
    reviews: 61,
    price: "$1,749.00",
    savings: "SAVE $251",
    isTopDeal: false
  },
  {
    id: 176,
    name: "Open Box - Microsoft Surface Laptop 3 - 15\" Touchscreen Laptop (Intel Core i5-1035G7/256GB SSD/8GB RAM) - ENG",
    image: "/laptops/P176.png",
    rating: 0,
    reviews: 0,
    price: "$948.95",
    savings: "SAVE $651",
    isTopDeal: false
  },
  {
    id: 177,
    name: "Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD)-2025-Dune-EN",
    image: "/laptops/P177.png",
    rating: 4.3,
    reviews: 21,
    price: "$1,699.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 178,
    name: "Refurbished (Good) - Microsoft Surface Pro 5 12.3\" (1796) Intel Core i5 (7th Gen) 2.6Ghz, 256GB SSD, 8GB RAM w/ Surface Keyboard",
    image: "/laptops/P178.png",
    rating: 0,
    reviews: 0,
    price: "$549.00",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 179,
    name: "Microsoft Surface Laptop Go - 12.4\" - Intel Core i5 - Platinum",
    image: "/laptops/P179.png",
    rating: 4.2,
    reviews: 106,
    price: "$1,158.22",
    savings: "",
    isTopDeal: false
  },
  {
    id: 180,
    name: "Microsoft Surface Pro 7 12.3 inch Touch i5 256GB Windows 10 Pro Refurbished (Excellent)",
    image: "/laptops/P180.png",
    rating: 0,
    reviews: 0,
    price: "$799.00",
    savings: "SAVE $500",
    isTopDeal: false
  },
  {
    id: 181,
    name: "Refurbished (Good) - Microsoft Surface Laptop Studio 14.4\" - Platinum (Intel Core i5-11300H/256GB SSD/16GB RAM/Windows 11) -En",
    image: "/laptops/P181.png",
    rating: 0,
    reviews: 0,
    price: "$854.97",
    savings: "SAVE $945",
    isTopDeal: false
  },
  {
    id: 182,
    name: "Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD)-2025-Black-EN",
    image: "/laptops/P182.png",
    rating: 4.6,
    reviews: 76,
    price: "$2,249.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 183,
    name: "Open Box - Microsoft Surface Pro (LCD) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Plus/16GB RAM (2024) - Black - Device Only",
    image: "/laptops/P183.png",
    rating: 0,
    reviews: 0,
    price: "$1,229.99",
    savings: "SAVE $220",
    isTopDeal: false
  },
  {
    id: 184,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) - Dune - EN",
    image: "/laptops/P184.png",
    rating: 0,
    reviews: 0,
    price: "$1,299.99",
    savings: "SAVE $100",
    isTopDeal: false
  },
  {
    id: 185,
    name: "Open Box - Microsoft Surface Pro (OLED) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Elite/16GB RAM (2024) - Platinum - Device Only",
    image: "/laptops/P185.png",
    rating: 0,
    reviews: 0,
    price: "$1,484.99",
    savings: "SAVE $265",
    isTopDeal: false
  },
  {
    id: 186,
    name: "Open Box - Microsoft Surface Laptop 13.8\" TS Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024)- EN",
    image: "/laptops/P186.png",
    rating: 0,
    reviews: 0,
    price: "$1,499.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 187,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 4 Intel Core i5-1135G7 16GB RAM 512GB SSD 13.5in 2256 x 1504 Touchscreen W11P - Matte Black",
    image: "/laptops/P187.png",
    rating: 0,
    reviews: 0,
    price: "$920.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 188,
    name: "Refurbished (Good) - Microsoft Surface Laptop 3 - 15\" Touch-Screen - 1TB SSD / AMD Ryzen 7 Surface Edition / 32GB Memory - (Latest Model)",
    image: "/laptops/P188.png",
    rating: 4.2,
    reviews: 2498,
    price: "$3,099.00",
    savings: "SAVE $501",
    isTopDeal: false
  },
  {
    id: 189,
    name: "Refurbished (Excellent) - Microsoft Surface Pro LTE Intel i5 8GB 256GB Windows 10 Certified Refurbished",
    image: "/laptops/P189.png",
    rating: 0,
    reviews: 0,
    price: "$699.00",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 190,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/32GB RAM/1TB SSD) - Black",
    image: "/laptops/P190.png",
    rating: 0,
    reviews: 0,
    price: "$1,749.99",
    savings: "SAVE $1,050",
    isTopDeal: false
  },
  {
    id: 191,
    name: "Open Box - Microsoft Surface Pro (OLED) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Elite/16GB RAM (2024) - Sapphire - Device Only",
    image: "/laptops/P191.png",
    rating: 0,
    reviews: 0,
    price: "$1,484.99",
    savings: "SAVE $265",
    isTopDeal: false
  },
  {
    id: 192,
    name: "Open Box - Microsoft Surface Laptop 13.8\" TS Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024)- EN",
    image: "/laptops/P192.png",
    rating: 0,
    reviews: 0,
    price: "$1,449.99",
    savings: "SAVE $100",
    isTopDeal: false
  },
  {
    id: 193,
    name: "Microsoft Surface 5 13.5\" Touchscreen Laptop Notebook - Intel Core i5, 16GB RAM, 512GB SSD, Windows 10",
    image: "/laptops/P193.png",
    rating: 0,
    reviews: 0,
    price: "$1,499.99",
    savings: "SAVE $699",
    isTopDeal: false
  },
  {
    id: 194,
    name: "Open Box - Microsoft Surface Laptop Studio 14.4\" - Platinum (Intel Core i7-11370H/2TB SSD/32GB RAM/Windows 11)",
    image: "/laptops/P194.png",
    rating: 0,
    reviews: 0,
    price: "$3,299.99",
    savings: "SAVE $900",
    isTopDeal: false
  },
  {
    id: 195,
    name: "Refurbished (Fair) - Microsoft Surface Laptop Go 2 12.4\" Touchscreen Laptop - Sandstone (Intel i5-1135G7/128GB SSD/8GB RAM)",
    image: "/laptops/P195.png",
    rating: 0,
    reviews: 0,
    price: "$514.97",
    savings: "SAVE $135",
    isTopDeal: false
  },
  {
    id: 196,
    name: "Refurbished (Good) - Microsoft Surface Book 3 13.5\" 2-in-1 Laptop - Platinum (Intel Ci7-1065G7/256GB SSD/16GB RAM) - English",
    image: "/laptops/P196.png",
    rating: 0,
    reviews: 0,
    price: "$678.99",
    savings: "SAVE $821",
    isTopDeal: false
  },
  {
    id: 197,
    name: "Refurbished (Good) -Microsoft Surface Laptop Go 12.4\" Touchscreen Laptop -Platinum (Intel i5-1035G1/64GB eMMC/4GB RAM) -En",
    image: "/laptops/P197.png",
    rating: 0,
    reviews: 0,
    price: "$500.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 198,
    name: "Refurbished (Fair) - Microsoft Surface Pro 8 13\" 128GB Windows 11 Tablet with Intel Core i5-1135G7 - Platinum",
    image: "/laptops/P198.png",
    rating: 0,
    reviews: 0,
    price: "$554.97",
    savings: "SAVE $845",
    isTopDeal: false
  },
 {
    id: 199,
    name: "Microsoft Surface Laptop 3 – 15\" Touch-Screen – AMD R5/16GB RAM /256GB – Platinum with Alcantara * Canadian French Keyboard * , bundle with Surface Dock",
    image: "/laptops/P199.png",
    rating: 0,
    reviews: 0,
    price: "$1,177.05",
    savings: "",
    isTopDeal: false
  },
  {
    id: 200,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop Go 3 12.45\" Touchscreen Laptop -Sandstone (Intel Ci5-1235U/256GB SSD/8GB RAM)",
    image: "/laptops/P200.png",
    rating: 0,
    reviews: 0,
    price: "$799.00",
    savings: "SAVE $500",
    isTopDeal: false
  },
  {
    id: 201,
    name: "Microsoft Surface Laptop 3 13\" i7/16/512 Sandstone * Canadian French Keyboard * , bundle with Surface Dock",
    image: "/laptops/P201.png",
    rating: 0,
    reviews: 0,
    price: "$1,218.37",
    savings: "",
    isTopDeal: false
  },
  {
    id: 202,
    name: "Open Box - Microsoft Surface Pro 8 13\" 256GB Windows 11 Tablet w/ Intel i5/8GB RAM -Platinum",
    image: "/laptops/P202.png",
    rating: 4,
    reviews: 32,
    price: "$1,299.97",
    savings: "SAVE $230",
    isTopDeal: false
  },
  {
    id: 203,
    name: "Refurbished (Good) Microsoft Surface Pro 5 - Intel Core i7-7600U 2.5GHz, 8GB RAM, 256GB SSD, with Surface Keyboard, Windows 11 Pro",
    image: "/laptops/P203.png",
    rating: 0,
    reviews: 0,
    price: "$699.00",
    savings: "SAVE $200",
    isTopDeal: false
  },
  {
    id: 204,
    name: "Open Box Microsoft Surface Laptop 5 - 13.5\"\" Touchscreen, 12th Gen Intel Core- i7 1265U, 16GB RAM, 256GB SSD, Windows 11 Home, Matte Black, Eng",
    image: "/laptops/P204.png",
    rating: 0,
    reviews: 0,
    price: "$1,099.99",
    savings: "SAVE $200",
    isTopDeal: false
  },
  {
    id: 205,
    name: "Refurbished (Good) - Microsoft Surface Pro 5 12.3\" Tablet - 1796 - Intel Core i5-7330U, 256GB, 8GB RAM - Silver",
    image: "/laptops/P205.png",
    rating: 3.5,
    reviews: 2,
    price: "$549.00",
    savings: "SAVE $150",
    isTopDeal: false
  },
  {
    id: 206,
    name: "Open Box - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Black - EN",
    image: "/laptops/P206.png",
    rating: 0,
    reviews: 0,
    price: "$1,764.99",
    savings: "SAVE $85",
    isTopDeal: false
  },
  {
    id: 207,
    name: "Open Box - Microsoft Surface Laptop 15\" TS Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) - EN",
    image: "/laptops/P207.png",
    rating: 4,
    reviews: 1,
    price: "$2,149.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 208,
    name: "Microsoft Surface Laptop Studio 2 14.4\" (Intel Core i7-13700H/1TB SSD/32GB RAM/GeForce RTX 4050) -Exclusive Retail Partner",
    image: "/laptops/P208.png",
    rating: 0,
    reviews: 0,
    price: "$3,439.99",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 209,
    name: "Refurbished (Excellent) - Microsoft Surface Book 3 15\" (Intel Core i7-1065G7 / 16GB / 256GB PCIe SSD / NVIDIA GeForce GTX 1660 Ti Max-Q / Windows 10 Pro)",
    image: "/laptops/P209.png",
    rating: 0,
    reviews: 0,
    price: "$949.99",
    savings: "SAVE $1,050",
    isTopDeal: false
  },
  {
    id: 210,
    name: "Refurbished (Excellent) Microsoft Surface Pro 13\" (OLED) Copilot+ PC (Snapdragon X Elite/16GB RAM/1TB SSD) - Black - Device Only",
    image: "/laptops/P210.png",
    rating: 0,
    reviews: 0,
    price: "$1,499.99",
    savings: "SAVE $900",
    isTopDeal: false
  },
  {
    id: 211,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/1TB SSD) - Black",
    image: "/laptops/P211.png",
    rating: 0,
    reviews: 0,
    price: "$1,249.99",
    savings: "SAVE $750",
    isTopDeal: false
  },
  {
    id: 212,
    name: "Open Box - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/32GB RAM/1TB SSD) (2024) - Black - EN",
    image: "/laptops/P212.png",
    rating: 0,
    reviews: 0,
    price: "$2,289.99",
    savings: "SAVE $110",
    isTopDeal: false
  },
  {
    id: 213,
    name: "Open Box - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/32GB RAM/1TB SSD) (2024) - Blk - EN",
    image: "/laptops/P213.png",
    rating: 0,
    reviews: 0,
    price: "$2,429.99",
    savings: "SAVE $120",
    isTopDeal: false
  },
  {
    id: 214,
    name: "Open Box - Microsoft Surface Book 3 13.5\" (Intel Core i7-1065G7 /32GB RAM/512GB SSD/NVIDIA GeForce GTX 1650 4GB Graphics/Windows 11) - Platinum",
    image: "/laptops/P214.png",
    rating: 0,
    reviews: 0,
    price: "$1,999.00",
    savings: "SAVE $1,001",
    isTopDeal: false
  },
  {
    id: 215,
    name: "Open Box - Microsoft Surface Pro 9 13\" 512GB Windows 10 Pro Tablet with Intel Core i7 1265U/16GB RAM - Graphite",
    image: "/laptops/P215.png",
    rating: 0,
    reviews: 0,
    price: "$2,199.99",
    savings: "SAVE $399",
    isTopDeal: false
  },
  {
    id: 216,
    name: "Open Box - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/256GB SSD) (2024) - Platinum - EN",
    image: "/laptops/P216.png",
    rating: 0,
    reviews: 0,
    price: "$1,624.99",
    savings: "SAVE $225",
    isTopDeal: false
  },
  {
    id: 217,
    name: "Refurbished (Excellent) – Microsoft Surface Laptop Go 3 12.4\" Touchscreen – Intel Core i5-1235U, 16GB RAM, 256GB SSD, Windows 11 Pro – Titanium",
    image: "/laptops/P217.png",
    rating: 0,
    reviews: 0,
    price: "$899.00",
    savings: "SAVE $600",
    isTopDeal: false
  },
  {
    id: 218,
    name: "Refurbished (Fair) - Microsoft Surface Laptop 5 Touchscreen 13.5\" - Black (Intel Evo i7-1255U/512GB SSD/16GB RAM/Windows 11) - En",
    image: "/laptops/P218.png",
    rating: 0,
    reviews: 0,
    price: "$1,419.97",
    savings: "SAVE $380",
    isTopDeal: false
  },
  {
    id: 219,
    name: "Refurbished (Good) - Microsoft Surface Laptop 5 Touchscreen 13.5\" - Black (Intel Evo i7-1255U/512GB SSD/16GB RAM/Windows 11) - En",
    image: "/laptops/P219.png",
    rating: 0,
    reviews: 0,
    price: "$1,449.97",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 220,
    name: "Refurbished (Good) - Microsoft Surface Laptop 5 13.5\" Touchscreen Laptop - Sandstone (Intel Core i5-1235U/512GB SSD/8GB RAM)",
    image: "/laptops/P220.png",
    rating: 0,
    reviews: 0,
    price: "$884.97",
    savings: "SAVE $215",
    isTopDeal: false
  },
  {
    id: 221,
    name: "Refurbished (Good) - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Platinum - EN",
    image: "/laptops/P221.png",
    rating: 0,
    reviews: 0,
    price: "$1,404.99",
    savings: "SAVE $245",
    isTopDeal: false
  },
  {
    id: 222,
    name: "Microsoft Surface Laptop 3 15\" Touchscreen AMD Ryzen 7 32GB 1TB Windows 10 Black Refurbished Excellent",
    image: "/laptops/P222.png",
    rating: 0,
    reviews: 0,
    price: "$1,198.00",
    savings: "SAVE $801",
    isTopDeal: false
  },
{
    id: 223,
    name: "Microsoft Surface Pro 9 13\" Core i7 1265U 16GB 256GB Windows 10 Pro Platinum Refurbished Excellent",
    image: "/laptops/P223.png",
    rating: 0,
    reviews: 0,
    price: "$1,299.00",
    savings: "SAVE $700",
    isTopDeal: false
  },
  {
    id: 224,
    name: "Refurbished (Fair) - Microsoft Surface Laptop 5 13.5\" Touchscreen Laptop - Sandstone (Intel Core i5-1235U/512GB SSD/8GB RAM)",
    image: "/laptops/P224.png",
    rating: 0,
    reviews: 0,
    price: "$869.97",
    savings: "SAVE $230",
    isTopDeal: false
  },
  {
    id: 225,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) (2024) - Sapphire - EN",
    image: "/laptops/P225.png",
    rating: 0,
    reviews: 0,
    price: "$1,714.99",
    savings: "SAVE $135",
    isTopDeal: false
  },
  {
    id: 226,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 5 13.5\" Touchscreen Laptop - Sandstone (Intel Core i5-1235U/512GB SSD/8GB RAM)",
    image: "/laptops/P226.png",
    rating: 0,
    reviews: 0,
    price: "$904.97",
    savings: "SAVE $195",
    isTopDeal: false
  },
  {
    id: 227,
    name: "Open Box - Microsoft Surface Pro 2 Tablet 4GB Ram 128GB Storage Win/8.1 Pro - Black",
    image: "/laptops/P227.png",
    rating: 0,
    reviews: 0,
    price: "$559.97",
    savings: "SAVE $239",
    isTopDeal: false
  },
  {
    id: 228,
    name: "Refurbished (Good) - Microsoft Surface 2 1573 Ram 2GB Storage - 64GB - Silver",
    image: "/laptops/P228.png",
    rating: 0,
    reviews: 0,
    price: "$499.97",
    savings: "SAVE $199",
    isTopDeal: false
  },
  {
    id: 229,
    name: "Open Box - Microsoft Surface Pro (LCD) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Plus/16GB RAM (2024) - Platinum - Device Only",
    image: "/laptops/P229.png",
    rating: 0,
    reviews: 0,
    price: "$1,229.99",
    savings: "SAVE $220",
    isTopDeal: false
  },
  {
    id: 230,
    name: "Open Box – Microsoft Surface Pro 9, 13\" Touch (2880*1920), Intel i5-1245U (10 Cores) 16GB RAM, 256GB SSD, Thunderbolt 4, Wi-Fi 6E, Win 11 Pro Tablet",
    image: "/laptops/P230.png",
    rating: 0,
    reviews: 0,
    price: "$2,199.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 231,
    name: "Open Box – Microsoft Surface Laptop 5 for Business 13.5\" -Black- Intel i7-1265U/256TB/16GB RAM/13.5\" 2256x1504 Touch Screen/Windows 11Pro",
    image: "/laptops/P231.png",
    rating: 0,
    reviews: 0,
    price: "$2,225.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 232,
    name: "Open Box - Microsoft Surface Pro 9 13\" 256GB Windows 11 Tablet with Intel Evo Core i7-1255U/16GB RAM - Platinum",
    image: "/laptops/P232.png",
    rating: 0,
    reviews: 0,
    price: "$1,964.97",
    savings: "SAVE $95",
    isTopDeal: false
  },
  {
    id: 233,
    name: "Open Box Microsoft Surface Laptop 5 V-PRO i7 1255U 16GB 256GB 13.3\" 2K Touch Win 11 Pro - 3 Years Microsoft Warranty",
    image: "/laptops/P233.png",
    rating: 0,
    reviews: 0,
    price: "$1,290.00",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 234,
    name: "Refurbished (Good) Microsoft Surface Pro 9 - Intel Core i5-1235U/8GB LPDDR5/256GB SSD, Windows 11 Home, Graphite (Device Only)",
    image: "/laptops/P234.png",
    rating: 0,
    reviews: 0,
    price: "$829.99",
    savings: "SAVE $160",
    isTopDeal: false
  },
  {
    id: 235,
    name: "Refurbished (Good) Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop Model: RHI-00001 i7-1255/8/512/15T Platinum",
    image: "/laptops/P235.png",
    rating: 0,
    reviews: 0,
    price: "$999.99",
    savings: "SAVE $700",
    isTopDeal: false
  },
  {
    id: 236,
    name: "Refurbished (Good) Microsoft Surface Pro 9 Model: QG8-00018 i5/8/256 Sapphire",
    image: "/laptops/P236.png",
    rating: 0,
    reviews: 0,
    price: "$829.99",
    savings: "SAVE $160",
    isTopDeal: false
  },
  {
    id: 237,
    name: "Refurbished (Good) Microsoft Surface Pro 9 Model: QG8-00018 i5/8/256 Forest",
    image: "/laptops/P237.png",
    rating: 0,
    reviews: 0,
    price: "$829.99",
    savings: "SAVE $170",
    isTopDeal: false
  },
  {
    id: 238,
    name: "Refurbished (Good) Microsoft Surface Laptop 5 Model: R2I-00062 i5/8/13T Sandstone English",
    image: "/laptops/P238.png",
    rating: 0,
    reviews: 0,
    price: "$749.99",
    savings: "SAVE $250",
    isTopDeal: false
  },
  {
    id: 239,
    name: "Refurbished (Good) Surface Laptop Go SRFC XK7-00060 i5-12/8/12T BL Ice Blue",
    image: "/laptops/P239.png",
    rating: 0,
    reviews: 0,
    price: "$529.99",
    savings: "SAVE $100",
    isTopDeal: false
  },
  {
    id: 240,
    name: "Open Box - Microsoft Surface Pro (OLED) Copilot+ PC 13\" 1TB Tablet with Snapdragon X Elite/16GB RAM (2024) - Dune - Device Only",
    image: "/laptops/P240.png",
    rating: 0,
    reviews: 0,
    price: "$1,699.99",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 241,
    name: "Refurbished (Good) - Microsoft Surface Pro 4 12.3\" 128GB Windows 10 Tablet With 6th Gen Intel Core m3-6Y30 - Silver",
    image: "/laptops/P241.png",
    rating: 0,
    reviews: 0,
    price: "$639.97",
    savings: "SAVE $60",
    isTopDeal: false
  },
  {
    id: 242,
    name: "Refurbished (Good) - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Dune - EN",
    image: "/laptops/P242.png",
    rating: 0,
    reviews: 0,
    price: "$1,499.99",
    savings: "SAVE $150",
    isTopDeal: false
  },
  {
    id: 243,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) - Platinum - BIL",
    image: "/laptops/P243.png",
    rating: 0,
    reviews: 0,
    price: "$1,154.99",
    savings: "SAVE $245",
    isTopDeal: false
  },
  {
    id: 244,
    name: "Refurbished (Fair) - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) - Dune - EN",
    image: "/laptops/P244.png",
    rating: 0,
    reviews: 0,
    price: "$1,244.99",
    savings: "SAVE $155",
    isTopDeal: false
  },
  {
    id: 245,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop Studio 2 14.4\" (Intel Core i7-13700H/1TB SSD/64GB RAM/GeForce RTX 4060) -En",
    image: "/laptops/P245.png",
    rating: 0,
    reviews: 0,
    price: "$3,379.99",
    savings: "SAVE $720",
    isTopDeal: false
  },
  {
    id: 246,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 8 (1982) 13\" Touchscreen Tablet, Intel Core i7-1185G7 3.0GHz, 16GB RAM, 256GB NVMe, Windows 11 Pro. (Device Only)",
    image: "/laptops/P246.png",
    rating: 0,
    reviews: 0,
    price: "$899.99",
    savings: "SAVE $200",
    isTopDeal: false
  },
  {
    id: 247,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 8 (1982) 13\" Touchscreen Tablet, Intel Core i5-1135G7 2.6GHz, 16GB RAM, 256GB NVMe, Windows 11 Pro. (Device Only)",
    image: "/laptops/P247.png",
    rating: 0,
    reviews: 0,
    price: "$899.99",
    savings: "SAVE $100",
    isTopDeal: false
  },
  {
    id: 248,
    name: "(Open Box) Microsoft Surface Laptop 6 13.5\" Touchscreen Notebook - Intel Core i5 - 16 GB - 512 GB SSD - Platinum - Intel Chip - 2256 x 1504 - Windows 11",
    image: "/laptops/P248.png",
    rating: 0,
    reviews: 0,
    price: "$131.89",
    savings: "SAVE $110",
    isTopDeal: false
  },
  {
    id: 249,
    name: "Refurbished (Good) - Microsoft Surface Laptop Go 3 12.45\" Touchscreen Laptop - Ice Blue (Intel i5-1235U/256GB SSD/8GB RAM)",
    image: "/laptops/P249.png",
    rating: 0,
    reviews: 0,
    price: "$884.99",
    savings: "SAVE $215",
    isTopDeal: false
  },
  {
    id: 250,
    name: "Microsoft Surface Pro 9 13\" Tablet i5-1235U 8GB 256GB SSD Window 11 Home Graphite Refurbished Excellent",
    image: "/laptops/P250.png",
    rating: 0,
    reviews: 0,
    price: "$1,098.00",
    savings: "SAVE $700",
    isTopDeal: false
  },
  {
    id: 251,
    name: "Microsoft Surface Laptop 6 13.5\" Touchscreen Notebook - Intel Core Ultra 5 135H - 32 GB - 256 GB SSD - English (US) Keyboard - Black",
    image: "/laptops/P251.png",
    rating: 0,
    reviews: 0,
    price: "$1,619.98",
    savings: "SAVE $179",
    isTopDeal: false
  },
  {
    id: 252,
    name: "Microsoft Surface Pro 9 13\" Core i5 1235U 8GB 128GB Windows 11 Home Platinum Refurbished Excellent",
    image: "/laptops/P252.png",
    rating: 0,
    reviews: 0,
    price: "$864.99",
    savings: "SAVE $635",
    isTopDeal: false
  },
  {
    id: 253,
    name: "Refurbished (Fair) - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Platinum - EN",
    image: "/laptops/P253.png",
    rating: 0,
    reviews: 0,
    price: "$1,644.99",
    savings: "SAVE $205",
    isTopDeal: false
  },
  {
    id: 254,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/32GB RAM/1TB SSD) (2024) - Black - EN",
    image: "/laptops/P254.png",
    rating: 0,
    reviews: 0,
    price: "$2,359.99",
    savings: "SAVE $190",
    isTopDeal: false
  },
  {
    id: 255,
    name: "Microsoft Surface Pro 9 13\" Tablet i5-1235U 16GB 256GB SSD Window 11 Home Graphite",
    image: "/laptops/P255.png",
    rating: 0,
    reviews: 0,
    price: "$1,358.00",
    savings: "SAVE $641",
    isTopDeal: false
  },
  {
    id: 256,
    name: "Microsoft Surface Pro 9 13\" Tablet i5-1235U 16GB 256GB SSD Window 11 Home Sapphire",
    image: "/laptops/P256.png",
    rating: 0,
    reviews: 0,
    price: "$1,378.00",
    savings: "SAVE $621",
    isTopDeal: false
  },
  {
    id: 257,
    name: "Refurbished (Good) - Microsoft Surface Pro 7+ 12.3\" (Model 1960), Intel Core i5-11th Gen. 2.8GHz, 16GB, 256GB Storage, Windows 11 Pro W/Keyboard and wireless mouse",
    image: "/laptops/P257.png",
    rating: 0,
    reviews: 0,
    price: "$732.00",
    savings: "SAVE $163",
    isTopDeal: false
  },
  {
    id: 258,
    name: "Open Box - Microsoft Surface Laptop 13.8\" Copilot+ PC Laptop (Snapdragon X Elite/32GB RAM/1TB SSD) (2024) - Black - EN",
    image: "/laptops/P258.png",
    rating: 0,
    reviews: 0,
    price: "$2,549.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 259,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) - Black",
    image: "/laptops/P259.png",
    rating: 0,
    reviews: 0,
    price: "$1,249.99",
    savings: "SAVE $750",
    isTopDeal: false
  },
  {
    id: 260,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) - Black",
    image: "/laptops/P260.png",
    rating: 0,
    reviews: 0,
    price: "$1,399.99",
    savings: "SAVE $850",
    isTopDeal: false
  },
  {
    id: 261,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) - Platinum",
    image: "/laptops/P261.png",
    rating: 0,
    reviews: 0,
    price: "$1,249.99",
    savings: "SAVE $750",
    isTopDeal: false
  },
  {
    id: 262,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) - Black",
    image: "/laptops/P262.png",
    rating: 0,
    reviews: 0,
    price: "$1,499.99",
    savings: "SAVE $900",
    isTopDeal: false
  },
  {
    id: 263,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) - Maya",
    image: "/laptops/P263.png",
    rating: 0,
    reviews: 0,
    price: "$1,249.99",
    savings: "SAVE $750",
    isTopDeal: false
  },
  {
    id: 264,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) - Platinum",
    image: "/laptops/P264.png",
    rating: 0,
    reviews: 0,
    price: "$1,069.99",
    savings: "SAVE $630",
    isTopDeal: false
  },
  {
    id: 265,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) - Dune",
    image: "/laptops/P265.png",
    rating: 0,
    reviews: 0,
    price: "$1,399.99",
    savings: "SAVE $850",
    isTopDeal: false
  },
  {
    id: 266,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) - Maya",
    image: "/laptops/P266.png",
    rating: 0,
    reviews: 0,
    price: "$1,399.99",
    savings: "SAVE $850",
    isTopDeal: false
  },
  {
    id: 267,
    name: "Refurbished Excellent Microsoft Surface Laptop 5 V-PRO i7 1255U 16GB 256GB 13.3\" 2K Touch Win 11 Pro - 2 Years Microsoft Warranty",
    image: "/laptops/P267.png",
    rating: 0,
    reviews: 0,
    price: "$1,090.00",
    savings: "SAVE $200",
    isTopDeal: false
  },
  {
    id: 268,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) - Platinum",
    image: "/laptops/P268.png",
    rating: 0,
    reviews: 0,
    price: "$1,339.99",
    savings: "SAVE $810",
    isTopDeal: false
  },
  {
    id: 269,
    name: "Refurbished Excellent Surface Pro 8 i5 1145G7 LTE 16GB 256GB 13\" PixelSense 120Hz Touch Win 11 Pro Warranty till 2026",
    image: "/laptops/P269.png",
    rating: 0,
    reviews: 0,
    price: "$975.00",
    savings: "SAVE $215",
    isTopDeal: false
  },
  {
    id: 270,
    name: "Refurbished Good Microsoft Surface laptop 5 13.5\" Touchscreen Intel i5 1245U/ 16 GB Ram/ 256GB SSD - Windows 11 Pro",
    image: "/laptops/P270.png",
    rating: 0,
    reviews: 0,
    price: "$729.00",
    savings: "SAVE $71",
    isTopDeal: false
  },
  {
    id: 271,
    name: "Refurbished (Excellent) - Microsoft Surface Pro (LCD) Copilot+ PC 13\" 256GB Tablet with Snapdragon X Plus/16GB RAM (2024) - Platinum - Device Only",
    image: "/laptops/P271.png",
    rating: 0,
    reviews: 0,
    price: "$1,099.99",
    savings: "SAVE $250",
    isTopDeal: false
  },
  {
    id: 272,
    name: "Open Box - Microsoft Surface Pro (OLED) Copilot+ PC 13\" 1TB Tablet with Snapdragon X Elite/16GB RAM (2024) - Black - Device Only",
    image: "/laptops/P272.png",
    rating: 0,
    reviews: 0,
    price: "$1,909.99",
    savings: "SAVE $90",
    isTopDeal: false
  },
  {
    id: 273,
    name: "Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD)-2025-Platinum-EN",
    image: "/laptops/P273.png",
    rating: 4.6,
    reviews: 26,
    price: "$2,399.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 274,
    name: "Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/256GB SSD)-2025-Platinum-EN",
    image: "/laptops/P274.png",
    rating: 4.4,
    reviews: 112,
    price: "$1,849.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 275,
    name: "Refurbished (Fair) - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Black - BIL",
    image: "/laptops/P275.png",
    rating: 0,
    reviews: 0,
    price: "$1,644.99",
    savings: "SAVE $205",
    isTopDeal: false
  },
  {
    id: 276,
    name: "Refurbished (Good) - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Black - EN",
    image: "/laptops/P276.png",
    rating: 0,
    reviews: 0,
    price: "$1,679.99",
    savings: "SAVE $170",
    isTopDeal: false
  },
  {
    id: 277,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 8 13\" (Model 1982), Intel Core i7-1185 G7 , 16GB, 256G SSD, Windows 11 Pro",
    image: "/laptops/P277.png",
    rating: 0,
    reviews: 0,
    price: "$982.00",
    savings: "SAVE $416",
    isTopDeal: false
  },
  {
    id: 278,
    name: "Refurbished Good Microsoft Surface Laptop 4, i5 1145G7, 16GB RAM, 256GB SSD, Intel Iris Xe Graphics, 13.5\" Touch - Windows 11 Pro",
    image: "/laptops/P278.png",
    rating: 0,
    reviews: 0,
    price: "$899.00",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 279,
    name: "Open Box - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) (2024) - Black - EN",
    image: "/laptops/P279.png",
    rating: 0,
    reviews: 0,
    price: "$1,954.99",
    savings: "SAVE $95",
    isTopDeal: false
  },
  {
    id: 280,
    name: "Refurbished (Good) - Microsoft Surface Pro 5 12.3\" (Model 1796), Intel Core i7-7660U, 16GB, 512GB Storage, Windows 11 Pro",
    image: "/laptops/P280.png",
    rating: 0,
    reviews: 0,
    price: "$799.00",
    savings: "SAVE $700",
    isTopDeal: false
  },
  {
    id: 281,
    name: "Refurbished (Fair) - Microsoft Surface Pro (LCD) Copilot+ PC 13\" 512GB Tablet with Snapdragon X Plus/16GB RAM (2024) - Sapphire - Device Only",
    image: "/laptops/P281.png",
    rating: 0,
    reviews: 0,
    price: "$1,099.99",
    savings: "SAVE $250",
    isTopDeal: false
  },
  {
    id: 282,
    name: "Refurbished (Excellent) Microsoft Surface Pro 9 - Intel Core i5-1235U/16GB LPDDR5/256GB SSD, Windows 11 Home, Forest (Device Only)",
    image: "/laptops/P282.png",
    rating: 0,
    reviews: 0,
    price: "$1,098.00",
    savings: "SAVE $700",
    isTopDeal: false
  },
  {
    id: 283,
    name: "Refurbished (Fair) - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) (2024) - Platinum - EN",
    image: "/laptops/P283.png",
    rating: 0,
    reviews: 0,
    price: "$1,819.99",
    savings: "SAVE $230",
    isTopDeal: false
  },
  {
    id: 284,
    name: "Refurbished (Fair) - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) - Sapphire - EN",
    image: "/laptops/P284.png",
    rating: 0,
    reviews: 0,
    price: "$1,244.99",
    savings: "SAVE $155",
    isTopDeal: false
  },
  {
    id: 285,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) - Black - EN",
    image: "/laptops/P285.png",
    rating: 0,
    reviews: 0,
    price: "$1,299.99",
    savings: "SAVE $100",
    isTopDeal: false
  },
  {
    id: 286,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Black - BIL",
    image: "/laptops/P286.png",
    rating: 0,
    reviews: 0,
    price: "$1,714.99",
    savings: "SAVE $135",
    isTopDeal: false
  },
  {
    id: 287,
    name: "Refurbished (Good) - Microsoft Surface Pro 6 12.3\" I7 8650U, 16G Ram, 512G SSD Win 11 Pro",
    image: "/laptops/P287.png",
    rating: 0,
    reviews: 0,
    price: "$799.00",
    savings: "SAVE $800",
    isTopDeal: false
  },
  {
    id: 288,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/256GB SSD) (2024) - Platinum - BIL",
    image: "/laptops/P288.png",
    rating: 0,
    reviews: 0,
    price: "$1,299.99",
    savings: "SAVE $150",
    isTopDeal: false
  },
  {
    id: 289,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) (2024) - Dune - EN",
    image: "/laptops/P289.png",
    rating: 0,
    reviews: 0,
    price: "$1,714.99",
    savings: "SAVE $135",
    isTopDeal: false
  },
  {
    id: 290,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Platinum - EN",
    image: "/laptops/P290.png",
    rating: 0,
    reviews: 0,
    price: "$1,714.99",
    savings: "SAVE $135",
    isTopDeal: false
  },
  {
    id: 291,
    name: "Open Box - Microsoft Surface Laptop 5 (13 inch) - Intel Core i5-1235U, 8GB RAM, 512GB SSD, Windows 11 Home, Platinum - Eng",
    image: "/laptops/P291.png",
    rating: 0,
    reviews: 0,
    price: "$1,149.99",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 292,
    name: "Refurbished (Excellent) Microsoft Surface Laptop Go 2 Laptop | 12.4\" 1536x1024 | Core i5 - 1135G7 - 256GB SSD Hard Drive - 16GB RAM | 4 cores @ 4.2 GHz Win 11 Pro Silver",
    image: "/laptops/P292.png",
    rating: 0,
    reviews: 0,
    price: "$799.00",
    savings: "SAVE $700",
    isTopDeal: false
  },
  {
    id: 293,
    name: "Refurbished (Excellent) Microsoft Surface Laptop Go 3 Laptop (2022) Touch | 12.4\" 1536x1024 | Core i5 - 1235U - 256GB SSD Hard Drive - 12GB RAM | 10 cores @ 4.4 GHz Win 11 Pro",
    image: "/laptops/P293.png",
    rating: 0,
    reviews: 0,
    price: "$799.00",
    savings: "SAVE $700",
    isTopDeal: false
  },
  {
    id: 294,
    name: "Refurbished (Excellent) Microsoft Surface Laptop Go 3 Laptop (2022) | 12.4\" 1536x1024 | Core i5 - 1235U - 256GB SSD Hard Drive - 16GB RAM | 10 cores @ 4.4 GHz Win 11 Home Silver",
    image: "/laptops/P294.png",
    rating: 0,
    reviews: 0,
    price: "$799.00",
    savings: "SAVE $700",
    isTopDeal: false
  },
    {
    id: 295,
    name: "Refurbished (Excellent) Microsoft Surface Laptop Go 3 Laptop (2022) | 12.4\" 1536x1024 | Core i5 - 1235U - 512GB SSD Hard Drive - 16GB RAM | 10 cores @ 4.4 GHz Win 11 Pro Silver",
    image: "/laptops/P295.png",
    rating: 0,
    reviews: 0,
    price: "$799.00",
    savings: "SAVE $700",
    isTopDeal: false
  },
  {
    id: 296,
    name: "Refurbished (Excellent) Microsoft Surface Pro 7 Detachable Detachable 2-in-1 Laptop Tablet Touch | 12.3\" 2736x1824 | Core i5 - 1035G4 - 128GB SSD Hard Drive - 8GB RAM | 4 cores @",
    image: "/laptops/P296.png",
    rating: 0,
    reviews: 0,
    price: "$699.00",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 297,
    name: "Open Box - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Sapphire - EN",
    image: "/laptops/P297.png",
    rating: 0,
    reviews: 0,
    price: "$1,574.99",
    savings: "SAVE $75",
    isTopDeal: false
  },
  {
    id: 298,
    name: "Refurbished (Good) - Microsoft Surface Book 2 13.5\" 2-in-1 Laptop (Intel Core i7-8650U/ 1TB SSD/ 16GB RAM) - French",
    image: "/laptops/P298.png",
    rating: 0,
    reviews: 0,
    price: "$2,264.97",
    savings: "SAVE $235",
    isTopDeal: false
  },
  {
    id: 299,
    name: "Open Box - Microsoft Surface Laptop 13.8\" TS Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) (2024)- EN",
    image: "/laptops/P299.png",
    rating: 0,
    reviews: 0,
    price: "$2,099.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 300,
    name: "Refurbished (Good) - Microsoft Surface Pro 7+ - 12.3\" - 128GB Storage - 8GB RAM - Windows 11 Pro Tablet With Intel Core i5-1135G7",
    image: "/laptops/P300.png",
    rating: 0,
    reviews: 0,
    price: "$749.00",
    savings: "SAVE $550",
    isTopDeal: false
  },
  {
    id: 301,
    name: "Refurbished (Fair) - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) -EN",
    image: "/laptops/P301.png",
    rating: 0,
    reviews: 0,
    price: "$1,644.99",
    savings: "SAVE $205",
    isTopDeal: false
  },
  {
    id: 302,
    name: "Refurbished (Fair) - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) -EN",
    image: "/laptops/P302.png",
    rating: 0,
    reviews: 0,
    price: "$1,244.99",
    savings: "SAVE $155",
    isTopDeal: false
  },
  {
    id: 303,
    name: "Open Box - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024) - Platinum - BIL",
    image: "/laptops/P303.png",
    rating: 0,
    reviews: 0,
    price: "$1,189.99",
    savings: "SAVE $210",
    isTopDeal: false
  },
  {
    id: 304,
    name: "Refurbished (Fair) - Microsoft Surface Laptop Studio 14.4\" - Platinum (Intel Core i7-11370H/2TB SSD/32GB RAM/Windows 11) - Bilingual",
    image: "/laptops/P304.png",
    rating: 0,
    reviews: 0,
    price: "$2,134.97",
    savings: "SAVE $565",
    isTopDeal: false
  },
  {
    id: 305,
    name: "Open Box - Microsoft Surface Laptop 13.8\" TS Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) (2024)- BIL",
    image: "/laptops/P305.png",
    rating: 0,
    reviews: 0,
    price: "$2,099.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 306,
    name: "Open Box - Microsoft Surface Laptop 13.8\" TS Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/512GB SSD) (2024)- BIL",
    image: "/laptops/P306.png",
    rating: 0,
    reviews: 0,
    price: "$1,599.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 307,
    name: "Refurbished (Good)- Microsoft Surface Pro 7, Black, 12.3\" Tablet, Intel Core i7-1035G4, 16GB, 256GB SSD, Windows 10 Pro.",
    image: "/laptops/P307.png",
    rating: 0,
    reviews: 0,
    price: "$799.00",
    savings: "SAVE $500",
    isTopDeal: false
  },
  {
    id: 308,
    name: "Refurbished (Good) - Microsoft Surface Pro 8 13\" Tablet (Intel i5-1135G7/16GB RAM 256GB SSD/Windows 11) - Graphite (w/Keyboard)",
    image: "/laptops/P308.png",
    rating: 0,
    reviews: 0,
    price: "$1,199.00",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 309,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) (2024) - Platinum - EN",
    image: "/laptops/P309.png",
    rating: 0,
    reviews: 0,
    price: "$1,899.99",
    savings: "SAVE $150",
    isTopDeal: false
  },
  {
    id: 310,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Black - EN",
    image: "/laptops/P310.png",
    rating: 0,
    reviews: 0,
    price: "$1,434.99",
    savings: "SAVE $215",
    isTopDeal: false
  },
  {
    id: 311,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 5 (13 inch) - Intel Core i5-1235U, 8GB RAM, 512GB SSD, Windows 11 Home, Platinum",
    image: "/laptops/P311.png",
    rating: 0,
    reviews: 0,
    price: "$769.99",
    savings: "SAVE $930",
    isTopDeal: false
  },
  {
    id: 312,
    name: "Refurbished (Good) - Microsoft Surface Book 2 15\" | 3K Touch Display | i7-8650U | 16GB RAM | 512GB SSD | NVIDIA GTX 1060 | Windows 11 Pro",
    image: "/laptops/P312.png",
    rating: 0,
    reviews: 0,
    price: "$749.00",
    savings: "SAVE $750",
    isTopDeal: false
  },
  {
    id: 313,
    name: "Open Box - Microsoft Surface Laptop 15\" TS Copilot+ PC Laptop (Snapdragon X Elite/32GB RAM/1TB SSD)- Black - EN",
    image: "/laptops/P313.png",
    rating: 0,
    reviews: 0,
    price: "$2,699.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 314,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/256GB SSD) (2024) - Platinum - EN",
    image: "/laptops/P314.png",
    rating: 0,
    reviews: 0,
    price: "$1,574.99",
    savings: "SAVE $275",
    isTopDeal: false
  },
  {
    id: 315,
    name: "Refurbished (Good) - Microsoft Surface Laptop 6 13\" Ultra 7 32GB 512GB Intel Graphics Laptop",
    image: "/laptops/P315.png",
    rating: 0,
    reviews: 0,
    price: "$1,489.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 316,
    name: "Refurbished (Fair) - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Black - BIL",
    image: "/laptops/P316.png",
    rating: 0,
    reviews: 0,
    price: "$1,464.99",
    savings: "SAVE $185",
    isTopDeal: false
  },
  {
    id: 317,
    name: "Refurbished (Good) - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/256GB SSD) (2024) - Platinum - EN",
    image: "/laptops/P317.png",
    rating: 0,
    reviews: 0,
    price: "$1,224.99",
    savings: "SAVE $225",
    isTopDeal: false
  },
  {
    id: 318,
    name: "Microsoft Surface Laptop 6 15\" Touchscreen Notebook - Intel Core Ultra 7-16 GB - 256 GB SSD - English Keyboard - Black",
    image: "/laptops/P318.png",
    rating: 0,
    reviews: 0,
    price: "$3,051.47",
    savings: "",
    isTopDeal: false
  },
    {
    id: 319,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Black - EN",
    image: "/laptops/P319.png",
    rating: 0,
    reviews: 0,
    price: "$1,714.99",
    savings: "SAVE $135",
    isTopDeal: false
  },
  {
    id: 320,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Dune - EN",
    image: "/laptops/P320.png",
    rating: 0,
    reviews: 0,
    price: "$1,529.99",
    savings: "SAVE $120",
    isTopDeal: false
  },
  {
    id: 321,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 9 13\" 512GB Windows 11 Tablet with Intel Evo Core i7-1255U/16GB RAM - Graphite",
    image: "/laptops/P321.png",
    rating: 0,
    reviews: 0,
    price: "$2,019.97",
    savings: "SAVE $430",
    isTopDeal: false
  },
  {
    id: 322,
    name: "Refurbished (Good) - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Platinum - EN",
    image: "/laptops/P322.png",
    rating: 0,
    reviews: 0,
    price: "$1,679.99",
    savings: "SAVE $170",
    isTopDeal: false
  },
  {
    id: 323,
    name: "Refurbished (Good) - Microsoft Surface Pro 9 13\" 256GB Windows 11 Tablet w/ Intel Evo Core i7-1255U/16GB RAM - Platinum",
    image: "/laptops/P323.png",
    rating: 0,
    reviews: 0,
    price: "$1,864.97",
    savings: "SAVE $195",
    isTopDeal: false
  },
  {
    id: 324,
    name: "Open Box - Microsoft Surface Laptop 15\" TS Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) - EN",
    image: "/laptops/P324.png",
    rating: 0,
    reviews: 0,
    price: "$2,149.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 325,
    name: "Open Box - Microsoft Surface Laptop 13.8\" TS Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD)- BIL",
    image: "/laptops/P325.png",
    rating: 0,
    reviews: 0,
    price: "$1,799.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 326,
    name: "Open Box - Microsoft Surface Laptop 13.8\" TS Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) - EN",
    image: "/laptops/P326.png",
    rating: 0,
    reviews: 0,
    price: "$1,549.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 327,
    name: "Open Box - Microsoft Surface Laptop 13.8\" TS Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) - EN",
    image: "/laptops/P327.png",
    rating: 0,
    reviews: 0,
    price: "$1,699.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 328,
    name: "Open Box - Microsoft Surface Laptop 13.8\" TS Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) - EN",
    image: "/laptops/P328.png",
    rating: 0,
    reviews: 0,
    price: "$2,099.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 329,
    name: "Open Box - Microsoft Surface Laptop 13.8\" TS Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/256GB SSD)- BIL",
    image: "/laptops/P329.png",
    rating: 0,
    reviews: 0,
    price: "$1,399.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 330,
    name: "Refurbished (Good) Microsoft Surface Pro 5 - Intel Core i5-7300U 2.6GHz, 8GB RAM, 128GB SSD, with Surface Keyboard, Windows 11 Pro",
    image: "/laptops/P330.png",
    rating: 0,
    reviews: 0,
    price: "$549.00",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 331,
    name: "Refurbished (Good) Microsoft Surface Pro 6 - Intel Core i5-8250U 1.6GHz, 8GB RAM, 256GB SSD, with Surface Keyboard, Windows 11 Pro",
    image: "/laptops/P331.png",
    rating: 0,
    reviews: 0,
    price: "$599.00",
    savings: "SAVE $700",
    isTopDeal: false
  },
  {
    id: 332,
    name: "Refurbished (Good) Microsoft Surface Pro 6 - Intel Core i5-8300U 1.7GHz, 8GB RAM, 128GB SSD, with Surface Keyboard, Windows 11 Pro",
    image: "/laptops/P332.png",
    rating: 0,
    reviews: 0,
    price: "$549.00",
    savings: "SAVE $250",
    isTopDeal: false
  },
  {
    id: 333,
    name: "Refurbished (Good) - Microsoft Surface Pro 7+ 12.3\" (Model 1961) Silver, Intel Core i5-11th Gen. 2.4GHz, 8GB, 256GB Storage, Windows 11 Pro. (With Keyboard)",
    image: "/laptops/P333.png",
    rating: 0,
    reviews: 0,
    price: "$699.00",
    savings: "SAVE $500",
    isTopDeal: false
  },
  {
    id: 334,
    name: "Open Box - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) (2024) - Platinum - EN",
    image: "/laptops/P334.png",
    rating: 0,
    reviews: 0,
    price: "$1,954.99",
    savings: "SAVE $95",
    isTopDeal: false
  },
  {
    id: 335,
    name: "Open Box - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Dune - EN",
    image: "/laptops/P335.png",
    rating: 0,
    reviews: 0,
    price: "$1,574.99",
    savings: "SAVE $75",
    isTopDeal: false
  },
  {
    id: 336,
    name: "Open Box - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Black - BIL",
    image: "/laptops/P336.png",
    rating: 0,
    reviews: 0,
    price: "$1,574.99",
    savings: "SAVE $75",
    isTopDeal: false
  },
  {
    id: 337,
    name: "Refurbished (Excellent) - Microsoft Surface 3 15'' Touchscreen Laptop - Platinum (AMD Ryzen 5-3580U/8GB RAM/256GB SSD/Win 10 Home)-Factory Recertified (1-Year Microsoft Warranty)",
    image: "/laptops/P337.png",
    rating: 0,
    reviews: 0,
    price: "$1,768.99",
    savings: "SAVE $375",
    isTopDeal: false
  },
  {
    id: 338,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop Studio 2 14.4\" (Intel Core i7-13700H/512GB SSD/16GB RAM) -En",
    image: "/laptops/P338.png",
    rating: 0,
    reviews: 0,
    price: "$2,224.99",
    savings: "SAVE $475",
    isTopDeal: false
  },
  {
    id: 339,
    name: "Refurbished (Fair) -Microsoft Surface Book 3 13.5\" 2-in-1 Laptop - Platinum (Intel Ci7-1065G7/512GB SSD/32GB RAM) - En",
    image: "/laptops/P339.png",
    rating: 0,
    reviews: 0,
    price: "$2,684.99",
    savings: "SAVE $715",
    isTopDeal: false
  },
  {
    id: 340,
    name: "Refurbished (Good) - Microsoft Surface Pro 7 12.3\" Touchscreen (Intel Core i5-1035G4/8GB RAM/128GB SSD/Windows 10) - Platinum",
    image: "/laptops/P340.png",
    rating: 0,
    reviews: 0,
    price: "$699.00",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 341,
    name: "Refurbished (Good) - Microsoft Surface Pro 7 12.3\" Touchscreen (Intel Core i5-1035G4/8GB RAM/256GB SSD/Windows 10) - Platinum",
    image: "/laptops/P341.png",
    rating: 0,
    reviews: 0,
    price: "$899.00",
    savings: "SAVE $100",
    isTopDeal: false
  },
  {
    id: 342,
    name: "Open Box - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) (2024) - Sapphire - EN",
    image: "/laptops/P342.png",
    rating: 0,
    reviews: 0,
    price: "$1,764.99",
    savings: "SAVE $85",
    isTopDeal: false
  },
    {
    id: 343,
    name: "Open Box - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) (2024) - Black - EN",
    image: "/laptops/P343.png",
    rating: 0,
    reviews: 0,
    price: "$1,624.99",
    savings: "SAVE $225",
    isTopDeal: false
  },
  {
    id: 344,
    name: "Open Box - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/1TB SSD) (2024) - Dune - EN",
    image: "/laptops/P344.png",
    rating: 0,
    reviews: 0,
    price: "$1,764.99",
    savings: "SAVE $85",
    isTopDeal: false
  },
  {
    id: 345,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 5 Touchscreen 13.5\" - Sandstone (Intel Evo i5-1235U/512GB SSD/8GB RAM) - French",
    image: "/laptops/P345.png",
    rating: 0,
    reviews: 0,
    price: "$849.00",
    savings: "SAVE $550",
    isTopDeal: false
  },
  {
    id: 346,
    name: "Open Box - Microsoft Surface Laptop 15\" TS Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024)- EN",
    image: "/laptops/P346.png",
    rating: 0,
    reviews: 0,
    price: "$1,999.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 347,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 5 Touchscreen 15\" - (Intel Evo i7-1255U/256GB SSD/8GB RAM)-En",
    image: "/laptops/P347.png",
    rating: 0,
    reviews: 0,
    price: "$949.99",
    savings: "SAVE $450",
    isTopDeal: false
  },
  {
    id: 348,
    name: "Open Box - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024)-Blk-EN",
    image: "/laptops/P348.png",
    rating: 0,
    reviews: 0,
    price: "$1,479.99",
    savings: "SAVE $170",
    isTopDeal: false
  },
  {
    id: 349,
    name: "Open Box - Microsoft Surface Laptop 15\" TS Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD)- BIL",
    image: "/laptops/P349.png",
    rating: 0,
    reviews: 0,
    price: "$1,999.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 350,
    name: "Refurbished (Fair) -Microsoft Surface Laptop Studio 2 14.4\" (Intel Core i7-13700H/512GB SSD/16GB RAM) -En",
    image: "/laptops/P350.png",
    rating: 0,
    reviews: 0,
    price: "$2,134.99",
    savings: "SAVE $565",
    isTopDeal: false
  },
  {
    id: 351,
    name: "Open Box - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Platinum - EN",
    image: "/laptops/P351.png",
    rating: 0,
    reviews: 0,
    price: "$1,479.99",
    savings: "SAVE $170",
    isTopDeal: false
  },
  {
    id: 352,
    name: "Open Box - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/256GB SSD) (2024) - Platinum - BIL",
    image: "/laptops/P352.png",
    rating: 0,
    reviews: 0,
    price: "$1,339.99",
    savings: "SAVE $110",
    isTopDeal: false
  },
  {
    id: 353,
    name: "Open Box - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) (2024) - Platinum - EN",
    image: "/laptops/P353.png",
    rating: 0,
    reviews: 0,
    price: "$1,764.99",
    savings: "SAVE $85",
    isTopDeal: false
  },
  {
    id: 354,
    name: "Refurbished (Fair) - Microsoft Surface Laptop Studio 2 14.4\" (Intel Ci7-13700H/512GB SSD/16GB RAM/Win 11)",
    image: "/laptops/P354.png",
    rating: 0,
    reviews: 0,
    price: "$2,134.99",
    savings: "SAVE $565",
    isTopDeal: false
  },
  {
    id: 355,
    name: "Open Box - Microsoft Surface Laptop 15\" TS Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) - EN",
    image: "/laptops/P355.png",
    rating: 0,
    reviews: 0,
    price: "$1,999.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 356,
    name: "Open Box - Microsoft Surface Laptop 13.8\" TS Copilot+ PC Laptop (Snapdragon X Elite/16GB RAM/512GB SSD) - EN",
    image: "/laptops/P356.png",
    rating: 0,
    reviews: 0,
    price: "$1,799.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 357,
    name: "Refurbished (Good) - Microsoft Surface Pro 7+ 12.3\" - Intel Core i5-10th Gen. 1.20GHz, 8GB, 256GB Storage, Windows 11 Pro",
    image: "/laptops/P357.png",
    rating: 0,
    reviews: 0,
    price: "$749.00",
    savings: "SAVE $550",
    isTopDeal: false
  },
  {
    id: 358,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 13.8\" Touchscreen Copilot+ PC Laptop (Snapdragon X Plus/16GB RAM/256GB SSD) (2024) - Platinum - EN",
    image: "/laptops/P358.png",
    rating: 0,
    reviews: 0,
    price: "$1,254.99",
    savings: "SAVE $195",
    isTopDeal: false
  },
  {
    id: 359,
    name: "Open Box - Microsoft Surface Laptop 15\" Touchscreen Copilot+ PC Laptop (Snapdragon X Elite/32GB RAM/1TB SSD) (2024) - Black - BIL",
    image: "/laptops/P359.png",
    rating: 0,
    reviews: 0,
    price: "$2,429.99",
    savings: "SAVE $120",
    isTopDeal: false
  },
  {
    id: 360,
    name: "Refurbished (Excellent) Microsoft Surface Laptop Go 2 – Intel Core i5-1135G7, 16GB LPDDR4X, 256GB SSD, 12.4\" Pixelsense Touchscreen – Platinum",
    image: "/laptops/P360.png",
    rating: 0,
    reviews: 0,
    price: "$799.00",
    savings: "SAVE $500",
    isTopDeal: false
  },
  {
    id: 361,
    name: "Surface Pro 10 for Business - Black, Intel® Core™ Ultra 5 Processor 135U, 16GB RAM, 512GB SSD - Sealed",
    image: "/laptops/P361.png",
    rating: 0,
    reviews: 0,
    price: "$2,560.46",
    savings: "",
    isTopDeal: false
  },
  {
    id: 362,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop Studio 2 14.4\" (Intel Core i7-13700H/512GB SSD/16GB RAM/Windows 11)",
    image: "/laptops/P362.png",
    rating: 0,
    reviews: 0,
    price: "$2,224.99",
    savings: "SAVE $475",
    isTopDeal: false
  },
  {
    id: 363,
    name: "Microsoft Surface Laptop 6 for Business - 13.5\" - Intel Core Ultra 5 - 135H - 16 GB RAM - 256 GB SSD",
    image: "/laptops/P363.png",
    rating: 0,
    reviews: 0,
    price: "$2,251.47",
    savings: "SAVE $254",
    isTopDeal: false
  },
  {
    id: 364,
    name: "Microsoft Surface Laptop 4 13.5 Touch i5-1135G7 8GB 512GB Windows 10 Pro Refurbished Excellent",
    image: "/laptops/P364.png",
    rating: 0,
    reviews: 0,
    price: "$899.00",
    savings: "SAVE $800",
    isTopDeal: false
  },
  {
    id: 365,
    name: "Refurbished (Good) - Microsoft Surface Book 2 - 15\" Touchscreen Laptop - (Intel Ci7-8650U/512GB SSD/16GB RAM) - Windows 11 Pro",
    image: "/laptops/P365.png",
    rating: 0,
    reviews: 0,
    price: "$749.00",
    savings: "SAVE $750",
    isTopDeal: false
  },
  {
    id: 366,
    name: "Refurbished (Good) Microsoft Surface PRO 8 LTE i5 1145G7 @ 4.4 GHz 16GB Ram 256GB SSD 12.3\" PixelSense Touch Win 11 PRO (With Slim Keyboard and Pen)",
    image: "/laptops/P366.png",
    rating: 0,
    reviews: 0,
    price: "$890.00",
    savings: "SAVE $600",
    isTopDeal: false
  },
    {
    id: 367,
    name: "Microsoft Surface Laptop 4 15\" Touch AMD Ryzen 7 8GB 256GB Windows 11 Professional Platinum 1 Year Warranty Refurbished Good",
    image: "/laptops/P367.png",
    rating: 0,
    reviews: 0,
    price: "$689.00",
    savings: "SAVE $310",
    isTopDeal: false
  },
  {
    id: 368,
    name: "Refurbished(Excellent) - Microsoft Surface Laptop 4 - 13.5\" Screen - i5-1145G7 - 16 GB RAM - 512GB SSD - Windows 11 Pro",
    image: "/laptops/P368.png",
    rating: 0,
    reviews: 0,
    price: "$1,099.00",
    savings: "SAVE $801",
    isTopDeal: false
  },
  {
    id: 369,
    name: "Refurbished (Good) MS Surface Pro 3 i7 512GB Windows 10 Pro, 12inch",
    image: "/laptops/P369.png",
    rating: 0,
    reviews: 0,
    price: "$649.99",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 370,
    name: "Refurbished (Fair) - Microsoft Surface Pro 9 13\" 256GB Windows 11 Tablet w/ Intel Evo i5-1235U/8GB RAM -Sapphire",
    image: "/laptops/P370.png",
    rating: 0,
    reviews: 0,
    price: "$784.97",
    savings: "SAVE $615",
    isTopDeal: false
  },
  {
    id: 371,
    name: "Refurbished (Good) - Microsoft Surface Book 2 - 15\" Touchscreen Laptop - (Intel Ci7-8650U/1000GB SSD/16GB RAM) - Windows 11 Pro",
    image: "/laptops/P371.png",
    rating: 0,
    reviews: 0,
    price: "$749.00",
    savings: "SAVE $750",
    isTopDeal: false
  },
  {
    id: 372,
    name: "Microsoft Surface Laptop 4 13.5\" Touchscreen-Black-French (Intel i5-1145G7/16GB RAM/256GB/Win 10 Pro) - (58Z-00002)",
    image: "/laptops/P372.png",
    rating: 0,
    reviews: 0,
    price: "$1,970.99",
    savings: "SAVE $321",
    isTopDeal: false
  },
  {
    id: 373,
    name: "Refurbished (Good) - Touchscreen Microsoft Surface Laptop 3 i7 1.30 GHz 16GB 256GB SSD 10P",
    image: "/laptops/P373.png",
    rating: 0,
    reviews: 0,
    price: "$616.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 374,
    name: "Refurbished (Good) - Touchscreen Microsoft Surface Book 2 i7 1.90 GHz 8GB 256GB SSD 10P",
    image: "/laptops/P374.png",
    rating: 0,
    reviews: 0,
    price: "$624.99",
    savings: "SAVE $475",
    isTopDeal: false
  },
  {
    id: 375,
    name: "Refurbished (Good) - Touchscreen Microsoft Surface Pro 7 i7 1.30 GHz 16GB 256GB SSD 10P",
    image: "/laptops/P375.png",
    rating: 0,
    reviews: 0,
    price: "$799.00",
    savings: "SAVE $700",
    isTopDeal: false
  },
  {
    id: 376,
    name: "Refurbished (Good)- Microsoft Surface Pro 7, Platinum, 12.3\" Tablet, Intel Core i5-1035G4, 16GB, 256GB SSD, Windows 10 Pro.",
    image: "/laptops/P376.png",
    rating: 0,
    reviews: 0,
    price: "$899.00",
    savings: "SAVE $100",
    isTopDeal: false
  },
  {
    id: 377,
    name: "Refurbished (Fair) - Microsoft Surface Book 2 13.5\" 2-in-1 Laptop (Intel Core i5-7300U/ 256GB SSD/ 8GB RAM) - English",
    image: "/laptops/P377.png",
    rating: 0,
    reviews: 0,
    price: "$594.95",
    savings: "SAVE $454",
    isTopDeal: false
  },
  {
    id: 378,
    name: "Open Box - Microsoft Surface 5 15\" Business Laptop - Matte Black(Intel Core i7 1265U /16GB RAM /512GB SSD/ Win 10)",
    image: "/laptops/P378.png",
    rating: 0,
    reviews: 0,
    price: "$2,129.99",
    savings: "SAVE $380",
    isTopDeal: false
  },
  {
    id: 379,
    name: "Refurbished(Excellent) - Microsoft Surface Laptop 5 Touchscreen 13.5\" - Black (Intel Evo i5-1235U/512GB SSD/8GB RAM/Windows 11) - French",
    image: "/laptops/P379.png",
    rating: 0,
    reviews: 0,
    price: "$849.00",
    savings: "SAVE $900",
    isTopDeal: false
  },
  {
    id: 380,
    name: "Refurbished(Excellent) - Microsoft Surface Laptop 5 Touchscreen 13.5\" - Sage (Intel Evo i5-1235U/512GB SSD/8GB RAM/Windows 11) - French",
    image: "/laptops/P380.png",
    rating: 0,
    reviews: 0,
    price: "$849.00",
    savings: "SAVE $900",
    isTopDeal: false
  },
  {
    id: 381,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop Go 3 12.45\" Touchscreen Laptop - Platinum (Intel i5-1235U/256GB SSD/8GB RAM)",
    image: "/laptops/P381.png",
    rating: 0,
    reviews: 0,
    price: "$749.00",
    savings: "SAVE $750",
    isTopDeal: false
  },
  {
    id: 382,
    name: "Microsoft Surface Laptop Go 3 12.4\" Touchscreen Laptop (Intel Core i5 / 16 GB RAM / / Windows 11 Pro)",
    image: "/laptops/P382.png",
    rating: 0,
    reviews: 0,
    price: "$1,729.47",
    savings: "",
    isTopDeal: false
  },
  {
    id: 383,
    name: "Refurbished (Fair) - Microsoft Surface Pro 8 13\" 256GB Windows 11 Tablet w/ Intel i5/8GB RAM -Platinum",
    image: "/laptops/P383.png",
    rating: 0,
    reviews: 0,
    price: "$1,209.97",
    savings: "SAVE $320",
    isTopDeal: false
  },
  {
    id: 384,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop Go 2 12.4\" Touchscreen Laptop - Sandstone (Intel i5-1135G7/256GB SSD/8GB RAM) -En",
    image: "/laptops/P384.png",
    rating: 0,
    reviews: 0,
    price: "$799.00",
    savings: "SAVE $500",
    isTopDeal: false
  },
  {
    id: 385,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 4 13.5'' Touchscreen Laptop (Intel i7-1185G7/16GB RAM/256 GB SSD)",
    image: "/laptops/P385.png",
    rating: 0,
    reviews: 0,
    price: "$849.00",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 386,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop Go 3 12.45\" Touchscreen Laptop - Ice Blue (Intel i5-1235U/256GB SSD/8GB RAM)",
    image: "/laptops/P386.png",
    rating: 0,
    reviews: 0,
    price: "$904.99",
    savings: "SAVE $195",
    isTopDeal: false
  },
  {
    id: 387,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 9 13\" 256GB Windows 11 Tablet with Intel Evo Core i5-1235U/8GB RAM - Platinum",
    image: "/laptops/P387.png",
    rating: 0,
    reviews: 0,
    price: "$1,154.97",
    savings: "SAVE $245",
    isTopDeal: false
  },
  {
    id: 388,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 7 Surface Pro 7 12.3\" Touchscreen Tablet Intel i7-1065G7 16 GB LPDDR4 256 GB NVMe Windows 10 Pro 64-Bit",
    image: "/laptops/P388.png",
    rating: 0,
    reviews: 0,
    price: "$949.00",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 389,
    name: "Open Box - Microsoft Surface Laptop Studio 2 14.4\" (Intel Core i7-13700H/512GB SSD/16GB RAM/GeForce RTX 4050)",
    image: "/laptops/P389.png",
    rating: 0,
    reviews: 0,
    price: "$2,514.99",
    savings: "SAVE $445",
    isTopDeal: false
  },
  {
    id: 390,
    name: "Refurbished (Good) - Microsoft Surface Laptop 5 Touchscreen 13.5\" - Sandstone (Intel Evo i5-1235U/512GB SSD/8GB RAM) - En",
    image: "/laptops/P390.png",
    rating: 0,
    reviews: 0,
    price: "$884.97",
    savings: "SAVE $215",
    isTopDeal: false
  },
    {
    id: 391,
    name: "Refurbished (Fair) - Microsoft Surface Laptop 4 Touchscreen 13.5\" - Matte Black (Intel Core i5-1135G7/512GB SSD/8GB RAM) -Fr",
    image: "/laptops/P391.png",
    rating: 0,
    reviews: 0,
    price: "$1,069.97",
    savings: "SAVE $130",
    isTopDeal: false
  },
  {
    id: 392,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 7 12.3\" 256GB Windows 10 Tablet With 10th Gen Intel Core i7/16GB RAM - Black",
    image: "/laptops/P392.png",
    rating: 0,
    reviews: 0,
    price: "$899.00",
    savings: "SAVE $1,100",
    isTopDeal: false
  },
  {
    id: 393,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 5 Touchscreen 13.5\" - Sandstone (Intel Evo i5-1235U/512GB SSD/8GB RAM) - En",
    image: "/laptops/P393.png",
    rating: 0,
    reviews: 0,
    price: "$904.97",
    savings: "SAVE $195",
    isTopDeal: false
  },
  {
    id: 394,
    name: "(Refurbished Good) Microsoft Surface Laptop - Intel Core i5-10th Gen / 8 GB / 256 GB SSD / Touch / Win 10 Pro-Silver",
    image: "/laptops/P394.png",
    rating: 0,
    reviews: 0,
    price: "$1,099.00",
    savings: "SAVE $500",
    isTopDeal: false
  },
  {
    id: 395,
    name: "Microsoft Surface Go 3 12.4\" Business Laptop-Platinum(Intel Core i5 1235U/512GB SSD/16GB RAM/Windows 11)-(XLG-00001)",
    image: "/laptops/P395.png",
    rating: 0,
    reviews: 0,
    price: "$1,879.91",
    savings: "",
    isTopDeal: false
  },
  {
    id: 396,
    name: "Microsoft Surface Laptop Go 3 12.4\" Touchscreen Laptop (Intel Core i5 / 8 GB RAM / / Windows 11)",
    image: "/laptops/P396.png",
    rating: 0,
    reviews: 0,
    price: "$1,205.47",
    savings: "",
    isTopDeal: false
  },
  {
    id: 397,
    name: "Microsoft Surface Go 3 12.4\" Laptop-Platinum(Intel Core i5 1135G7/256GB SSD/8GB RAM/Windows 11)-(XK3-00002)",
    image: "/laptops/P397.png",
    rating: 0,
    reviews: 0,
    price: "$1,325.47",
    savings: "SAVE $150",
    isTopDeal: false
  },
  {
    id: 398,
    name: "Refurbished (Good) - Microsoft Surface Book 3 13.5\" - (Intel Ci5-1035G7/256GB SSD/8GB RAM) - Windows 11 Pro",
    image: "/laptops/P398.png",
    rating: 0,
    reviews: 0,
    price: "$669.99",
    savings: "SAVE $730",
    isTopDeal: false
  },
  {
    id: 399,
    name: "Refurbished (Fair) - Microsoft Surface Laptop Go 3 12.45\" Touchscreen Laptop -Sandstone (Intel Ci5-1235U/256GB SSD/8GB RAM)",
    image: "/laptops/P399.png",
    rating: 0,
    reviews: 0,
    price: "$699.99",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 400,
    name: "Refurbished (Good) - Microsoft Surface Book 3 13.5\" Laptop - (Intel Ci7-1065G7/256GB SSD/16GB RAM) - Windows 11",
    image: "/laptops/P400.png",
    rating: 0,
    reviews: 0,
    price: "$668.99",
    savings: "SAVE $831",
    isTopDeal: false
  },
  {
    id: 401,
    name: "Refurbished (Excellent) Microsoft Surface Pro 9 - Intel Core i5-i5-1235U/8GB LPDDR5/128GB SSD, Windows 11 Home, Platinum (Device Only)",
    image: "/laptops/P401.png",
    rating: 0,
    reviews: 0,
    price: "$859.99",
    savings: "SAVE $440",
    isTopDeal: false
  },
  {
    id: 402,
    name: "Refurbished (Excellent) Microsoft Surface Pro 9 - Intel Core i7-1255U/16GB LPDDR5/256GB SSD, Windows 11 Home, Graphite (Device Only)",
    image: "/laptops/P402.png",
    rating: 5,
    reviews: 1,
    price: "$1,799.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 403,
    name: "Refurbished (Good) - Microsoft Surface Book 3 - 13.5\" Touchscreen Laptop - (Intel Ci5-1035G7/256GB SSD/8GB RAM) - English",
    image: "/laptops/P403.png",
    rating: 0,
    reviews: 0,
    price: "$678.99",
    savings: "SAVE $771",
    isTopDeal: false
  },
  {
    id: 404,
    name: "Microsoft Surface Go 3 12.4\" Business Laptop-Platinum(Intel Core i5 1235U/256GB SSD/8GB RAM/Windows 11)-(XK3-00001)",
    image: "/laptops/P404.png",
    rating: 0,
    reviews: 0,
    price: "$1,311.99",
    savings: "SAVE $206",
    isTopDeal: false
  },
  {
    id: 405,
    name: "Refurbished (Good) - Microsoft Surface Pro 7 12.3\" 512GB Windows 11 Pro Tablet w/ 10th Gen Intel Core i7/16GB RAM -Windows 11 Pro",
    image: "/laptops/P405.png",
    rating: 0,
    reviews: 0,
    price: "$949.00",
    savings: "SAVE $650",
    isTopDeal: false
  },
  {
    id: 406,
    name: "Refurbished(Good) - Microsoft Surface Pro 7 12.3\" Windows 11 Pro Tablet -Platinum (Intel Core i5/8 GB RAM/ 256 GB/ Windows 11 Pro",
    image: "/laptops/P406.png",
    rating: 0,
    reviews: 0,
    price: "$899.00",
    savings: "SAVE $500",
    isTopDeal: false
  },
  {
    id: 407,
    name: "Refurbished(Good) - Microsoft Surface Touchscreen Laptop Go Intel Core i5-1035G1/16GB LPDDR4x/256GB SSD/Windows 11/12.4\" Screen",
    image: "/laptops/P407.png",
    rating: 0,
    reviews: 0,
    price: "$799.00",
    savings: "SAVE $700",
    isTopDeal: false
  },
  {
    id: 408,
    name: "Refurbished (Good) - Microsoft Surface Pro 6 12.3\" Touchscreen Tablet Intel i5-8350U 8 GB LPDDR3 256 GB NVMe Windows 10 Pro 64-Bit",
    image: "/laptops/P408.png",
    rating: 0,
    reviews: 0,
    price: "$599.00",
    savings: "SAVE $600",
    isTopDeal: false
  },
  {
    id: 409,
    name: "Refurbished (Good) - Microsoft Surface Pro 5, i5-7300U 2.6Ghz, 8GB RAM, 256GB SSD, Silver, Windows 10 Pro",
    image: "/laptops/P409.png",
    rating: 0,
    reviews: 0,
    price: "$549.00",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 410,
    name: "Refurbished (Good) - Microsoft Surface Pro 5 - 12.1\" Laptop - Intel i5- 8350U - 8GB RAM - 256GB SSD - Windows11",
    image: "/laptops/P410.png",
    rating: 0,
    reviews: 0,
    price: "$549.00",
    savings: "SAVE $150",
    isTopDeal: false
  },
  {
    id: 411,
    name: "Refurbished (Good) - Microsoft Surface Book 3 13.5\" Touchscreen Laptop - (Intel Ci7-1065G7/256GB SSD/16GB RAM) - Windows 11 Pro",
    image: "/laptops/P411.png",
    rating: 5,
    reviews: 1,
    price: "$664.99",
    savings: "SAVE $835",
    isTopDeal: false
  },
  {
    id: 412,
    name: "Refurbished (Good) - Microsoft Surface Pro 5 - 12.1\" Laptop - Intel i7- 7600U - 16GB RAM - 512GB SSD - Windows11",
    image: "/laptops/P412.png",
    rating: 0,
    reviews: 0,
    price: "$699.00",
    savings: "SAVE $600",
    isTopDeal: false
  },
  {
    id: 413,
    name: "Refurbished (Fair) - Microsoft Surface Pro 7 12.3\" Windows 10 Tablet -Platinum (Intel Ci5/8GB RAM/256GB/Win 10 Home)",
    image: "/laptops/P413.png",
    rating: 0,
    reviews: 0,
    price: "$1,194.99",
    savings: "SAVE $315",
    isTopDeal: false
  },
  {
    id: 414,
    name: "Refurbished (Fair) - Microsoft Surface Pro 7 12.3\" Windows 10 Tablet with 10th Gen Intel Core i5, 8GB RAM, 128GB SSD",
    image: "/laptops/P414.png",
    rating: 0,
    reviews: 0,
    price: "$599.00",
    savings: "SAVE $200",
    isTopDeal: false
  },
    {
    id: 415,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 4 Touchscreen 13.5\" - Platinum (AMD Ryzen 5 4680U/256GB SSD/8GB RAM) - Eng",
    image: "/laptops/P415.png",
    rating: 0,
    reviews: 0,
    price: "$884.97",
    savings: "SAVE $65",
    isTopDeal: false
  },
  {
    id: 416,
    name: "Refurbished (Excellent) Microsoft SURFACE PRO 5, 12.3\" 2736 x 1824 TABLET Intel HD Graphics 620,i5-7300U, 8GB, 256GB, PCIe, 2 Years Warranty, 100664-20759",
    image: "/laptops/P416.png",
    rating: 0,
    reviews: 0,
    price: "$749.00",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 417,
    name: "Refurbished (Good) - Microsoft Surface Pro 7 12.3\" Touchscreen, Intel Core i5-1035G4U @ 1.1GHz, 16GB RAM, 256GB SSD, Windows 10 Pro - English Keyboard",
    image: "/laptops/P417.png",
    rating: 0,
    reviews: 0,
    price: "$889.00",
    savings: "SAVE $110",
    isTopDeal: false
  },
  {
    id: 418,
    name: "Refurbished (Fair) - Microsoft Surface Laptop 5 Touchscreen 13.5\" - Sandstone (Intel Evo i5-1235U/512GB SSD/8GB RAM) - En",
    image: "/laptops/P418.png",
    rating: 0,
    reviews: 0,
    price: "$869.97",
    savings: "SAVE $230",
    isTopDeal: false
  },
  {
    id: 419,
    name: "Refurbished (Fair) - Microsoft Surface Laptop Go 3 12.45\" Touchscreen Laptop - Ice Blue (Intel i5-1235U/256GB SSD/8GB RAM)",
    image: "/laptops/P419.png",
    rating: 0,
    reviews: 0,
    price: "$869.99",
    savings: "SAVE $230",
    isTopDeal: false
  },
  {
    id: 420,
    name: "Refurbished (Good) - Microsoft Surface Pro 9 13\" 256GB Windows 11 Tablet with Intel Evo i5-1235U/8GB RAM - Sapphire",
    image: "/laptops/P420.png",
    rating: 0,
    reviews: 0,
    price: "$849.00",
    savings: "SAVE $450",
    isTopDeal: false
  },
  {
    id: 421,
    name: "Refurbished (Good) - Microsoft Surface Pro 8 13\" 256GB Windows 11 Tablet w/ Intel i5/8GB RAM -Graphite",
    image: "/laptops/P421.png",
    rating: 0,
    reviews: 0,
    price: "$989.97",
    savings: "SAVE $110",
    isTopDeal: false
  },
  {
    id: 422,
    name: "Refurbished (Fair) - Microsoft Surface Laptop Studio 14.4\" - Platinum (Intel Core i5-11300H/256GB SSD/16GB RAM/Windows 11) - Bilingual",
    image: "/laptops/P422.png",
    rating: 0,
    reviews: 0,
    price: "$929.97",
    savings: "SAVE $670",
    isTopDeal: false
  },
  {
    id: 423,
    name: "Refurbished (Fair) - Microsoft Surface Laptop Studio 14.4\" - Platinum (Intel Core i7-11370H/512GB SSD/16GB RAM/Windows 11) -En",
    image: "/laptops/P423.png",
    rating: 0,
    reviews: 0,
    price: "$2,249.99",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 424,
    name: "Refurbished (Fair) - Microsoft Surface Laptop 5 Touchscreen 13.5\" -Sage (Intel Evo i5-1235U/512GB SSD/8GB RAM) -En",
    image: "/laptops/P424.png",
    rating: 0,
    reviews: 0,
    price: "$979.97",
    savings: "SAVE $120",
    isTopDeal: false
  },
  {
    id: 425,
    name: "Refurbished (Good) - Microsoft Surface Pro 6 12.3\" Tablet (Intel Core i5-8350U 1.7GHz, 8GB RAM, 256GB SSD, Windows 11 Pro W/ Keyboard",
    image: "/laptops/P425.png",
    rating: 0,
    reviews: 0,
    price: "$599.00",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 426,
    name: "Refurbished (Good) - Microsoft Surface Laptop Studio 14.4\" - Platinum (Intel Core i5-11300H/512GB SSD/16GB RAM/Windows 11) - Bilingual",
    image: "/laptops/P426.png",
    rating: 0,
    reviews: 0,
    price: "$1,409.97",
    savings: "SAVE $340",
    isTopDeal: false
  },
  {
    id: 427,
    name: "Refurbished (Good) - Microsoft Surface Laptop Studio 14.4\" - Platinum (Intel Core i5-11300H/512GB SSD/16GB RAM/Windows 11) -En",
    image: "/laptops/P427.png",
    rating: 0,
    reviews: 0,
    price: "$949.97",
    savings: "SAVE $800",
    isTopDeal: false
  },
  {
    id: 428,
    name: "Refurbished (Good) Microsoft Surface 3 15” Touchscreen (Intel Core i5 1035G7/256GB SSD/8GB RAM/ Win 10 W/Free wireless mouse",
    image: "/laptops/P428.png",
    rating: 0,
    reviews: 0,
    price: "$798.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 429,
    name: "Refurbished (Good)- Microsoft Surface Pro 7, Intel Core i5, 8GB, 256GB, Black Demo, Notebook (PWL-00001)",
    image: "/laptops/P429.png",
    rating: 0,
    reviews: 0,
    price: "$649.00",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 430,
    name: "Refurbished (Good) - Microsoft Surface Pro 9 13\" 256GB Windows 11 Tablet with Intel Evo Core i5-1235U/8GB RAM - Graphite",
    image: "/laptops/P430.png",
    rating: 0,
    reviews: 0,
    price: "$854.97",
    savings: "SAVE $545",
    isTopDeal: false
  },
  {
    id: 431,
    name: "Refurbished (Fair) - Microsoft Surface Laptop Studio 14.4\" - Platinum (Intel Core i5-11300H/512GB SSD/16GB RAM/Windows 11) -En",
    image: "/laptops/P431.png",
    rating: 0,
    reviews: 0,
    price: "$929.97",
    savings: "SAVE $820",
    isTopDeal: false
  },
  {
    id: 432,
    name: "Refurbished (Excellent) Microsoft SURFACE PRO 7 TABLET Laptop 12.3\" (i5-1035G4 / 8GB / 256 GB)",
    image: "/laptops/P432.png",
    rating: 0,
    reviews: 0,
    price: "$759.00",
    savings: "SAVE $640",
    isTopDeal: false
  },
  {
    id: 433,
    name: "Refurbished (Good) - Microsoft Surface Laptop 4 15\" i7-1185G7 8GB 256GB Touchscreen",
    image: "/laptops/P433.png",
    rating: 0,
    reviews: 0,
    price: "$546.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 434,
    name: "Refurbished (Excellent) Microsoft Surface Pro 5th Gen LTE (2017) i5-7300u @ 2.60GHz GWP-00001 8GB RAM 256GB SSD Platinum",
    image: "/laptops/P434.png",
    rating: 0,
    reviews: 0,
    price: "$699.00",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 435,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 8 13\" Tablet Intel i5-1135G7 8 GB LPDDR4X 256 GB NVMe Windows 11 Home",
    image: "/laptops/P435.png",
    rating: 0,
    reviews: 0,
    price: "$1,099.00",
    savings: "SAVE $500",
    isTopDeal: false
  },
  {
    id: 436,
    name: "Refurbished (Good) - Microsoft Surface Pro 6 12.3\", Intel Core i5-8th Gen., 1.7GHz, 8GB Ram, 256GB Storage, Windows 11 Pro. (with Keyboard)",
    image: "/laptops/P436.png",
    rating: 0,
    reviews: 0,
    price: "$599.00",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 437,
    name: "Refurbished (Fair) - Microsoft Surface Pro 9 13\" 256GB Windows 11 Tablet with Intel Evo i5-1235U/8GB RAM - Forest",
    image: "/laptops/P437.png",
    rating: 0,
    reviews: 0,
    price: "$739.97",
    savings: "SAVE $660",
    isTopDeal: false
  },
  {
    id: 438,
    name: "Refurbished (Good) -Microsoft Surface Laptop 5 Touchscreen 13.5\" -Sage (Intel Evo i5-1235U/512GB SSD/8GB RAM/Win11) -En",
    image: "/laptops/P438.png",
    rating: 0,
    reviews: 0,
    price: "$849.00",
    savings: "SAVE $900",
    isTopDeal: false
  },
    {
    id: 439,
    name: "Refurbished (Good) Microsoft Surface Pro 5 M3-7Y30 1.00GHZ 1796 4GB 128GB Windows 10 With 90-day warranty",
    image: "/laptops/P439.png",
    rating: 0,
    reviews: 0,
    price: "$514.45",
    savings: "SAVE $285",
    isTopDeal: false
  },
  {
    id: 440,
    name: "Refurbished (Fair) - Microsoft Surface Laptop 5 Touchscreen 15\" - Platinum (Intel Evo i7-1255U/256GB SSD/8GB RAM/Windows 11) - En",
    image: "/laptops/P440.png",
    rating: 0,
    reviews: 0,
    price: "$834.97",
    savings: "SAVE $565",
    isTopDeal: false
  },
  {
    id: 441,
    name: "Microsoft Surface Laptop 4 13.5 inch Touch i5 Windows 10 Pro Refurbished (Excellent)",
    image: "/laptops/P441.png",
    rating: 0,
    reviews: 0,
    price: "$749.00",
    savings: "SAVE $351",
    isTopDeal: false
  },
  {
    id: 442,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 5 Touchscreen 13.5\" - Black (Intel Evo i5-1235U/512GB SSD/8GB RAM/Windows 11) - En",
    image: "/laptops/P442.png",
    rating: 0,
    reviews: 0,
    price: "$849.00",
    savings: "SAVE $650",
    isTopDeal: false
  },
  {
    id: 443,
    name: "Microsoft Surface 5 13.5\" Business Laptop-Matte Black(Intel Core i5 1245U / 256 GB SSD / 16 GB RAM / Windows 10)-(R7I-00024)",
    image: "/laptops/P443.png",
    rating: 0,
    reviews: 0,
    price: "$1,999.99",
    savings: "SAVE $599",
    isTopDeal: false
  },
  {
    id: 444,
    name: "Microsoft Surface 5 13.5\" Business Laptop -Matte Black(Intel Core i5 1245U / 512 GB SSD / 16 GB RAM / Windows 10)-(R8Q-00024)",
    image: "/laptops/P444.png",
    rating: 0,
    reviews: 0,
    price: "$1,899.99",
    savings: "SAVE $299",
    isTopDeal: false
  },
  {
    id: 445,
    name: "Refurbished Excellent Microsoft Surface Pro 6 TABLET SURFACE 12.3\" 2736 x 1824 (Intel® UHD Graphics 620 / I5-8350U / 8GB / 256 GB / Windows 11)",
    image: "/laptops/P445.png",
    rating: 0,
    reviews: 0,
    price: "$649.00",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 446,
    name: "Refurbished (Good) - Microsoft Surface Pro 9 13\" 256GB Windows 11 Tablet with Intel Core i5-1235U/8GB RAM - Forest",
    image: "/laptops/P446.png",
    rating: 0,
    reviews: 0,
    price: "$849.00",
    savings: "SAVE $450",
    isTopDeal: false
  },
  {
    id: 447,
    name: "Refurbished (Good) - Microsoft Surface Book 3 15\" 2-in-1 Laptop - Platinum (Intel Ci7-1065G7/512GB SSD/32GB RAM) - English",
    image: "/laptops/P447.png",
    rating: 0,
    reviews: 0,
    price: "$3,064.99",
    savings: "SAVE $735",
    isTopDeal: false
  },
  {
    id: 448,
    name: "Microsoft Surface Laptop Go - 12.4\" Touchscreen - Intel Core i5-8GB Memory -256GB SSD - Ice Blue - English",
    image: "/laptops/P448.png",
    rating: 0,
    reviews: 0,
    price: "$1,295.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 449,
    name: "Refurbished (Good) -Microsoft Surface Book 2 13.5\" 2-in-1 Laptop (Intel Core i5-8350U/256GB SSD/8GB RAM) -Eng",
    image: "/laptops/P449.png",
    rating: 0,
    reviews: 0,
    price: "$624.99",
    savings: "SAVE $575",
    isTopDeal: false
  },
  {
    id: 450,
    name: "Refurbished (Good) -Microsoft Surface Pro 6 12.3\" 128GB Windows 10 Tablet w/ 8th Gen Intel Core i5 -Platinum",
    image: "/laptops/P450.png",
    rating: 0,
    reviews: 0,
    price: "$599.00",
    savings: "SAVE $200",
    isTopDeal: false
  },
  {
    id: 451,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 6 12.3\" 256GB Windows 10 Tablet w/ 8th Gen Intel Core i5 - Platinum",
    image: "/laptops/P451.png",
    rating: 0,
    reviews: 0,
    price: "$599.00",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 452,
    name: "Refurbished (Good) - Microsoft Surface Laptop 5 Touchscreen 13.5\" - Black (Intel Evo i5-1235U/512GB SSD/8GB RAM/Windows 11) - En",
    image: "/laptops/P452.png",
    rating: 0,
    reviews: 0,
    price: "$849.00",
    savings: "SAVE $900",
    isTopDeal: false
  },
  {
    id: 453,
    name: "Refurbished (Good) -Microsoft Surface Pro 7 12.3\" 256GB Win 10 Tablet w/ 10th Gen Intel Core i7/16GB RAM -Black",
    image: "/laptops/P453.png",
    rating: 0,
    reviews: 0,
    price: "$799.00",
    savings: "SAVE $700",
    isTopDeal: false
  },
  {
    id: 454,
    name: "Refurbished (Excellent) - Microsoft Surface PRO 6 Tablet - 12.3\" Touchscreen - Intel Core i5-8350U, 1.7GHz, 16GB, 256GB SSD, 2K Resolution Screen 2736 x 1824, Windows 11 Pro",
    image: "/laptops/P454.png",
    rating: 0,
    reviews: 0,
    price: "$749.00",
    savings: "SAVE $450",
    isTopDeal: false
  },
  {
    id: 455,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop Go 2 12.4\" Touchscreen Laptop -Sage (Intel i5-1135G7/256GB SSD/8GB RAM) -En",
    image: "/laptops/P455.png",
    rating: 0,
    reviews: 0,
    price: "$799.00",
    savings: "SAVE $700",
    isTopDeal: false
  },
  {
    id: 456,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 9 13\" 256GB Windows 11 Tablet with Intel Evo Core i5-1235U/8GB RAM - Graphite",
    image: "/laptops/P456.png",
    rating: 0,
    reviews: 0,
    price: "$899.97",
    savings: "SAVE $500",
    isTopDeal: false
  },
  {
    id: 457,
    name: "Open Box - Microsoft Surface Pro 9 13\" 256GB Windows 11 Tablet with Intel Evo Core i7-1255U/16GB RAM - Graphite",
    image: "/laptops/P457.png",
    rating: 0,
    reviews: 0,
    price: "$1,799.97",
    savings: "",
    isTopDeal: false
  },
  {
    id: 458,
    name: "Refurbished (Fair) - Microsoft Surface Laptop Studio 14.4\" - Platinum (Intel Core i5-11300H/256GB SSD/16GB RAM/Windows 11) -En",
    image: "/laptops/P458.png",
    rating: 0,
    reviews: 0,
    price: "$834.97",
    savings: "SAVE $965",
    isTopDeal: false
  },
  {
    id: 459,
    name: "Refurbished (Fair) - Microsoft Surface Pro 9 13\" 256GB Windows 11 Tablet with Intel Evo Core i5-1235U/8GB RAM - Graphite",
    image: "/laptops/P459.png",
    rating: 0,
    reviews: 0,
    price: "$709.97",
    savings: "SAVE $690",
    isTopDeal: false
  },
  {
    id: 460,
    name: "Refurbished (Excellent) Microsoft Surface Pro 8 - Intel Core i7-1185G7/16GB LPDDR4x/1TB SSD/Windows 11 Home/13\" Screen - Platinum",
    image: "/laptops/P460.png",
    rating: 0,
    reviews: 0,
    price: "$1,299.00",
    savings: "SAVE $600",
    isTopDeal: false
  },
  {
    id: 461,
    name: "Refurbished (Excellent) Microsoft Surface Pro 8 - Intel Core i5-1135G7/16GB LPDDR4x/256GB SSD/Windows 11 Home/13\" Screen - Graphite",
    image: "/laptops/P461.png",
    rating: 0,
    reviews: 0,
    price: "$1,199.00",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 462,
    name: "Refurbished (Excellent) Microsoft Surface Pro 8 - Intel Core i5-1135G7/8GB LPDDR4x/512GB SSD/Windows 11 Home/13\" Screen - Platinum",
    image: "/laptops/P462.png",
    rating: 0,
    reviews: 0,
    price: "$1,399.99",
    savings: "SAVE $494",
    isTopDeal: false
  },
    {
    id: 463,
    name: "Refurbished (excellent) Microsoft Surface Pro 7+ 12.3\" 256GB Windows 10 Tablet With Intel Core i7-1165G7 Quad-Core Processor - Black - (1NC-00016) W/ Free Keyboard",
    image: "/laptops/P463.png",
    rating: 0,
    reviews: 0,
    price: "$793.00",
    savings: "SAVE $427",
    isTopDeal: false
  },
  {
    id: 464,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop Go 12.4in Touchscreen Intel i5 Certified Refurbished",
    image: "/laptops/P464.png",
    rating: 0,
    reviews: 0,
    price: "$799.00",
    savings: "SAVE $700",
    isTopDeal: false
  },
  {
    id: 465,
    name: "Refurbished (Excellent) - Microsoft Surface 3 15\" Touchscreen Laptop - Platinum (AMD Ryzen 5/128GB SSD/8GB RAM) - French",
    image: "/laptops/P465.png",
    rating: 0,
    reviews: 0,
    price: "$1,069.97",
    savings: "SAVE $230",
    isTopDeal: false
  },
  {
    id: 466,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop Studio 14.4\" - Platinum (Intel Core i5-11300H/256GB SSD/16GB RAM/Windows 11) -Fr",
    image: "/laptops/P466.png",
    rating: 0,
    reviews: 0,
    price: "$999.97",
    savings: "SAVE $600",
    isTopDeal: false
  },
  {
    id: 467,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 4 Touchscreen 13.5\" - Matte Black (Intel Core i5-1135G7/512GB SSD/8GB RAM) -Fr",
    image: "/laptops/P467.png",
    rating: 0,
    reviews: 0,
    price: "$1,114.97",
    savings: "SAVE $85",
    isTopDeal: false
  },
  {
    id: 468,
    name: "Refurbished (Fair) - Microsoft Surface Pro 8 13\" 256GB Windows 11 Tablet w/ Intel i5/8GB RAM -Graphite",
    image: "/laptops/P468.png",
    rating: 0,
    reviews: 0,
    price: "$649.97",
    savings: "SAVE $450",
    isTopDeal: false
  },
  {
    id: 469,
    name: "Refurbished (Fair) - Microsoft Surface Laptop 4 15\" - Platinum (AMD Ryzen 7 4980U/256GB SSD/8GB RAM) - Eng",
    image: "/laptops/P469.png",
    rating: 0,
    reviews: 0,
    price: "$889.97",
    savings: "SAVE $410",
    isTopDeal: false
  },
  {
    id: 470,
    name: "Refurbished (Fair) - Microsoft Surface Laptop 4 13.5\" - Matte Black (Intel Core i5-1135G7/512GB SSD/8GB RAM) -Eng",
    image: "/laptops/P470.png",
    rating: 0,
    reviews: 0,
    price: "$1,069.97",
    savings: "SAVE $130",
    isTopDeal: false
  },
  {
    id: 471,
    name: "Refurbished (Excellent) - Microsoft Surface Laptop 4 i5-11Gen 16GB 256GB - Black",
    image: "/laptops/P471.png",
    rating: 0,
    reviews: 0,
    price: "$999.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 472,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 5 Core M3 4GB 128GB Windows 10 Certified Refurbished",
    image: "/laptops/P472.png",
    rating: 0,
    reviews: 0,
    price: "$599.00",
    savings: "SAVE $200",
    isTopDeal: false
  },
  {
    id: 473,
    name: "(Refurbished Good) Microsoft Surface Laptop - Intel Core i5-8th Gen / 8 GB / 256 GB SSD / Touch / Win 10 Pro",
    image: "/laptops/P473.png",
    rating: 0,
    reviews: 0,
    price: "$699.00",
    savings: "SAVE $800",
    isTopDeal: false
  },
  {
    id: 474,
    name: "Refurbished (Excellent) Microsoft Surface Pro 7 - Intel Core i7, 16GB RAM, 512GB SSD, Windows 10 Home, Platinum (Device Only)",
    image: "/laptops/P474.png",
    rating: 0,
    reviews: 0,
    price: "$899.00",
    savings: "SAVE $600",
    isTopDeal: false
  },
  {
    id: 475,
    name: "Refurbished (Excellent) Microsoft Surface Pro 8 - Intel Core i7, 16GB RAM, 256 GB SSD Windows 11 Home, Graphite (Device Only)",
    image: "/laptops/P475.png",
    rating: 0,
    reviews: 0,
    price: "$1,289.00",
    savings: "SAVE $709",
    isTopDeal: false
  },
  {
    id: 476,
    name: "Refurbished (Good) - Microsoft Surface Pro 6 12.3\" Touchscreen Tablet Intel i5-8350U 16 GB LPDDR3 256 GB NVMe Windows 10 Pro 64-Bit",
    image: "/laptops/P476.png",
    rating: 0,
    reviews: 0,
    price: "$699.00",
    savings: "SAVE $600",
    isTopDeal: false
  },
  {
    id: 477,
    name: "Refurbished (Good) - Microsoft Surface Pro 9 13\" 256GB Windows 11 Tablet with Intel Evo i5-1235U/8GB RAM - Forest",
    image: "/laptops/P477.png",
    rating: 0,
    reviews: 0,
    price: "$759.97",
    savings: "SAVE $640",
    isTopDeal: false
  },
  {
    id: 478,
    name: "Refurbished (Excellent) Microsoft Surface Laptop Go 2 - Intel Core i5-1135G7/8GB LPDDR4x/128GB SSD/Windows 11 Home/12.4\" Screen - Sandstone",
    image: "/laptops/P478.png",
    rating: 0,
    reviews: 0,
    price: "$879.26",
    savings: "",
    isTopDeal: false
  },
  {
    id: 479,
    name: "Microsoft Surface Laptop 3- 13.5\" Touch-Screen, 3:2 Aspect Ratio - Intel Core i5- 8GB- 256GB- Platinum with Alcantara, * Canadian French Keyboard * , bundle with Surface Dock",
    image: "/laptops/P479.png",
    rating: 0,
    reviews: 0,
    price: "$1,279.57",
    savings: "",
    isTopDeal: false
  },
  {
    id: 480,
    name: "Microsoft Surface Laptop 3 13\" i5/8/256 Cobalt Blue Fabric * Canadian French Keyboard * , bundle with Surface Dock",
    image: "/laptops/P480.png",
    rating: 0,
    reviews: 0,
    price: "$1,267.69",
    savings: "",
    isTopDeal: false
  },
  {
    id: 481,
    name: "Microsoft Surface Laptop 3 13\" i7/16/512 Cobalt Blue Fabric * Canadian French Keyboard * , bundle with Surface Dock",
    image: "/laptops/P481.png",
    rating: 0,
    reviews: 0,
    price: "$1,241.42",
    savings: "",
    isTopDeal: false
  },
  {
    id: 482,
    name: "Microsoft Surface Pro 8: 13\" Touchscreen Tablet (Intel Core i5/8GB RAM/512GB SSD/Windows 11 Home) Device Only - Graphite",
    image: "/laptops/P482.png",
    rating: 0,
    reviews: 0,
    price: "$1,645.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 483,
    name: "Refurbished (Good) - Microsoft Surface Laptop 4 13.5\" - Intel i5 1135G7 8 512 - Touchscreen Laptop",
    image: "/laptops/P483.png",
    rating: 0,
    reviews: 0,
    price: "$899.00",
    savings: "SAVE $800",
    isTopDeal: false
  },
  {
    id: 484,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 8 13\" Windows 11 Tablet w/ Intel Core i7/ 16GB RAM / 1TB - Platinum - Refurbished like new",
    image: "/laptops/P484.png",
    rating: 0,
    reviews: 0,
    price: "$1,299.00",
    savings: "SAVE $600",
    isTopDeal: false
  },
  {
    id: 485,
    name: "Refurbished (Excellent) Microsoft Surface Pro 8 Tablet – Intel i5, 8GB RAM, 256GB SSD, 13” Touchscreen, Windows 11 Home, Platinum",
    image: "/laptops/P485.png",
    rating: 1,
    reviews: 1,
    price: "$1,090.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 486,
    name: "Refurbished (Excellent) Microsoft Surface Laptop 4 - Intel Core i5, 8GB RAM, 512GB SSD, 13.5\" Touchscreen, Windows 10 Home, Black",
    image: "/laptops/P486.png",
    rating: 0,
    reviews: 0,
    price: "$675.00",
    savings: "SAVE $425",
    isTopDeal: false
  },
  {
    id: 487,
    name: "Refurbished (Excellent) Microsoft Surface Pro 8 Tablet – Intel i5, 8GB RAM, 256GB SSD, 13” Touchscreen, Windows 11 Home, Graphite (Accessories Sold Separately)",
    image: "/laptops/P487.png",
    rating: 1,
    reviews: 1,
    price: "$848.00",
    savings: "SAVE $251",
    isTopDeal: false
  },
  {
    id: 488,
    name: "Refurbished (Good)-Microsoft 12.3\"-Intel Core I5-7300u 2.6ghz-4gb Ram-128gb Ssd-Intel Hd Graphics620-Win10 Pro-(FJU-00001)",
    image: "/laptops/P488.png",
    rating: 0,
    reviews: 0,
    price: "$729.98",
    savings: "SAVE $120",
    isTopDeal: false
  },
  {
    id: 489,
    name: "Refurbished (Fair) - Microsoft Surface Pro 6 12.3\" i5 8GB 256GB SSD - Silver - Certified Refurbished",
    image: "/laptops/P489.png",
    rating: 0,
    reviews: 0,
    price: "$549.00",
    savings: "SAVE $839",
    isTopDeal: false
  },
  {
    id: 490,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 7+ 12.3\" 256GB Windows 10 Tablet With Intel Core i5-1135G7 Quad-Core Processor - Platinum",
    image: "/laptops/P490.png",
    rating: 0,
    reviews: 0,
    price: "$699.00",
    savings: "SAVE $200",
    isTopDeal: false
  },
  {
    id: 491,
    name: "Refurbished (Good) - Microsoft Surface Pro 7 12.3\" 1TB Windows 10 Tablet With 10th Gen Intel Core i7/16GB RAM - Platinum",
    image: "/laptops/P491.png",
    rating: 0,
    reviews: 0,
    price: "$1,359.50",
    savings: "SAVE $1,540",
    isTopDeal: false
  },
  {
    id: 492,
    name: "Refurbished (Good) - Microsoft Surface Book Laptop - 1703 - Core i5-6300U @ 2.40GHz - 8GB - 256GB SSD - 13.3\" - WebCam - Win 10 Pro COA",
    image: "/laptops/P492.png",
    rating: 0,
    reviews: 0,
    price: "$534.65",
    savings: "SAVE $94",
    isTopDeal: false
  },
  {
    id: 493,
    name: "Refurbished (Good) - Microsoft Surface Laptop Studio 14.4\" - Platinum (Intel Core i5-11300H/256GB SSD/16GB RAM/Windows 11) -Fr",
    image: "/laptops/P493.png",
    rating: 0,
    reviews: 0,
    price: "$949.97",
    savings: "SAVE $650",
    isTopDeal: false
  },
  {
    id: 494,
    name: "Refurbished (Excellent) - Microsoft Surface Pro Intel i5-7300U 8GB 256GB Win10 Pro Certified Refurbished",
    image: "/laptops/P494.png",
    rating: 0,
    reviews: 0,
    price: "$599.00",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 495,
    name: "Refurbished (Good) - Microsoft Surface Pro 7 12.3\" Tablet with 10th Gen Intel Core i5 / 8GB RAM / 128GB SSD / Windows 10",
    image: "/laptops/P495.png",
    rating: 0,
    reviews: 0,
    price: "$1,000.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 496,
    name: "Refurbished (Good) - Microsoft Surface 3 15'' Touchscreen Laptop - Platinum (AMD Ryzen 5-3580U/8GB RAM/256GB SSD/Win 10 Home)-Factory Recertified",
    image: "/laptops/P496.png",
    rating: 0,
    reviews: 0,
    price: "$759.99",
    savings: "SAVE $840",
    isTopDeal: false
  },
  {
    id: 497,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 7 12.3\" Windows 10 Tablet -Matte Black (Intel Core i7/16 GB RAM/ 256 GB/ Win 10 Home)- Manufacturer Factory Recertified",
    image: "/laptops/P497.png",
    rating: 0,
    reviews: 0,
    price: "$899.00",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 498,
    name: "Open Box - Microsoft Surface Pro 7 12.3\" Windows 10 Tablet -Matte Black (Intel Core i7/16 GB RAM/ 256 GB/ Win 10 Home)",
    image: "/laptops/P498.png",
    rating: 1,
    reviews: 1,
    price: "$1,199.95",
    savings: "SAVE $800",
    isTopDeal: false
  },
  {
    id: 499,
    name: "Refurbished (Good) - Microsoft Surface Pro 8 13\" 256GB Windows 11 Tablet w/ Intel i5/8GB RAM -Graphite",
    image: "/laptops/P499.png",
    rating: 0,
    reviews: 0,
    price: "$664.97",
    savings: "SAVE $435",
    isTopDeal: false
  },
  {
    id: 500,
    name: "Refurbished (Good) - Microsoft Surface Laptop 4 13.5\" - Platinum (AMD Ryzen 5 4680U/256GB SSD/8GB RAM) - Eng",
    image: "/laptops/P500.png",
    rating: 0,
    reviews: 0,
    price: "$1,029.97",
    savings: "SAVE $100",
    isTopDeal: false
  },
  {
    id: 501,
    name: "Refurbished (Good) - Microsoft Surface Pro 8 13\" 128GB Windows 11 Tablet with Intel Core i5-1135G7 - Platinum",
    image: "/laptops/P501.png",
    rating: 0,
    reviews: 0,
    price: "$569.97",
    savings: "SAVE $830",
    isTopDeal: false
  },
  {
    id: 502,
    name: "Open Box - Microsoft Surface Laptop 4 13.5\" - Matte Black (Intel Core i5-1135G7/512GB SSD/8GB RAM) -Eng",
    image: "/laptops/P502.png",
    rating: 0,
    reviews: 0,
    price: "$1,500.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 503,
    name: "Refurbished (Good) - Microsoft Surface Pro 7 M1866 12\" Laptop - Core i5 1035G4 - 8 GB RAM - 256GB SSD - Windows 10",
    image: "/laptops/P503.png",
    rating: 0,
    reviews: 0,
    price: "$749.00",
    savings: "SAVE $450",
    isTopDeal: false
  },
  {
    id: 504,
    name: "Refurbished (Excellent) - Microsoft Surface Pro 6 12.3\" Tablet (Intel Core i5 8350U/8GB RAM/256 GB SSD/Win 10 Pro) W/Keyboard Manufacturer Factory Recertified",
    image: "/laptops/P504.png",
    rating: 0,
    reviews: 0,
    price: "$599.00",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 505,
    name: "Refurbished (Good) - Microsoft Surface Book 2, 1832 Intel Core i5-8350U, 8GB RAM, 256GB NVMe, Windows 10",
    image: "/laptops/P505.png",
    rating: 0,
    reviews: 0,
    price: "$628.99",
    savings: "SAVE $571",
    isTopDeal: false
  },
  {
    id: 506,
    name: "Refurbished (Good) - Microsoft Surface Book 13.5\" Laptop - Intel Core i5-6300U, 8GB RAM, 128GB NVMe, Windows 10 - 1703",
    image: "/laptops/P506.png",
    rating: 0,
    reviews: 0,
    price: "$649.99",
    savings: "",
    isTopDeal: false
  },
  {
    id: 507,
    name: "Refurbished (Good) - Microsoft Surface Book 2, 1832 Intel Core i5-8350U, 8GB RAM, 256GB NVMe, Windows 10",
    image: "/laptops/P507.png",
    rating: 0,
    reviews: 0,
    price: "$624.99",
    savings: "SAVE $575",
    isTopDeal: false
  },
  {
    id: 508,
    name: "Refurbished (Good) - Microsoft Surface Book 2, 1832 Intel Core i5-7300U, 8GB RAM, 256GB NVMe, Windows 10",
    image: "/laptops/P508.png",
    rating: 0,
    reviews: 0,
    price: "$648.99",
    savings: "SAVE $551",
    isTopDeal: false
  },
  {
    id: 509,
    name: "Refurbished (Good) - Microsoft Surface Pro 4 (Intel Core i5, 4GB RAM, 128GB) with Windows 10 Pro, Silver-",
    image: "/laptops/P509.png",
    rating: 0,
    reviews: 0,
    price: "$399.00",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 510,
    name: "Microsoft Surface Laptop Go 12.4\" Touchscreen Notebook - 1536 x 1024 - Intel Core i5 10th Gen i5-1035G1 1 GHz - 8 GB RAM - 128 GB SSD - Platinum",
    image: "/laptops/P510.png",
    rating: 0,
    reviews: 0,
    price: "$599.00",
    savings: "SAVE $400",
    isTopDeal: false
  },
    {
    id: 511,
    name: "Refurbished (Good) - Microsoft Surface Pro 5 12.3\" (1807) Intel Core i5-7300 2.6GHz, 8GB Ram, 256GB SSD, with Keyboard",
    image: "/laptops/P511.png",
    rating: 0,
    reviews: 0,
    price: "$549.00",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 512,
    name: "Refurbished (Good) - Microsoft Surface Pro 5 1796 - Touchscreen - Core i5 7330U 256GB 8GB 12.3\" Silver",
    image: "/laptops/P512.png",
    rating: 0,
    reviews: 0,
    price: "$549.00",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 513,
    name: "Refurbished (Good) - Microsoft Surface Pro 5 (1796) Intel Core i5, 256GB SSD, 8GB RAM, Silver, Windows 11",
    image: "/laptops/P513.png",
    rating: 0,
    reviews: 0,
    price: "$549.00",
    savings: "SAVE $250",
    isTopDeal: false
  },
  {
    id: 514,
    name: "Microsoft Surface Book 3 15\" 2-in-1 Laptop - Platinum (Intel Ci7-1065G7/256GB SSD/16GB RAM) - English - Open Box",
    image: "/laptops/P514.png",
    rating: 0,
    reviews: 0,
    price: "$2,559.00",
    savings: "SAVE $1,041",
    isTopDeal: false
  },
  {
    id: 515,
    name: "Refurbished (Excellent) - Microsoft Surface Go 2 10.5\" (Intel Core M3 8100y / 4GB RAM / 64GB eMMC) Platinum - US QWERTY Keyboard",
    image: "/laptops/P515.png",
    rating: 0,
    reviews: 0,
    price: "$600.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 516,
    name: "Refurbished (Good) - Microsoft Surface Pro 7 12.3\", With **",
    image: "/laptops/P516.png",
    rating: 0,
    reviews: 0,
    price: "$599.00",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 517,
    name: "Microsoft Surface Laptop 3 15\" - Platinum (AMD Ryzen 5 3580U/256GB SSD/8GB RAM) - En- Open Box",
    image: "/laptops/P517.png",
    rating: 0,
    reviews: 0,
    price: "$1,399.99",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 518,
    name: "Refurbished (Good) - Microsoft Surface Pro 3 w/ Intel i5-4300U, 4GB RAM, 128GB SSD -W/Keyboard/",
    image: "/laptops/P518.png",
    rating: 0,
    reviews: 0,
    price: "$585.99",
    savings: "SAVE $113",
    isTopDeal: false
  },
  {
    id: 519,
    name: "Open Box - Microsoft Surface Laptop Go 12.4\" Touchscreen Laptop -Platinum (Intel i5-1035G1/128GB SSD/8GB RAM) -En",
    image: "/laptops/P519.png",
    rating: 0,
    reviews: 0,
    price: "$599.00",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 520,
    name: "Refurbished (Good) - Microsoft Surface Pro 4 (1724) i5-6300U, 256GB SSD, 8GB RAM w/ Surface Keyboard",
    image: "/laptops/P520.png",
    rating: 0,
    reviews: 0,
    price: "$349.00",
    savings: "SAVE $350",
    isTopDeal: false
  },
  {
    id: 521,
    name: "Refurbished (Good) - Microsoft Surface Book 2 13.5\"Â Touchscreen Laptop with Intel i5-7300U, 2.6Ghz, 8GB RAM, 256GB SSD & Windows 10 Pro",
    image: "/laptops/P521.png",
    rating: 0,
    reviews: 0,
    price: "$629.99",
    savings: "SAVE $570",
    isTopDeal: false
  },
  {
    id: 522,
    name: "Microsoft Surface Pro 7+ 12.3\" 1TB Windows 10 Tablet With Intel Core i7-1165G7 Quad-Core Processor - Platinum - (1NF-00001)",
    image: "/laptops/P522.png",
    rating: 0,
    reviews: 0,
    price: "$2,777.98",
    savings: "SAVE $522",
    isTopDeal: false
  },
  {
    id: 523,
    name: "Refurbished (Good) - Microsoft Surface Pro 6, 12.3\", With **",
    image: "/laptops/P523.png",
    rating: 0,
    reviews: 0,
    price: "$699.00",
    savings: "SAVE $300",
    isTopDeal: false
  },
  {
    id: 524,
    name: "Refurbished (Good) - Microsoft Surface Book 2 15\" 2-in-1 Laptop - Silver (Intel Core i7-8650U/1TB SSD/16GB RAM)-English",
    image: "/laptops/P524.png",
    rating: 4.6,
    reviews: 68,
    price: "$749.00",
    savings: "SAVE $750",
    isTopDeal: false
  },
  {
    id: 525,
    name: "Open Box - Microsoft Surface Pro 6 12.3\" 128GB Windows 10 Tablet with 8th Gen Intel Core i5",
    image: "/laptops/P525.png",
    rating: 0,
    reviews: 0,
    price: "$999.97",
    savings: "SAVE $200",
    isTopDeal: false
  },
  {
    id: 526,
    name: "Refurbished (Good) - Microsoft Surface Pro 5 i5-7300U 2.20GHz, 8 GB RAM, 256 GB SSD, Win 10 Pro",
    image: "/laptops/P526.png",
    rating: 0,
    reviews: 0,
    price: "$579.00",
    savings: "SAVE $720",
    isTopDeal: false
  },
  {
    id: 527,
    name: "Open Box - Microsoft Surface Book 2 13.5\" 2-in-1 Laptop (Intel Core i7-8650U/ 1TB SSD/ 16GB RAM) - French",
    image: "/laptops/P527.png",
    rating: 0,
    reviews: 0,
    price: "$2,384.97",
    savings: "SAVE $115",
    isTopDeal: false
  },
  {
    id: 528,
    name: "Refurbished (Good) - Microsoft Surface Pro 6 12.3\" 128GB Windows 10 Tablet with 8th Gen Intel Core i5",
    image: "/laptops/P528.png",
    rating: 0,
    reviews: 0,
    price: "$599.00",
    savings: "SAVE $400",
    isTopDeal: false
  },
  {
    id: 529,
    name: "Refurbished (Good) - Microsoft Surface Pro 5(LTE) i5-7300U 2.20GHz, 8 GB RAM, 256 GB SSD, Win 10 Pro",
    image: "/laptops/P529.png",
    rating: 0,
    reviews: 0,
    price: "$699.00",
    savings: "SAVE $200",
    isTopDeal: false
  },
  {
    id: 530,
    name: "Refurbished (Good) - Microsoft Surface Book 2 13.5\" 2-in-1 Laptop (Intel Core i5-7300U/ 256GB SSD/ 8GB RAM) - French",
    image: "/laptops/P530.png",
    rating: 0,
    reviews: 0,
    price: "$689.95",
    savings: "SAVE $509",
    isTopDeal: false
  },
  {
    id: 531,
    name: "Refurbished (Excellent) - Microsoft Surface 2 13.5\" Touchscreen Laptop - Platinum (Intel Core i5/256GB SSD/8GB RAM) - Factory Recertified",
    image: "/laptops/P531.png",
    rating: 0,
    reviews: 0,
    price: "$976.89",
    savings: "SAVE $420",
    isTopDeal: false
  },
  {
    id: 532,
    name: "Open Box - Microsoft Surface Pro 6 12.3\" 1TB Windows 10 Tablet with 8th Gen Intel Core i7 - Platinum",
    image: "/laptops/P532.png",
    rating: 0,
    reviews: 0,
    price: "$1,899.97",
    savings: "SAVE $780",
    isTopDeal: false
  },
  {
    id: 533,
    name: "Open Box - Microsoft Surface 3 15\" Touchscreen Laptop - Platinum (AMD Ryzen 7/512GB SSD/16GB RAM) - English",
    image: "/laptops/P533.png",
    rating: 0,
    reviews: 0,
    price: "$1,359.50",
    savings: "SAVE $1,440",
    isTopDeal: false
  },
  {
    id: 534,
    name: "Refurbished (Good) - Microsoft Surface Pro 6 12.3\" 256GB Windows 10 Tablet with 8th Gen Intel Core i7 - Platinum",
    image: "/laptops/P534.png",
    rating: 4.7,
    reviews: 21,
    price: "$549.00",
    savings: "SAVE $250",
    isTopDeal: false
  },
    {
    id: 535,
    name: "Refurbished (Good) - Microsoft Surface Pro 4 12.3\" 4GB/128GB Intel Core m3Refurbished",
    image: "/laptops/P535.png",
    rating: 0,
    reviews: 0,
    price: "$379.00",
    savings: "SAVE $220",
    isTopDeal: false
  },
  {
    id: 536,
    name: "Refurbished (Good) - Microsoft Surface Pro 6 Laptop Intel i5-8250U / 8GB RAM / 128GB SSD / 12.3\" Touch Screen - [Refurbished]",
    image: "/laptops/P536.png",
    rating: 0,
    reviews: 0,
    price: "$749.00",
    savings: "SAVE $550",
    isTopDeal: false
  },
  {
    id: 537,
    name: "Refurbished (Good) - Microsoft Surface Pro 6 Laptop Bundle Intel i7-8650U / 16GB RAM / 512GB SSD / 12.3\" Touch 2736 x 1824 Display - [Refurbished]",
    image: "/laptops/P537.png",
    rating: 0,
    reviews: 0,
    price: "$699.00",
    savings: "SAVE $800",
    isTopDeal: false
  },
  {
    id: 538,
    name: "Refurbished (Good) - Microsoft Surface Book 2 13.5\" 2-in-1 Laptop (Intel Core i7-8650U/ 256GB SSD/ 8GB RAM) - English",
    image: "/laptops/P538.png",
    rating: 4,
    reviews: 415,
    price: "$659.99",
    savings: "SAVE $640",
    isTopDeal: false
  },
  {
    id: 539,
    name: "Refurbished (Good) - Microsoft Surface Book 2 13.5\" 2-in-1 Laptop (Intel Core i5-7300U/256GB SSD/8GB RAM) - Eng",
    image: "/laptops/P539.png",
    rating: 0,
    reviews: 0,
    price: "$618.99",
    savings: "SAVE $581",
    isTopDeal: false
  },
  {
    id: 540,
    name: "Refurbished (Good) - Microsoft Surface Pro 4 12.3\" Tablet - 4GB RAM - 128 GB SSD - Intel Core i5 - Windows 10 Pro - (Keyboard & Pen not included)",
    image: "/laptops/P540.png",
    rating: 0,
    reviews: 0,
    price: "$900.00",
    savings: "",
    isTopDeal: false
  },
  {
    id: 541,
    name: "Refurbished (Good) - Microsoft Surface Pro 3 Tablet - Intel Core i5 4300U - 8 GB RAM - 256 GB SSD - Windows 10 Pro",
    image: "/laptops/P541.png",
    rating: 0,
    reviews: 0,
    price: "$389.95",
    savings: "SAVE $810",
    isTopDeal: false
  },
  {
    id: 542,
    name: "Microsoft Surface book 9ER-00001 13.5\" Touchscreen Laptop - Silver (Intel Core i7 6600U / 256GB SSD / 8 GB / Nvidia GTX 965M Graphics / Windows 10 Pro) - English",
    image: "/laptops/P542.png",
    rating: 0,
    reviews: 0,
    price: "$2,299.99",
    savings: "SAVE $1,100",
    isTopDeal: false
  },
  {
    id: 543,
    name: "Refurbished (Good) - Microsoft Surface Pro 4 Intel i5 6300U 3.0GHZ 8GB 256GB SSD 12.3 Touch WIN 10 PRO SILVER No Keyboard",
    image: "/laptops/P543.png",
    rating: 1,
    reviews: 3,
    price: "$1,150.00",
    savings: "",
    isTopDeal: false
  }
]
