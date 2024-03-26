import Lottie from "lottie-react";
import logoImage from "../assets/logo.json";
import { FaPhoneAlt } from "react-icons/fa";
import { dialPhoneNumber } from "./util/call";

function NavigationBar() {
  return (
    <div className="flex flex-row gap-5 justify-between lg:px-6 lg:py-2 bg-slate-600 items-center px-3 py-1">
      <div className="flex flex-row items-center justify-start gap-0 cursor-pointer">
        <Lottie
          animationData={logoImage}
          loop={false}
          className="w-[50px] h-[50px]"
        />
        <span className=" text-sm font-semibold italic text-slate-200">
          Ari-Cars
        </span>
      </div>
      <div
        className="flex flex-row gap-2 bg-red items-center hover:cursor-pointer"
        onClick={dialPhoneNumber}
      >
        <div className="w-[40px] h-[40px] p-3 bg-violet-700 rounded-md">
          <FaPhoneAlt size={20} color="white" />
        </div>
        <span className="text-white font-semibold ">+4048900083</span>
      </div>
    </div>
  );
}

export default NavigationBar;
