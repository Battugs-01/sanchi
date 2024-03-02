import { PartnersLogo } from "@/lib/config";
import { cn } from "@/lib/utils";
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
        <InfiniteSlider logos={PartnersLogo.slice(0, 10)} />
        <InfiniteSlider logos={PartnersLogo.slice(10, 20)} direction="right" />
        <InfiniteSlider logos={PartnersLogo.slice(20, 30)} />
        <InfiniteSlider logos={PartnersLogo.slice(10, 20)} direction="right" />
      </div>
    </div>
  );
};

const InfiniteSlider = ({
  logos,
  direction,
}: {
  logos: { alt: string; src: string; title: string }[];
  direction?: "left" | "right";
}) => {
  return (
    <div className=" w-[100wv] ">
      <div
        className={cn(
          " animate-infinite-slider flex gap-8 items-center whitespace-nowrap",
          direction === "right"
            ? "animate-infinite-slider"
            : "animate-infinite-slider2"
        )}
      >
        {logos.map((card, index) => (
          <div
            key={`hgf-${index}`}
            className="rounded-full shadow-md bg-white flex items-center gap-2 px-4 py-2 min-w-[200px] min-h-[50px] justify-center"
          >
            <Image src={card.src} alt={card.alt} width={40} height={40} />
            <p>{card.title}</p>
          </div>
        ))}
        {logos.map((card, index) => (
          <div
            key={`hgf-${index}`}
            className="rounded-full shadow-md bg-white flex items-center gap-2 px-4 py-2 min-w-[200px] min-h-[50px] justify-center"
          >
            <Image src={card.src} alt={card.alt} width={40} height={40} />
            <p>{card.title}</p>
          </div>
        ))}
        {logos.map((card, index) => (
          <div
            key={`hgf-${index}`}
            className="rounded-full shadow-md bg-white flex items-center gap-2 px-4 py-2 min-w-[200px] min-h-[50px] justify-center"
          >
            <Image src={card.src} alt={card.alt} width={40} height={40} />
            <p>{card.title}</p>
          </div>
        ))}
        {logos.map((card, index) => (
          <div
            key={`hgf-${index}`}
            className="rounded-full shadow-md bg-white flex items-center gap-2 px-4 py-2 w-[200px] h-[50px] justify-center"
          >
            <Image src={card.src} alt={card.alt} width={40} height={40} />
            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
