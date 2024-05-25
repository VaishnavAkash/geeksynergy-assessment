import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import CompanyInfo from "./CompanyInfo";

const Navbar = () => {
  const router = useRouter();
  const handleSignout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    toast(
      <span className="text-purple-700 text-lg font-semibold font-montserrat">
        Logout Successful!
      </span>
    );
    router.push("/sign-in");
  };
  return (
    <div className="flex py-2 container font-montserrat items-center justify-between">
      <div className="text-lg font-semibold">Movies.</div>
      <div className="flex items-center gap-2">
        <button
          className="loginBtn hover:text-red-600 hover:bg-white border-2 border-[#752fed] hover:border-red-600 px-5 transition-all duration-300 ease-in-out"
          onClick={handleSignout}
        >
          Sign out
        </button>
        {/* <button className="text-[#752fed] hover:bg-[#752fed] hover:text-white transition-all duration-300 ease-in-out border-2 border-[#752fed] h-[46.4px] px-5">
          Company Info
        </button> */}
        <CompanyInfo />
      </div>
    </div>
  );
};

export default Navbar;
