import Link from "next/link";
import Logo from "../../assets/DesignAGENCY.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-between items-center text-zinc-950 py-5">
      <div>
        <Image src={Logo} className="" />
      </div>
      <div className="flex gap-10 items-center font-semibold">
        <Link href={"/services"}>Services</Link>
        <Link href={"/aboutus"}>About Us</Link>
        <Link href={"/contactus"}>Contact Us</Link>
        {/* <Link href={"/services"}>Services</Link> */}
        <div className="flex gap-10">
          <button className="w-24  rounded-xl border-2 border-lime-600  py-2">
            Login
          </button>
          <button className="w-24 rounded-xl border-2  border-lime-600  bg-green-600 text-zinc-100">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
