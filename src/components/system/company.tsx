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

const Company = () => {
  return (
    <div>
      <div className=" container mx-auto py-32">
        <div className="flex gap-8 flex-col lg:flex-row">
          <SlideUpWhenVisible className="flex-1" from="right">
            <div className="flex-1">
              <p className=" text-[#354AB5] text-base font-semibold mb-2">
                Бидний тухай
              </p>
              <h3 className=" text-4xl font-semibold uppercase mb-4">
                КОМПАНИЙН ТАНИЛЦУУЛГА
              </h3>
              <p className=" text-justify">
                “ТИ АЙ ЛОЖИСТИК” ХХК нь 2011 онд 100 хувийн дотоодын хөрөнгө
                оруулалттайгаар байгуулагдсан үндэсний тээвэр зуучийн
                компаниудын нэг юм. Улаанбаатар хотын А зэрэглэлийн бүсэд
                байрлах өөрийн эзэмшлийн “Нэг цэгийн үйлчилгээ” бүхий “ТЭЭВЭР
                ҮЙЛЧИЛГЭЭНИЙ ЦОГЦОЛБОР”-т гаалийн хяналтын бүс, стандартын
                шаардлага хангасан гаалийн баталгаат болон түр агуулах
                ажиллуулан тээвэр логистикийн цогц үйлчилгээг үзүүлж байна. Бид
                дэлхийн улс орнуудад байрлах агентын өргөн сүлжээгээ ашиглан
                үйлчлүүлэгчиддээ авто, агаар, далай, төмөр замын бүх төрлийн
                тээврийн замналаар улс хоорондын болон орон нутгийн ачаа
                тээврийг хаалганаас хаалганд хүргэн үйлчилдэг. Компанийн урт
                хугацааны тогтвортой үйл ажиллагааг хангах, удирдлагын болон
                зохион байгуулалтын уялдааг нэмэгдүүлэх, бүтээгдэхүүн
                үйлчилгээний чанарыг сайжруулах, хэрэглэгчдийн сэтгэл ханамжийг
                өсгөх зорилгоор Чанарын менежментийн тогтолцоо (ISO 9001:2015)
                стандартыг үйл ажиллагаандаа нэвтрүүлэн ажиллаж байна. Бид
                үйлчлүүлэгчдийнхээ байнгын найдвартай түнш, мэргэжлийн зөвлөх
                байж чадна гэдэгтээ итгэлтэй байдаг.
              </p>
            </div>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible className="flex-1" from="left">
            <div className="flex-1">
              <Carousel
                className="w-full "
                opts={{
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 5000,
                  }),
                ]}
              >
                <CarouselContent className="w-full h-full">
                  {CompanyCarouselData.map((item, index) => (
                    <CarouselItem key={`company-carousel-${index}`}>
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
            </div>
          </SlideUpWhenVisible>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {CompanyCardData.map((card, index) => (
            <CompanyCard key={`company-card-${index}`} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CompanyCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-8 bg-gray hover:bg-gradient1 rounded-md p-4 hover:drop-shadow-lg transition-all  hover:-translate-y-2 hover:text-white">
      <div className="relative rounded-full bg-gradient w-fit p-1 aspect-square flex items-center justify-center">
        <Image src="/svg/transport.svg" alt="about" width={38} height={38} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Company;
