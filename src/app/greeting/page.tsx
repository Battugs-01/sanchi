import GreetingPage from "@/components/system/greeting";
import { Suspense } from "react";

const Greeting = () => {
  return (
    <div>
      <Suspense>
        <GreetingPage />
      </Suspense>
    </div>
  );
};

export default Greeting;
