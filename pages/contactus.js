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
        <title>Contact Us/NWC</title>
        <meta name="description" content="Contact us " />
        <link rel="icon" href="/nwc.png" />
      </Head>
      <Header />
      <div className="h-full my-5 w-fit  mx-auto">
        <h1 className="text-6xl sm:text-9xl lg:text-7xl mb-10">Contact Us</h1>
        <div className="form border-8 border-black rounded-xl h-fit flex flex-col lg:flex-row lg:justify-center">
          <div className="form-left  bg-[#010D51]">
            <h2 className="text-3xl sm:text-5xl mb-7 lg:text-2xl">
              Contact Information
            </h2>
            <p className="text-xl  sm:text-2xl max-w-xs h-20 mb-7">
              Fill this form and our team will get back to you within 24 hours
            </p>
            <div className="flex mb-5">
              <Image alt="phone" src="/phone.png" height="32" width="32" />
              <p className="ml-4">+23456-54876</p>
            </div>
            <div className="flex ">
              <Image alt="mail" src="/mail.png" height="32" width="32" />
              <p className="ml-4">nwc.srmist@gmail.com</p>
            </div>
            <div className=" flex  sm:w-fit  lg:justify-end mb-7">
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
          <div className="form-right flex flex-col justify-center">
            <form ref={form} onSubmit={sendMail}>
              <div className="flex flex-col mb-5">
                <label htmlFor="user_name">Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="rounded-md w-96 text-black "
                  required
                ></input>
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="user_email">Email</label>
                <input
                  type="text"
                  name="user_email"
                  className="rounded-md w-96 text-black"
                  required
                ></input>
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  name="message"
                  className="rounded-md w-96 text-black"
                  required
                />
              </div>
              <div className="flex flex-col mb-10">
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
