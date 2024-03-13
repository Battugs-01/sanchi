import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSearchParams } from "next/navigation";
import SlideUpWhenVisible from "../system/animate_when_visible";
import { getTranslation } from "@/locale/common";
const Data3 = () => {
  const searchParams = useSearchParams();

  const currentLocale = searchParams?.get("locale") || "mn";
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-start rounded border-cyan-500 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-[#fff] mt-4 flex items-center gap-2">
          {getTranslation(currentLocale, "detail")}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="w-[1000px] pt-16 pb-10 px-10 overflow-y-auto max-w-[800px]"
        style={{ maxHeight: "800px" }}
      >
        <DialogHeader>
          <DialogTitle className="">
            <h3 className="text-start text-3xl  font-semibold uppercase">
              {getTranslation(currentLocale, "services_3")}
            </h3>
          </DialogTitle>
        </DialogHeader>
        <p className="text-start text-lg">
          {getTranslation(currentLocale, "service_3desc")}
        </p>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="default"
              className="text-start rounded border-cyan-500 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-[#fff] mt-4 flex items-center"
            >
              Хаах
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default Data3;
