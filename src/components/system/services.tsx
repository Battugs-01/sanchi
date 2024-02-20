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

const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className=" container mx-auto py-32 text-center">
        <p className="py-16 font-bold text-4xl uppercase">
          Бүтээгдэхүүн <span className=" font-medium">үйлчилгээ</span>
        </p>
        <div className="flex gap-8 flex-col lg:flex-row">
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
        </div>
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
