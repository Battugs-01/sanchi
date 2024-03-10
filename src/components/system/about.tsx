"use client";

import { getTranslation } from "@/locale/common";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import SlideUpWhenVisible from "./animate_when_visible";
import { CustomButton } from "./button";

const About = () => {
  const searchParams = useSearchParams();

  const currentLocale = searchParams?.get("locale") || "mn";
  return (
    <div className="w-full min-h-screen relative md:pt-48 pt-24" id="make">
      <div className="w-full h-full flex bg-[#F2F2F2] absolute top-0 left-0 z-0">
        <div className=" flex-1 h-full bg-gradient1 hidden lg:block" />
        <div className=" flex-1 h-full bg-transparent" />
      </div>
      <div className="container mx-auto py-24">
        <div className="grid grid-cols-5 gap-8 w-full">
          <SlideUpWhenVisible
            from="right"
            className="relative col-span-5 lg:col-span-3"
          >
            <Image
              src={"/images/Bid yu hiideg we.jpg"}
              alt="about"
              width={930}
              height={710}
              className="rounded"
            />
            <div className="absolute bottom-0 right-1/2 translate-x-1/2 bg-gradient p-2 flex gap-4 items-center w-full md:w-fit">
              <Image
                src={"/svg/transport.svg"}
                alt="about"
                width={65}
                height={60}
                className="h-[10px] md:h-auto"
              />
              <p className="text-xl md:text-2xl lg:text-4xl font-semibold ">
                10
              </p>
              <p className="text-lg font-semibold">
                {" "}
                {getTranslation(currentLocale, "company_expereince")}
              </p>
            </div>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible
            from="left"
            className="relative col-span-5 lg:col-span-2 text-[#1C1F35] flex flex-col justify-start  gap-8 md:ml-[80px]"
          >
            <div className="space-y-7">
              <h2 className="uppercase text-3xl font-semibold text-gray-900_01">
                {getTranslation(currentLocale, "company_what")}
              </h2>
              <p className="text-blue_gray-600 text-xl">
                {getTranslation(currentLocale, "company_what1")}
              </p>
            </div>
            <div className="space-y-7 mt-8  flex-col justify-center items-center ">
              <p className="uppercase text-3xl font-semibold text-gray-900_01">
                {getTranslation(currentLocale, "company_different")}
              </p>
              <div className="flex gap-3 space-x-4 pb-4">
                <CustomButton
                  className="flex h-[60px] items-center justify-center rounded-[31px] w-[60px]"
                  size="lg"
                  variant="gradient"
                  color="yellow_700_orange_100"
                >
                  <Image
                    src="/svg/img_thumbsup.svg"
                    height={20}
                    width={20}
                    alt="thumbs up"
                  />
                </CustomButton>
                <p className="text-gray-900_01 text-xl flex-1">
                  {getTranslation(currentLocale, "company_different1")}
                </p>
              </div>
              <div className="flex gap-3 space-x-4 ">
                <CustomButton
                  className="flex h-[60px] items-center justify-center rounded-[31px] w-[60px]"
                  size="lg"
                  variant="gradient"
                  color="yellow_700_orange_100"
                >
                  <Image
                    src="/svg/img_clock.svg"
                    height={20}
                    width={20}
                    alt="clock"
                  />
                </CustomButton>
                <p className="text-gray-900_01 text-xl flex-1">
                  {getTranslation(currentLocale, "company_different2")}
                </p>
              </div>
              <div className="flex gap-3 space-x-4">
                <CustomButton
                  className="flex h-[60px] items-center justify-center rounded-[31px] w-[60px]"
                  size="lg"
                  variant="gradient"
                  color="yellow_700_orange_100"
                >
                  <Image
                    src="/svg/img_globe.svg"
                    height={20}
                    width={20}
                    alt="globe"
                  />
                </CustomButton>
                <p className="text-gray-900_01 text-xl flex-1">
                  {getTranslation(currentLocale, "company_different3")}
                </p>
              </div>
            </div>
          </SlideUpWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default About;
