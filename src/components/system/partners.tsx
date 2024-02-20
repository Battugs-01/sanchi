import Image from "next/image";

const Partners = () => {
  return (
    <div className="bg-[#F9FAFB] overflow-hidden py-32">
      <div className="w-full text-center">
        <p className="pb-16 font-bold text-4xl uppercase">
          Бүтээгдэхүүн <span className=" font-medium">үйлчилгээ</span>
        </p>
      </div>
      <div className="space-y-16">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
          {Array.from({ length: 20 }).map((_, index) => (
            <li
              key={`sda-${index}`}
              className="rounded-full shadow-md bg-white flex items-center gap-2 px-4 py-2 "
            >
              <Image
                src="/images/iMap.png"
                alt="partner"
                width={30}
                height={30}
              />
              <p>Partner</p>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
          {Array.from({ length: 20 }).map((_, index) => (
            <li
              key={`fd-${index}`}
              className="rounded-full shadow-md bg-white flex items-center gap-2 px-4 py-2 "
            >
              <Image
                src="/images/iMap.png"
                alt="partner"
                width={30}
                height={30}
              />
              <p>Partner</p>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
          {Array.from({ length: 20 }).map((_, index) => (
            <li
              key={`hgf-${index}`}
              className="rounded-full shadow-md bg-white flex items-center gap-2 px-4 py-2 "
            >
              <Image
                src="/images/iMap.png"
                alt="partner"
                width={30}
                height={30}
              />
              <p>Partner</p>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
          {Array.from({ length: 20 }).map((_, index) => (
            <li
              key={`ds-${index}`}
              className="rounded-full shadow-md bg-white flex items-center gap-2 px-4 py-2 "
            >
              <Image
                src="/images/iMap.png"
                alt="partner"
                width={30}
                height={30}
              />
              <p>Partner</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Partners;
