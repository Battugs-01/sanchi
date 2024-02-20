"use client";

import Image from "next/image";
import SlideUpWhenVisible from "./animate_when_visible";

const About = () => {
  return (
    <div className="w-full min-h-screen relative">
      <div className="w-full h-full flex bg-[#F2F2F2] absolute top-0 left-0 z-0">
        <div className=" flex-1 h-full bg-gradient1 hidden lg:block" />
        <div className=" flex-1 h-full bg-transparent" />
      </div>
      <div className=" container mx-auto py-24">
        <div className=" grid grid-cols-5 gap-8">
          <SlideUpWhenVisible
            from="right"
            className="relative col-span-5 lg:col-span-3"
          >
            <Image
              src={"/images/about.jpg"}
              alt="about"
              width={930}
              height={610}
            />
            <div className="absolute bottom-0 right-1/2 translate-x-1/2 bg-gradient p-4 flex gap-4 items-center">
              <Image
                src={"/svg/transport.svg"}
                alt="about"
                width={65}
                height={80}
              />
              <p className=" text-8xl font-semibold">10</p>
              <p className=" text-lg font-semibold">жилийн ажлын туршлага</p>
            </div>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible
            from="left"
            className="relative col-span-5 lg:col-span-2 text-[#1C1F35] flex flex-col justify-center gap-8"
          >
            <div className="space-y-4">
              <h2 className=" uppercase text-3xl font-semibold">
                Бид юу хийдэг вэ?
              </h2>
              <p>
                Бид бизнес эрхлэгчдийн гадаад худалдааны тээвэрлэлтийг зохион
                байгуулж, ОУ-ын стандарт, МУ-ын хууль тогтоомжийн хүрээнд
                хөнгөвчлөх, зуучлах цогц үйлчилгээг үзүүлэгч үндэсний компани
                юм.
              </p>
            </div>
            <div className="space-y-4">
              <p className=" uppercase text-2xl font-semibold">
                БИдний давуу тал
              </p>
              <p>
                Бид бизнес эрхлэгчдийн гадаад худалдааны тээвэрлэлтийг зохион
                байгуулж, ОУ-ын стандарт, МУ-ын хууль тогтоомжийн хүрээнд
                хөнгөвчлөх, зуучлах цогц үйлчилгээг үзүүлэгч үндэсний компани
                юм.
              </p>
            </div>
          </SlideUpWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default About;
