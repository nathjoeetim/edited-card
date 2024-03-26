import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDialog() {
  return (
    <Alert className="w-[100%] lg:w-[600px] mx-auto mt-10 bg-red-100">
      <Terminal className="h-4 w-4" />
      <AlertTitle className="font-bold">Heads up!</AlertTitle>
      <AlertDescription className="font-semibold">
        We Pay The Most Cash For Running Or Junk Cars
      </AlertDescription>
    </Alert>
  );
}
