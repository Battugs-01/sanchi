import HumanResources from "@/components/system/human_resources";
import { Suspense } from "react";

const HumanResourcesPage = () => {
  return (
    <div>
      <Suspense>
        <HumanResources />
      </Suspense>
    </div>
  );
};

export default HumanResourcesPage;
