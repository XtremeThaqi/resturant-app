import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Food from "./components/Food";
import About from "./components/About";
import Open from './components/Open'
import Testemonials from "./components/Testemonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Welcome to our homepage" />
      </Head>
      <div className="m-0 p-0 bg-black">
        <Navbar />
        <Hero />
        <Food />
        <About />
        <Open />
        <Testemonials />
        <Contact />
        <Footer/>
      </div>
    </>
  );
}
