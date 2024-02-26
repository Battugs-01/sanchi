import { PartnersLogo } from "@/lib/config";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="bg-[#F9FAFB] overflow-hidden py-32">
      <div className="w-full text-center">
        <p className="pb-16 font-bold text-4xl uppercase">
          Хамтрагч <span className=" font-medium">Байгууллагууд</span>
        </p>
      </div>
      <div className="space-y-16">
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex w-[50%] items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll">
            {PartnersLogo.slice(0, 10).map((card, index) => (
              <li
                key={`sda-${index}`}
                className="rounded-full shadow-md bg-white flex items-center gap-2 px-4 py-2 "
              >
                <Image src={card.src} alt={card.alt} width={40} height={40} />
                <p>Partner</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll2 ">
            {PartnersLogo.slice(10, 20).map((card, index) => (
              <li
                key={`fd-${index}`}
                className="rounded-full shadow-md bg-white flex items-center gap-2 px-4 py-2 "
              >
                <Image src={card.src} alt={card.alt} width={40} height={40} />
                <p>Partner</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-loop-scroll ">
            {PartnersLogo.slice(20, 30).map((card, index) => (
              <li
                key={`hgf-${index}`}
                className="rounded-full shadow-md bg-white flex items-center gap-2 px-4 py-2 "
              >
                <Image src={card.src} alt={card.alt} width={40} height={40} />
                <p>Partner</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Partners;
