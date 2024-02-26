"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  CompanyCardData,
  CompanyCarouselData,
  HumanResourcesData,
} from "@/lib/config";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import SlideUpWhenVisible from "./animate_when_visible";
import { Button } from "../ui/button";
import { CustomButton } from "./button";

const HumanResources = () => {
  return (
    <div className="bg-[#F9FAFB]" id="humanresources">
      <div className="relative container mx-auto py-28 text-center  ">
        <p className="font-bold text-4xl uppercase">
          ХҮНИЙ НӨӨЦИЙН <span className=" font-medium">БОДЛОГО</span>
        </p>
        <p className="font-medium text-xl text-[#475467] my-10">
          Манай компаний хамгийн гол үнэт зүйл бол нарийн мэргэжлийн өндөр
          боловсрол, ур чадвартай ажиллах хүч болох хүний нөөц мөн. Бид хүний
          нөөцийн бодлогоороо компанийн эрхэм зорилго, алсын хараа, үйл
          ажиллагааны стратеги төлөвлөгөөг хэрэгжүүлэх удирдлагын манлайллаар
          хангаж, мэргэжлийн өндөр түвшинд хэрэгжүүлэх чадавхтай
        </p>
        <div className="grid grid-cols-2 gap-8 flex-col z-10 w-full">
          <SlideUpWhenVisible
            from="left"
            className="col-span-2 md:col-span-1 text-[#1C1F35] flex flex-col justify-start gap-8"
          >
            <div className="space-y-7">
              {HumanResourcesData.map((item, index) => (
                <div
                  key={`human-resources-card-${index}`}
                  className="flex gap-3 space-x-4 items-center justify-start"
                >
                  <CustomButton
                    className="flex h-[60px] items-center justify-center rounded-[31px] min-w-[60px] w-[60px]"
                    size="lg"
                    variant="gradient"
                    color="yellow_700_orange_100"
                  >
                    <Image
                      src="/svg/check.svg"
                      height={20}
                      width={20}
                      alt="check"
                    />
                  </CustomButton>
                  <p className="text-[#1D2939] text-base  text-start">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible className="flex z-10" from="right">
            <div className="flex-1 hidden md:block">
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
                        height={1280}
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
        <SlideUpWhenVisible from="top">
          <div className="flex flex-col items-start justify-start max-w-7xl sm:px-5 px-8 w-full">
            <div className="bg-gray-100 flex flex-col gap-8 items-center justify-center p-8 sm:px-5 rounded-[16px] w-full mt-20">
              <div className="h-14 relative w-[11%] md:block hidden">
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="flex flex-row gap-6 items-center justify-between w-full">
                    <Image
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="/images/img_avatar.png"
                      alt="avatar"
                      width={48}
                      height={48}
                    />
                    <Image
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="/images/img_avatar_48x48.png"
                      alt="avatar_One"
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
                <Image
                  className="absolute h-14 inset-[0] m-auto rounded-[50%] w-14"
                  src="/images/img_avatar_56x56.png"
                  alt="avatar_Two"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col gap-2 items-center justify-start max-w-3xl w-full">
                <p className="text-center text-gray-900_02 text-xl w-full">
                  Нээлттэй ажлын байр
                </p>
                <p className="leading-[28.00px] max-w-3xl md:max-w-full text-blue_gray-700 text-center text-lg">
                  Та нээлттэй ажлын байранд тавигдах шаардлагыг хангаж байна гэж
                  үзвэл онлайн анкетаа office@til.mn хаягт хандан илгээнэ үү.
                </p>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Button className="border border-indigo-A400 border-solid cursor-pointer font-semibold min-w-[136px] rounded-lg text-base text-center">
                  Анкет татах
                </Button>
              </div>
            </div>
          </div>
        </SlideUpWhenVisible>
        <Image
          className="absolute  my-auto object-cover right-[0] top-[160px] z-1"
          src="/images/img_pattern_black_900.png"
          alt="pattern_Three"
          height={705}
          width={1285}
        />
      </div>
    </div>
  );
};

export default HumanResources;
