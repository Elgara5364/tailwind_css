import Navbar from "@/components/navbar/page";
import Content from "@/components/content/page";
import OurPartners from "@/components/ourpartner/page";
import WhatWeDo from "@/components/whatwedo/page";
import WhyUs from "@/components/whyus/page";
import OurPortofolio from "@/components/ourportofolio/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Content />
      <OurPartners />
      <WhatWeDo />
      <WhyUs />
      <OurPortofolio />
    </div>
  );
}
