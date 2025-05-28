import Image from "next/image";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

function LatestProduct() {
    return ( 
        <div className="bg-radial-[at_50%_75%] from-[#0074e8] to-[#0A2647] to-90%">
            <div className="mt-14 text-white text-center items-center">
                <h1 className="text-3xl font-bold mb-4 pt-10">Latest and Greatest Tech</h1>
                <p className="font-bold mb-4">The newest releases, all in one place. </p>
                <p className="flex items-center gap-1 text-center justify-center focus:outline-none whitespace-nowrap hover:underline">
                    Explore all new tech. <SlArrowRight />
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white mt-6 px-4 md:px-8">
                <div className="rounded-lg shadow-lg p-4 hover:underline bg-opacity-80">
                    <Image src="/latest1.PNG" alt="Latest Product 3" height={200} width={400} className="object-cover rounded-t-lg w-full h-40 sm:h-48" />
                    <h2 className="font-bold mt-2">New GeForce RTX 5060 series, powered by Blackwell and AI. Game Changer.</h2>
                    <Link href="/" className="flex gap-3 font-bold">Shop now <span className="mt-1.5"><SlArrowRight /></span></Link>
                </div>
                <div className="rounded-lg shadow-lg p-4 hover:underline bg-opacity-80">
                    <Image src="/latest3.PNG" alt="Latest Product 1" height={200} width={400} className="object-cover rounded-t-lg w-full h-40 sm:h-48" />
                    <h2 className="font-bold mt-2">GARMIN FORERUNNER® 970 | 570.</h2>
                    <p>Garmin's brightest GPS running smartwatches with advanced training and recovery features.</p>
                    <Link href="/" className="flex gap-3 font-bold">Shop now <span className="mt-1.5"><SlArrowRight /></span></Link>
                </div>
                <div className="rounded-lg shadow-lg p-4 hover:underline bg-opacity-80">
                    <Image src="/latest2.PNG" alt="Latest Product 2" height={200} width={400} className="object-cover rounded-t-lg w-full h-40 sm:h-48" />
                    <h2 className="font-bold mt-2">Sony WH-1000XM6.</h2>
                    <p>Premium studio-quality sound and the best noise cancellation.</p>
                    <Link href="/" className="flex gap-3 font-bold">Shop now <span className="mt-1.5"><SlArrowRight /></span></Link>
                </div>
                <div className="rounded-lg shadow-lg p-4 hover:underline bg-opacity-80">
                    <Image src="/latest4.PNG" alt="Latest Product 4" height={200} width={400} className="object-cover rounded-t-lg w-full h-40 sm:h-48" />
                    <h2 className="font-bold mt-2">Meet the new Surface Copilot+ PCs.</h2>
                    <p>Incredible speed and battery life with signature Surface design.</p>
                    <Link href="/" className="flex gap-3 font-bold">Pre-Order Now <span className="mt-1.5"><SlArrowRight /></span></Link>
                </div>
            </div>
        </div>
    );
}

export default LatestProduct;