import Image from "next/image";
import { Button } from "../ui/button";

const ContactHeader = () => {
  return (
    <div className="bg-gray-900 md:flex items-center justify-around px-20 py-[18px] w-full hidden">
      <Image
        className="object-cover h-[50]"
        src="/images/img_download1.png"
        alt="downloadOne"
        width={150}
        height={150}
      />
      <div className="flex flex-row items-center justify-center gap-2">
        <Image
          className="h-[63px]"
          src="/images/img_close.svg"
          alt="close"
          width={80}
          height={80}
        />
        <p className="leading-[135.02%] text-base text-white">
          <>
            Даваа - Бямба 9.00 - 18.00
            <br />
            Ням амарна
          </>
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-3.5">
        <Image
          className="h-[63px]"
          src="/images/img_lock.svg"
          alt="close"
          width={80}
          height={80}
        />
        <p className="leading-[135.02%] text-base text-white">
          <>
            И-мэйл
            <br />
            contact@logistics.com
          </>
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-3.5">
        <Button className="border border-[#233651] border-solid flex h-[63px] items-center justify-center rounded-full w-[63px] bg-[#101b55]">
          <Image
            className="h-[20px]"
            src="/images/img_call.svg"
            alt="close"
            width={80}
            height={80}
          />
        </Button>
        <p className="leading-[135.02%] text-base text-white">
          <>
            Утасны дугаар
            <br />
            +976 77110707
          </>
        </p>
      </div>
    </div>
  );
};

export default ContactHeader;
