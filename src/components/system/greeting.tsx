"use client";

import { CompanyCardData } from "@/lib/config";
import Image from "next/image";
import SlideUpWhenVisible from "./animate_when_visible";

const GreetingPage = () => {
  return (
    <div id="greeting">
      <div className="relative flex justify-center">
        <Image
          src="/images/greeting_back.png "
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
                  Захирлын мэндчилгээ
                </h3>
                <p className="text-justify text-lg">
                  Манай компанийн цахим хуудсаар зочилж байгаа Эрхэм таны
                  амрыг эрэн мэндчилье! Монгол улсын тээвэр зуучийн тэргүүлэх
                  байгууллага “ТИ АЙ ЛОЖИСТИК” компанийн үйлчлүүлэгч та
                  бүхнийхээ итгэлээр жигүүрлэн дэлхий ертөнцийн дөрвөн зүг
                  найман зовхист хүрсэн өргөн сүлжээ, харилцаа холбоог бий
                  болгож, дэлхийн жишигт нийцсэн тээврийн зуучийн үйлчилгээг
                  үзүүлсээр ирсэн билээ. Тээврийн зуучийн салбар бол улс орны
                  нийгэм, эдийн засгийн онцгой ач холбогдол бүхий салбар бөгөөд
                  цаашид бид эх орон, ард түмэн, эрхэм харилцагч та бүхнээ
                  дэлхий нийттэй холбогч гүүр байж, эх орныхоо хөгжил цэцэглэлт,
                  бүтээн байгуулалтад хувь нэмэр оруулж, хамтдаа хөгжинө гэдэгт 
                  итгэл дүүрэн байна.
                </p>
              </div>
              <div className="text-start text-lg flex gap-10 mt-8">
                <p className="text-lg">Ерөнхий захирал</p>
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
  return (
    <div className="flex flex-col gap-8 bg-gray hover:bg-gradient1 rounded-md p-4 hover:drop-shadow-lg transition-all  hover:-translate-y-2 hover:text-white z-10">
      <div className="relative rounded-full bg-gradient w-fit p-2 aspect-square flex items-center justify-center">
        <Image src={src} alt="about" width={38} height={38} />
      </div>
      <h3 className="text-lg">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default GreetingPage;
