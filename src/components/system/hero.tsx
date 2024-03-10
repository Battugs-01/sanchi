"use client";

import { Button } from "@/components/ui/button";
import { getTranslation } from "@/locale/common";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { Line } from "./Line";
import SlideUpWhenVisible from "./animate_when_visible";

const Hero = () => {
  const searchParams = useSearchParams();

  const currentLocale = searchParams?.get("locale") || "mn";
  const handleClick = async () => {
    const response = await fetch("/api/file");

    if (response.status !== 200) {
      console.error(response.status, response.statusText);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Taniltsuulga.pdf";
    link.click();
  };

  return (
    <div className="w-full h-screen relative z-10 overflow-visible">
      <Image
        src={"/images/hero_edited.png"}
        alt="hero"
        width={1920}
        height={1080}
        className=" object-cover overflow-visible w-full h-full bg bg-right z-[2]"
        priority
        placeholder="blur"
        blurDataURL="/images/hero_blurred.webp"
      />
      <div className="w-full h-full absolute xl:top-20 xl:right-20 top-5 right-5 z-[10] flex items-center justify-center">
        <div className="z-10 container mx-auto flex justify-start">
          <div className=" rounded-lg backdrop-blur-md bg-black/20 border-gray-500 border flex flex-col gap-4 p-10 text-white w-[100%] md:w-[70%] lg:w-[50%]">
            <div className="flex flex-row items-center justify-start w-[24%] md:w-full">
              <Line className="bg-gradient  h-[23px] w-1" />
              <SlideUpWhenVisible from="top">
                <div className="ml-2">Ти Ай Ложистик</div>
              </SlideUpWhenVisible>
            </div>
            <h1 className="font-bold text-4xl md:text-6xl animate-typing overflow-hidden border-r-4 border-r-white">
              {getTranslation(currentLocale, "hero_title")}
              <span className=" text-red-600 ml-1">
                {getTranslation(currentLocale, "hero_title1")}
              </span>
            </h1>
            <SlideUpWhenVisible from="top">
              <div className="text-justify">
                <p className="text-lg">
                  {getTranslation(currentLocale, "hero_description")}
                </p>
              </div>
            </SlideUpWhenVisible>
            <SlideUpWhenVisible from="top">
              <div className="flex gap-5">
                <Button
                  className="relative bg-gradient text-black w-fit hover:bg-default font-semibold text-md hover:scale-105 transition-transform hover:shadow z-50 overflow-hidden hover:transition-all duration-500 ease-in-out"
                  size={"lg"}
                  onClick={handleClick}
                >
                  {getTranslation(currentLocale, "hero_download")}
                  {/* <div className="absolute -bottom-7 -right-8 bg-[#fff] h-[50px] rotate-[-108deg] rounded-full w-[38%] z-0"></div> */}
                </Button>
                <Button
                  className="relative bg-gradient text-black w-fit hover:bg-default font-semibold text-md hover:scale-105 transition-transform hover:shadow z-50 overflow-hidden hover:transition-all duration-500 ease-in-out"
                  size={"lg"}
                  onClick={handleClick}
                >
                  {getTranslation(currentLocale, "hero_traffic_info")}
                </Button>
              </div>
            </SlideUpWhenVisible>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
