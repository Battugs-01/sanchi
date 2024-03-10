"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CompanyCardData, CompanyCarouselData } from "@/lib/config";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import SlideUpWhenVisible from "./animate_when_visible";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { getTranslation } from "@/locale/common";

const Company = () => {
  const currentPath = usePathname();
  const searchParams = useSearchParams();

  const currentLocale = searchParams?.get("locale") || "mn";

  return (
    <div id="about">
      <div className="relative container mx-auto py-32">
        <div className="flex gap-8 flex-col lg:flex-row z-10">
          <SlideUpWhenVisible className="flex-1 z-10" from="right">
            <div className="flex-1 ">
              <p className=" text-[#354AB5] text-base font-semibold mb-2">
                {getTranslation(currentLocale, "company_about")}
              </p>
              <h3 className="text-4xl font-semibold uppercase mb-4">
                {getTranslation(currentLocale, "company_intro")}
              </h3>
              <p className="text-justify text-lg">
                {getTranslation(currentLocale, "company_intro_1")}
              </p>
            </div>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible className="flex-1 z-10" from="left">
            <div className="flex-1">
              <Carousel
                className="w-full md:ml-20"
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
                  {CompanyCarouselData.map((item, index) => (
                    <CarouselItem key={`company-carousel-${index}`}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={1280}
                        height={1080}
                        className="rounded object-cover w-full h-full bg bg-right z-[2]"
                        priority
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
          </SlideUpWhenVisible>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 z-10">
          {CompanyCardData.map((card, index) => (
            <CompanyCard key={`company-card-${index}`} {...card} />
          ))}
        </div>
        <Image
          className="absolute  my-auto object-cover right-[0] top-0 z-1"
          src="/images/img_pattern_black_900.png"
          alt="pattern_Three"
          height={705}
          width={1285}
        />
      </div>
    </div>
  );
};

const CompanyCard = ({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) => {
  const searchParams = useSearchParams();

  const currentLocale = searchParams?.get("locale") || "mn";
  return (
    <div className="flex flex-col gap-8 bg-gray hover:bg-gradient1 rounded-md p-4 hover:drop-shadow-lg transition-all  hover:-translate-y-2 hover:text-white z-10">
      <div className="relative rounded-full bg-gradient w-fit p-2 aspect-square flex items-center justify-center">
        <Image src={src} alt="about" width={38} height={38} />
      </div>
      <h3 className="text-lg">{getTranslation(currentLocale, title)}</h3>
      <p className="text-lg">{getTranslation(currentLocale, description)}</p>
    </div>
  );
};

export default Company;
