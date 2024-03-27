import { AlertDialog } from "./alertDialog";
import { Button } from "./ui/button";
import { dialPhoneNumber } from "./util/call";
import bannerImg from "../assets/bannerImg.jpg";

function BannerComponent() {
  return (
    <section className=" flex flex-row items-center max-h-[640px] py-5 md:p-10 lg:p-3 lg:h-[90vh] bg-[#FEECEB] gap-5">
      <div className="flex flex-col lg:flex-row  lg:flex-1 mx-auto">
        <div className="flex flex-col items-center lg:items-center text-center lg:text-left justify-center flex-1 px-4 lg:px-0  mx-auto">
          <h1 className="text-4xl lg:text-[50px] lg:text-left font-semibold leading-none mb-6 text-center">
            <span className="text-violet-700 font-bold text-center">Get </span>
            Rid of Your Old Car Hassle-Free
          </h1>
          <p className="mb-8 text-center items-center lg:text-left max-w-[770px] ">
            Have a car you need to part ways with? Look no further! At Ari-Cars,
            we specialize in buying used and unwanted vehicles, no matter the
            condition. From wrecked to non-running, we&apos;ll take it off your
            hands and give you a fair price in return.
            <span className="text-violet-700">
              Contact us today to get cash for your car!
            </span>
          </p>
          <Button className="bg-violet-700" onClick={dialPhoneNumber}>
            {" "}
            Call Now{" "}
          </Button>
          <AlertDialog />
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-1 items-center justify-end h-[400px] bg-slate-600 p-7 shadow-xl">
        <img
          src={bannerImg}
          alt="house banner"
          className="w-full h-[400px] shadow-2xl rounded-tl-[100px]"
        />
      </div>
    </section>
  );
}

export default BannerComponent;
