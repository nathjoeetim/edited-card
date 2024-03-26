import { AlertDialog } from "./alertDialog";
import { Button } from "./ui/button";

function BannerComponent() {
  return (
    <section className=" max-h-[640px] py-5 md:p-10 lg:p-24 lg:h-[90vh] bg-[#FEECEB]">
      <div className="flex flex-col lg:flex-row w-[95%] mx-auto">
        <div className="flex flex-col items-center lg:items-center text-center lg:text-left justify-center flex-1 px-4 lg:px-0  mx-auto">
          <h1 className="text-4xl lg:text-[50px] font-semibold leading-none mb-6 text-center">
            <span className="text-violet-700 font-bold text-center">Get </span>
            Rid of Your Old Car Hassle-Free
          </h1>
          <p className="mb-8 text-center items-center max-w-[770px] ">
            Have a car you need to part ways with? Look no further! At Ari-Cars,
            we specialize in buying used and unwanted vehicles, no matter the
            condition. From wrecked to non-running, we&apos;ll take it off your
            hands and give you a fair price in return.
            <span className="text-violet-700">
              Contact us today to get cash for your car!
            </span>
          </p>
          <Button className="bg-violet-700"> Call Now </Button>
          <AlertDialog />
        </div>
        {/* <div className="hidden flex-1 lg:flex justify-end items-end">
          <Image
            src={houseBanner}
            height={90}
            width={250}
            alt="house banner"
            className="w-full"
          />
        </div> */}
      </div>
    </section>
  );
}

export default BannerComponent;
