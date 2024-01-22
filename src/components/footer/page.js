import Image from "next/image";
import Facebook from "@/assets/sosmed/Group32.png";
import Twitter from "@/assets/sosmed/Group33.png";
import Linkedin from "@/assets/sosmed/Group34.png";
import Instagram from "@/assets/sosmed/Frame20095.png";
import Link from "next/link";
import { lato } from "@/app/font";

const Footer = () => {
  const sosmed = [Facebook, Twitter, Linkedin, Instagram];
  const Qlink = ["Services", "Portfolio", "About Us", " Contact Us"];

  return (
    <div className="bg-green_third">
      <div className="max-w-screen-xl m-auto flex justify-between text-center pt-14 pb-7">
        <div className="w-1/3 flex flex-col gap-22 text-start">
          <div>
            <h1 className="font-black text-4.5 p-5">Web Logo</h1>
            <p className={`w-80 ${lato.className} font-normal mb-5`}>
              Some footer text about the Agency. Just a little description to
              help people understand you better
            </p>
            <div className="flex gap-4">
              {sosmed.map((item, index) => (
                <div key={index}>
                  <Image src={item} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div>Copyright Design Agency 2022</div>
        </div>
        <div className="w-1/3 pt-8 text-start  ps-44">
          <h1 className="mb-4 text-xl font-semibold">Quick Links</h1>
          <div className="flex flex-col gap-6">
            {Qlink.map((item, index) => (
              <div key={index}>
                <Link href={"/"}>{item}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-6 text-start pt-8 ps-36">
          <h1 className="text-xl font-semibold">Address</h1>
          <p className="w-64">
            Design Agency Head Office. Airport Road United Arab Emirate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
