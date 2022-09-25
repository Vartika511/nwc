import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Aboutus() {
  return (
    <div className="bg-no-repeat bg-cover bg-[url('/homepae.png')] h-fit lg:h-fit ">
      <Head>
        <title>About NWC</title>
        <meta name="description" content="About NWC Club " />
        <link rel="icon" href="/nwc.png" />
      </Head>
    {<Header />}  
      <div className="py-12 w-full h-fit sm:h-screen lg:grid lg:grid-cols-3  ">
        <div className="aboutus w-screen lg:col-span-2  lg:w-full px-10 text-white">
          <h1 className="text-6xl text-left mt-6 mb-6 pb-10 font-extrabold ">About Us</h1>
          <p className="text-2xl lg:text-4xl font-bold  ">
          NWC is a student association formed exclusively for the 
          <span className=" text-[#474747] "> Specializations in Information Technology </span>,<span className=" text-[#474747] "> Internet of Things</span>, <span className=" text-[#474747] ">Computer Networking </span>, <span className=" text-[#474747] ">Cybersecurity</span>, and <span className=" text-[#474747] ">Cloud Computing </span>
          of the Computer Science Engineering branch under the umbrella of ‘<span className=" text-[#474747] ">School of Computing </span> ’.
          </p>
          <div className="flex justify-center lg:hidden">
          <Image alt="aboutus" src="/aboutus.png" width="288" height="450"/>
        </div>
        </div>
        <div className="hidden lg:block">
          <Image alt="aboutus" src="/aboutus.png" width="450" height="650"/>
        </div>
        
      </div>
      <Footer/>
   
    </div>
  );
}
