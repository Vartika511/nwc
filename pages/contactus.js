import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();
  const sendMail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        `${process.env.NEXT_PUBLIC_EMAILJS_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          event.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg-no-repeat bg-cover bg-[url('/homepae.png')] flex flex-col justify-around h-full w-max xs:w-full md:h-screen lg:h-fit sm:w-screen    text-white ">
      <Head>
        <title >Contact Us/NWC</title>
        <meta name="description" content="Contact us " />
        <link rel="icon" href="/nwc.png" />
      </Head>
      <Header />
      <div className="mb-30 h-full my-5 w-fit  mx-auto">
      <div>
        <h1 className="flex justify-center font-extrabold text-xl sm:text-7xl lg:text-5xl mb-10">  Contact Us</h1>
        </div>
        <div className="form ml-5  h-fit flex flex-col lg:flex-row lg:justify-center">
          <div className="border-y-4 border-l-4 border-black  rounded-3xl rounded-r-none  form-left bg-[#1B2A76]">
            <h2 className=" ml-10 mt-4 font-bold text-3xl sm:text-5xl mb-7 lg:text-2xl">
              Contact Information
            </h2>
            <p className="  mr-6 ml-10 font-medium text-xs  sm:text-xl max-w-xs h-20 mb-7">
              Fill this form and our team will get back to you within 24 hours
            </p>
            <div className="ml-10 flex mb-5">
              <Image alt="phone" src="/PhoneOutline.png" height="32" width="32" />
              <p className="ml-4">+23456-54876</p>
            </div>
            <div className="ml-10 flex ">
              <Image alt="mail" src="/MailOutline.png" height="32" width="32" />
              <p className="ml-4">nwc.srmist@gmail.com</p>
            </div>
            <div className="ml-10 flex  sm:w-fit  lg:justify-right mb-0">
              <div className="lg:hidden">
                <Image
                  alt="contactpage"
                  src="/contactpage.png"
                  width="250"
                  height="200"
                />
              </div>
              <div className="hidden lg:block">
                <Image
                  alt="contactpage"
                  src="/contactpage.png"
                  width="102"
                  height="93"
                />
              </div>
            </div>
          </div>
          <div className="border-y-4 border-r-4 border-black  rounded-3xl rounded-l-none  text-black bg-[#B8C2FF] form-right flex flex-col justify-center">
            <form ref={form} onSubmit={sendMail}>
              <div className="ml-5 mr-5 text-black flex flex-col mb-5">
                <label htmlFor="user_name">Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="rounded-md w-96 text-black "
                  required
                ></input>
              </div>
              <div className="ml-5 mr-5 flex flex-col mb-5">
                <label htmlFor="user_email">Email</label>
                <input
                  type="text"
                  name="user_email"
                  className="rounded-md w-96 text-black"
                  required
                ></input>
              </div>
              <div className="ml-5 mr-5 flex flex-col mb-5">
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  name="message"
                  className="rounded-md w-96 text-black"
                  required
                />
              </div>
              <div className=" text-white flex flex-col mb-10">
                <button
                  type="submit"
                  className="bg-[#010D51] border-4 border-black font-bold mx-auto  text-xl mt-1 rounded-3xl w-44 h-12"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
