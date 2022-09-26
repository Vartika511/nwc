import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";
// getting the joining notice from notice api
export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:3000/api/notice");
  const data = await response.json();
return {
  props: {
    notice:data
  }, // will be passed to the page component as props
}
}

export default function Notice({notice}) {

console.log(notice)


if(notice.length == 0){
  return(

    <div className="bg-no-repeat bg-cover bg-[url('/homepae.png')] text-white h-full w-fit lg:w-full pt-0">
     
    </div>
  );
}


  return (
    <div className=" bg-no-repeat bg-cover bg-[url('/homepae.png')]  h-max xs:h-full lg:h-screen w-fit  lg:w-full ">
      <Head>
        <title>Notice Board/NWC</title>
        <meta
          name="description"
          content="details for domains to join in NWC department"
        />
        <link rel="icon" href="/nwc.png" />
      </Head>
      <Header />
      <div className="flex p-3  h-max xs:h-screen lg:h-screen md:py-10 lg:py-0 lg:mt-20 lg:px-36  ">
        <div className="bg-[#D9D9D9] h-max w-screen border-4 border-black rounded-xl p-7 md:h-fit md:my-44 lg:my-0  ">
          <h1 className="font-bold text-4xl text-center">N<span className="text-red-500">O</span>TI<span className="text-red-500">C</span>E  BO<span className="text-red-500">A</span>RD</h1>
          <div>
            <h4 className="mb-4">{notice.data.heading}</h4>
            <h4>{notice.data.beforePara}</h4>
            <p className="mb-5">
            {notice.data.para}
            </p>
            <h4>{notice.data.afterPara}</h4>
            <ul className="list-disc mb-5">
            {  notice.data.domains.map((domain)=>{return <li key={domain.domain}>{domain.domain}</li>
        })} 
             
            </ul>
            <p>
            {notice.data.eligibility}
            </p>
            <Link href={notice.data.registerSrc}>
              <button className="bg-blue-800 rounded-2xl text-white drop-shadow-xl mb-5 w-44">
                Click here to register
              </button>
            </Link>
            <p>
            {notice.data.regards}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
