import Image from "next/image";
import Timeline from "../../assets/timeline 1.png";
import ProjectPlan from "../../assets/project-plan.png";
import Rating from "../../assets/rating (1).png";
import Raise from "../../assets/raise.png";

const WhyUs = () => {
  const datas = [
    {
      icon: ProjectPlan,
      description: "Completed Project",
      symbol: "100 +",
    },
    {
      icon: Rating,
      description: "Customer Satisfaction",
      symbol: "99%",
    },
    {
      icon: Raise,
      description: "Raised by Clients",
      symbol: "$10M",
    },
    {
      icon: Timeline,
      description: "Years in Business",
      symbol: "2 yrs",
    },
  ];

  return (
    <div className="bg-green_secondary py-20">
      <div className="max-w-screen-lg m-auto">
        <div className="flex ">
          {datas.map((item, index) => (
            <div key={index} className="flex flex-col gap-2.5 p-10">
              <Image src={item.icon} className="m-auto" alt="" />
              <h3 className="mb-1 text-black font-medium text-base text-center">
                {item.description}
              </h3>
              <h1 className="text-primary text-4.5 text-center font-bold ">
                {item.symbol}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
