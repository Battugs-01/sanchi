import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getTranslation } from "@/locale/common";
import { useSearchParams } from "next/navigation";

const Contact: React.FC = () => {
  const searchParams = useSearchParams();

  const currentLocale = searchParams?.get("locale") || "mn";
  return (
    <div id="contact">
      <div className="bg-gray-900_02 flex flex-col font-inter items-start justify-start md:px-10 px-20 sm:px-5 w-full">
        <div className="flex md:flex-row flex-col gap-12 md:gap-3 md:items-center justify-between py-[124px] w-[70%] mx-auto items-start">
          <div className="flex flex-col gap-8 items-start justify-start ">
            <Image
              className="object-cover  bg-right"
              src="/images/logo.png"
              alt="logo"
              height={125}
              width={225}
              priority
            />
            <p className="leading-[24.00px] max-w-[500px] text-base text-blue_gray-300">
              {getTranslation(currentLocale, "location")}
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start justify-start w-auto text-start">
            <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
              <Link href={`tel:+97670189889`}>
                <Button
                  className="flex h-10 items-center justify-center rounded-[5px] w-10 p-0"
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
              <p className="text-base text-blue_gray-300_01 w-auto">
                {getTranslation(currentLocale, "trans_area")}: 7018 9889 (1)
              </p>
            </div>
            <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
              <Link href={`tel:+97670189889`}>
                <Button
                  className="flex h-10 items-center justify-center rounded-[5px] w-10 p-0"
                  color="white_A700_19"
                >
                  <Image
                    className="h-6"
                    src="/svg/img_phonecall02.svg"
                    alt="phonecallTwo_One"
                    height={40}
                    width={40}
                  />
                </Button>
              </Link>
              <p className="text-base text-blue_gray-300_01 w-auto">
                {getTranslation(currentLocale, "terminal_area")}: 7018 9889 (2)
              </p>
            </div>
            <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
              <Link href={`mailto:office@til.mn`}>
                <Button
                  className="flex h-10 items-center justify-center rounded-[5px] w-10 p-0"
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
              <p className="text-base text-blue_gray-300_01 w-auto">
                {getTranslation(currentLocale, "email")} : office@til.mn
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-900_02 flex md:gap-10 items-center justify-between max-w-7xl mx-auto md:px-5 py-8 shadow-bs2 w-full">
          <div className="flex flex-row gap-2 items-start justify-start w-auto">
            <Link href="https://www.facebook.com/TILogisticMN/">
              <Button
                className="flex h-11 items-center justify-center rounded-[5px] w-11 p-0"
                color="white_A700_19"
              >
                <Image
                  className="h-5"
                  src="/svg/img_social.svg"
                  alt="social"
                  height={60}
                  width={60}
                />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/company/tilogistic/?originalSubdomain=mn">
              <Button
                className="p-0 flex h-11 items-center justify-center rounded-[5px] w-11"
                color="white_A700_19"
              >
                <Image
                  className="h-5"
                  src="/svg/img_social_white_a700.svg"
                  alt="social_One"
                  height={60}
                  width={60}
                />
              </Button>
            </Link>
          </div>
          <p className="text-base text-center text-[#fff] w-auto">
            © 2024 Til.mn All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
