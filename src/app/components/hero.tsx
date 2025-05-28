import Image from "next/image";

function Hero() {
    return ( 
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                {/* Main Hero Banner */}
                <div className="col-span-1">
                    <div className="bg-gradient-to-b from-blue-700 to-blue-500 flex flex-col justify-between p-4 md:p-8 rounded-lg h-full">
                        <div className="flex items-center justify-center">
                            <Image 
                                src="/hero1.webp" 
                                alt="Scooter" 
                                height={500} 
                                width={500} 
                                className="w-full h-auto max-w-md"
                            />
                        </div>
                        <div className="mt-4 md:mt-8 text-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                Early Summer <span className="text-yellow-400">Sale</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white mt-2">Cool gadgets. Hot prices.</p>
                            <button className="mt-4 md:mt-6 px-6 py-2 md:px-8 md:py-3 bg-white text-blue-700 font-semibold rounded shadow hover:bg-gray-100 transition">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Right Side Grid */}
                <div className="col-span-1">
                    <div className="bg-gray-100 rounded-lg p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 h-full">
                        {/* Samsung Promotion */}
                        <div className="sm:col-span-2 bg-white p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center">
                            <div className="mb-4 sm:mb-0 sm:mr-4">
                                <h2 className="text-xl md:text-2xl font-bold mb-2">SAMSUNG</h2>
                                <p className="font-semibold mb-2 text-sm md:text-base">
                                    Get 512GB for the price of 256GB on unlocked phones.<sup>1</sup>
                                </p>
                                <p className="text-xs md:text-sm text-gray-600 mb-4">
                                    Plus, up to $805 in combined trade-in value and bonus discounts when you trade in an eligible phone.<sup>2</sup>
                                </p>
                                <button className="bg-blue-700 text-white px-3 py-1 md:px-4 md:py-2 rounded font-semibold hover:bg-blue-800 transition text-sm">
                                    Pre-Order Now
                                </button>
                            </div>
                            <div className="w-full sm:w-auto">
                                <Image 
                                    src="/hero2.webp" 
                                    alt="Galaxy S25 Edge" 
                                    height={250} 
                                    width={250} 
                                    className="rounded-lg w-full max-w-xs mx-auto"
                                />
                            </div>
                        </div>
                        
                        {/* Laptop Promotion */}
                        <div className="bg-gradient-to-b from-blue-700 to-blue-500 text-center p-4 rounded-lg flex flex-col justify-between">
                            <div>
                                <Image 
                                    src="/hero3.webp" 
                                    alt="Laptop" 
                                    height={300} 
                                    width={300} 
                                    className="rounded-lg w-full max-w-xs mx-auto"
                                />
                                <p className="text-xs md:text-sm text-white text-center font-serif mt-2">
                                    Save up to $200 on select laptops.
                                </p>
                            </div>
                            <button className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-white text-blue-700 font-semibold rounded shadow hover:bg-gray-100 transition text-xs md:text-sm">
                                Shop Now
                            </button>
                        </div>
                        
                        {/* TV Promotion */}
                        <div className="bg-gradient-to-b from-blue-700 to-blue-500 text-center p-4 rounded-lg flex flex-col justify-between">
                            <div>
                                <Image 
                                    src="/hero4.webp" 
                                    alt="Smart TV" 
                                    height={300} 
                                    width={300} 
                                    className="rounded-lg w-full max-w-xs mx-auto"
                                />
                                <p className="text-xs md:text-sm text-white text-center font-serif mt-2">
                                    Save up to $400 on select smart TVs.
                                </p>
                            </div>
                            <button className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-white text-blue-700 font-semibold rounded shadow hover:bg-gray-100 transition text-xs md:text-sm">
                                Shop Now
                            </button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Hero;