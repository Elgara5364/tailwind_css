import Lady from "@/assets/Headerlady1.png";
import Image from "next/image";
import { poppins, lato } from "@/app/font";

const Content = () => {
  return (
    <div className=" text-gray-900 flex max-w-screen-xl m-auto pt-10 basis-1 justify-between gap-8">
      <div className="w-1/2 pt-24 mb-10">
        <h1 className={`text-6xl  ${poppins.className} font-bold mb-3`}>
          Increase Your Customers Loyalty and Satisfaction
        </h1>
        <p
          className={`w-10/12 ${lato.className} font-medium text-xl text-black`}>
          We help businesses like yours earn more customers, standout from
          competitors, make more money
        </p>
        <button className="w-100 rounded-small rounded border-lime-600 bg-green-600 text-zinc-100 mt-10 p-3 ">
          <p className=" font-medium text-xl">Get Started</p>
        </button>
      </div>
      <div className="w-1/2  overflow-hidden  ">
        <Image src={Lady} alt="" />
      </div>
    </div>
  );
};

export default Content;
