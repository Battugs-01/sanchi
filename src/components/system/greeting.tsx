"use client";

import { CompanyCardData } from "@/lib/config";
import Image from "next/image";
import SlideUpWhenVisible from "./animate_when_visible";
import { getTranslation } from "@/locale/common";
import { useSearchParams } from "next/navigation";

const GreetingPage = () => {
  const searchParams = useSearchParams();

  const currentLocale = searchParams?.get("locale") || "mn";
  return (
    <div id="greeting">
      <div className="relative flex justify-center">
        <Image
          src="/images/greeting_back.png"
          width={1280}
          height={1080}
          priority
          alt="background_greet"
          className="m-auto left-0 justify-center w-full object-cover items-start"
        />
      </div>
      <div className="relative container mx-auto py-28 text-center w-full">
        <div>
          <div className="flex gap-13 flex-col lg:flex-row z-10 ">
            <SlideUpWhenVisible className="flex-1 z-10" from="right">
              <Image
                src="/images/img_bg.png"
                alt="Boss"
                width={1280}
                height={1080}
                className="rounded object-cover w-[405px] h-[425px] z-[2]"
                priority
              />
            </SlideUpWhenVisible>
            <SlideUpWhenVisible className="flex-1 z-10" from="left">
              <div className="flex-1 ">
                <h3 className="text-3xl font-semibold uppercase mb-4 text-start">
                  {getTranslation(currentLocale, "director_greetings")}
                </h3>
                <p className="text-justify text-lg">
                  {getTranslation(currentLocale, "director_greetings1")}
                </p>
              </div>
              <div className="text-start text-lg flex gap-10 mt-8">
                <p className="text-lg">
                  {" "}
                  {getTranslation(currentLocale, "CEO")}
                </p>
                <p className="font-bold">Туяа</p>
              </div>
            </SlideUpWhenVisible>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 z-10">
            {CompanyCardData.map((card, index) => (
              <CompanyCard key={`company-card-${index}`} {...card} />
            ))}
          </div>
          <Image
            className="absolute  my-auto object-cover right-[100] top-[160px] z-1"
            src="/images/img_pattern_black_900.png"
            alt="pattern_Three"
            height={705}
            width={1285}
          />
        </div>
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

export default GreetingPage;
