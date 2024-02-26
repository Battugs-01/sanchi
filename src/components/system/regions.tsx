import { RegionsData } from "@/lib/config";
import Image from "next/image";

const Regions = () => {
  return (
    <div className=" bg-[#101828] w-full py-32">
      <div className="container mx-auto">
        <div className="flex md:flex-col flex-row md:gap-[41px] items-start justify-between w-full">
          <div
            style={{ backgroundImage: "url('/svg/globe.svg')" }}
            className="relative object-contain w-full h-full  bg-right z-[2] bg-cover bg-no-repeat md:gap-10 gap-[63px] pb-[132px] md:px-10 sm:px-5 px-[132px] pt-[350px] hidden md:block"
          >
            <Image
              className="h-[50px] md:ml-[0] ml-[309px] w-[50px] absolute right-[60vh] top-[1vh]"
              src="/svg/img_close_yellow_700.svg"
              alt="close_One"
              width={50}
              height={50}
            />
            <Image
              className="h-[50px] mb-2.5 w-[50px] absolute right-[46vh] top-[12vh]"
              src="/svg/img_close_yellow_700.svg"
              alt="close_Two"
              width={50}
              height={50}
            />
            <Image
              className="h-[50px] mt-2.5 w-[50px] absolute right-[73vh] top-[12vh]"
              src="/svg/img_close_yellow_700.svg"
              alt="close_Three"
              width={50}
              height={50}
            />
            <Image
              className="h-[50px] mt-2.5 w-[50px] absolute right-[30vh] top-[12vh]"
              src="/svg/img_close_yellow_700.svg"
              alt="close_Three"
              width={50}
              height={50}
            />
          </div>
        </div>
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
  day,
  day2,
  daytext,
  daytext2,
}: {
  title: string;
  description: string;
  flagPath: string;
  day?: string;
  day2?: string;
  daytext?: string;
  daytext2?: string;
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
      <div className="flex flex-col gap-10 items-start justify-between h-full">
        <>
          <p className="font-semibold text-xl">{title}</p>
          <p className="text-base text-[#EAECF0]">{description}</p>
        </>
        <div>
          <p className="text-white/50 text-xl">{daytext}</p>
          <p className="text-xl bg-gradient text-transparent bg-clip-text font-semibold">
            {day}
          </p>
          <p className="text-white/50 text-xl">{daytext2}</p>
          <p className="text-xl bg-gradient text-transparent bg-clip-text font-semibold">
            {day2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regions;
