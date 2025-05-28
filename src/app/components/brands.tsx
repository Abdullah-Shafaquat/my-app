import Link from "next/link";
import { FaMeta } from "react-icons/fa6";
import { IoLogoApple } from "react-icons/io5";
import { SiLenovo, SiSamsung } from "react-icons/si";
import { SlArrowRight } from "react-icons/sl";

function brands() {
    return ( 
        <div className="bg-white">
            <h1 className="text-3xl text-center mt-7 font-bold">Explore tech from top brands</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 p-4 sm:p-6 md:p-8 lg:p-10 text-center items-center justify-items-center gap-4">
                <div>
                    <IoLogoApple size={60} className="text-gray-600 mx-auto" />
                    <span className="block text-blue-600 mt-2">Apple</span>
                </div>
                <div>
                    <SiLenovo size={60} className="text-red-600 mx-auto" />
                    <span className="block text-blue-600 mt-2">Lenovo</span>
                </div>
                <div>
                    <SiSamsung size={60} className="mx-auto" />
                    <span className="block text-blue-600 mt-2">Samsung</span>
                </div>
                <div>
                    <img src="/google.webp" alt="Google" width={60} height={60} className="mx-auto object-contain" />
                    <span className="block text-blue-600 mt-2">Google</span>
                </div>
                <div>
                    <FaMeta size={60} className="mx-auto" />
                    <span className="block text-blue-600 mt-2">Meta</span>
                </div>
                <div>
                    <img src="/breville.jfif" alt="Breville" width={60} height={60} className="mx-auto object-contain" />
                    <span className="block text-blue-600 mt-2">Breville</span>
                </div>
            </div>

            <h1 className="text-3xl text-center mt-7 font-bold">More ways to shop and save</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 sm:p-8 md:p-10 gap-4">
                <div className="hover:underline bg-gray-50 rounded-lg p-4">
                    <img src="/refurbished.PNG" alt="Refurbished" width={700} height={700} className="mx-auto object-contain mb-4" />
                    <h1 className="font-bold hover:underline">Increase your savings with refurbished tech.</h1>
                    <p>Score a deal on products that have been restored to 100% functionality.</p>
                    <Link href="/" className="text-blue-700 flex gap-3 justify-center">Shop now <span className="mt-1.5"><SlArrowRight /></span></Link>
                </div>
                <div className="hover:underline bg-gray-50 rounded-lg p-4">
                    <img src="/buybest.PNG" alt="Buy Best" width={700} height={700} className="mx-auto object-contain mb-4" />
                    <h1 className="font-bold hover:underline">Yes, Best Buy sells that.</h1>
                    <p>Explore a selection of everyday essentials that might surprise you.</p>
                    <Link href="/" className="text-blue-700 flex gap-3 justify-center">Shop now <span className="mt-1.5"><SlArrowRight /></span></Link>
                </div>
            </div>
        </div>
    );
}

export default brands;