import "./App.css";
import AboutUs from "./components/aboutUs";
// import { AlertDialog } from "./components/alertDialog";
import BannerComponent from "./components/banner";
import AllPurchase from "./components/carsPurchase";
import FotterComponent from "./components/fotter";
import { AccordionQuestions } from "./components/frequentlyAskedQuestions";
import ContactFormComponent from "./components/from";
import NavigationBar from "./components/navigationBar";
import Ourservices from "./components/ourService";
import WhoWeAreComponent from "./components/whoweAre";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="flex flex-col max-w-[1300px] w-full font-serif">
      <Toaster />
      <NavigationBar />
      <BannerComponent />
      {/* <AlertDialog /> */}
      <WhoWeAreComponent />
      <Ourservices />
      <AboutUs />
      <div className="flex flex-col lg:flex-row gap-5 w-full p-5">
        <ContactFormComponent />
        <div className="flex flex-col items-start justify-start gap-5 w-full">
          <div className="flex flex-col items-start sm:items-center md:items-center lg:items-start w-full pr-5">
            <span className="text-red-500 font-bold text-xs lg:text-sm font-sans mb-2 lg:mb-0">
              FREQUENTLY ASKED
            </span>
            <h2 className="text-slate-950 font-bold text-2xl lg:text-4xl">
              General Questions
            </h2>
          </div>
          <AccordionQuestions />
        </div>
      </div>
      <AllPurchase />
      <FotterComponent />
    </div>
  );
}

export default App;
