"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiSearch, CiShoppingCart, CiMenuFries } from "react-icons/ci";
import { FaRegWindowRestore } from "react-icons/fa";
import { IoPersonCircle, IoClose } from "react-icons/io5";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { 
            name: "Shop", 
            content: (
                <div className="bg-white text-black p-4 rounded shadow-lg">
        
         
            <h1 className="text-lg font-bold mb-2">Get Inspired</h1>
           <ul className="space-y-2">
            <DropdownMenuSub>
            <DropdownMenuSubTrigger>Latest and Greatest Tech</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Latest and Greatest Tech</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>                 
                <DropdownMenuItem><Link href="/NewSurfaceCopilot+PCs"> New Surface Copilot+ PCs</Link></DropdownMenuItem>
                <DropdownMenuItem> Garmin Forerunner 970 | 570</DropdownMenuItem>
                <DropdownMenuItem>Sony WH-1000XM6 Headphones</DropdownMenuItem>
                <DropdownMenuItem>Samsung Galaxy S25 Edge</DropdownMenuItem>
                <DropdownMenuItem>ASUS RTX 50 Series Laptops</DropdownMenuItem>
                <DropdownMenuItem>Nintendo Switch 2</DropdownMenuItem>
                <DropdownMenuItem>New Samsung TVs</DropdownMenuItem>
                <DropdownMenuItem>New TCL QD-Mini LED TVs</DropdownMenuItem>
                <DropdownMenuItem>Google Pixel 9a</DropdownMenuItem>
                <DropdownMenuItem>Copilot+ PC</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          






              <DropdownMenuSub>
            <DropdownMenuSubTrigger>Brands</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                
                <h1 className="text-lg font-bold mb-2 w-52 ">Brands</h1>
   
                  <DropdownMenuSub>
            <DropdownMenuSubTrigger>A B</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                
                <h1 className="text-lg font-bold mb-2 w-52 ">A B</h1>
      
                <DropdownMenuItem>Acer</DropdownMenuItem>
                <DropdownMenuItem>AKG</DropdownMenuItem>
                <DropdownMenuItem>Alienware</DropdownMenuItem>
                <DropdownMenuItem>Altec Lansing</DropdownMenuItem>
                <DropdownMenuItem>Amazon</DropdownMenuItem>
                <DropdownMenuItem>Apple</DropdownMenuItem>
                <DropdownMenuItem>Arlo</DropdownMenuItem>
                <DropdownMenuItem>Astro Gaming</DropdownMenuItem>
                <DropdownMenuItem>Asus</DropdownMenuItem>
                <DropdownMenuItem>Audio Technica</DropdownMenuItem>
                <DropdownMenuItem>August</DropdownMenuItem>
                <DropdownMenuItem>Baratza</DropdownMenuItem>
                <DropdownMenuItem>Beats by Dre</DropdownMenuItem>
                <DropdownMenuItem>Belkin</DropdownMenuItem>
                <DropdownMenuItem>Bell</DropdownMenuItem>
                <DropdownMenuItem>BenQ</DropdownMenuItem>
                <DropdownMenuItem>Bissell</DropdownMenuItem>
                <DropdownMenuItem>Bitdefender</DropdownMenuItem>
                <DropdownMenuItem>Blendtec</DropdownMenuItem>
                <DropdownMenuItem>Bosch</DropdownMenuItem>
                <DropdownMenuItem>Bose</DropdownMenuItem>
                <DropdownMenuItem>Bowers & Wilkins</DropdownMenuItem>
                <DropdownMenuItem>Braun</DropdownMenuItem>
                <DropdownMenuItem>Breville</DropdownMenuItem>
                <DropdownMenuItem>Broan</DropdownMenuItem>
                <DropdownMenuItem>Brother</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>



                <DropdownMenuSub>
  <DropdownMenuSubTrigger>C D E F</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <h1 className="text-lg font-bold mb-2 w-52">C D E F</h1>
      <DropdownMenuItem>Canon</DropdownMenuItem>
      <DropdownMenuItem>Casio</DropdownMenuItem>
      <DropdownMenuItem>Chatr Wireless</DropdownMenuItem>
      <DropdownMenuItem>Citizen</DropdownMenuItem>
      <DropdownMenuItem>Conair</DropdownMenuItem>
      <DropdownMenuItem>Corsair</DropdownMenuItem>
      <DropdownMenuItem>Cuisinart</DropdownMenuItem>
      <DropdownMenuItem>CyberPowerPC</DropdownMenuItem>
      <DropdownMenuItem>Definitive Technology</DropdownMenuItem>
      <DropdownMenuItem>Dell</DropdownMenuItem>
      <DropdownMenuItem>De'Longhi</DropdownMenuItem>
      <DropdownMenuItem>Denon</DropdownMenuItem>
      <DropdownMenuItem>DJI</DropdownMenuItem>
      <DropdownMenuItem>D-Link</DropdownMenuItem>
      <DropdownMenuItem>Dyson</DropdownMenuItem>
      <DropdownMenuItem>Electrolux</DropdownMenuItem>
      <DropdownMenuItem>Epson</DropdownMenuItem>
      <DropdownMenuItem>Fido</DropdownMenuItem>
      <DropdownMenuItem>Fitbit</DropdownMenuItem>
      <DropdownMenuItem>Fossil</DropdownMenuItem>
      <DropdownMenuItem>Freedom Mobile</DropdownMenuItem>
      <DropdownMenuItem>Frigidaire</DropdownMenuItem>
      <DropdownMenuItem>Fujifilm</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>



                <DropdownMenuSub>
  <DropdownMenuSubTrigger>G H I J K</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <h1 className="text-lg font-bold mb-2 w-52">G H I J K</h1>
      <DropdownMenuItem>Garmin</DropdownMenuItem>
      <DropdownMenuItem>GE</DropdownMenuItem>
      <DropdownMenuItem>Google</DropdownMenuItem>
      <DropdownMenuItem>GoPro</DropdownMenuItem>
      <DropdownMenuItem>Haier Appliances</DropdownMenuItem>
      <DropdownMenuItem>Hamilton Beach</DropdownMenuItem>
      <DropdownMenuItem>Happy Plugs</DropdownMenuItem>
      <DropdownMenuItem>Hisense</DropdownMenuItem>
      <DropdownMenuItem>Honeywell</DropdownMenuItem>
      <DropdownMenuItem>House of Marley</DropdownMenuItem>
      <DropdownMenuItem>HP</DropdownMenuItem>
      <DropdownMenuItem>Hyper-X</DropdownMenuItem>
      <DropdownMenuItem>Insignia</DropdownMenuItem>
      <DropdownMenuItem>Instant Pot</DropdownMenuItem>
      <DropdownMenuItem>Intel</DropdownMenuItem>
      <DropdownMenuItem>iRobot</DropdownMenuItem>
      <DropdownMenuItem>Jabra</DropdownMenuItem>
      <DropdownMenuItem>Jaybird</DropdownMenuItem>
      <DropdownMenuItem>JBL</DropdownMenuItem>
      <DropdownMenuItem>JLab</DropdownMenuItem>
      <DropdownMenuItem>Kate Spade</DropdownMenuItem>
      <DropdownMenuItem>Keurig</DropdownMenuItem>
      <DropdownMenuItem>Kingston</DropdownMenuItem>
      <DropdownMenuItem>KitchenAid</DropdownMenuItem>
      <DropdownMenuItem>Klipsch</DropdownMenuItem>
      <DropdownMenuItem>Kobo</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


                <DropdownMenuSub>
  <DropdownMenuSubTrigger>L M N O</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <h1 className="text-lg font-bold mb-2 w-52">L M N O</h1>
      <DropdownMenuItem>Lenovo</DropdownMenuItem>
      <DropdownMenuItem>LG</DropdownMenuItem>
      <DropdownMenuItem>LifeProof</DropdownMenuItem>
      <DropdownMenuItem>Linksys</DropdownMenuItem>
      <DropdownMenuItem>Logitech</DropdownMenuItem>
      <DropdownMenuItem>Marantz</DropdownMenuItem>
      <DropdownMenuItem>Marshall</DropdownMenuItem>
      <DropdownMenuItem>Maytag</DropdownMenuItem>
      <DropdownMenuItem>McAfee</DropdownMenuItem>
      <DropdownMenuItem>Meta</DropdownMenuItem>
      <DropdownMenuItem>Michael Kors</DropdownMenuItem>
      <DropdownMenuItem>Microsoft</DropdownMenuItem>
      <DropdownMenuItem>Miele</DropdownMenuItem>
      <DropdownMenuItem>Monster</DropdownMenuItem>
      <DropdownMenuItem>Napoleon</DropdownMenuItem>
      <DropdownMenuItem>Nespresso</DropdownMenuItem>
      <DropdownMenuItem>Netgear</DropdownMenuItem>
      <DropdownMenuItem>Nikon</DropdownMenuItem>
      <DropdownMenuItem>Ninja Appliances</DropdownMenuItem>
      <DropdownMenuItem>Nintendo</DropdownMenuItem>
      <DropdownMenuItem>Norton</DropdownMenuItem>
      <DropdownMenuItem>NVIDIA</DropdownMenuItem>
      <DropdownMenuItem>Olympus</DropdownMenuItem>
      <DropdownMenuItem>Onkyo</DropdownMenuItem>
      <DropdownMenuItem>Oster</DropdownMenuItem>
      <DropdownMenuItem>OtterBox</DropdownMenuItem>
      <DropdownMenuItem>Oura</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


                <DropdownMenuSub>
  <DropdownMenuSubTrigger>P Q R S</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <h1 className="text-lg font-bold mb-2 w-52">P Q R S</h1>
      <DropdownMenuItem>Panasonic</DropdownMenuItem>
      <DropdownMenuItem>Philips</DropdownMenuItem>
      <DropdownMenuItem>Philips Hue</DropdownMenuItem>
      <DropdownMenuItem>Pioneer</DropdownMenuItem>
      <DropdownMenuItem>Plantronics</DropdownMenuItem>
      <DropdownMenuItem>PlayStation</DropdownMenuItem>
      <DropdownMenuItem>Polk Audio</DropdownMenuItem>
      <DropdownMenuItem>Qualcomm</DropdownMenuItem>
      <DropdownMenuItem>Razer</DropdownMenuItem>
      <DropdownMenuItem>RCA</DropdownMenuItem>
      <DropdownMenuItem>Ring</DropdownMenuItem>
      <DropdownMenuItem>Roku</DropdownMenuItem>
      <DropdownMenuItem>Rogers</DropdownMenuItem>
      <DropdownMenuItem>Samsonite</DropdownMenuItem>
      <DropdownMenuItem>Samsung</DropdownMenuItem>
      <DropdownMenuItem>Sandisk</DropdownMenuItem>
      <DropdownMenuItem>Seagate</DropdownMenuItem>
      <DropdownMenuItem>Segway Ninebot</DropdownMenuItem>
      <DropdownMenuItem>Seiko</DropdownMenuItem>
      <DropdownMenuItem>Sennheiser</DropdownMenuItem>
      <DropdownMenuItem>Skullcandy</DropdownMenuItem>
      <DropdownMenuItem>Sharp</DropdownMenuItem>
      <DropdownMenuItem>Sleep Country</DropdownMenuItem>
      <DropdownMenuItem>Sonos</DropdownMenuItem>
      <DropdownMenuItem>Sony</DropdownMenuItem>
      <DropdownMenuItem>Swann</DropdownMenuItem>
      <DropdownMenuItem>Swissgear</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


                <DropdownMenuSub>
  <DropdownMenuSubTrigger>T U V W X Y Z</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <h1 className="text-lg font-bold mb-2 w-52">T U V W X Y Z</h1>
      <DropdownMenuItem>T-Fal</DropdownMenuItem>
      <DropdownMenuItem>TCL</DropdownMenuItem>
      <DropdownMenuItem>TELUS</DropdownMenuItem>
      <DropdownMenuItem>Thinkware</DropdownMenuItem>
      <DropdownMenuItem>Tile</DropdownMenuItem>
      <DropdownMenuItem>Toshiba</DropdownMenuItem>
      <DropdownMenuItem>TP Link</DropdownMenuItem>
      <DropdownMenuItem>Tumi</DropdownMenuItem>
      <DropdownMenuItem>Turtle Beach</DropdownMenuItem>
      <DropdownMenuItem>Ultimate Ears</DropdownMenuItem>
      <DropdownMenuItem>Virgin Plus</DropdownMenuItem>
      <DropdownMenuItem>Vitamix</DropdownMenuItem>
      <DropdownMenuItem>VTech</DropdownMenuItem>
      <DropdownMenuItem>Weber</DropdownMenuItem>
      <DropdownMenuItem>Western Digital</DropdownMenuItem>
      <DropdownMenuItem>Whirlpool</DropdownMenuItem>
      <DropdownMenuItem>Wolf Gourmet</DropdownMenuItem>
      <DropdownMenuItem>Xbox</DropdownMenuItem>
      <DropdownMenuItem>Xerox</DropdownMenuItem>
      <DropdownMenuItem>Yale</DropdownMenuItem>
      <DropdownMenuItem>Yamaha</DropdownMenuItem>
      <DropdownMenuItem>Zagg</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>




              <DropdownMenuItem className="whitespace-normal">Yes, Best Buy sells that</DropdownMenuItem>

              <DropdownMenuSub>
            <DropdownMenuSubTrigger>Father's Day Gifts</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2  ">Father's Day Gifts</h1>
                 </div>
                <DropdownMenuItem>Gifts Under $50 for Dad</DropdownMenuItem>
                <DropdownMenuItem>Gifts Under $100 for Dad</DropdownMenuItem>
                <DropdownMenuItem>Gifts Under $200 for Dad</DropdownMenuItem>
                <DropdownMenuItem>Gifts Under $400 for Dad</DropdownMenuItem>
                <DropdownMenuItem>All Father's Day Gift Ideas</DropdownMenuItem> 
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

              
            
            
              <h1 className="text-lg font-bold mb-2">Shop by Category</h1>
            
             
              
              <DropdownMenuSub>
            <DropdownMenuSubTrigger> Computers, Tablets, & Accessories</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Computers, Tablets, & Accessories</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>

                <DropdownMenuSub>
            <DropdownMenuSubTrigger>Laptops & MacBooks</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Laptops & MacBooks</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Windows Laptops</DropdownMenuItem>
                <DropdownMenuItem>Copilot+ PC</DropdownMenuItem>
                <DropdownMenuItem>MacBooks</DropdownMenuItem>
                <DropdownMenuItem>Chromebooks</DropdownMenuItem>
                <DropdownMenuItem>Gaming Laptops</DropdownMenuItem>
                <DropdownMenuItem>2 in 1 Laptops</DropdownMenuItem>
                <DropdownMenuItem>Outlet Deals on Laptops & MacBooks</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>



          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Desktop Computers</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Desktop Computers</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Everyday Computing</DropdownMenuItem>
                <DropdownMenuItem>Gaming Desktop Computers</DropdownMenuItem>
                <DropdownMenuItem>All-in-One Computers</DropdownMenuItem>
                <DropdownMenuItem>Apple iMac</DropdownMenuItem>
                <DropdownMenuItem>Apple Mac Pro</DropdownMenuItem>
                <DropdownMenuItem>Apple Mac Mini</DropdownMenuItem>
                <DropdownMenuItem>Barebone PCs</DropdownMenuItem>
                <DropdownMenuItem>Servers</DropdownMenuItem>
                <DropdownMenuItem>Outlet Deals on Desktops</DropdownMenuItem>                
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>


           <DropdownMenuSub>
            <DropdownMenuSubTrigger>Tablets & iPads</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Tablets & iPads</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Apple Tablets</DropdownMenuItem>
                 <DropdownMenuItem>Android Tablets</DropdownMenuItem>
                  <DropdownMenuItem>Windows Tablets</DropdownMenuItem>
                   <DropdownMenuItem>eReaders</DropdownMenuItem>
                    <DropdownMenuItem>Outlet Deals on Tablets & iPads</DropdownMenuItem>
                               
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>PC Gaming</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">PC Gaming</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Gaming Desktops</DropdownMenuItem>
                 <DropdownMenuItem>Gaming Laptops</DropdownMenuItem>
                  <DropdownMenuItem>Gaming Monitors</DropdownMenuItem>
                   <DropdownMenuItem>Gaming Headsets</DropdownMenuItem>
                    <DropdownMenuItem>Gaming Mice</DropdownMenuItem>
                    <DropdownMenuItem>Gaming Keyboards</DropdownMenuItem>
                    <DropdownMenuItem>Joysticks, Steering Wheels, & Flight Controllers</DropdownMenuItem>
                    <DropdownMenuItem>Stream Decks & Controllers</DropdownMenuItem>
                    <DropdownMenuItem>Streaming & Network Accessories</DropdownMenuItem>
                    <DropdownMenuItem>Handheld Gaming PCs</DropdownMenuItem>
                    <DropdownMenuItem>Gaming Furniture</DropdownMenuItem>
                    <DropdownMenuItem>PC Games</DropdownMenuItem>
                    <DropdownMenuItem>PC Components</DropdownMenuItem>
                               
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>


               <DropdownMenuSub> 
            <DropdownMenuSubTrigger>eReaders & Accessories</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">eReaders & Accessories</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>eReaders</DropdownMenuItem>
                 <DropdownMenuItem>eReader Cases & Accessories</DropdownMenuItem>
                 
                               
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
                



                
               <DropdownMenuSub> 
            <DropdownMenuSubTrigger> Monitors</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> Monitors</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Computer Monitors</DropdownMenuItem>
                 <DropdownMenuItem>Gaming Monitors</DropdownMenuItem>
                 <DropdownMenuItem>Apple Monitors</DropdownMenuItem>
                 <DropdownMenuItem>Ultrawide Monitors</DropdownMenuItem>
                 <DropdownMenuItem>Curved Monitors</DropdownMenuItem>
                 <DropdownMenuItem>4K Monitors</DropdownMenuItem>
                 <DropdownMenuItem>OLED Monitors</DropdownMenuItem>
                 <DropdownMenuItem>Smart Monitors</DropdownMenuItem>
                 <DropdownMenuItem>Commercial-Grade Monitors</DropdownMenuItem>
                 <DropdownMenuItem>Outlet Deals on Monitors</DropdownMenuItem>
                 
                               
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
            



           <DropdownMenuSub> 
            <DropdownMenuSubTrigger> Computer Accessories</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> Computer Accessories</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Mice & Keyboards</DropdownMenuItem>
                 <DropdownMenuItem>Computer Speakers</DropdownMenuItem>
                 <DropdownMenuItem>Graphic & Drawing Tablets</DropdownMenuItem>
                 <DropdownMenuItem>Headsets & Microphones</DropdownMenuItem>
                 <DropdownMenuItem>Webcams</DropdownMenuItem>
                 <DropdownMenuItem>Stream Decks & Controllers</DropdownMenuItem>
                 <DropdownMenuItem>Video Capture</DropdownMenuItem>
                 <DropdownMenuItem>Laptop Cases & Bags</DropdownMenuItem>
                 <DropdownMenuItem>Cables & Connectors</DropdownMenuItem>
                 <DropdownMenuItem>Computer Care & Cleaning</DropdownMenuItem>
                 <DropdownMenuItem>Laptop Locks</DropdownMenuItem>
                 <DropdownMenuItem>Laptop Batteries & Chargers</DropdownMenuItem>
                 
                               
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>








            
           <DropdownMenuSub> 
            <DropdownMenuSubTrigger>Tablet & iPad Accessories</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Tablet & iPad Accessories</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Tablet & iPad Cases</DropdownMenuItem>
                 <DropdownMenuItem>Tablet & iPad Screen Protectors</DropdownMenuItem>
                 <DropdownMenuItem>Tablet & iPad Keyboards</DropdownMenuItem>
                 <DropdownMenuItem>Tablet & iPad Chargers</DropdownMenuItem>
                 <DropdownMenuItem>Tablet & iPad Stands</DropdownMenuItem>
                 <DropdownMenuItem>Tablet & iPad Styluses</DropdownMenuItem>
                 <DropdownMenuItem>Other Tablet & iPad Accessories</DropdownMenuItem>                
                               
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>




           <DropdownMenuSub> 
            <DropdownMenuSubTrigger>Hard Drives & Storage Devices</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Hard Drives & Storage Devices</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>External SSD</DropdownMenuItem>
                 <DropdownMenuItem>Internal SSD</DropdownMenuItem>
                 <DropdownMenuItem>Internal Hard Drives</DropdownMenuItem>
                 <DropdownMenuItem>USB Flash Drives</DropdownMenuItem>
                 <DropdownMenuItem>Crypto Wallets</DropdownMenuItem>
                 <DropdownMenuItem>Network-Attached Storage (NAS)</DropdownMenuItem>
                 <DropdownMenuItem>Optical Drives & Media</DropdownMenuItem>     
                 <DropdownMenuItem>Optical Drives & Media</DropdownMenuItem> 
                 <DropdownMenuItem>Hard Drive Enclosures, Docks & Cases</DropdownMenuItem>  
                            
                               
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>



           <DropdownMenuSub> 
            <DropdownMenuSubTrigger>PC Components</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">PC Components</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Graphics Cards</DropdownMenuItem>
                 <DropdownMenuItem>CPU / Computer Processors</DropdownMenuItem>
                 <DropdownMenuItem>Motherboards</DropdownMenuItem>
                 <DropdownMenuItem>Computer Cases</DropdownMenuItem>
                 <DropdownMenuItem>Computer Memory (RAM)</DropdownMenuItem>
                 <DropdownMenuItem>Computer Power Supplies</DropdownMenuItem>
                 <DropdownMenuItem>Sound Cards </DropdownMenuItem>     
                 <DropdownMenuItem>PC Fans and Cooling</DropdownMenuItem> 
                 <DropdownMenuItem>Internal SSD</DropdownMenuItem> 
                 <DropdownMenuItem>TV Tuners</DropdownMenuItem> 
                 <DropdownMenuItem>Video Capture</DropdownMenuItem> 
                 <DropdownMenuItem>Network Interface Cards</DropdownMenuItem>           
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>




                  <DropdownMenuSub> 
            <DropdownMenuSubTrigger>Wi-Fi and Networking</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Wi-Fi and Networking</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Whole Home Mesh Wi-Fi</DropdownMenuItem>
                 <DropdownMenuItem>Wireless Routers</DropdownMenuItem>
                 <DropdownMenuItem>Wired Routers</DropdownMenuItem>
                 <DropdownMenuItem>Range Extenders & Powerline</DropdownMenuItem>
                 <DropdownMenuItem>Wireless USB Adapters</DropdownMenuItem>
                 <DropdownMenuItem>Computer Power Supplies</DropdownMenuItem>
                 <DropdownMenuItem>Hubs, Switches & Modems </DropdownMenuItem>     
                 <DropdownMenuItem>Networking Cables & Accessories</DropdownMenuItem>       
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          
          
          
          
          <DropdownMenuSub> 
            <DropdownMenuSubTrigger>Printers, Scanners, & Fax</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Printers, Scanners, & Fax</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Supertank Printers</DropdownMenuItem>
                 <DropdownMenuItem>Inkjet Printers</DropdownMenuItem>
                 <DropdownMenuItem>Wired Routers</DropdownMenuItem>
                 <DropdownMenuItem>Laser Printers</DropdownMenuItem>
                 <DropdownMenuItem>Photo Printers</DropdownMenuItem>
                 <DropdownMenuItem>Specialty Printers</DropdownMenuItem>
                 <DropdownMenuItem>Label Printers</DropdownMenuItem>     
                 <DropdownMenuItem>3D Printers</DropdownMenuItem> 
                 <DropdownMenuItem>Fax Machines</DropdownMenuItem> 
                 <DropdownMenuItem>Print Servers</DropdownMenuItem>       
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>


                 <DropdownMenuSub> 
            <DropdownMenuSubTrigger>Software</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Software</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Antivirus, Security & Utility Software</DropdownMenuItem>
                 <DropdownMenuItem>Business & Home Office Software</DropdownMenuItem>
                 <DropdownMenuItem>Accounting & Finance Software</DropdownMenuItem>
                 <DropdownMenuItem>Tax Software</DropdownMenuItem>
                 <DropdownMenuItem>Photo Editing & Graphic Design Software</DropdownMenuItem>
                 <DropdownMenuItem>Video Editing Software</DropdownMenuItem>
                 <DropdownMenuItem>Audio Editing & Recording Software</DropdownMenuItem>     
                 <DropdownMenuItem>Language & Educational Software</DropdownMenuItem> 
                 <DropdownMenuItem>Operating System Software</DropdownMenuItem> 
                 <DropdownMenuItem>CD and DVD Burning Software</DropdownMenuItem>   
                 <DropdownMenuItem>Other Software</DropdownMenuItem>     
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>



 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Cell Phones and Accessories</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Cell Phones and Accessories</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>


              <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Cell Phones Plans</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Cell Phones Plans</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>iPhone</DropdownMenuItem>
                 <DropdownMenuItem>Samsung Phones</DropdownMenuItem>
                 <DropdownMenuItem>Google Phones</DropdownMenuItem>    
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>


                  <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Unlocked Phones</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Unlocked Phones</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>iPhone Unlocked</DropdownMenuItem>
                 <DropdownMenuItem>Unlocked Samsung Smartphones</DropdownMenuItem>
                 <DropdownMenuItem>Unlocked Google Phones</DropdownMenuItem>  
                 <DropdownMenuItem>Unlocked OnePlus Phones</DropdownMenuItem>  
                 <DropdownMenuItem>Refurbished Cell Phones</DropdownMenuItem>  
                 <DropdownMenuItem>Open Box Cell Phones</DropdownMenuItem>  
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

            <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Prepaid Phones</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Prepaid Phones</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Feature Phones - Prepaid</DropdownMenuItem>
                 <DropdownMenuItem>Android Phones - Prepaid</DropdownMenuItem> 
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
                    <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Cell Phone Accessories</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Cell Phone Accessories</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>iPhone Accessories</DropdownMenuItem>
                 <DropdownMenuItem>Samsung Galaxy Accessories</DropdownMenuItem>
                 <DropdownMenuItem>Google Pixel Accessories</DropdownMenuItem>  
                 <DropdownMenuItem>Cell Phone Cases</DropdownMenuItem>  
                 <DropdownMenuItem>Screen Protectors</DropdownMenuItem>  
                 <DropdownMenuItem>Portable Phone Chargers, Charging & Batteries</DropdownMenuItem> 
                  <DropdownMenuItem>Bluetooth & Handsfree Device</DropdownMenuItem> 
                   <DropdownMenuItem>Phone Ring Holders & Grips</DropdownMenuItem> 
                    <DropdownMenuItem>Mobile Phone Photography</DropdownMenuItem> 
                     <DropdownMenuItem>Cell Phone Boosters & Accessories</DropdownMenuItem>  
                     <DropdownMenuItem>SIM Cards</DropdownMenuItem>  
                     <DropdownMenuItem>Bluetooth Trackers</DropdownMenuItem>  
                     <DropdownMenuItem>Cell Phone Parts</DropdownMenuItem>  
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

                
                 <DropdownMenuItem>Bring Your Own Device Plans</DropdownMenuItem>
                 <DropdownMenuItem>Rogers</DropdownMenuItem>
                 <DropdownMenuItem>TELUS</DropdownMenuItem>     
                 <DropdownMenuItem>Bell</DropdownMenuItem> 
                 <DropdownMenuItem>Fido</DropdownMenuItem> 
                 <DropdownMenuItem>Koodo</DropdownMenuItem>   
                 <DropdownMenuItem>Virgin Plus</DropdownMenuItem> 
                 <DropdownMenuItem>Freedom Mobile </DropdownMenuItem>     
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          

          <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Office Supplies & Ink</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Office Supplies & Ink</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                  
                     
                     <DropdownMenuSub> 
              <DropdownMenuSubTrigger> Ink & Toner Cartridges</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> Ink & Toner Cartridges</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Printer Ink</DropdownMenuItem>
                 <DropdownMenuItem>Supertank Printer Ink</DropdownMenuItem> 
                 <DropdownMenuItem>Printer Toner</DropdownMenuItem>
                 <DropdownMenuItem>Ink Refill Kits</DropdownMenuItem>
                 <DropdownMenuItem>3D Printer Cartridges</DropdownMenuItem>
                 <DropdownMenuItem>3D Printer Accessories</DropdownMenuItem>
                 <DropdownMenuItem>Printer Maintenance Supplies</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>


    <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Printers, Scanners, & Fax</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> Printers, Scanners, & Fax</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Supertank Printers</DropdownMenuItem>
                 <DropdownMenuItem>Inkjet Printers</DropdownMenuItem> 
                 <DropdownMenuItem>Laser Printers</DropdownMenuItem>
                 <DropdownMenuItem>Photo Printers</DropdownMenuItem>
                 <DropdownMenuItem>Specialty Printers</DropdownMenuItem>
                 <DropdownMenuItem>3D Printers</DropdownMenuItem>
                 <DropdownMenuItem>Fax Machines</DropdownMenuItem>
                 <DropdownMenuItem>Print Servers </DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
             

                <DropdownMenuSub> 
              <DropdownMenuSubTrigger> Pencils, Pens & Markers</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">  Pencils, Pens & Markers</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Dry-Erase Markers & Whiteboard Erasers</DropdownMenuItem>
                 <DropdownMenuItem>Pens</DropdownMenuItem> 
                 <DropdownMenuItem>Pencils</DropdownMenuItem>
                 <DropdownMenuItem>Pen Refills</DropdownMenuItem>
                 <DropdownMenuItem>Pencil Refills</DropdownMenuItem>
                 <DropdownMenuItem>Pencil Sharpeners</DropdownMenuItem>
                 <DropdownMenuItem>Highlighters</DropdownMenuItem>
                 <DropdownMenuItem>Permanent Markers </DropdownMenuItem>
                 <DropdownMenuItem>Erasers & Correction </DropdownMenuItem>
                 <DropdownMenuItem>Art Supplies </DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>


            <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Stationery & Desk Items</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">  Stationery & Desk Items</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Staplers & Staples</DropdownMenuItem>
                 <DropdownMenuItem>Hole Punches</DropdownMenuItem> 
                 <DropdownMenuItem>Scissors</DropdownMenuItem>
                 <DropdownMenuItem>Clips, Pins & Tacks</DropdownMenuItem>
                 <DropdownMenuItem>Rubber Bands</DropdownMenuItem>
                 <DropdownMenuItem>Rubber Stamps & Stampers</DropdownMenuItem>
                 <DropdownMenuItem>Rulers & Measuring Tape</DropdownMenuItem>
                 <DropdownMenuItem>Desk Pads </DropdownMenuItem>
                 <DropdownMenuItem>Desk Organizers </DropdownMenuItem>
                 <DropdownMenuItem>Rolodex </DropdownMenuItem>
                 <DropdownMenuItem>More Desk Supplies </DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

           
           
           
            <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Tape & Adhesives</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Tape & Adhesives</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Office Tape</DropdownMenuItem>
                 <DropdownMenuItem>Tape Dispensers</DropdownMenuItem> 
                 <DropdownMenuItem>Packaging Tape & Dispensers</DropdownMenuItem>
                 <DropdownMenuItem>Specialty Tape</DropdownMenuItem>
                 <DropdownMenuItem>Glue & Adhesives</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>








            <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Paper Supplies</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Paper Supplies</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Multipurpose Paper</DropdownMenuItem>
                 <DropdownMenuItem>Photo Paper</DropdownMenuItem> 
                 <DropdownMenuItem>Specialty Paper</DropdownMenuItem>
                 <DropdownMenuItem>Loose-Sheet Paper</DropdownMenuItem>
                 <DropdownMenuItem>Art & Construction Paper</DropdownMenuItem>
                 <DropdownMenuItem>Index Cards</DropdownMenuItem>
                 <DropdownMenuItem>More Labelling Supplies</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>


                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Notebooks & Planners</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Notebooks & Planners</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Notebooks</DropdownMenuItem>
                 <DropdownMenuItem>Notepads</DropdownMenuItem> 
                 <DropdownMenuItem>Journals</DropdownMenuItem>
                 <DropdownMenuItem>Post-Its & Sticky Notes</DropdownMenuItem>
                 <DropdownMenuItem>Clipboards</DropdownMenuItem>
                 <DropdownMenuItem>Writing Tablets</DropdownMenuItem>
                 <DropdownMenuItem>Planners</DropdownMenuItem>
                 <DropdownMenuItem>Planner Refills</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>



                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Filing Storage & Binders</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Filing Storage & Binders</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Binders</DropdownMenuItem>
                 <DropdownMenuItem>Index Tab Dividers</DropdownMenuItem> 
                 <DropdownMenuItem>File Folders</DropdownMenuItem>
                 <DropdownMenuItem>Hanging File Folders</DropdownMenuItem>
                 <DropdownMenuItem>Expanding File Folders & File Pockets</DropdownMenuItem>
                 <DropdownMenuItem>File Organizers</DropdownMenuItem>
                 <DropdownMenuItem>Portable Storage & Boxes</DropdownMenuItem>
                 <DropdownMenuItem>Filing Accessories</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

                  <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Mailing & Shipping</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Mailing & Shipping</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Envelopes</DropdownMenuItem>
                 <DropdownMenuItem>Labels & Stickers</DropdownMenuItem> 
                 <DropdownMenuItem>Shipping Supplies</DropdownMenuItem>
                 <DropdownMenuItem>More Mailing & Shipping Supplies</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>



            <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Boards & Presentation</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Boards & Presentation</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Bulletin Boards</DropdownMenuItem>
                 <DropdownMenuItem>Report Covers & Portfolios</DropdownMenuItem> 
                 <DropdownMenuItem>Easels & Easel Padss</DropdownMenuItem>
                 <DropdownMenuItem>Whiteboards & Chalkboards</DropdownMenuItem>
                 <DropdownMenuItem>Planner Boards & Wall Calendars</DropdownMenuItem>
                 <DropdownMenuItem>Presentation Supplies</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>



                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Binding & Laminating</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Binding & Laminating</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Binding Machines</DropdownMenuItem>
                 <DropdownMenuItem>Binding Supplies</DropdownMenuItem> 
                 <DropdownMenuItem>Laminating Machines</DropdownMenuItem>
                 <DropdownMenuItem>Laminating Supplies</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>






                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Retail & Business Equipment</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Retail & Business Equipment</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Time Clock Supplies</DropdownMenuItem>
                 <DropdownMenuItem>Time Clocks</DropdownMenuItem> 
                 <DropdownMenuItem>Business Supplies</DropdownMenuItem>
                 <DropdownMenuItem>Workplace Safety</DropdownMenuItem>
                 <DropdownMenuItem>Carts & Trolleys</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Telephones & Communications</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Telephones & Communications</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Cordless Phones</DropdownMenuItem>
                 <DropdownMenuItem>Additional Handsets</DropdownMenuItem> 
                 <DropdownMenuItem>Corded Phones</DropdownMenuItem>
                 <DropdownMenuItem>Bluetooth Enabled Homephone</DropdownMenuItem>
                 <DropdownMenuItem>VoIP (Internet Phones)</DropdownMenuItem>
                  <DropdownMenuItem>Conference Phones</DropdownMenuItem>
                   <DropdownMenuItem>Telephone Accessories</DropdownMenuItem>\
                    <DropdownMenuItem>Answering Machines</DropdownMenuItem>
                    <DropdownMenuItem>Two Way Radios & Walkie Talkies</DropdownMenuItem>
                     <DropdownMenuItem>Voice Recorders</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>



  
             
              <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Shredders & Paper Cutters</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Shredders & Paper Cutters</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Shredders</DropdownMenuItem>
                 <DropdownMenuItem>Shredder Supplies</DropdownMenuItem> 
                 <DropdownMenuItem>Paper Trimmers & Cutters </DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>


                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Calculators</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Calculators</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Financial Calculators</DropdownMenuItem>
                 <DropdownMenuItem>Graphing Calculators</DropdownMenuItem> 
                 <DropdownMenuItem>Printing Calculators</DropdownMenuItem>
                 <DropdownMenuItem>Scientific Calculators</DropdownMenuItem>
                 <DropdownMenuItem>Basic Calculators</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>


          <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Batteries</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Batteries</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>AA Batteries</DropdownMenuItem>
                 <DropdownMenuItem>AAA Batteries</DropdownMenuItem> 
                 <DropdownMenuItem>C Batteries</DropdownMenuItem>
                 <DropdownMenuItem>D Batteries</DropdownMenuItem>
                 <DropdownMenuItem>9 Volt Batteries</DropdownMenuItem>
                  <DropdownMenuItem>Other Batteries</DropdownMenuItem>
                   <DropdownMenuItem>Button & Watch Batteries</DropdownMenuItem>
                    <DropdownMenuItem>Battery Chargers</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>





    
                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Office Furniture</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Office Furniture</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Desks & Workstations</DropdownMenuItem>
                 <DropdownMenuItem>Office Chairs  </DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>


                 <DropdownMenuItem>Gaming Furniture</DropdownMenuItem>
                 <DropdownMenuItem>Other Office Supplies & Equipment</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>



              <DropdownMenuSub> 
              <DropdownMenuSubTrigger>TV & Home Theatre</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Office Furniture</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                

                <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Televisionse</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Televisions</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>98 Inch and Larger TVs</DropdownMenuItem>
                 <DropdownMenuItem>85 - 97 inch TVs</DropdownMenuItem>
                 <DropdownMenuItem>75 - 84 Inch TVs</DropdownMenuItem>
                 <DropdownMenuItem>70 - 74 Inch TVs</DropdownMenuItem>
                 <DropdownMenuItem>65 - 69 inch TVs</DropdownMenuItem>
                 <DropdownMenuItem>55 - 59 inch TVs</DropdownMenuItem>
                 <DropdownMenuItem>50 - 54 Inch TVs</DropdownMenuItem>
                 <DropdownMenuItem>43 - 49 Inch TVs</DropdownMenuItem>
                <DropdownMenuItem>33 - 42 Inch TVs</DropdownMenuItem>
                <DropdownMenuItem>32 Inch and Smaller TVs</DropdownMenuItem>
                <DropdownMenuItem>Smart TVs</DropdownMenuItem>
                <DropdownMenuItem>OLED TVs</DropdownMenuItem>
                <DropdownMenuItem>QLED TVs</DropdownMenuItem>
                <DropdownMenuItem>Mini-LED TVs</DropdownMenuItem>
                <DropdownMenuItem>Lifestyle TVs</DropdownMenuItem>
                <DropdownMenuItem>Outlet Deals on TVs</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>




                    <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Home Audio & Theatre</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Home Audio & Theatre</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Sound Bars</DropdownMenuItem>
                 <DropdownMenuItem>Wireless Multi-Room Speakers</DropdownMenuItem>
                 <DropdownMenuItem>Home Speakers</DropdownMenuItem>
                 <DropdownMenuItem>Receivers</DropdownMenuItem>
                 <DropdownMenuItem>Amplifiers</DropdownMenuItem>
                 <DropdownMenuItem>Turntables & Record Players</DropdownMenuItem>
                 <DropdownMenuItem>CD Players</DropdownMenuItem>
                 <DropdownMenuItem>Home Theatre Systems</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>







                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Projectors, Screens & Accessories</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Projectors, Screens & Accessories</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Projectors</DropdownMenuItem>
                 <DropdownMenuItem>Projector Screens</DropdownMenuItem>
                 <DropdownMenuItem>Projector Mounts & Stands</DropdownMenuItem>
                 <DropdownMenuItem>Projector Lamps & Bulbs</DropdownMenuItem>
                 <DropdownMenuItem>Projector Accessories</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>






                 <DropdownMenuItem>Media Streamers</DropdownMenuItem>





                <DropdownMenuSub> 
              <DropdownMenuSubTrigger> TV and Home Audio Mounts and Stands</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> TV and Home Audio Mounts and Stands</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>TV Stands</DropdownMenuItem>
                 <DropdownMenuItem>TV Mounts</DropdownMenuItem>
                 <DropdownMenuItem>Speaker Stands</DropdownMenuItem>
                 <DropdownMenuItem>Speakers and Sound Bar Mounts</DropdownMenuItem>
                 <DropdownMenuItem>AV Component Shelves & Stands</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>


                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger> TV & Home Theatre Accessories</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> TV & Home Theatre Accessories</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>A/V Cables & Connectors</DropdownMenuItem>
                 <DropdownMenuItem>Surge Protectors</DropdownMenuItem>
                 <DropdownMenuItem>Remote Controls</DropdownMenuItem>
                 <DropdownMenuItem>HDMI Cables</DropdownMenuItem>
                 <DropdownMenuItem>TV Parts and Hardware</DropdownMenuItem>
                 <DropdownMenuItem>Cable Management</DropdownMenuItem>
                 <DropdownMenuItem>3D TV Glasses & Accessories</DropdownMenuItem>
                 <DropdownMenuItem>Screen Cleaners</DropdownMenuItem>
                 <DropdownMenuItem>Blu-ray, DVD & Video Accessories</DropdownMenuItem>
                 <DropdownMenuItem>TV Frames</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>





                 <DropdownMenuItem>Blu-ray & DVD Players</DropdownMenuItem>
                 <DropdownMenuItem>TV Antennas</DropdownMenuItem>
                  <DropdownMenuItem>Digital Cable, Satellite & IPTV</DropdownMenuItem>
                   <DropdownMenuItem>Digital Signage & Commercial Displays</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>




               <DropdownMenuSub> 
              <DropdownMenuSubTrigger> Headphones, Speakers, & Audio</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> Headphones, Speakers, & Audio</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>


                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Home Audio & Theatre</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> Home Audio & Theatre</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Sound Bars</DropdownMenuItem>
                 <DropdownMenuItem>Wireless Multi-Room Speakers</DropdownMenuItem>
                 <DropdownMenuItem>Home Speakers</DropdownMenuItem>
                 <DropdownMenuItem>Receivers</DropdownMenuItem>
                 <DropdownMenuItem>Amplifiers</DropdownMenuItem>
                 <DropdownMenuItem>Turntables & Record Players</DropdownMenuItem>
                 <DropdownMenuItem>CD Players</DropdownMenuItem>
                 <DropdownMenuItem>Home Theatre Systems </DropdownMenuItem>   
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>





<DropdownMenuSub> 
              <DropdownMenuSubTrigger>Portable Audio</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> Portable Audio</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Portable Bluetooth Speakers</DropdownMenuItem>
                 <DropdownMenuItem>Party Speakers</DropdownMenuItem>
                 <DropdownMenuItem>Portable Music Players</DropdownMenuItem>
                 <DropdownMenuItem>Other Portable Speakers</DropdownMenuItem>
                 <DropdownMenuItem>Portable Audio Accessories</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          
          <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Turntables & Stereo System</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> Turntables & Stereo System</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Turntables & Record Players</DropdownMenuItem>
                 <DropdownMenuItem>Turntable Accessories</DropdownMenuItem>
                 <DropdownMenuItem>Mini Stereo Systems</DropdownMenuItem>
                 <DropdownMenuItem>Speaker Docks & Clock Radios</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          
          
           <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Headphones</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> Headphones</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Earbuds & Earphones</DropdownMenuItem>
                 <DropdownMenuItem>On-Ear Headphones</DropdownMenuItem>
                 <DropdownMenuItem>Mini Stereo Systems</DropdownMenuItem>
                 <DropdownMenuItem>Open-Ear Headphones</DropdownMenuItem>
                 <DropdownMenuItem>True Wireless Earbuds</DropdownMenuItem>
                 <DropdownMenuItem>Gaming Headsets</DropdownMenuItem>
                 <DropdownMenuItem>Headphone Accessorie</DropdownMenuItem>
                 <DropdownMenuItem>Outlet Deals on Headphones</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>





               <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Cameras, Camcorders, & Drones</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> Cameras, Camcorders, & Drones</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Point and Shoot Cameras</DropdownMenuItem>
                 <DropdownMenuItem>DSLR Cameras</DropdownMenuItem>
                 <DropdownMenuItem>Instant Cameras</DropdownMenuItem>


                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger> Action Cameras & Camcorders</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> Action Cameras & Camcorders</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Camcorders</DropdownMenuItem>
                 <DropdownMenuItem>Wearable & Action Cameras</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>



                <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Drones & Accessories</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> Drones & Accessories</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Drones</DropdownMenuItem>
                <DropdownMenuItem>Drone Cases & Backpacks</DropdownMenuItem>
                 <DropdownMenuItem>Drone Batteries & Chargers</DropdownMenuItem>
                 <DropdownMenuItem>Drone Gimbals</DropdownMenuItem>
                 <DropdownMenuItem>More Drone Parts & Accessories</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>


                 <DropdownMenuItem>Camera Lenses</DropdownMenuItem>
                 
                 
                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger> Camera & Camcorder Accessories</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">  Camera & Camcorder Accessories</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Memory Cards & Card Readers</DropdownMenuItem>
                <DropdownMenuItem>Camera Bags & Cases</DropdownMenuItem>
                 <DropdownMenuItem>Tripods, Mounts & Stabilizers</DropdownMenuItem>
                 <DropdownMenuItem>Camera & Camcorder Batteries & Chargers</DropdownMenuItem>
                 <DropdownMenuItem>Camera Microphones</DropdownMenuItem>
                 <DropdownMenuItem>Action & Body-Mounted Camera Accessories</DropdownMenuItem>
                 <DropdownMenuItem>Lens Accessories</DropdownMenuItem>
                 <DropdownMenuItem>Camcorder Media</DropdownMenuItem>
                 <DropdownMenuItem>Instant Camera Film</DropdownMenuItem>
                 <DropdownMenuItem>Camera Accessory Kits</DropdownMenuItem>
                 <DropdownMenuItem>Camera & Lens Cleaning</DropdownMenuItem>
                 <DropdownMenuItem>Camera Remotes</DropdownMenuItem>
                 <DropdownMenuItem>Camera DVD Guides</DropdownMenuItem>
                 <DropdownMenuItem>Other Camera Accessories</DropdownMenuItem>
                 <DropdownMenuItem>Other Camcorder Accessories</DropdownMenuItem>
                 <DropdownMenuItem>Digital Camera Docks</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>

                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Smart Home Security System</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> Smart Home Security System</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Security Cameras</DropdownMenuItem>
                <DropdownMenuItem>Home Security Systems & Motion Sensors</DropdownMenuItem>
                 <DropdownMenuItem>Smart Locks</DropdownMenuItem>
                 <DropdownMenuItem>Smart Doorbells</DropdownMenuItem>
                 <DropdownMenuItem>Other Home Security</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>

                 <DropdownMenuItem>Outlet Deals on Camera</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>
          








        <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Car Tech and GPS</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> Car Tech and GPS</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Car Cameras</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> Car Cameras</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Dash Cameras</DropdownMenuItem>
                <DropdownMenuItem>Backup Cameras</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>







                <DropdownMenuSub> 
              <DropdownMenuSubTrigger>GPS & Accessories</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">GPS & Accessories</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>GPS</DropdownMenuItem>
                <DropdownMenuItem>Tracking GPS</DropdownMenuItem>
                <DropdownMenuItem>GPS Accessories</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>





                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Car Gadgets and Accessories</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Car Gadgets and Accessories</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Radar Detectors</DropdownMenuItem>
                <DropdownMenuItem>Car Head Up Displays</DropdownMenuItem>
                <DropdownMenuItem>In-Car Smart Speaker</DropdownMenuItem>
                <DropdownMenuItem>Car Chargers</DropdownMenuItem>
                <DropdownMenuItem>Driver Monitoring and Safety Devices</DropdownMenuItem>
                <DropdownMenuItem>Car Security, Starters and Remotes</DropdownMenuItem>
                <DropdownMenuItem>Car Diagnostic Tools</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>



                 <DropdownMenuItem>EV Chargers & Accessories</DropdownMenuItem>






                  <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Car Audio, Video and Satellite Radio</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Car Audio, Video and Satellite Radio</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Satellite Radio & Accessories</DropdownMenuItem>
                <DropdownMenuItem>Receivers & Connected Car Tools</DropdownMenuItem>
                <DropdownMenuItem>Car Speakers</DropdownMenuItem>
                <DropdownMenuItem>Car Subwoofers</DropdownMenuItem>
                <DropdownMenuItem>Car Amplifiers</DropdownMenuItem>
                <DropdownMenuItem>Car Audio Installation Accessories</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>








                   <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Car Care & Auto Parts</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> Care & Auto Parts</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Car Care</DropdownMenuItem>
                <DropdownMenuItem>Car Window Tint</DropdownMenuItem>
                <DropdownMenuItem>Car Mats</DropdownMenuItem>
                <DropdownMenuItem>Wiper Blades</DropdownMenuItem>
                <DropdownMenuItem>Car Jacks & Stands</DropdownMenuItem>
                <DropdownMenuItem>Jumpstarters</DropdownMenuItem>
                <DropdownMenuItem>Auto Parts</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>






                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Marine & ATV Audio</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Marine & ATV Audio</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>ATV Audio Systems</DropdownMenuItem>
                <DropdownMenuItem>Marine Audio Systems</DropdownMenuItem>
                <DropdownMenuItem>Marine Speakers</DropdownMenuItem>
                <DropdownMenuItem>Marine Amplifiers</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>


    
              <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Appliances</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Appliances</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Major Appliances</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Major Appliances</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Kitchen Appliance Packages</DropdownMenuItem>
                <DropdownMenuItem>Refrigerators</DropdownMenuItem>
                <DropdownMenuItem>Freezers</DropdownMenuItem>
                <DropdownMenuItem>Mini Fridges & Wine Coolers</DropdownMenuItem>
                 <DropdownMenuItem>Dishwashers</DropdownMenuItem>
                  <DropdownMenuItem>Microwaves</DropdownMenuItem>
                   <DropdownMenuItem>Ranges, Cooking & Ventilation</DropdownMenuItem>
                    <DropdownMenuItem>Appliance Parts & Accessories</DropdownMenuItem>
                     <DropdownMenuItem>Outlet Deals on Major Appliances</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>



                <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Laundry Appliances</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Laundry Appliances</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Washer & Dryer Sets</DropdownMenuItem>
                <DropdownMenuItem>Washer Dryer Combos</DropdownMenuItem>
                <DropdownMenuItem>Washing Machines</DropdownMenuItem>
                <DropdownMenuItem>Dryers</DropdownMenuItem>
                 <DropdownMenuItem>Laundry Accessories</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>


         <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Small Kitchen Appliances</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Small Kitchen Appliances</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Mixers</DropdownMenuItem>
                <DropdownMenuItem>Air Fryers</DropdownMenuItem>
                <DropdownMenuItem>Toasters & Toaster Ovens</DropdownMenuItem>
                <DropdownMenuItem>Cookers & Multi-Cookers</DropdownMenuItem>
                 <DropdownMenuItem>Food Processors</DropdownMenuItem>
                 <DropdownMenuItem>Electric Grills</DropdownMenuItem>
                 <DropdownMenuItem>Specialty Small Appliances</DropdownMenuItem>
                 <DropdownMenuItem>Mini Fridges & Wine Coolers</DropdownMenuItem>
                 <DropdownMenuItem>Outlet Deals on Small Kitchen Appliances</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>


                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Coffee & Espresso</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Coffee & Espresso</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Espresso Machines</DropdownMenuItem>
                <DropdownMenuItem>Coffee Makers</DropdownMenuItem>
                <DropdownMenuItem>Coffee Grinders</DropdownMenuItem>
                <DropdownMenuItem>Milk Frothers</DropdownMenuItem>
                 <DropdownMenuItem>Coffee Pods, Beans & Grounds</DropdownMenuItem>
                 <DropdownMenuItem>Coffee Accessories</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>




                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Beverages & Cold Treats</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Beverages & Cold Treats</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Juicers & Blenders</DropdownMenuItem>
                <DropdownMenuItem>Slushie Machines & Snow Cones</DropdownMenuItem>
                <DropdownMenuItem>Ice Cream Makers</DropdownMenuItem>
                <DropdownMenuItem>Ice Makers</DropdownMenuItem>
                 <DropdownMenuItem>Water Dispensers & Filters</DropdownMenuItem>
                 <DropdownMenuItem>Electric Kettles & Tea Makers</DropdownMenuItem>
                 <DropdownMenuItem>Soda & Sparkling Water Makers</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>
                   <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Microwaves</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Microwaves</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Microwaves</DropdownMenuItem>
                <DropdownMenuItem>Over-The-Range Microwaves</DropdownMenuItem>
                <DropdownMenuItem>Countertop Microwaves</DropdownMenuItem>
                <DropdownMenuItem>Built-in Microwaves</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>



                  <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Vacuums & Floor Care</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Vacuums & Floor Care</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Stick Vacuums</DropdownMenuItem>
                <DropdownMenuItem>Robot Vacuums</DropdownMenuItem>
                <DropdownMenuItem>Wet Dry Vacuum</DropdownMenuItem>
                <DropdownMenuItem>Canister Vacuums</DropdownMenuItem>
                <DropdownMenuItem>Upright Vacuums</DropdownMenuItem>
                <DropdownMenuItem>Handheld Vacuums</DropdownMenuItem>
                <DropdownMenuItem>Steam Cleaners & Steam Mops</DropdownMenuItem>
                <DropdownMenuItem>Carpet Cleaners</DropdownMenuItem>
                <DropdownMenuItem>Robotics</DropdownMenuItem>
                <DropdownMenuItem>Vacuum Cleaner Parts & Accessories</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>

                   <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Cooling, Heating, & Air Quality</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Cooling, Heating, & Air Quality</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Air Purifiers & Accessories</DropdownMenuItem>
                <DropdownMenuItem>Air Conditioners</DropdownMenuItem>
                <DropdownMenuItem>Humidifiers</DropdownMenuItem>
                <DropdownMenuItem>Dehumidifiers</DropdownMenuItem>
                <DropdownMenuItem>Fans</DropdownMenuItem>
                <DropdownMenuItem>Evaporative Coolers</DropdownMenuItem>
                <DropdownMenuItem>Heaters</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>

        <DropdownMenuSub> 
              <DropdownMenuSubTrigger>BBQs & Outdoor Cooking</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">BBQs & Outdoor Cooking</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>BBQs</DropdownMenuItem>
                <DropdownMenuItem>Portable BBQs</DropdownMenuItem>
                <DropdownMenuItem>Outdoor Pizza Ovens</DropdownMenuItem>
                <DropdownMenuItem>BBQ Accessories & Parts</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
          </DropdownMenuSub>

          
              <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Smart Home</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Smart Home</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>






                
                  <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Smart Home Security System</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Smart Home Security System</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Security Cameras</DropdownMenuItem>
                <DropdownMenuItem>Home Security Systems & Motion Sensors</DropdownMenuItem>
                <DropdownMenuItem>Smart Locks</DropdownMenuItem>
                <DropdownMenuItem>Smart Doorbells</DropdownMenuItem>
                <DropdownMenuItem>Other Home Security</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>



                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Smart Speakers, Displays & Accessories</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Smart Speakers, Displays & Accessories</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Smart Speakers</DropdownMenuItem>
                <DropdownMenuItem>Smart Displays</DropdownMenuItem>
                <DropdownMenuItem>Smart Locks</DropdownMenuItem>
                <DropdownMenuItem>Smart Speakers Accessories</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>





                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Smart Lighting & Switches</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Smart Lighting & Switches</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Smart Lights</DropdownMenuItem>
                <DropdownMenuItem>Smart Bulbs</DropdownMenuItem>
                <DropdownMenuItem>Smart Switches & Dimmers</DropdownMenuItem>
                <DropdownMenuItem>Smart Plugs</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>




                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Smart Home Climate Control</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Smart Home Climate Control</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Smart Thermostats</DropdownMenuItem>
                <DropdownMenuItem>Water Management</DropdownMenuItem>
                <DropdownMenuItem>Other Energy Management</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>




                <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Safety Sensors & Detectors</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Safety Sensors & Detectors</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>CO & Smoke Detectors</DropdownMenuItem>
                <DropdownMenuItem>Water Leak Detectors</DropdownMenuItem>
                <DropdownMenuItem>Weather Stations & Air Quality Monitors</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>

                <DropdownMenuItem>Robotics</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>



             <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Baby & Maternity</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Baby & Maternity</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Baby Strollers & Accessories</DropdownMenuItem>
                <DropdownMenuItem>Baby Car Seats & Accessories</DropdownMenuItem>
                <DropdownMenuItem>Baby Monitors</DropdownMenuItem>
                <DropdownMenuItem>Nursing & Feeding</DropdownMenuItem>
                <DropdownMenuItem>Baby Travel Gear & Accessories</DropdownMenuItem>
                <DropdownMenuItem>Nursery Furniture & Baby Bedding</DropdownMenuItem>
                <DropdownMenuItem>Kids Room & Toddler Furniture</DropdownMenuItem>
                <DropdownMenuItem>Baby Health & Safety</DropdownMenuItem>
                <DropdownMenuItem>Bath, Potty & Diapering</DropdownMenuItem>
                <DropdownMenuItem>Nursery Décor & Baby Toys</DropdownMenuItem>
                <DropdownMenuItem>Babywear and Maternity Clothes</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>



               <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Baby & Maternity</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Baby & Maternity</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
               







                <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Baby Strollers & Accessories</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Baby Strollers & Accessories</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem> Baby Travel Systems </DropdownMenuItem>
                <DropdownMenuItem>Full-Size Strollers</DropdownMenuItem>
                <DropdownMenuItem>Double Strollers</DropdownMenuItem>
                <DropdownMenuItem>Nursing & Feeding</DropdownMenuItem>
                <DropdownMenuItem>Baby Travel Gear & Accessories</DropdownMenuItem>
                <DropdownMenuItem>Jogging Strollers</DropdownMenuItem>
                <DropdownMenuItem>Stroller Wagons</DropdownMenuItem>
                <DropdownMenuItem>Stroller Accessories</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>




            <DropdownMenuSub> 
              <DropdownMenuSubTrigger> Car Seats & Accessories</DropdownMenuSubTrigger> 
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Baby Car Seats & Accessories</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Infant Car Seats </DropdownMenuItem>
                <DropdownMenuItem>Convertible Car Seats</DropdownMenuItem>
                <DropdownMenuItem>All-in-One Car Seats</DropdownMenuItem>
                <DropdownMenuItem>Harnessed Booster Seats</DropdownMenuItem>
                <DropdownMenuItem>Booster Seats</DropdownMenuItem>
                <DropdownMenuItem>Car Seats Accessories</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>


                <DropdownMenuItem>Baby Monitors</DropdownMenuItem>


                <DropdownMenuSub> 
              <DropdownMenuSubTrigger> Nursing & Feeding</DropdownMenuSubTrigger> 
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 "> Nursing & Feeding</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Breastfeeding Essentials </DropdownMenuItem>
                <DropdownMenuItem>Bottle Feeding Essentials</DropdownMenuItem>
                <DropdownMenuItem>Baby Dishes, Cups & Utensils</DropdownMenuItem>
                <DropdownMenuItem>Baby Bibs & Burp Cloths</DropdownMenuItem>
                <DropdownMenuItem>High Chairs & Booster Seats</DropdownMenuItem>
                <DropdownMenuItem>Baby Food Makers & Storage</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>







                 <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Baby Travel Gear & Accessories</DropdownMenuSubTrigger> 
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Baby Travel Gear & Accessories</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Baby Carriers</DropdownMenuItem>
                <DropdownMenuItem>Baby Slings</DropdownMenuItem>
                <DropdownMenuItem>Play Pens & Play Yards</DropdownMenuItem>
                <DropdownMenuItem>Diaper Bags & Accessories</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>





                <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Nursery Furniture & Baby Bedding</DropdownMenuSubTrigger> 
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Nursery Furniture & Baby Bedding</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Baby Cribs</DropdownMenuItem>
                <DropdownMenuItem>Bassinets & Cradles</DropdownMenuItem>
                <DropdownMenuItem>Change Tables</DropdownMenuItem>
                <DropdownMenuItem>Nursery Dressers</DropdownMenuItem>
                <DropdownMenuItem>Glider Chairs & Rockers</DropdownMenuItem>
                <DropdownMenuItem>Crib Bedding & Accessories</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>




                <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Kids Room & Toddler Furniture</DropdownMenuSubTrigger> 
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Kids Room & Toddler Furniture</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Toddler Beds</DropdownMenuItem>
                <DropdownMenuItem>Toddler Tables & Chairs</DropdownMenuItem>
                <DropdownMenuItem>Kids Beds</DropdownMenuItem>
                <DropdownMenuItem>Kids Dressers & Chests</DropdownMenuItem>
                <DropdownMenuItem>Kids Nightstands</DropdownMenuItem>
                <DropdownMenuItem>Kids Tables & Chairs</DropdownMenuItem>
                <DropdownMenuItem>Kids Storage Bins & Racks</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>




              <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Baby Health & Safety</DropdownMenuSubTrigger> 
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Baby Health & Safety</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Baby Health Products</DropdownMenuItem>
                <DropdownMenuItem>Baby Gates</DropdownMenuItem>
                <DropdownMenuItem>Baby Proofing</DropdownMenuItem>
                <DropdownMenuItem>Baby Sound Machines</DropdownMenuItem>
                <DropdownMenuItem>Pacifiers and Teethers</DropdownMenuItem>
                <DropdownMenuItem>Baby Outdoor Protection</DropdownMenuItem>
                <DropdownMenuItem>Baby Safe Cleaning Products</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>








                <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Bath, Potty & Diapering</DropdownMenuSubTrigger> 
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Bath, Potty & Diapering</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Baby Bath & Skin Care Products</DropdownMenuItem>
                <DropdownMenuItem>Baby Bath Tubs & Toys</DropdownMenuItem>
                <DropdownMenuItem>Baby Towels & Robes</DropdownMenuItem>
                <DropdownMenuItem>Diapers & Changing</DropdownMenuItem>
                <DropdownMenuItem>Potty Training</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>





                <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Nursery Décor & Baby Toys</DropdownMenuSubTrigger> 
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Bath, Potty & Diapering</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Baby Mobiles</DropdownMenuItem>
                <DropdownMenuItem>Kids Alarm Clocks</DropdownMenuItem>
                <DropdownMenuItem>Nursery Wall Decals</DropdownMenuItem>
                <DropdownMenuItem>Nursery Rugs</DropdownMenuItem>
                <DropdownMenuItem>Early Development Toys</DropdownMenuItem>
                 <DropdownMenuItem>Stacking Toys</DropdownMenuItem>
                  <DropdownMenuItem>Push Toys</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>





                <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Babywear and Maternity Clothes</DropdownMenuSubTrigger> 
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Babywear and Maternity Clothes</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                <DropdownMenuItem>Baby Clothes</DropdownMenuItem>
                <DropdownMenuItem>Baby Swimwear</DropdownMenuItem>
                <DropdownMenuItem>Baby Clothing Accessories</DropdownMenuItem>
                <DropdownMenuItem>Nursing Bras</DropdownMenuItem>
                <DropdownMenuItem>Maternity Bottoms</DropdownMenuItem>
                 <DropdownMenuItem>Maternity Tops</DropdownMenuItem>
                  <DropdownMenuItem>Maternity Outerwear</DropdownMenuItem>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
            </DropdownMenuSub>



               <DropdownMenuSub> 
              <DropdownMenuSubTrigger>Video Games & VR</DropdownMenuSubTrigger> 
              <DropdownMenuPortal>
              <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
                  <div className=" grid grid-cols-2 justify-between">
                <h1 className="text-lg font-bold mb-2 w-52 ">Video Games & VR</h1>
                 <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">Shop all</button></div>
                
                

                <DropdownMenuSub> 
  <DropdownMenuSubTrigger>PlayStation 5</DropdownMenuSubTrigger> 
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">PlayStation 5</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>PS5 Consoles</DropdownMenuItem>
      <DropdownMenuItem>PS5 Games</DropdownMenuItem>
      <DropdownMenuItem>PS5 Accessories</DropdownMenuItem>
      <DropdownMenuItem>PlayStation Gift Cards</DropdownMenuItem>
      <DropdownMenuItem>Outlet Deals on PlayStation 5</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>



               <DropdownMenuSub>
  <DropdownMenuSubTrigger>PlayStation 4</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">PlayStation 4</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>PS4 Consoles</DropdownMenuItem>
      <DropdownMenuItem>PS4 Games</DropdownMenuItem>
      <DropdownMenuItem>PS4 Accessories</DropdownMenuItem>
      <DropdownMenuItem>PlayStation Gift Cards</DropdownMenuItem>
      <DropdownMenuItem>Outlet Deals on PlayStation 4</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


              <DropdownMenuSub>
  <DropdownMenuSubTrigger>Xbox Series X/S</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Xbox Series X/S</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Xbox Series X/S Consoles</DropdownMenuItem>
      <DropdownMenuItem>Xbox Series X/S Games</DropdownMenuItem>
      <DropdownMenuItem>Xbox Series X/S Accessories</DropdownMenuItem>
      <DropdownMenuItem>Xbox Gift Cards</DropdownMenuItem>
      <DropdownMenuItem>Outlet Deals on Xbox Series X/S</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>



                <DropdownMenuSub>
  <DropdownMenuSubTrigger>Xbox One</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Xbox One</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Xbox One Consoles</DropdownMenuItem>
      <DropdownMenuItem>Xbox One Games</DropdownMenuItem>
      <DropdownMenuItem>Xbox One Accessories</DropdownMenuItem>
      <DropdownMenuItem>Xbox Gift Cards</DropdownMenuItem>
      <DropdownMenuItem>Outlet Deals on Xbox One</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


               <DropdownMenuSub>
  <DropdownMenuSubTrigger>Nintendo Switch 2</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Nintendo Switch 2</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Nintendo Switch 2 Consoles</DropdownMenuItem>
      <DropdownMenuItem>Nintendo Switch 2 Games</DropdownMenuItem>
      <DropdownMenuItem>Nintendo Switch 2 Accessories</DropdownMenuItem>
      <DropdownMenuItem>Nintendo Digital Downloads</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


                 <DropdownMenuSub>
  <DropdownMenuSubTrigger>Nintendo Switch</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Nintendo Switch</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Nintendo Switch Consoles</DropdownMenuItem>
      <DropdownMenuItem>Nintendo Switch Games</DropdownMenuItem>
      <DropdownMenuItem>Nintendo Switch Accessories</DropdownMenuItem>
      <DropdownMenuItem>Nintendo Digital Downloads</DropdownMenuItem>
      <DropdownMenuItem>Outlet Deals on Nintendo Switch</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


                 <DropdownMenuSub>
  <DropdownMenuSubTrigger>Virtual Reality</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Virtual Reality</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Virtual Reality Headsets</DropdownMenuItem>
      <DropdownMenuItem>Virtual Reality Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>



                 <DropdownMenuSub>
  <DropdownMenuSubTrigger>Video Games</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Video Games</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Pre-Order Video Games</DropdownMenuItem>
      <DropdownMenuItem>Gaming New Releases</DropdownMenuItem>
      <DropdownMenuItem>Video Games On Sale</DropdownMenuItem>
      <DropdownMenuItem>Previously Played</DropdownMenuItem>
      <DropdownMenuItem>Digital Downloads</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>
<DropdownMenuItem>Mobile Gaming </DropdownMenuItem>


                  <DropdownMenuSub>
  <DropdownMenuSubTrigger>PC Gaming Controllers and Games</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">PC Gaming Controllers and Games</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>PC Gaming</DropdownMenuItem>
      <DropdownMenuItem>PC Games</DropdownMenuItem>
      <DropdownMenuItem>Gamepads</DropdownMenuItem>
      <DropdownMenuItem>Handheld Gaming PCs</DropdownMenuItem>
      <DropdownMenuItem>Gaming Furniture</DropdownMenuItem>
      <DropdownMenuItem>Prepaid Game Cards</DropdownMenuItem>
      <DropdownMenuItem>Joysticks, Steering Wheels, & Flight Controllers</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


                  <DropdownMenuItem>Gaming Console Headsets</DropdownMenuItem>
                  <DropdownMenuSub>
  <DropdownMenuSubTrigger>Retro Gaming</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Retro Gaming</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Retro Game Consoles</DropdownMenuItem>
      <DropdownMenuItem>Retro Gaming Accessories</DropdownMenuItem>
      <DropdownMenuItem>Retro Games</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>
   <DropdownMenuSub>
  <DropdownMenuSubTrigger>Toys to Life</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Toys to Life</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>LEGO Dimensions</DropdownMenuItem>
      <DropdownMenuItem>Disney Infinity</DropdownMenuItem>
      <DropdownMenuItem>Nintendo amiibo</DropdownMenuItem>
      <DropdownMenuItem>Gaming Playset Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>
                </DropdownMenuSubContent>
                </DropdownMenuPortal> 
                </DropdownMenuSub>



                <DropdownMenuSub>
  <DropdownMenuSubTrigger>Wearable Technology</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Wearable Technology</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Smartwatches & Accessories</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Smartwatches & Accessories</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Smartwatches</DropdownMenuItem>
      <DropdownMenuItem>Smartwatch Accessories</DropdownMenuItem>
      <DropdownMenuItem>Outlet Deals</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Apple Watch & Accessories</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Apple Watch & Accessories</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Apple Watch</DropdownMenuItem>
      <DropdownMenuItem>Apple Watch Accessories</DropdownMenuItem>
      <DropdownMenuItem>Outlet Deals</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Fitness Tracking</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Fitness Tracking</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Fitness Trackers</DropdownMenuItem>
      <DropdownMenuItem>Fitness Tracker Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Kid's Smartwatches & Accessories</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Kid's Smartwatches & Accessories</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Kid's Smartwatches</DropdownMenuItem>
      <DropdownMenuItem>Kid's Smartwatch Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuItem>Smart Rings</DropdownMenuItem>
      <DropdownMenuItem>Smart Glasses</DropdownMenuItem>
      <DropdownMenuItem>Wearable & Action Cameras</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub> 
                
              <DropdownMenuSub>
  <DropdownMenuSubTrigger>Health & Fitness</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Health & Fitness</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>

      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Health & Wellbeing</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Health & Wellbeing</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Hearables</DropdownMenuItem>
      <DropdownMenuItem>Diagnostic & Health Monitors</DropdownMenuItem>
      <DropdownMenuItem>Home Health Care</DropdownMenuItem>
      <DropdownMenuItem>Body & Back Supports</DropdownMenuItem>
      <DropdownMenuItem>Sexual Wellness</DropdownMenuItem>
      <DropdownMenuItem>Sleep Tech</DropdownMenuItem>
      <DropdownMenuItem>Other Health and Wellness</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Massagers</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Massagers</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Handheld and Percussive Massagers</DropdownMenuItem>
      <DropdownMenuItem>Leg and Foot Massagers</DropdownMenuItem>
      <DropdownMenuItem>Shiatsu Massagers</DropdownMenuItem>
      <DropdownMenuItem>Massage Tables</DropdownMenuItem>
      <DropdownMenuItem>Other</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuItem>Pain Relief Devices (TENS)</DropdownMenuItem>
      <DropdownMenuItem>Scales</DropdownMenuItem>
      
      

      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Mobility</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Mobility</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Wheelchairs</DropdownMenuItem>
      <DropdownMenuItem>Mobility Scooters</DropdownMenuItem>
      <DropdownMenuItem>Walkers and Rollators</DropdownMenuItem>
      <DropdownMenuItem>Bathroom Safety</DropdownMenuItem>
      <DropdownMenuItem>Other Mobility Aids</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>




      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Cardio Machines</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Cardio Machines</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Exercise Bikes</DropdownMenuItem>
      <DropdownMenuItem>Treadmills & Walking Pads</DropdownMenuItem>
      <DropdownMenuItem>Elliptical Machines</DropdownMenuItem>
      <DropdownMenuItem>Stair Climbers</DropdownMenuItem>
      <DropdownMenuItem>Rowing Machines</DropdownMenuItem>
      <DropdownMenuItem>Compact Cardio Machines</DropdownMenuItem>
      <DropdownMenuItem>Cardio Equipment Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Strength Training</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Strength Training</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>All-in-One Home Gym Machines</DropdownMenuItem>
      <DropdownMenuItem>Dumbbells & Weight Plates</DropdownMenuItem>
      <DropdownMenuItem>Weight Benches & Free Weight Accessories</DropdownMenuItem>
      <DropdownMenuItem>Push Up & Chin Up Bars</DropdownMenuItem>
      <DropdownMenuItem>Resistance Bands</DropdownMenuItem>
      <DropdownMenuItem>Hand Grippers</DropdownMenuItem>
      <DropdownMenuItem>Ab & Core Trainers</DropdownMenuItem>
      <DropdownMenuItem>Jump Ropes</DropdownMenuItem>
      <DropdownMenuItem>Aerobic Steps & Jump Trainers</DropdownMenuItem>
      <DropdownMenuItem>Stability Balls</DropdownMenuItem>
      <DropdownMenuItem>Balance Boards & Disks</DropdownMenuItem>
      <DropdownMenuItem>Other Strengthening Equipment</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


     <DropdownMenuSub>
  <DropdownMenuSubTrigger>Yoga Gear & Pilates Equipment</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Yoga Gear & Pilates Equipment</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Pilates & Yoga Mats</DropdownMenuItem>
      <DropdownMenuItem>Pilates Reformers</DropdownMenuItem>
      <DropdownMenuItem>Yoga Towels</DropdownMenuItem>
      <DropdownMenuItem>Yoga Accessories & Kits</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuItem>Fitness Recovery</DropdownMenuItem>
      <DropdownMenuItem>Vibration Machines</DropdownMenuItem>
      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Fitness Accessories</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Fitness Accessories</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Slimming & Lifting Belts</DropdownMenuItem>
      <DropdownMenuItem>Training & Weight Lifting Gloves</DropdownMenuItem>
      <DropdownMenuItem>Activewear</DropdownMenuItem>
      <DropdownMenuItem>Compression Socks & Sleeves</DropdownMenuItem>
      <DropdownMenuItem>Shaker Bottles</DropdownMenuItem>
      <DropdownMenuItem>Water Bottles</DropdownMenuItem>
      <DropdownMenuItem>Other Fitness Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


              <DropdownMenuSub>
  <DropdownMenuSubTrigger>Sports, Recreation, & Transportation</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Sports, Recreation, & Transportation</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Camping & Hiking</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Camping & Hiking</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Tents & Shelters</DropdownMenuItem>
      <DropdownMenuItem>Sleeping Gear</DropdownMenuItem>
      <DropdownMenuItem>Filtered Water Bottles</DropdownMenuItem>
      <DropdownMenuItem>Camping Kitchen</DropdownMenuItem>
      <DropdownMenuItem>Camping Furniture</DropdownMenuItem>
      <DropdownMenuItem>Portable Power Stations</DropdownMenuItem>
      <DropdownMenuItem>Walking Poles</DropdownMenuItem>
      <DropdownMenuItem>Camping Safety, Survival & Navigation</DropdownMenuItem>
      <DropdownMenuItem>Camping & Hiking Accessories</DropdownMenuItem>
      <DropdownMenuItem>Headlamps</DropdownMenuItem>
      <DropdownMenuItem>Camping Lanterns</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Bicycles, Scooters, Skateboards & Gear</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Bicycles, Scooters, Skateboards & Gear</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Skateboards</DropdownMenuItem>
      <DropdownMenuItem>Bicycles</DropdownMenuItem>
      <DropdownMenuItem>Scooters</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


     <DropdownMenuSub>
  <DropdownMenuSubTrigger>Electric Transportation</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Electric Transportation</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Hoverboards</DropdownMenuItem>
      <DropdownMenuItem>Electric Bikes</DropdownMenuItem>
      <DropdownMenuItem>Electric Scooters</DropdownMenuItem>
      <DropdownMenuItem>Electric Adventure Vehicles</DropdownMenuItem>
      <DropdownMenuItem>Electric Mopeds & Motorcycle Ebikes</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Winter Activity Gear</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Winter Activity Gear</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Skiing & Snowboarding</DropdownMenuItem>
      <DropdownMenuItem>Sleds, Toboggans & Snow Tubes</DropdownMenuItem>
      <DropdownMenuItem>Snow Shoes</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Sporting Goods</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Sporting Goods</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Boxing & Martial Arts Equipment</DropdownMenuItem>
      <DropdownMenuItem>Hockey Equipment</DropdownMenuItem>
      <DropdownMenuItem>Soccer Equipment</DropdownMenuItem>
      <DropdownMenuItem>Baseball & Softball Equipment</DropdownMenuItem>
      <DropdownMenuItem>Basketball Equipment</DropdownMenuItem>
      <DropdownMenuItem>Volleyball Equipment</DropdownMenuItem>
      <DropdownMenuItem>Golf Equipment</DropdownMenuItem>
      <DropdownMenuItem>Footballs</DropdownMenuItem>
      <DropdownMenuItem>Badminton</DropdownMenuItem>
      <DropdownMenuItem>Skating</DropdownMenuItem>
      <DropdownMenuItem>More Team Sports</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Binoculars, Monoculars & Scopes</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Binoculars, Monoculars & Scopes</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Binoculars</DropdownMenuItem>
      <DropdownMenuItem>Monoculars</DropdownMenuItem>
      <DropdownMenuItem>Telescopes</DropdownMenuItem>
      <DropdownMenuItem>Rifle & Spotting Scopes</DropdownMenuItem>
      <DropdownMenuItem>Rangefinders</DropdownMenuItem>
      <DropdownMenuItem>Cases & Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Fishing & Hunting</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Fishing & Hunting</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Fishfinders</DropdownMenuItem>
      <DropdownMenuItem>Fishing Gear</DropdownMenuItem>
      <DropdownMenuItem>Fishing & Hunting Bags & Cases</DropdownMenuItem>
      <DropdownMenuItem>Slings & Straps</DropdownMenuItem>
      <DropdownMenuItem>Shooting Rests & Bipods</DropdownMenuItem>
      <DropdownMenuItem>More Hunting Equipment</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuItem>Trampolines</DropdownMenuItem>
      <DropdownMenuItem>Outdoor Games</DropdownMenuItem>
      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Rec Room Games</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Rec Room Games</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Ping Pong</DropdownMenuItem>
      <DropdownMenuItem>Air Hockey Tables</DropdownMenuItem>
      <DropdownMenuItem>Dart Games</DropdownMenuItem>
      <DropdownMenuItem>Foosball Tables</DropdownMenuItem>
      <DropdownMenuItem>Indoor Basketball</DropdownMenuItem>
      <DropdownMenuItem>Billiards</DropdownMenuItem>
      <DropdownMenuItem>Casino Games</DropdownMenuItem>
      <DropdownMenuItem>Multi-Game Tables</DropdownMenuItem>
      <DropdownMenuItem>Arcade Games</DropdownMenuItem>
      <DropdownMenuItem>Other Table Games Accessories</DropdownMenuItem>
      <DropdownMenuItem>Other Table Games</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuItem>Vehicle Accessories</DropdownMenuItem>
      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Outdoor Clothing & Rain Gear</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Outdoor Clothing & Rain Gear</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Jackets, Coats & Tops</DropdownMenuItem>
      <DropdownMenuItem>Rain Pants & Shorts</DropdownMenuItem>
      <DropdownMenuItem>Rain Suits</DropdownMenuItem>
      <DropdownMenuItem>Footwear</DropdownMenuItem>
      <DropdownMenuItem>Work Gloves</DropdownMenuItem>
      <DropdownMenuItem>Headwear</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>
      
      
      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Water Sports & Boating</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Water Sports & Boating</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Paddle Boards</DropdownMenuItem>
      <DropdownMenuItem>Kayaks</DropdownMenuItem>
      <DropdownMenuItem>Inflatable Boats</DropdownMenuItem>
      <DropdownMenuItem>Canoes</DropdownMenuItem>
      <DropdownMenuItem>Bodyboards</DropdownMenuItem>
      <DropdownMenuItem>Underwater Scooters</DropdownMenuItem>
      <DropdownMenuItem>Water Floats, Water Tubes & Towables</DropdownMenuItem>
      <DropdownMenuItem>Water Sports & Boating Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


              <DropdownMenuSub>
  <DropdownMenuSubTrigger>Movies & Music</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Movies & Music</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
     <DropdownMenuSub>
  <DropdownMenuSubTrigger>Movies & TV Shows</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Movies & TV Shows</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Blu-ray Movies</DropdownMenuItem>
      <DropdownMenuItem>DVD Movies</DropdownMenuItem>
      <DropdownMenuItem>4K Ultra HD</DropdownMenuItem>
      <DropdownMenuItem>TV Shows on Blu-ray</DropdownMenuItem>
      <DropdownMenuItem>TV Shows on DVD</DropdownMenuItem>
      <DropdownMenuItem>SteelBooks</DropdownMenuItem>
      <DropdownMenuItem>Movies Miscellaneous</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>
      <DropdownMenuItem>Music</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


              <DropdownMenuSub>
  <DropdownMenuSubTrigger>Musical Instruments & Equipment</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Musical Instruments & Equipment</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>


     <DropdownMenuSub>
  <DropdownMenuSubTrigger>Electric Pianos & Keyboards</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Electric Pianos & Keyboards</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Digital Pianos</DropdownMenuItem>
      <DropdownMenuItem>Electric Keyboards</DropdownMenuItem>
      <DropdownMenuItem>MIDI Controllers</DropdownMenuItem>
      <DropdownMenuItem>Synthesizers</DropdownMenuItem>
      <DropdownMenuItem>Keyboard Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Guitars & Accessories</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Guitars & Accessories</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Electric Guitars</DropdownMenuItem>
      <DropdownMenuItem>Acoustic Guitars</DropdownMenuItem>
      <DropdownMenuItem>Acoustic Electric Guitars</DropdownMenuItem>
      <DropdownMenuItem>Bass Guitars</DropdownMenuItem>
      <DropdownMenuItem>Ukuleles</DropdownMenuItem>
      <DropdownMenuItem>Guitar Amps & Cabinets</DropdownMenuItem>
      <DropdownMenuItem>Bass Amps & Cabinets</DropdownMenuItem>
      <DropdownMenuItem>Guitar Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Band & Orchestral Instruments</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Band & Orchestral Instruments</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>String Instruments</DropdownMenuItem>
      <DropdownMenuItem>String Instrument Accessories</DropdownMenuItem>
      <DropdownMenuItem>Woodwind Instruments</DropdownMenuItem>
      <DropdownMenuItem>Woodwind Instrument Accessories</DropdownMenuItem>
      <DropdownMenuItem>Brass Instruments</DropdownMenuItem>
      <DropdownMenuItem>Brass Instrument Accessories</DropdownMenuItem>
      <DropdownMenuItem>Other Orchestral Instruments & Accessories</DropdownMenuItem>
      <DropdownMenuItem>Kids Musical Instruments</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Drums, Percussion & Accessories</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Drums, Percussion & Accessories</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Acoustic Drum Kits</DropdownMenuItem>
      <DropdownMenuItem>Electronic Drum Kits</DropdownMenuItem>
      <DropdownMenuItem>Snare Drums</DropdownMenuItem>
      <DropdownMenuItem>Toms</DropdownMenuItem>
      <DropdownMenuItem>Bass Drums</DropdownMenuItem>
      <DropdownMenuItem>Cymbals</DropdownMenuItem>
      <DropdownMenuItem>World Percussion</DropdownMenuItem>
      <DropdownMenuItem>Drum Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>



      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Musical Instrument Accessories</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Musical Instrument Accessories</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Cables & Accessories</DropdownMenuItem>
      <DropdownMenuItem>Other Amplifiers</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Microphones, Recording Equipment & Accessories</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Microphones, Recording Equipment & Accessories</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Microphones & Accessories</DropdownMenuItem>
      <DropdownMenuItem>Recording Equipment & Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuSub>
  <DropdownMenuSubTrigger>DJ Gear & Lighting</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">DJ Gear & Lighting</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>DJ Mixers & CD Turntables</DropdownMenuItem>
      <DropdownMenuItem>DJ Lights & Effects</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuItem>Karaoke</DropdownMenuItem>
      <DropdownMenuItem>Sheet Music</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>




              <DropdownMenuSub>
  <DropdownMenuSubTrigger>Toys, Games, & Education</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Toys, Games, & Education</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuSub>
  <DropdownMenuSubTrigger>LEGO & Building Blocks</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">LEGO & Building Blocks</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>LEGO</DropdownMenuItem>
      <DropdownMenuItem>Mega Bloks</DropdownMenuItem>
      <DropdownMenuItem>Laser Pegs</DropdownMenuItem>
      <DropdownMenuItem>Oyo Sports</DropdownMenuItem>
      <DropdownMenuItem>Other Building Toys</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuSub>
  <DropdownMenuSubTrigger>RC Toys & Vehicles</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">RC Toys & Vehicles</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>RC Cars</DropdownMenuItem>
      <DropdownMenuItem>RC Trucks</DropdownMenuItem>
      <DropdownMenuItem>RC Planes and Toy Drones</DropdownMenuItem>
      <DropdownMenuItem>RC Boats</DropdownMenuItem>
      <DropdownMenuItem>RC Parts & Upgrades</DropdownMenuItem>
      <DropdownMenuItem>RC Batteries & Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Drones & Accessories</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Drones & Accessories</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Drones</DropdownMenuItem>
      <DropdownMenuItem>Drone Cases & Backpacks</DropdownMenuItem>
      <DropdownMenuItem>Drone Batteries & Chargers</DropdownMenuItem>
      <DropdownMenuItem>Drone Gimbals</DropdownMenuItem>
      <DropdownMenuItem>More Drone Parts & Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Board Games, Cards & Puzzles</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Board Games, Cards & Puzzles</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Board Games</DropdownMenuItem>
      <DropdownMenuItem>Trading Cards & Accessories</DropdownMenuItem>
      <DropdownMenuItem>Card Games</DropdownMenuItem>
      <DropdownMenuItem>Puzzles</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Educational & Learning Toys</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Educational & Learning Toys</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Robots & Robotic Toys</DropdownMenuItem>
      <DropdownMenuItem>STEM Toys & Activities</DropdownMenuItem>
      <DropdownMenuItem>Coding Toys for Kids</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Kids Toys</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Kids Toys</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Activity Centres & Pretend Play</DropdownMenuItem>
      <DropdownMenuItem>Action Figures</DropdownMenuItem>
      <DropdownMenuItem>Plush Toys</DropdownMenuItem>
      <DropdownMenuItem>Dolls & Dollhouses</DropdownMenuItem>
      <DropdownMenuItem>Toy Cars & Other Vehicles</DropdownMenuItem>
      <DropdownMenuItem>Kids Tablets & Accessories</DropdownMenuItem>
      <DropdownMenuItem>Kids Puzzles</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Baby Toys</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Baby Toys</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Early Development Toys</DropdownMenuItem>
      <DropdownMenuItem>Stacking Toys</DropdownMenuItem>
      <DropdownMenuItem>Push Toys</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Science & Education</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Science & Education</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Anatomical Models</DropdownMenuItem>
      <DropdownMenuItem>Microscopes</DropdownMenuItem>
      <DropdownMenuItem>Microscope Slides & Accessories</DropdownMenuItem>
      <DropdownMenuItem>Telescopes</DropdownMenuItem>
      <DropdownMenuItem>Telescope Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Hobby Models, Train & Slot Car Sets</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Hobby Models, Train & Slot Car Sets</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Diecast Models</DropdownMenuItem>
      <DropdownMenuItem>Train Sets</DropdownMenuItem>
      <DropdownMenuItem>Slot Cars</DropdownMenuItem>
      <DropdownMenuItem>Model Building</DropdownMenuItem>
      <DropdownMenuItem>Building Tools & Accessories</DropdownMenuItem>
      <DropdownMenuItem>Model Rockets</DropdownMenuItem>
      <DropdownMenuItem>Model Rocket Parts & Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Outdoor Play</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Outdoor Play</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>NERF & Battle Toys</DropdownMenuItem>
      <DropdownMenuItem>Playgrounds & Playhouses</DropdownMenuItem>
      <DropdownMenuItem>Power Wheels & Powered Ride On Toys</DropdownMenuItem>
      <DropdownMenuItem>Sandboxes</DropdownMenuItem>
      <DropdownMenuItem>Play Tents</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Arts & Crafts</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Arts & Crafts</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Crayons, Pencils, Paints & Markers</DropdownMenuItem>
      <DropdownMenuItem>Colouring Pads & Easels</DropdownMenuItem>
      <DropdownMenuItem>Jewelry, Beading & Craft Supplies</DropdownMenuItem>
      <DropdownMenuItem>Play-Doh & Modeling Clay</DropdownMenuItem>
      <DropdownMenuItem>Colouring Books & Scrapbooks</DropdownMenuItem>
      <DropdownMenuItem>Stickers & Ink Stamps</DropdownMenuItem>
      <DropdownMenuItem>Party Supplies</DropdownMenuItem>
      <DropdownMenuItem>More Art Supplies</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

     <DropdownMenuSub>
  <DropdownMenuSubTrigger>Collectibles & Memorabilia</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Collectibles & Memorabilia</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Collectible Toys & Figurines</DropdownMenuItem>
      <DropdownMenuItem>Comic Books & Graphic Novels</DropdownMenuItem>
      <DropdownMenuItem>NFL Memorabilia & Collectibles</DropdownMenuItem>
      <DropdownMenuItem>NHL Memorabilia & Collectibles</DropdownMenuItem>
      <DropdownMenuItem>Hockey Pucks</DropdownMenuItem>
      <DropdownMenuItem>More Sports</DropdownMenuItem>
      <DropdownMenuItem>Framed Photographs</DropdownMenuItem>
      <DropdownMenuItem>Canvas Prints</DropdownMenuItem>
      <DropdownMenuItem>Other Memorabilia</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuItem>More Toys</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


             <DropdownMenuSub>
  <DropdownMenuSubTrigger>Beauty</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Beauty</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Hair Care</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Hair Care</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Hair Dryers</DropdownMenuItem>
      <DropdownMenuItem>Curling Irons</DropdownMenuItem>
      <DropdownMenuItem>Hair Straighteners</DropdownMenuItem>
      <DropdownMenuItem>Hair Styling Products</DropdownMenuItem>
      <DropdownMenuItem>Shampoo & Conditioners</DropdownMenuItem>
      <DropdownMenuItem>Hair & Scalp Treatments</DropdownMenuItem>
      <DropdownMenuItem>Hair Dye</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>
      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Skin Care</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Skin Care</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Facial Care</DropdownMenuItem>
      <DropdownMenuItem>Light Therapy Devices</DropdownMenuItem>
      <DropdownMenuItem>Eye Massagers</DropdownMenuItem>
      <DropdownMenuItem>Cleansers</DropdownMenuItem>
      <DropdownMenuItem>Serums</DropdownMenuItem>
      <DropdownMenuItem>Moisturizers</DropdownMenuItem>
      <DropdownMenuItem>Treatments</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>
      <DropdownMenuItem>Scents & Fragrances</DropdownMenuItem>
      <DropdownMenuItem>Makeup</DropdownMenuItem>
      <DropdownMenuItem>Manicure & Pedicure Tools</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


              <DropdownMenuSub>
  <DropdownMenuSubTrigger>Personal Care</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Personal Care</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Hair Care</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Hair Care</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Hair Dryers</DropdownMenuItem>
      <DropdownMenuItem>Curling Irons</DropdownMenuItem>
      <DropdownMenuItem>Hair Straighteners</DropdownMenuItem>
      <DropdownMenuItem>Hair Styling Products</DropdownMenuItem>
      <DropdownMenuItem>Shampoo & Conditioners</DropdownMenuItem>
      <DropdownMenuItem>Hair & Scalp Treatments</DropdownMenuItem>
      <DropdownMenuItem>Hair Dye</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Oral Care</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Oral Care</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Electric Toothbrushes</DropdownMenuItem>
      <DropdownMenuItem>Electric Toothbrush Heads</DropdownMenuItem>
      <DropdownMenuItem>Manual Toothbrushes</DropdownMenuItem>
      <DropdownMenuItem>Toothpaste</DropdownMenuItem>
      <DropdownMenuItem>Water Flosser</DropdownMenuItem>
      <DropdownMenuItem>Oral Care Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuItem>Hair Removal Devices & Hair Trimmers</DropdownMenuItem>
     <DropdownMenuSub>
  <DropdownMenuSubTrigger>Massagers</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Massagers</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Handheld and Percussive Massagers</DropdownMenuItem>
      <DropdownMenuItem>Leg and Foot Massagers</DropdownMenuItem>
      <DropdownMenuItem>Shiatsu Massagers</DropdownMenuItem>
      <DropdownMenuItem>Massage Tables</DropdownMenuItem>
      <DropdownMenuItem>Other</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>
      <DropdownMenuItem>Bath & Body</DropdownMenuItem>
      <DropdownMenuItem>Sexual Wellness</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


             <DropdownMenuSub>
  <DropdownMenuSubTrigger>Travel, Luggage, & Bags</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Travel, Luggage, & Bags</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Luggage & Luggage Sets</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Luggage & Luggage Sets</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Luggage Sets</DropdownMenuItem>
      <DropdownMenuItem>Carry-On Luggage</DropdownMenuItem>
      <DropdownMenuItem>Midsize Luggage</DropdownMenuItem>
      <DropdownMenuItem>Large Luggage</DropdownMenuItem>
      <DropdownMenuItem>Kids Luggage</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuItem>Garment Bags</DropdownMenuItem>
      <DropdownMenuItem>Backpacks</DropdownMenuItem>
      <DropdownMenuItem>Duffle Bags</DropdownMenuItem>
      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Handbags</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Handbags</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Shoulder Bags</DropdownMenuItem>
      <DropdownMenuItem>Tote Bags</DropdownMenuItem>
      <DropdownMenuItem>Satchel Bags</DropdownMenuItem>
      <DropdownMenuItem>Hobo Bags</DropdownMenuItem>
      <DropdownMenuItem>Crossbody Bags</DropdownMenuItem>
      <DropdownMenuItem>Clutches</DropdownMenuItem>
      <DropdownMenuItem>Wristlets</DropdownMenuItem>
      <DropdownMenuItem>Fanny Packs</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuItem>Messenger Bags & Briefcases</DropdownMenuItem>
      <DropdownMenuItem>Wallets</DropdownMenuItem>
      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Travel & Luggage Accessories</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Travel & Luggage Accessories</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Travel Pillows</DropdownMenuItem>
      <DropdownMenuItem>Travel Power Adapters</DropdownMenuItem>
      <DropdownMenuItem>Travel Wallets</DropdownMenuItem>
      <DropdownMenuItem>Passport Holders</DropdownMenuItem>
      <DropdownMenuItem>Cosmetic & Toiletry Bags</DropdownMenuItem>
      <DropdownMenuItem>Money Belts</DropdownMenuItem>
      <DropdownMenuItem>Packing Cubes</DropdownMenuItem>
      <DropdownMenuItem>Other Travel & Luggage</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>



              <DropdownMenuSub>
  <DropdownMenuSubTrigger>Watches, Jewelry, & Fashion</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Watches, Jewelry, & Fashion</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Fashion Accessories</DropdownMenuItem>
      
      
      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Watches</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Watches</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Men's Watches</DropdownMenuItem>
      <DropdownMenuItem>Women's Watches</DropdownMenuItem>
      <DropdownMenuItem>Kids Watches</DropdownMenuItem>
      <DropdownMenuItem>Watch Accessories</DropdownMenuItem>
      <DropdownMenuItem>Smartwatches & Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>


      <DropdownMenuSub>
  <DropdownMenuSubTrigger>Jewelry</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Jewelry</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Jewelry Sets</DropdownMenuItem>
      <DropdownMenuItem>Necklaces</DropdownMenuItem>
      <DropdownMenuItem>Earrings</DropdownMenuItem>
      <DropdownMenuItem>Bracelets</DropdownMenuItem>
      <DropdownMenuItem>Rings</DropdownMenuItem>
      <DropdownMenuItem>Jewelry Accessories</DropdownMenuItem>
      <DropdownMenuItem>Anklets</DropdownMenuItem>
      <DropdownMenuItem>Cufflinks</DropdownMenuItem>
      <DropdownMenuItem>Brooches & Pins</DropdownMenuItem>
      <DropdownMenuItem>Jewelry Boxes</DropdownMenuItem>
      <DropdownMenuItem>Jewelry Cleaners</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuItem>Bullions and Coins</DropdownMenuItem>
    <DropdownMenuSub>
  <DropdownMenuSubTrigger>Costumes</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Costumes</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Baby & Kid's Costumes</DropdownMenuItem>
      <DropdownMenuItem>Women's Costumes</DropdownMenuItem>
      <DropdownMenuItem>Men's Costumes</DropdownMenuItem>
      <DropdownMenuItem>Unisex Costumes</DropdownMenuItem>
      <DropdownMenuItem>Costume Accessories</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>

      <DropdownMenuItem>Women's Shoes</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>
              <DropdownMenuSub>
  <DropdownMenuSubTrigger>Gift Cards</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent className="grid grid-cols-1 gap-4 p-4">
      <div className="grid grid-cols-2 justify-between">
        <h1 className="text-lg font-bold mb-2 w-52">Gift Cards</h1>
        <button className="bg-blue-700 text-white w-28 px-4 py-2 text-sm font-semibold hover:bg-blue-800 transition h-9">
          Shop all
        </button>
      </div>
      <DropdownMenuItem>Best Buy Gift Cards</DropdownMenuItem>
      <DropdownMenuItem>Apple Gift Cards</DropdownMenuItem>
      <DropdownMenuItem>Meta Gift Cards</DropdownMenuItem>
      <DropdownMenuItem>PlayStation Digital Downloads</DropdownMenuItem>
      <DropdownMenuItem>Nintendo Digital Downloads</DropdownMenuItem>
      <DropdownMenuItem>Xbox Digital Downloads</DropdownMenuItem>
      <DropdownMenuItem>Prepaid Game Cards</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>
            </ul>
         
        </div>
     
    
            )
        },
        { 
            name: "Early Summer Sale", 
            content: (
                <div className="bg-white text-black p-4 rounded shadow-lg">
                    <h1 className="text-lg font-bold mb-2">Early Summer Sale</h1>
                    <ul className="space-y-2">
                        <DropdownMenuItem>Apple On Sale</DropdownMenuItem>
                        <DropdownMenuItem>Laptops On Sale</DropdownMenuItem>
                        <DropdownMenuItem>Smart TVs On Sale</DropdownMenuItem>
                        <DropdownMenuItem>Top Smartphone Deals</DropdownMenuItem>
                        <DropdownMenuItem>Headphones & Portable Speakers On Sale</DropdownMenuItem>
                        <DropdownMenuItem>Electric Transportation On Sale</DropdownMenuItem>
                        <DropdownMenuItem>Small Kitchen Appliances On Sale</DropdownMenuItem>
                        <DropdownMenuItem>Air Conditioners On Sale</DropdownMenuItem>
                        <DropdownMenuItem>Major Appliance Deals</DropdownMenuItem>
                        <DropdownMenuItem>All Early Summer Sale Deals</DropdownMenuItem>
                    </ul>
                </div>
            )
        },
        { 
            name: "Deals", 
            content: (
                <div className="bg-white text-black p-4 rounded shadow-lg">
                    <h1 className="text-lg font-bold mb-2">Deals</h1>
                    <ul className="space-y-2">
                        <DropdownMenuItem>Today's Deals</DropdownMenuItem>
                    </ul>
                </div>
            )
        },
        { 
            name: "Outlet", 
            content: (
                <div className="bg-white text-black p-4 rounded shadow-lg">
                    <h1 className="text-lg font-bold mb-2">Outlet</h1>
                    <ul className="space-y-2">
                        <DropdownMenuItem>Open Box Products</DropdownMenuItem>
                        <DropdownMenuItem>Refurbished Products</DropdownMenuItem>
                        <DropdownMenuItem>Clearance Products</DropdownMenuItem>
                        <DropdownMenuItem>All Outlet Deals</DropdownMenuItem>
                    </ul>
                </div>
            )
        },
        { 
            name: "Services", 
            content: (
                <div className="bg-white text-black p-4 rounded shadow-lg">
                    <h1 className="text-lg font-bold mb-2">Support and Benefits</h1>
                    <ul className="space-y-2">
                        <DropdownMenuItem>Geek Squad Services</DropdownMenuItem>
                        <DropdownMenuItem>Best Buy Membership</DropdownMenuItem>
                        <DropdownMenuItem>Best Buy Protection</DropdownMenuItem>
                        <DropdownMenuItem>Best Buy Business</DropdownMenuItem>
                        <h1 className="text-lg font-bold mb-2">Upgrade and Recycle</h1>
                        <DropdownMenuItem>Monthly Subscription</DropdownMenuItem>
                        <DropdownMenuItem>Trade-In Program</DropdownMenuItem>
                        <DropdownMenuItem>Electronics Recycling</DropdownMenuItem>
                        <h1 className="text-lg font-bold mb-2">Tech at Any Age</h1>
                        <DropdownMenuItem>Best Buy Health</DropdownMenuItem>
                        <DropdownMenuItem>Geek Squad Academy</DropdownMenuItem>
                        
                        
                    </ul>
                </div>
            )
        }
    ];


    const topLinks = [
        { name: "Order Status", href: "/" },
        { name: "Blog", href: "/" },
        { name: "Best Buy Business", href: "/" },
        { name: "Français", href: "/" }
    ];

    return (
        <header className={`bg-[#0050d8] text-white w-full sticky top-0 z-50 ${isScrolled ? 'shadow-md' : ''}`}>
            {/* Top links - hidden on mobile */}
            <div className="hidden md:flex justify-end items-center px-4 lg:px-6 pt-2 text-xs font-medium space-x-4 lg:space-x-6">
                {topLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="hover:underline whitespace-nowrap">
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Main header */}
            <div className="flex items-center justify-between px-4 py-3 md:py-4">
                {/* Mobile menu button */}
                <button 
                    className="md:hidden text-white p-2"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <IoClose size={24} /> : <CiMenuFries size={24} />}
                </button>

                {/* Logo */}
                <Link 
                    href="/" 
                    className="flex-shrink-0 mx-auto md:mx-0"
                >
                    <Image 
                        src="/logo.png" 
                        alt="Best Buy logo" 
                        width={170} 
                        height={500} 
                        priority 
                        className=""
                    />
                </Link>

                {/* Desktop Search - hidden on mobile */}
                <div className="hidden md:flex flex-1 mx-4 lg:mx-8">
                    <div className="relative w-full max-w-xl">
                        <input
                            type="text"
                            placeholder="Search Best Buy"
                            className="w-full h-10 rounded-md bg-white pl-4 pr-10 text-black text-sm"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0050d8]">
                            <CiSearch size={22} />
                        </span>
                    </div>
                </div>

                {/* Icons - some hidden on mobile */}
                <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
                    {/* Mobile search button */}
                    <button 
                        className="md:hidden text-white p-2"
                        onClick={toggleSearch}
                        aria-label="Toggle search"
                    >
                        <CiSearch size={22} />
                    </button>

                    <Link 
                        href="/" 
                        className="hidden md:flex items-center gap-1 md:gap-2 font-semibold hover:underline text-sm lg:text-base"
                    >
                        <FaRegWindowRestore size={20} /> 
                        <span className="hidden lg:inline">Stores</span>
                    </Link>

                    <Link 
                        href="/" 
                        className="hidden md:flex items-center gap-1 md:gap-2 font-semibold hover:underline text-sm lg:text-base"
                    >
                        <IoPersonCircle size={20} /> 
                        <span className="hidden lg:inline">Account</span>
                    </Link>

                    <Link 
                        href="/" 
                        className="flex items-center gap-1 md:gap-2 font-semibold hover:underline text-sm lg:text-base"
                    >
                        <CiShoppingCart size={20} /> 
                        <span className="hidden md:inline">Cart</span>
                    </Link>
                </div>
            </div>

            {/* Mobile search - appears when search button clicked */}
            {searchOpen && (
                <div className="md:hidden px-4 pb-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Best Buy"
                            className="w-full h-10 rounded-md bg-white pl-4 pr-10 text-black text-sm"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0050d8]">
                            <CiSearch size={22} />
                        </span>
                    </div>
                </div>
            )}

            {/* Desktop Navigation - hidden on mobile */}
            <nav className="hidden md:flex bg-[#0040a8] items-center px-4 lg:px-6 py-2 space-x-4 lg:space-x-8 font-bold text-sm lg:text-base">
                {navItems.map((item, index) => (
                    <DropdownMenu key={index}>
                        <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none whitespace-nowrap hover:underline">
                            {item.name} <SlArrowDown size={14} className="ml-1" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white text-black p-4 rounded shadow-lg min-w-[300px]">
                            {item.content}
                        </DropdownMenuContent>
                    </DropdownMenu>
                ))}
            </nav>

            {/* Mobile menu - appears when menu button clicked */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#0040a8] w-full">
                    <div className="px-4 py-3 border-t border-[#003080]">
                        <Link href="/" className="block py-2 hover:underline">
                            Stores
                        </Link>
                        <Link href="/" className="block py-2 hover:underline">
                            My Best Buy Account
                        </Link>
                    </div>

                    <nav className="px-4 py-2">
                        {navItems.map((item, index) => (
                            <div key={index} className="border-t border-[#003080]">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center justify-between w-full py-3 focus:outline-none">
                                        <span>{item.name}</span>
                                        <SlArrowDown size={14} />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="bg-white text-black p-4 rounded shadow-lg w-full">
                                        {item.content}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        ))}
                    </nav>

                    <div className="px-4 py-3 border-t border-[#003080]">
                        {topLinks.map((link, index) => (
                            <Link 
                                key={index} 
                                href={link.href} 
                                className="block py-2 text-sm hover:underline"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;