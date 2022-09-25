import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="font-bold bg-no-repeat bg-cover bg-[url('/navbar2.png')] navbar flex justify-between lg:justify-evenly lg:items-center">
      <div className="logo pt-5 pb-1">
        <Image alt="nwc" src="/nwc.png" width={95} height={90} />
      </div>
      {/* showing hamburger menu for mobiles and tabets */}
      <div className="hamburger  mr-5 flex items-center lg:hidden">
        <>
          {showSidebar ? (
            <button
              className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              x
            </button>
          ) : (
            <svg
              onClick={() => setShowSidebar(!showSidebar)}
              className="z-30 flex items-center cursor-pointer right-10 top-6"
              fill="#ffffff"
              viewBox="0 0 100 80"
              width="40"
              height="40"
            >
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          )}

          <div
            className={`top-0 right-0 w-full bg-blue-600  p-10  text-white fixed h-full z-40  ease-in-out duration-300 ${
              showSidebar ? "translate-x-0 " : "translate-x-full"
            }`}
          >
            <div className="w-max mx-auto mt-10 h-96 flex flex-col items-start justify-around text-5xl sm:text-6xl">
              <Link href="/">
                <button>
                  <h3>Home</h3>
                </button>
              </Link>
              <Link href="/aboutus">
                <button>
                  <h3>About Us</h3>
                </button>
              </Link>
              <Link href="/events">
                <button>
                  <h3 className="">Events</h3>
                </button>
              </Link>
              <Link href="/contactus">
                <button>
                  <h3>Contact Us</h3>
                </button>
              </Link>
            </div>
          </div>
        </>
      </div>
      <div className=" hidden w-full lg:block lg:flex  text-white text-3xl lg:justify-evenly lg:items-center">
        <Link href="/">
          <button>
            <h3>Home</h3>
          </button>
        </Link>
        <Link href="/aboutus">
          <button>
            <h3>About Us</h3>
          </button>
        </Link>
        <Link href="/events">
          <button>
            <h3 className="">Events</h3>
          </button>
        </Link>
        <Link href="/contactus">
          <button>
            <h3>Contact Us</h3>
          </button>
        </Link>
      </div>
    </div>
  );
}
