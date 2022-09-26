import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import { useEffect, useState } from "react";


// getting the registeration notice from register api

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:3000/api/register");
  const data = await response.json();
return {
  props: {
    notice:data
  }, // will be passed to the page component as props
}
}

export default function Register({notice}) {

  console.log(notice)


  if(notice.length == 0){
    return(
  
      <div className="bg-no-repeat bg-cover bg-[url('/homepae.png')] text-white h-full w-fit lg:w-full pt-0">
       
      </div>
    );
  }


  return (
    <div className="bg-no-repeat bg-cover bg-[url('/homepae.png')] h-fit  lg:h-full xl:h-fit w-fit  lg:w-full">
      <Head>
        <title>Event Registration/NWC</title>
        <meta
          name="description"
          content="registering for upcomming events at NWC"
        />
        <link rel="icon" href="/nwc.png" />
      </Head>
      <Header />
      <div className="flex p-3 h-screen md:py-10  lg:py-20   lg:px-36 lg:my-auto ">
        <div className="bg-[#D9D9D9] md:h-fit md:my-44 lg:my-0 w-screen border-4 border-black rounded-xl p-7">
          <h1 className="text-4xl text-center">{notice.data.title}</h1>
          <div>
            <h4 className="mb-4">{notice.data.salutation}</h4>

            <p className="mb-5">
            {notice.data.para1}
            </p>

            <p>
            {notice.data.para2}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
