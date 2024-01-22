import Link from "next/link";
import Logo from "../../assets/DesignAGENCY.png";
import Image from "next/image";
import DownArrow from "../../assets/ep_arrow-right-bold.png";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-between items-center text-zinc-950 py-5">
      <div>
        <Image src={Logo} alt="" />
      </div>
      <div className="flex gap-7 items-center font-medium">
        <div className="flex gap-2.5 items-center">
          <Link href={"/services"}>Services</Link>
          <Link href={"/"}>
            <Image
              src={DownArrow}
              className="cursor-pointer w-full h-full"
              alt=""
            />
          </Link>
        </div>
        <Link href={"/aboutus"}>About Us</Link>
        <Link href={"/contactus"}>Contact Us</Link>
        {/* <Link href={"/services"}>Services</Link> */}
        <div className="flex gap-7">
          <button className="w-24 border-1 rounded-small border-green-600 rounded-xl py-2">
            Login
          </button>
          <button className="w-24 bg-green-600 rounded-small text-white">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
