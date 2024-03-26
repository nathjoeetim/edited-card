import { Terminal } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDialog() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <Alert
      className="w-[100%] lg:w-[600px] mx-auto mt-10 bg-red-100"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <Terminal className="h-4 w-4" />
      <AlertTitle className="font-bold">Heads up!</AlertTitle>
      <AlertDescription className="font-semibold">
        We Pay The Most Cash For Running Or Junk Cars
      </AlertDescription>
    </Alert>
  );
}
