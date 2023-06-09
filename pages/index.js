import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollTotop";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Everything Foodie - South African Fast Food Restaurant</title>
        <meta
          name="description"
          content="Everything Foodie is a South African restaurant offering delicious fast food. Taste the best flavors of South Africa with quality you can trust."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Hero />
        <Footer />
        <ScrollToTopButton/>
      </div>
    </>
  );
};

export default Home;