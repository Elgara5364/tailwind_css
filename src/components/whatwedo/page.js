import Activity from "../../assets/Activity.png";
import Heart from "../../assets/Heart.png";
import Work from "../../assets/Work.png";
import Image from "next/image";
import RightArrow from "../../assets/Vector.png";
import Link from "next/link";

const WhatWeDo = () => {
  const data = [
    {
      icon: Activity,
      benefit: "Grow Your Business",
      description: "We help identify the best ways to improve your business",
    },

    {
      icon: Heart,
      benefit: "Improve brand loyalty",
      description: "We help identify the best ways to improve your business",
    },

    {
      icon: Work,
      benefit: "Improve Business Model",
      description: "We help identify the best ways to improve your business",
    },
  ];

  // console.log(data[0].icon);

  return (
    <div className="bg-white px-105 flex flex-col gap-10 ">
      <div className="w-128 flex flex-col gap-4 pt-16">
        <h1 className="text-primary text-xl font-medium uppercase leading-5">
          What we do
        </h1>
        <h1 className="text-black text-3xl font-semibold ">
          We provide the Perfect Solution to your business growth
        </h1>
      </div>
      <div className="flex gap-11">
        {data.map((item, index) => (
          <div className="px-30 py-50 w-1/3 flex flex-col gap-11 ">
            <div key={index} className="flex flex-col gap-4 ">
              <Image src={item.icon} />
              <h1 className=" text-black text-2xl font-semibold">
                {item.benefit}
              </h1>
              <p className="w-72 text-black text-lg font-normal">
                {item.description}
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <Link href={"/"} className="text-black">
                Learn More
              </Link>
              <Link href={"/"}>
                <Image src={RightArrow} className="h-4/6 " />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
