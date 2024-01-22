import Navbar from "@/components/navbar/page";
import Content from "@/components/content/page";
import OurPartners from "@/components/ourpartner/page";
import WhatWeDo from "@/components/whatwedo/page";
import WhyUs from "@/components/whyus/page";
import OurPortofolio from "@/components/ourportofolio/page";
import Testimonials from "@/components/testimonials/page";
import Subscribe from "@/components/subscribe/page";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Content />
      <OurPartners />
      <WhatWeDo />
      <WhyUs />
      <OurPortofolio />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}
