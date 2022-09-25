import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Notice() {
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
            <h4 className="mb-4">NWC Association SRMIST 22-23 Recruitments</h4>
            <h4>Our Vision:</h4>
            <p className="mb-5">
              NWC aims to develop virtuous students with a diverse approach that
              would showcase their holistic development. The department&apos;s
              research focuses on developing new and creative ideas that
              manifest students’ zeal to achieve higher in life. Using technical
              methodologies, the organization concentrates on providing insights
              into the future scope of development or improving the pre-existing
              ones.
            </p>
            <h4>We’re currently recruiting for the following domains :</h4>
            <ul className="list-disc mb-5">
              <li>Technical</li>
              <li>Non-Technical</li>
              <li>Publicity and Marketing</li>
              <li>Finance and Sponsorship</li>
              <li>Design and Media</li>
              <li>Creative</li>
            </ul>
            <p>
              Students from 1st -2nd years are eligible to apply for the same.
            </p>
            <Link href="https://forms.gle/eoLh9RxXPfRt7xM46">
              <button className="bg-blue-800 rounded-2xl text-white drop-shadow-xl mb-5 w-44">
                Click here to register
              </button>
            </Link>
            <p>
              <span className="block">Regards,</span>Networking and
              Communications Association
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
