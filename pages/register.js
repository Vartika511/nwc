import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Register() {
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
          <h1 className="text-4xl text-center">REGISTER FOR EVENT</h1>
          <div>
            <h4 className="mb-4">Dear Students,</h4>

            <p className="mb-5">
              NWC Association along with IoT Alliance - An AICTE SPICES funded
              clubT is planning to conduct a series of technical as well as non
              technical events starting from 20th of September, 2022 and the
              applications are open for all the students of SRMIST, Chennai who
              want to compete in the events. The events include technical
              writing contest, e-Sports, Website Creation, Photography and
              Reels/short video making contest, poster presentation and
              prototyping and many more. The best performers will be awarded
              with some exciting prizes. The interested students and research
              scholars are requested to fill the form(Link & QR Code in brochure
              attached).
            </p>

            <p>
              For any queries, feel free to contact us via mail on
              nwc.srmist@gmail.com or on our Instagram handle @nwcsrmist.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
