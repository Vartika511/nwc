import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import MemberCard from "../components/membercard";
import { animate, motion } from "framer-motion";

const heroImageVarient = {
  initial: {
    x: "-100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "anticipate",
      delay: 2,
      type: "spring",
      stiffness: 120,
      duration: 2,
    },
  },
};
const heroDescContainerChildComponents = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "anticipate",
      duration: 1,
    },
  },
};

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
        <motion.div
          className="hero-image hidden lg:block"
          variants={heroImageVarient}
          initial="initial"
          animate="animate"
        >
          <Image alt="homegif" src="/home.png" width={1024} height={1024} />
        </motion.div>
        <motion.div
          className="hero-desc-container py-40 lg:py-24 flex flex-col w-screen  items-start"
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.7,
          }}
        >
          <motion.h1
            className="font-extrabold text-7xl mb-5"
            variants={heroDescContainerChildComponents}
          >
            NWC ASSOCIATION SRM KTR
          </motion.h1>
          <motion.h5
            className="font-extrabold text-xl  lg:mb-5"
            variants={heroDescContainerChildComponents}
          >
            The official student association of the Department of NWC, SRM IST
            KTR.
          </motion.h5>

          <motion.div
            className=" lg:mt-10 mx-auto lg:hidden"
            variants={heroDescContainerChildComponents}
          >
            <Image alt="homegif" src="/home.png" width={720} height={720} />
          </motion.div>
          <motion.div
            className="flex justify-center  lg:justify-start  w-full "
            variants={heroDescContainerChildComponents}
          >
            <Link href="/notice">
              <button className="bg-[#010D51] border-4 border-black font-bold mx-auto  text-xl mt-1 rounded-3xl w-44 h-12">
                Join Now!
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className=" bg-no-repeat bg-cover bg-[url('/homepae.png')] board-members lg:border-b h-fit w-full ">
        <motion.h1
          className="font-bold mb-20 text-center text-7xl"
          initial={{
            opacity: 0,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{
            ease: "anticipate",
            duration: 1,
          }}
        >
          Board Members
        </motion.h1>
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
          <div className="flex w-full justify-around flex-wrap items-center ">
            <div className="my-10 ">
              <MemberCard
                src={"/arvindg.png"}
                name={"Mr. Aravind G"}
                designation={"Vice-President"}
                desc={"CSE 4th year SRM IST"}
                knowmore={"Know more"}
              />
            </div>
            <div className="lg:my-10">
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
      </div>
      <Footer />
    </div>
  );
}
