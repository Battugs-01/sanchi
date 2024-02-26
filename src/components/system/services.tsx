"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CompanyCarouselData, ServicesData } from "@/lib/config";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useState } from "react";
import SlideUpWhenVisible from "./animate_when_visible";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <div id="services">
      <div className=" container mx-auto py-32 text-center">
        <p className="py-16 font-bold text-4xl uppercase">
          Бүтээгдэхүүн <span className=" font-medium">үйлчилгээ</span>
        </p>
        <div className="relative flex flex-col gap-10">
          <div className="grid md:grid-cols-2 gap-8 flex-col lg:flex-row z-10 grid-cols-1">
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
                    {CompanyCarouselData.map((item, index) => (
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
                  Олон улсын тээвэр зуучлал
                </h3>
                <p className="text-start">
                  Бид дэлхийн улс орнуудад байрлах агентын өргөн сүлжээгээ
                  ашиглан үйлчлүүлэгчиддээ авто, агаар, далай, төмөр замын бүх
                  төрлийн тээврийн замналаар улс хоорондын болон орон нутгийн
                  ачаа тээврийг хаалганаас хаалганд хүргэн үйлчилдэг.
                </p>
              </div>
              <Button className="text-start rounded border-cyan-500 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-[#fff] mt-4 flex items-center gap-2">
                Дэлгэрэнгүй
                <ArrowRight className="h-4 w-4" />
              </Button>
            </SlideUpWhenVisible>
          </div>
          <div className="grid md:grid-cols-2  flex-col lg:flex-row z-10 grid-cols-1 gap-8">
            <SlideUpWhenVisible
              className="col-span-1 z-10  flex justify-center items-center "
              from="left"
            >
              <div className="flex flex-col justify-center gap-2">
                <h3 className="text-3xl font-semibold uppercase mb-4 text-start">
                  Гаалын терминал
                </h3>
                <p className="text-start">
                  Улаанбаатар хотын А зэрэглэлийн бүсэд байрлах өөрийн эзэмшлийн
                  “Нэг цэгийн үйлчилгээ” бүхий “ТЭЭВЭР ҮЙЛЧИЛГЭЭНИЙ ЦОГЦОЛБОР”-т
                  Гаалийн хяналтын бүс, стандартын шаардлага хангасан гаалийн
                  баталгаат болон түр агуулах ажиллуулан тээвэр логистикийн цогц
                  үйлчилгээг үзүүлж байна.
                </p>
              </div>
              <Button className="text-start rounded border-cyan-500 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-[#fff] mt-4 flex items-center gap-2">
                Дэлгэрэнгүй
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
                    {CompanyCarouselData.map((item, index) => (
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
          <div className="grid md:grid-cols-2  flex-col lg:flex-row z-10 grid-cols-1 gap-8">
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
                    {CompanyCarouselData.map((item, index) => (
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
                </Carousel>
              </div>
            </SlideUpWhenVisible>
            <SlideUpWhenVisible
              className="col-span-1 z-10  flex justify-center items-center "
              from="left"
            >
              <div className="flex flex-col justify-center gap-2">
                <h3 className="text-3xl font-semibold uppercase mb-4 text-start">
                  Гаалын зуучлал
                </h3>
                <p className="text-start">
                  Гаалийн бүрдүүлэлт нь гаалийн хилээр нэвтрүүлэх барааг гаалийн
                  байгууллагад мэдүүлсэн үеэс гаалийн бичиг баримтыг,
                  шаардлагатай тохиолдолд барааг шалгах, ногдуулсан татварыг
                  төлсний дараа барааг олгох, эсвэл гаалийн хилээр гаргахыг
                  зөвшөөрөх хүртэлх цогц үйл ажиллагаа юм.
                </p>
              </div>
              <Button className="text-start rounded border-cyan-500 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-[#fff] mt-4 flex items-center gap-2">
                Дэлгэрэнгүй
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
        {/* <div className="flex gap-8 flex-col lg:flex-row">
          <div className="flex-1 hidden md:block">
            {ServicesData.map((item, index) => (
              <SlideUpWhenVisible key={`services-${index}`} delay={index * 100}>
                <Item
                  title={item.title}
                  description={item.description}
                  active={active === index}
                />
              </SlideUpWhenVisible>
            ))}
          </div>
          <div className="flex-1 md:hidden block">
            {ServicesData.map((item, index) => (
              <SlideUpWhenVisible key={`services-${index}`}>
                <Item
                  title={item.title}
                  description={item.description}
                  active={active === index}
                />
              </SlideUpWhenVisible>
            ))}
          </div>
          <div className="flex-1">
            <SlideUpWhenVisible>
              <Carousel
                className="w-full"
                opts={{
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 5000,
                  }),
                ]}
              >
                <CarouselContent className="w-full h-full aspect-square">
                  {CompanyCarouselData.map((item, index) => (
                    <CarouselItem key={`service-carousel-${index}`}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={1080}
                        height={1080}
                        className=" object-cover w-full h-full bg bg-right z-[2]"
                        priority
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2" />
              </Carousel>
            </SlideUpWhenVisible>
          </div>
        </div> */}
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
