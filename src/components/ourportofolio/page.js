import Image from "next/image";
import img1 from "../../assets/img/Screenshot 2022-05-06 at 10.35.png";
import img2 from "../../assets/img/Screenshot 2022-05-14 at 11.15.png";
import img3 from "../../assets/img/Screenshot 2022-05-14 at 11.17.png";
import img4 from "../../assets/img/Screenshot 2022-05-06 at 10.33.40 PM 6.26.png";
import { lato } from "@/app/font";

const OurPortofolio = () => {
  //Bagaimana caranya looping data untuk posisi yang berbeda pada desain?

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl m-auto bg-white justify-between pb-18">
        <div className=" pt-15.5 ">
          <h1 className="text-primary text-xl font-medium uppercase leading-5 pb-6 ">
            Our Portofolio
          </h1>
          <h1 className="w-4/12 text-black text-3xl font-semibold pb-18">
            We provide the Perfect Solution to your business growth
          </h1>
        </div>
        <div className="flex gap-24 text-black justify-between">
          <div className="w-561 flex flex-col gap-24">
            <div>
              <Image src={img1} className="w-561 mb-11" alt="" />
              <h1 className="text-2xl font-semibold mb-3.5">
                Digital Marketing Agency Website
              </h1>
              <p className={`w-533 text-md ${lato.className} font-normal`}>
                This is a website for a client who want to achieve their goals
                and meet their users needs while also increasing their reach.
                Accross all platforms. This is a website rebrand
              </p>
            </div>
            <div>
              <Image src={img2} className="mb-11" alt="" />
              <h1 className="text-2xl font-semibold mb-3.5">
                Digital Marketing Agency Website
              </h1>
              <p className={`w-533 text-md ${lato.className} font-normal`}>
                This is a website for a client who want to achieve their goals
                and meet their users needs while also increasing their reach.
                Accross all platforms. This is a website rebrand
              </p>
            </div>
          </div>
          <div className=" w-561 flex flex-col gap-24 ">
            <div>
              <Image src={img3} className="mb-11" alt="" />
              <h1 className="text-2xl font-semibold mb-3.5">
                Digital Marketing Agency Website
              </h1>
              <p className={`w-533 text-md ${lato.className} font-normal`}>
                This is a website for a client who want to achieve their goals
                and meet their users needs while also increasing their reach.
                Accross all platforms. This is a website rebrand
              </p>
            </div>
            <div>
              <Image src={img4} className="mb-11" alt="" />
              <h1 className="text-2xl font-semibold mb-3.5">
                Digital Marketing Agency Website
              </h1>
              <p className={`w-533 text-md ${lato.className} font-normal`}>
                This is a website for a client who want to achieve their goals
                and meet their users needs while also increasing their reach.
                Accross all platforms. This is a website rebrand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPortofolio;
