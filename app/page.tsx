import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Industries from "./components/Industries/Industries";
import FAQs from "./components/FAQs/FAQs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Industries />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
