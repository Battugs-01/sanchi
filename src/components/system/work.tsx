"use client";

import { ServiceImages } from "@/lib/config";
import Image from "next/image";
import SlideUpWhenVisible from "./animate_when_visible";

const Work = () => {
  return (
    <div className="w-full min-h-[645px] relative">
      <div
        className="absolute top-0 right-0 w-full h-[645px]  bg-[#101828]  bg-cover bg-no-repeat items-center justify-start mx-auto z-0"
        style={{ backgroundImage: "url('images/img_group3.png')" }}
      ></div>
      <div className="z-10">
        <div className="container mx-auto text-auto pt-48">
          <SlideUpWhenVisible from="top">
            <div className="flex-col flex justify-center items-center max-w-[60%] mx-auto text-center">
              <div className="p-2 backdrop-blur-md bg-white/10 rounded-md text-white ">
                Бид хэрхэн ажилдаг вэ?
              </div>
              <p className="font-bold text-4xl text-white z-10">
                Бид бүтээгдэхүүн & үйлчилгээгээ сэтгэл зүрхээ шингээж бүтээдэг
                хамт олон
              </p>
            </div>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible from="top">
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-8 mt-32">
              {ServiceImages.map((item, index) => (
                <div
                  className="group relative aspect-[8/14] overflow-hidden rounded-md bg-white/10 hover:bg-white/20 transition-all hover:drop-shadow-lg hover:-translate-y-2 hover:scale-105"
                  key={`service-images-${index}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1080}
                    height={1080}
                    className=" object-cover w-full h-full bg bg-right z-[2] group-hover:scale-110 transition-transform group-hover:shadow-lg rounded-md"
                  />
                  <div className=" text-2xl text-white absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-100 bg-[#101828]/60 transition-opacity duration-300 flex justify-center items-center">
                    Манлайлал
                  </div>
                </div>
              ))}
            </div>
          </SlideUpWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default Work;
