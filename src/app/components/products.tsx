import Image from "next/image";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

function PRODUCTS() {
  return (
    <div>
      <div>
        {/* Top deals on Apple */}
        <h1 className="text-3xl text-center mt-7 font-bold">Top deals on Apple</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 p-4">
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product1.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-64 object-cover" />
            <p>Amazing deals on select MacBooks.</p>
            <Link href="/" className="text-blue-700 flex gap-3">Shop now <span className="mt-1.5"><SlArrowRight /></span></Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product2.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-64 object-cover" />
            <p>Save up to $850 on select iPad models.</p>
            <Link href="/" className="text-blue-700 flex gap-3">Shop now <span className="mt-1.5"><SlArrowRight /></span></Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product3.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-64 object-cover" />
            <p>Get a $200 gift card on iPhone 16 with select mobile plans.*</p>
            <Link href="/" className="text-blue-700 flex gap-3">Browse iPhone<span className="mt-1.5"><SlArrowRight /></span></Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product4.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-64 object-cover" />
            <p>Save $70 on Apple Watch SE (GPS + Cellular).</p>
            <Link href="/" className="text-blue-700 flex gap-3">Shop now <span className="mt-1.5"><SlArrowRight /></span></Link>
          </div>
        </div>

        {/* Our hottest offers */}
        <h1 className="text-3xl text-center mt-7 font-bold">Our hottest offers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 p-4">
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product5.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-64 object-cover mb-3" />
            <p>Save up to 50% on select headphones and portable speakers.</p>
            <Link href="/" className="text-blue-700 flex gap-3">Shop now <span className="mt-1.5"><SlArrowRight /></span></Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product6.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-64 object-cover mb-3" />
            <p>Save up to $400 on select Segway electric scooters.</p>
            <Link href="/" className="text-blue-700 flex gap-3">Shop now <span className="mt-1.5"><SlArrowRight /></span></Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product7.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-64 object-cover mb-3" />
            <p>Save up to 30% on select small kitchen appliances.</p>
            <Link href="/" className="text-blue-700 flex gap-3">Browse iPhone<span className="mt-1.5"><SlArrowRight /></span></Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product8.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-64 object-cover mb-3" />
            <p>Save up to $150 on select air conditioners, air purifiers, and dehumidifiers.</p>
            <Link href="/" className="text-blue-700 flex gap-3">Shop now <span className="mt-1.5"><SlArrowRight /></span></Link>
          </div>
        </div>

        {/* Popular picks for summer */}
        <h1 className="text-3xl text-center mt-7 font-bold">Popular picks for summer</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10 p-6 text-center">
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product9.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3 text-center">Outdoor Living</Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product10.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3">Electric Transportation</Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product11.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3 text-center">Travel and Luggage</Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product12.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3 text-center">Cooling and Air Quality</Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product13.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3 text-center">Cameras, Camcorders, and Drones</Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product14.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3 text-center">Car Tech</Link>
          </div>
        </div>

        {/* Shop Early Summer Sale by category */}
        <h1 className="text-3xl text-center mt-7 font-bold">Shop Early Summer Sale by category</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10 p-6 text-center">
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product15.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3 text-center">TVs, Home Theatre, and Accessories</Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product16.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3">Computers and Tablets</Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product17.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3 text-center">Headphones and Portable Speakers</Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product18.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3 text-center">Computer Accessories</Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product19.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3 text-center">Wearable Technology</Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product20.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3 text-center">Cell Phones and Accessories</Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product21.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3 text-center">Major Appliances</Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product22.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3 text-center">Small Kitchen Appliances</Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product23.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3 text-center">Vacuums</Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product24.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3 text-center">Video Games, Consoles, and Accessories</Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product25.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3 text-center">PC Gaming</Link>
          </div>
          <div className="font-bold hover:underline justify-items-center">
            <Image src="/product27.PNG" alt="Apple Watch" width={400} height={400} className="rounded-lg w-full h-40 object-cover" />
            <Link href="/" className="text-blue-700 flex gap-3 text-center">Smarty Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PRODUCTS;