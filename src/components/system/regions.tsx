import { RegionsData } from "@/lib/config";
import Image from "next/image";

const Regions = () => {
  return (
    <div className=" bg-[#101828] w-full py-32">
      <div className=" container mx-auto">
        <Image
          src="/svg/globe.svg"
          alt="regions"
          width={1920}
          height={1080}
          className=" object-contain w-full h-full bg bg-right z-[2]"
          priority
        />
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RegionsData.map((item, index) => (
            <CountryCard key={`regions-${index}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CountryCard = ({
  title,
  description,
  flagPath,
}: {
  title: string;
  description: string;
  flagPath: string;
}) => {
  return (
    <div
      className=" rounded-lg p-4 flex flex-col text-left gap-8 text-white"
      style={{
        background:
          "linear-gradient(180deg, rgba(249, 250, 251, 0.095) 0%, rgba(0, 70, 140, 0.1) 100%)",
      }}
    >
      <div>
        <Image src={flagPath} alt={title} width={48} height={48} />
      </div>
      <p className="font-semibold text-xl">{title}</p>
      <p className=" text-base text-[#EAECF0]">{description}</p>
      <div>
        <p className="text-white/50">Энгийн чингэлэг:</p>
        <p className=" text-yellow-500 text-base">7 хоног тутамд</p>
      </div>
    </div>
  );
};

export default Regions;
