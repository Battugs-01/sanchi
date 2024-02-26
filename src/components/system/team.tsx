import Image from "next/image";
import { Button } from "../ui/button";
import { ManagerNamesData } from "@/lib/config";
import Link from "next/link";

function chunkArray(array: any, size: any) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}

// Chunk the ManagerNamesData array into groups of 4
const chunks = chunkArray(ManagerNamesData, 4);

const Team = () => {
  return (
    <div className="w-full container mx-auto py-28 text-center">
      <div className="bg-white-A700 flex flex-col md:gap-10 gap-[72px] items-center justify-center ">
        <p className="font-bold text-4xl uppercase">
          Манай <span className=" font-medium">Баг</span>
        </p>
        {chunks.map((chunk, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex flex-row gap-5">
            {chunk.map((item: any, index: any) => (
              <div key={`manager-${rowIndex}-${index}`} className="flex-1">
                <HomeTeammembercard
                  className="bg-white-A700 flex flex-col gap-6 items-center justify-start p-6 sm:px-5 rounded-[16px] shadow-bs4"
                  username={item.name}
                  userrole={item.position}
                  email={item.email}
                  phone={item.phone}
                  image={item.src}
                  alt={item.alt}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

const HomeTeammembercard: React.FC<any> = (props) => {
  return (
    <div className={props.className}>
      <div className="relative">
        <Image
          className="m-auto object-cover rounded-[12px] w-full"
          src={props.image}
          alt={props?.alt}
          width={180}
          height={180}
        />
        <div className="absolute bg-gradient3 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[26px] sm:px-5 rounded-bl-[12px] rounded-br-[12px] w-full">
          <div className="flex flex-row gap-3 items-start justify-start mt-9 w-auto">
            <Link href={`tel:+${props.phone}`}>
              <Button
                className="flex items-center justify-center rounded-[5px] p-0 transition duration-300 ease-in-out hover:scale-110 hover:h-13 hover:w-13"
                color="white_A700_19"
              >
                <Image
                  className="h-6"
                  src="/svg/img_phonecall02.svg"
                  alt="phonecallTwo"
                  height={40}
                  width={40}
                />
              </Button>
            </Link>
            <Link href={`mailto:+${props.email}`}>
              <Button
                className="flex items-center justify-center rounded-[5px] p-0 transition duration-300 ease-in-out hover:scale-110 hover:h-13 hover:w-13"
                color="white_A700_19"
              >
                <Image
                  className="h-6"
                  src="/svg/img_lock_white_a700.svg"
                  alt="lock_One"
                  height={40}
                  width={40}
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start justify-start w-auto">
        <p className="text-blue_gray-900_01 text-center text-xl tracking-[-0.24px] w-auto">
          {props?.username}
        </p>
        <p className="text-base text-blue_gray-700_01 text-center w-auto">
          {props?.userrole}
        </p>
      </div>
    </div>
  );
};
