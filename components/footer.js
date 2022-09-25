import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="footer w-full hidden  text-white bg-[#010D51] flex-col lg:block ">
        <div className="flex justify-around items-center">

        <div className="text-xl h-fit">
            <h1>Contact Us</h1>
            <h4>Email : nwcassociation@gmail.com</h4>
        </div>
        <div className="text-xl h-fit flex flex-col items-start">
            <h1>Useful Links</h1>
            <Link href="/">
            <button>Home</button>
            </Link>
            <Link href="/aboutus" >
            <button>About Us</button>
            </Link>
            <Link href="/events" >
            <button>Events</button>
            </Link>
            <Link href="/contactus" >
            <button>Contact Us</button>
            </Link>
        </div>
        <div className="text-xl h-fit">
            <h1>Follow us</h1>
            <div className="flex justify-evenly">

            <Image alt="facebook" src="/facebook.png" height="32" width="32" />
            <Image alt="instagram" src="/instagram.png" height="32" width="32" />
            </div>
        </div>
        <div className=" flex items-end text-xl">
            <div >
            <Image alt="footer" src="/footer.png" width="156" height = "190" />
            </div>
            
        </div>
     
        </div>
            <div className="border w-full h-1.5 rounded-xl bg-white">

            </div>
        <div className="text-center">
        © Copyright NWC Association SRM. All Rights Reserved
            </div>
    </div>
  );
}
