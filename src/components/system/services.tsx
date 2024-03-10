"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  CompanyCarouselData,
  Services1Data,
  Services2Data,
  Services3Data,
} from "@/lib/config";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import SlideUpWhenVisible from "./animate_when_visible";
import { useState } from "react";
import Data1 from "../modals/data1";
import { getTranslation } from "@/locale/common";
import { usePathname, useSearchParams } from "next/navigation";

const Services = () => {
  const searchParams = useSearchParams();

  const currentLocale = searchParams?.get("locale") || "mn";
  return (
    <div id="services">
      <div className=" container mx-auto py-32 text-center">
        <p className="py-16 font-bold text-4xl uppercase">
          {getTranslation(currentLocale, "product")}
          <span className=" font-medium">
            {getTranslation(currentLocale, "service")}
          </span>
        </p>
        <div className="relative flex flex-col gap-10">
          <div
            className="grid md:grid-cols-2 gap-8 flex-col lg:flex-row z-10 grid-cols-1"
            id="services1"
          >
            <SlideUpWhenVisible
              className="col-span-1 z-10 hidden md:block"
              from="right"
            >
              <div className="flex-1 ">
                <Carousel
                  className=" "
                  opts={{
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
                >
                  <CarouselContent className="w-full h-full">
                    {Services1Data.map((item, index) => (
                      <CarouselItem key={`company-carousel-${index}`}>
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={1280}
                          height={1080}
                          className="rounded object-cover w-full h-full bg bg-right z-[2] "
                          priority
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2" /> */}
                </Carousel>
              </div>
            </SlideUpWhenVisible>
            <SlideUpWhenVisible
              className="col-span-1 z-10  flex justify-center items-center"
              from="left"
            >
              <div className="flex flex-col justify-center gap-2">
                <h3 className="text-3xl font-semibold uppercase mb-4 text-start">
                  {getTranslation(currentLocale, "service_1")}
                </h3>
                <p className="text-start text-lg">
                  {getTranslation(currentLocale, "service_desc")}
                </p>
              </div>
              <Data1 />
            </SlideUpWhenVisible>
          </div>
          <div
            className="grid md:grid-cols-2  flex-col lg:flex-row z-10 grid-cols-1 gap-8"
            id="services2"
          >
            <SlideUpWhenVisible
              className="col-span-1 z-10  flex justify-center items-center "
              from="left"
            >
              <div className="flex flex-col justify-center gap-2">
                <h3 className="text-3xl font-semibold uppercase mb-4 text-start">
                  {getTranslation(currentLocale, "service_2")}
                </h3>
                <p className="text-start text-lg">
                  {getTranslation(currentLocale, "service_2desc")}
                </p>
              </div>
              <Button className="text-start rounded border-cyan-500 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-[#fff] mt-4 flex items-center gap-2">
                {getTranslation(currentLocale, "detail")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </SlideUpWhenVisible>
            <SlideUpWhenVisible
              className="col-span-1 z-10 hidden md:block"
              from="right"
            >
              <div className="flex-1 ">
                <Carousel
                  className=""
                  opts={{
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
                >
                  <CarouselContent className="w-full h-full">
                    {Services2Data.map((item, index) => (
                      <CarouselItem key={`company-carousel-${index}`}>
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={1280}
                          height={1080}
                          className="rounded object-cover w-full h-full bg bg-right z-[2] "
                          priority
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2" /> */}
                </Carousel>
              </div>
            </SlideUpWhenVisible>
          </div>
          <div
            className="grid md:grid-cols-2  flex-col lg:flex-row z-10 grid-cols-1 gap-8"
            id="services3"
          >
            <SlideUpWhenVisible
              className="col-span-1 z-10 hidden md:block"
              from="right"
            >
              <div className="flex-1 ">
                <Carousel
                  className=""
                  opts={{
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
                >
                  <CarouselContent className="w-full h-full">
                    {Services3Data.map((item, index) => (
                      <CarouselItem key={`company-carousel-${index}`}>
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={1280}
                          height={1080}
                          className="rounded object-cover w-full h-[500px] bg bg-right z-[2] "
                          priority
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </SlideUpWhenVisible>
            <SlideUpWhenVisible
              className="col-span-1 z-10  flex justify-center items-center "
              from="left"
            >
              <div className="flex flex-col justify-center gap-2">
                <h3 className="text-3xl font-semibold uppercase mb-4 text-start">
                  {getTranslation(currentLocale, "service_3")}
                </h3>
                <p className="text-start text-lg">
                  {getTranslation(currentLocale, "service_3desc")}.
                </p>
              </div>
              <Button className="text-start rounded border-cyan-500 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-[#fff] mt-4 flex items-center gap-2">
                {getTranslation(currentLocale, "detail")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </SlideUpWhenVisible>
          </div>
          <Image
            className="absolute  my-auto object-cover right-[0] top-0 z-1"
            src="/images/img_pattern_black_900.png"
            alt="pattern_Three"
            height={1205}
            width={1285}
          />
        </div>
        {/* {<Data1 open={data1} onClose={closeDialog} />} */}
      </div>
    </div>
  );
};

const Item = ({
  title,
  description,
  active,
}: {
  title: string;
  description: string;
  active: boolean;
}) => {
  return (
    <div
      className={cn(
        "px-4 py-8 flex flex-col gap-4 border-l-4 text-left",
        active ? "border-l-[#435FE8]" : "border-l-gray-300"
      )}
    >
      <p className="font-bold text-xl">{title}</p>
      <p className=" text-base">{description}</p>
    </div>
  );
};

export default Services;
