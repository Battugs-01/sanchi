import Header from "@/components/system/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Hero = () => {
  return (
    <div className="w-full h-screen relative z-10">
      <Image
        src={"/images/hero.jpg"}
        alt="hero"
        width={1920}
        height={1080}
        className=" object-cover w-full h-full bg bg-right z-[2]"
        priority
      />
      <div className="w-full h-full absolute top-0 right-0 z-[10] flex items-center justify-center">
        <div className="z-10 container mx-auto flex justify-start ">
          <div className=" rounded-lg backdrop-blur-md bg-black/20 border-gray-500 border flex flex-col gap-4 p-10 text-white w-[100%] md:w-[70%] lg:w-[50%]">
            <div>Ти Ай Ложистик</div>
            <h1 className=" font-bold text-4xl md:text-6xl">
              ТЭЭВЭР ЗУУЧЛАЛЫН ЦОГЦ{" "}
              <span className=" text-red-600">ШИЙДЭЛ</span>
            </h1>
            <div className=" text-justify">
              <p>
                Олон жилийн туршлагатай манай хамт олон харилцагч таны ачааг
                дэлхийн өнцөг булан бүрээс гадаад агентын өргөн сүлжээгээ
                ашиглан тээвэрлэлтийн бүхий л чиглэлд хүссэн хэмжээгээр далай,
                төмөр зам, авто зам зэрэг сувгуудаар улс хооронд тээвэрлэх ачаа
                тээврийн үйлчилгээг санал болгож байна.
              </p>
            </div>
            <Button
              className=" bg-yellow-400 text-black w-fit hover:bg-yellow-400 font-semibold text-md hover:scale-105 transition-transform hover:shadow"
              size={"lg"}
            >
              Каталог татах
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
