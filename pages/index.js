import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import MemberCard from "../components/membercard";

export default function Home() {
  return (
    <div className="bg-no-repeat bg-cover bg-[url('/homepae.png')] text-white h-full w-fit lg:w-full pt-0">
      <Head>
        <title>NWC</title>
        <meta name="description" content="NWC department " />
        <link rel="icon" href="/nwc.png" />
      </Head>
       <Header /> 
      <div className="  flex py-2 px-36 h-fit xl:py-24 ">
        <div className="hidden lg:block">
          <Image alt="homegif" src="/home.png" width={1024} height={1024} />
        </div>
        <div className="py-40 lg:py-24 flex flex-col w-screen  items-start">
          <h1 className="font-extrabold text-7xl mb-5">NWC ASSOCIATION SRM KTR</h1>
          <h5 className="font-extrabold text-xl  lg:mb-5">
            The official student association of the Department of NWC, SRM IST
            KTR.
          </h5>
          
          <div className=" lg:mt-10 mx-auto lg:hidden">
            <Image alt="homegif" src="/home.png" width={720} height={720} />
          </div>
          <div className="justify-start ml=0px ">
            <Link href="/notice">
           <button className="bg-[#010D51] font-bold mx-auto  text-xl mt-1 rounded-3xl w-44 h-12">Join Now!</button>
            </Link>

          </div>
        </div>
      </div>
      <div className=" bg-no-repeat bg-cover bg-[url('/homepae.png')] board-members lg:border-b h-fit w-full ">
        <h1 className="font-bold mb-20 text-center text-7xl">Board Members</h1>
        <div className="flex flex-col justify-around items-center">
          <div className="md:mb-0 flex justify-center  flex-wrap">
            <MemberCard
              src={"/safamaam.jpeg"}
              name={"Ms. M. Safa"}
              designation={"President"}
              desc={"Assistant Professor NWC SRM IST"}
              knowmore={"Know more"}
            />
          </div>
          <div className="flex w-full justify-around flex-wrap items-center">
            <MemberCard
              src={"/arvindg.png"}
              name={"Mr. Aravind G"}
              designation={"Vice-President"}
              desc={"CSE 4th year SRM IST"}
              knowmore={"Know more"}
            />
            <MemberCard
              src={"/amrit.png"}
              name={"Mr. Armit Anand"}
              designation={"Joint-Secretary"}
              desc={"CSE 3rd year SRM IST"}
              knowmore={"Know more"}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
