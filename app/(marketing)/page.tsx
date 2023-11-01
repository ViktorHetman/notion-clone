import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const MarketingPage = () => {
  return (
    <section className="min-h-full flex flex-col">
      <div
        className="flex flex-col items-center justify-center
      md:justify-start text-center gap-y-8 flex-1"
      >
        <Heading />
        <Hero />
      </div>
      <Footer />
    </section>
  );
};

export default MarketingPage;
