"use client";
import Image from "next/image";
import { Button } from "../ui/button";

const CustomHeader: React.FC = () => {
  return (
    <header className="bg-gray-900 flex items-center justify-around px-20 py-[18px] w-full md:hidden ">
      {/* <Image
        className="sm:flex-1 h-[65px] md:h-auto object-cover  sm:w-full"
        src="/images/img_download1.png"
        alt="downloadOne"
        width={200}
        height={200}
      />
      <div className="flex flex-row items-center justify-center gap-3.5">
        <Image
          className="h-[63px]"
          src="/images/img_close.svg"
          alt="close"
          width={200}
          height={200}
        />
        <p className="text-sm text-white-A700">
          <p>
            Даваа - Бямба 9.00 - 18.00
            <br />
            Ням амарна
          </p>
        </p>
      </div>
      <div className="flex flex-row gap-3.5 items-center justify-center">
        <Image
          className="h-[63px] w-[63px]"
          src="/images/img_lock.svg"
          alt="lock"
          width={200}
          height={200}
        />
        <a
          href="mailto:contact@hvcargologistics.com"
          className="font-medium leading-[135.02%] text-sm text-white-A700"
          target="_blank"
          rel="noreferrer"
        >
          <p>
            <p>
              И-мэйл
              <br />
              contact@logistics.com
            </p>
          </p>
        </a>
      </div>
      <div className="flex flex-row gap-3.5 items-center justify-center">
        <Button
          className="border border-indigo-900_01 border-solid flex h-[63px] items-center justify-center rounded-full w-[63px]"
          color="indigo_900"
        >
          <Image
            src="/images/img_call.svg"
            alt="call"
            width={200}
            height={200}
          />
        </Button>
        <p className="text-sm text-white-A700">
          <p>
            Утасны дугаар
            <br />
            +976 77110707
          </p>
        </p>
      </div> */}
    </header>
  );
};

export default CustomHeader;
