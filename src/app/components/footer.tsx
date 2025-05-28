import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaXTwitter, FaYoutube, FaApple } from "react-icons/fa6";
import { FcAndroidOs } from "react-icons/fc";
import { GrAndroid } from "react-icons/gr";
import { IoLogoAndroid } from "react-icons/io5";
import Link from "next/link"
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

function Footer() {
  return (
    <footer className="bg-[#f5f7fa] border-t text-[#1a1a1a] text-sm mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold mb-3">Customer Support</h3>
          <ul className="space-y-2 ">
            <li className="hover:text-blue-600">Contact Us</li>
            <li className="hover:text-blue-600">Help Centre</li>
            <li className="hover:text-blue-600">Returns & Exchanges</li>
            <li className="hover:text-blue-600">Best Buy Gift Cards</li>
            <li className="hover:text-blue-600">About Best Buy Marketplace</li>
          </ul>
        </div>
        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-3">My Best Buy Account</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-600">Order Status</li>
            <li className="hover:text-blue-600">Manage Account</li>
            <li className="hover:text-blue-600">Preference Centre</li>
            <li className="hover:text-blue-600">Personal Information Request</li>
          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-3">Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-600">Geek Squad</li>
            <li className="hover:text-blue-600">Best Buy Membership</li>
            <li className="hover:text-blue-600">Monthly Subscription</li>
            <li className="hover:text-blue-600">Best Buy Financing</li>
            <li className="hover:text-blue-600">Trade-In Program</li>
            <li className="hover:text-blue-600">Best Buy Health</li>
          </ul>
        </div>
       
        {/* Column 4 - Newsletter & Social */}
        <div className="md:col-span-1">
          <h3 className="font-bold mb-2">Be the first to know</h3>
          <p className="mb-2 text-[13px]">Sign up to stay in the loop about the hottest deals, coolest new products, and exclusive sales events.</p>
          <Link href="#" className="text-[#0050d8] text-xs hover:underline flex gap-1">How does Best Buy use my email address? <SlArrowDown className="mt-1" /></Link>
          <form className="flex mt-3 mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-3 py-2 rounded-l border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#0050d8] text-white px-5 py-2 rounded-r font-semibold hover:bg-[#003a99] transition"
            >
              Sign Up
            </button>
          </form>
          <div className="flex space-x-5 mt-4 text-2xl text-[#1a1a1a]">
            <Link href="#" className="hover:text-blue-600"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-blue-600"><FaInstagram /></Link>
            <Link href="#" className="hover:text-blue-600"><FaLinkedinIn /></Link>
            <Link href="#" className="hover:text-blue-600"><FaPinterestP /></Link>
            <Link href="#" className="hover:text-blue-600"><FaXTwitter /></Link>
            <Link href="#" className="hover:text-blue-600"><FaYoutube /></Link>
          </div>
        </div>

         {/* Column 5 */}
       
          <div>
            <h3 className="font-bold mb-3">About Us</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-600">Careers</li>
              <li className="hover:text-blue-600">Company Information</li>
              <li className="hover:text-blue-600">In the Community</li>
              <li className="hover:text-blue-600">Newsroom</li>
              <li className="hover:text-blue-600">Our Commitment to the Environment</li>
              <li className="hover:text-blue-600">Best Buy US</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Partner With Us</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-600">Advertise with Best Buy</li>
              <li className="hover:text-blue-600">Become a Best Buy Affiliate</li>
              <li className="hover:text-blue-600">Sell on Best Buy Marketplace</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Mobile Apps</h3>
            <ul className=" space-x-4 items-center mt-2 space-y-2">
              <li className="flex items-center gap-1 hover:text-blue-600"><GrAndroid size={24} /> Android App</li>
              <li className="flex items-center gap-1 hover:text-blue-600"><FaApple size={24} /> iOS App</li>
            </ul>
          
          
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t text-xs text-gray-500 py-4 px-4 justify-between ">
        <div className="mb-2 md:mb-0 text-sm">
          © Best Buy Canada Ltd. Suite #102, 425 West 6th Avenue, Vancouver, BC V5Y 1L3
        </div> <br />
        <div className="flex flex-wrap gap-x-2 gap-y-1 justify-center">
          <Link href="#" className="hover:underline hover:text-blue-600 ">Terms & Condition</Link>|
          <Link href="#" className="hover:underline hover:text-blue-600">Conditions of Use</Link>|
          <Link href="#" className="hover:underline hover:text-blue-600">Online Policies</Link>|
          <Link href="#" className="hover:underline hover:text-blue-600">Privacy Policy</Link>|
          <Link href="#" className="hover:underline hover:text-blue-600">Cookie Policy</Link>|
          <Link href="#" className="hover:underline hover:text-blue-600">Accessibility Policy</Link>|
          <Link href="#" className="hover:underline hover:text-blue-600">Geek Squad Terms & Conditions</Link>|
          <Link href="#" className="hover:underline hover:text-blue-600">Product Recalls</Link>|
          <Link href="#" className="hover:underline hover:text-blue-600">Credits</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;               