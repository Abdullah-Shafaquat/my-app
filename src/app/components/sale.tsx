import { CarouselSpacing } from "./CarouselSpacing";

function Sale() {

    return ( 
        <div>
            <div className="bg-gradient-to-r from-[#0050d8] to-[#0074e8] grid grid-cols-1 lg:grid-cols-[30%_70%] mt-12 rounded-lg overflow-hidden">
                <div className="mt-7 font-bold text-white p-7 flex flex-col items-start justify-center">
                    <p className="text-3xl sm:text-4xl">Early Summer <span className="text-yellow-500">Sale</span></p>
                    <p className="text-xl sm:text-2xl mt-2">Get ready for summer with hot savings on the coolest tech.</p>
                    <button className="mt-6 px-8 py-3 bg-white text-blue-700 font-semibold rounded shadow hover:bg-gray-100 text-sm transition mb-4">
                        Shop Now
                    </button>
                </div>
                <div className="w-full">
                    <CarouselSpacing/>
                </div>
            </div>
        </div>
    );
}

export default Sale;