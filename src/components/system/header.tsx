"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HEADERS, SOCIAL_LINKS } from "@/lib/config";
import useScrollPosition from "@/lib/use_scroll";
import { cn } from "@/lib/utils";
import { getTranslation } from "@/locale/common";
import { Instagram, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Line } from "./Line";

const Header = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentLocale = searchParams?.get("locale") || "mn";

  // const currentLocale =
  //   currentPath && currentPath.startsWith("/en") ? "en" : "mn";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrolledX = useScrollPosition();

  const MenuLink = ({
    header,
    className,
  }: {
    header: any;
    className?: string;
  }) => {
    return (
      <Link
        href={
          !header.external
            ? {
                // pathname: "/" + currentLocale === "en" ? "en" : "",
                pathname: "/",
                query: { section: header.tag, locale: currentLocale },
              }
            : {
                pathname: header.tag,
                query: {
                  locale: currentLocale,
                },
              }
        }
        className=" border-b border-b-transparent hover:border-b-white transition-all duration-300 ease-in-out"
      >
        <div className="flex items-center gap-3">
          <p className={cn("text-white text-lg", className)}>
            {getTranslation(currentLocale, header.tag)}
          </p>
          <Line className="bg-[#ffffff7f] h-4 rotate-0 w-px mt-1" />
        </div>
      </Link>
    );
  };

  const MenuItem = ({ header }: { header: any }) => {
    if (!header.children) {
      return <MenuLink key={`header-${header.tag}`} header={header} />;
    }
    return (
      <HoverCard openDelay={0} closeDelay={100}>
        <HoverCardTrigger className="text-white border-b border-b-transparent hover:border-b-white transition-all duration-300 ease-in-out text-lg">
          <div className="flex justify-center items-center gap-3">
            {getTranslation(currentLocale, header.tag)}
            <Line className="bg-[#ffffff7f] h-4 rotate-0 w-px mt-1" />
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="">
          {header.children.map((child: any) => (
            <MenuLink
              key={`sub-header-${header.tag}-${child.tag}`}
              header={child}
              className="text-black py-1 border-b border-b-transparent hover:border-b-[#06B6D4] transition-all duration-300 ease-in-out text-lg"
            />
          ))}
        </HoverCardContent>
      </HoverCard>
    );
  };

  return (
    <>
      <header className="fixed top-0 right-0 w-full backdrop-blur-md z-20 bg-black/30">
        <div
          className={cn(
            "transition-all duration-300 ease-in-out ",
            scrolledX > 0 ? "h-0" : "h-[100px]"
          )}
        >
          <div
            className={cn(
              "bg-gray-900 lg:flex items-center justify-around px-20 py-[18px] w-full hidden absolute right-0 transition-all duration-300 ease-in-out",
              scrolledX > 0 ? "-top-[100px]" : "top-0"
            )}
          >
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
                  {getTranslation(currentLocale, "haeder_time")}
                  <br />
                  {getTranslation(currentLocale, "haeder_time1")}
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
                  {getTranslation(currentLocale, "email")}
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
                  {getTranslation(currentLocale, "phone")}
                  <br />
                  +976 77110707
                </>
              </p>
            </div>
          </div>
        </div>

        <div className="py-4 flex items-center justify-between gap-8 ">
          <div className="text-white">
            <Link
              href={{
                pathname: "/",
                query: { section: "hero" },
              }}
            >
              <Image
                src="/images/logo.png"
                alt="logo"
                width={85}
                height={85}
                className="object-cover w-full h-full bg bg-right block lg:hidden"
                priority
              />
            </Link>
          </div>
          <div className="lg:flex justify-around items-center hidden w-full">
            <div className=" flex items-center gap-6">
              {HEADERS.map((header) => (
                <MenuItem key={`header-${header.tag}`} header={header} />
              ))}
            </div>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((link) => (
                <Link key={`social-${link.title}`} href={link.href}>
                  <div className=" aspect-square flex justify-center items-center bg-white bg-opacity-20 p-2 rounded-md text-white">
                    {link.icon === "Facebook" ? (
                      <Image
                        src="/svg/img_facebook.svg"
                        alt="facebook"
                        width={50}
                        height={50}
                        className="object-cover w-full h-full p-0.5"
                        priority
                      />
                    ) : (
                      <Image
                        src="/svg/img_link.svg"
                        alt="linkeden"
                        width={70}
                        height={70}
                        className="object-cover w-full h-full p-0.5"
                        priority
                      />
                    )}
                  </div>
                </Link>
              ))}
              <Select
                value={currentLocale}
                onValueChange={(value) => {
                  value === "mn"
                    ? router.push(`/?locale=mn`)
                    : router.push(`/?locale=en`);
                }}
              >
                <SelectTrigger className="w-[80px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="w-[60px]">
                  <Link
                    href={{
                      pathname: currentPath,
                      query: { locale: "mn" },
                    }}
                  >
                    <SelectItem value="mn" className="w-full">
                      <Image
                        src="/svg/mn.svg"
                        width={30}
                        height={20}
                        alt="Mongolian Flag"
                      />
                    </SelectItem>
                  </Link>
                  <Link
                    href={{
                      pathname: currentPath,
                      query: { locale: "en" },
                    }}
                  >
                    <SelectItem value="en">
                      <Image
                        src="/svg/en.svg"
                        width={30}
                        height={20}
                        alt="English Flag"
                      />
                    </SelectItem>
                  </Link>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-3 items-center justify-end">
              <Button
                className="justify-end relative bg-gradient text-black w-fit hover:bg-default font-semibold text-md hover:scale-105 transition-transform hover:shadow z-50 overflow-hidden hover:transition-all duration-500 ease-in-out"
                size="lg"
              >
                {getTranslation(currentLocale, "get_quotes")}
              </Button>
            </div>
          </div>
          <div className="block lg:hidden">
            <HamburerMenu
              currentLocale={currentLocale}
              router={router}
              open={isMenuOpen}
              onOpenChange={(open) => setIsMenuOpen(open)}
            />
          </div>
        </div>
      </header>
    </>
  );
};

const HamburerMenu = ({
  currentLocale,
  router,
  open,
  onOpenChange,
}: {
  currentLocale: string;
  router: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const currentPath = usePathname();
  const MenuLink = ({
    header,
    className,
  }: {
    header: any;
    className?: string;
  }) => {
    return (
      <Link
        href={
          !header.external
            ? {
                // pathname: "/" + currentLocale === "en" ? "en" : "",
                pathname: "/",
                query: { section: header.tag, locale: currentLocale },
              }
            : {
                pathname: header.tag,
                query: {
                  locale: currentLocale,
                },
              }
        }
        className=" border-b border-b-transparent hover:border-b-black transition-all duration-300 ease-in-out"
      >
        <div className="flex items-center gap-3">
          <p className={cn("text-black text-lg", className)}>
            {getTranslation(currentLocale, header.tag)}
          </p>
          {/* <Line className="bg-[#ffffff7f] h-4 rotate-0 w-px mt-1" /> */}
        </div>
      </Link>
    );
  };

  const MenuItem = ({ header }: { header: any }) => {
    if (!header.children) {
      return <MenuLink key={`header-${header.tag}`} header={header} />;
    }
    return (
      <HoverCard openDelay={0} closeDelay={100}>
        <HoverCardTrigger className="text-black border-b border-b-transparent hover:border-b-black transition-all duration-300 ease-in-out text-lg">
          <div className="flex items-center gap-3">
            {getTranslation(currentLocale, header.tag)}
            <Line className="bg-[#ffffff7f] h-4 rotate-0 w-px mt-1" />
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="">
          {header.children.map((child: any) => (
            <MenuLink
              key={`sub-header-${header.tag}-${child.tag}`}
              header={child}
              className="text-black py-1 border-b border-b-transparent hover:border-b-[#06B6D4] transition-all duration-300 ease-in-out text-lg"
            />
          ))}
        </HoverCardContent>
      </HoverCard>
    );
  };

  return (
    <Drawer direction="bottom" open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger className="text-white">
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="text-black pb-16">
        {/* <DrawerHeader>
          <DrawerTitle>Logo</DrawerTitle>
        </DrawerHeader> */}
        <div className=" text-black px-4 space-y-4 flex flex-col justify-around">
          <div className="flex flex-col gap-4">
            {HEADERS.map((header) => (
              <MenuItem key={`header-${header.tag}`} header={header} />
            ))}
          </div>
          <div className="flex items-center gap-4 ">
            {SOCIAL_LINKS.map((link) => (
              <Link key={`social-mobile-${link.title}`} href={link.href}>
                <div className="  flex justify-center items-center bg-black  bg-opacity-20 p-2 rounded-md text-black">
                  {link.icon === "Facebook" ? (
                    <Image
                      src="/svg/img_facebook.svg"
                      alt="facebook"
                      width={50}
                      height={50}
                      className="object-cover w-full h-full p-0.5 "
                      priority
                    />
                  ) : (
                    <Image
                      src="/svg/img_link.svg"
                      alt="linkeden"
                      width={70}
                      height={70}
                      className="object-cover w-full h-full p-0.5"
                      priority
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex  items-center gap-3">
            <Select
              value={currentLocale}
              onValueChange={(value) => {
                value === "mn"
                  ? router.push(`/?locale=mn`)
                  : router.push(`/?locale=en`);
              }}
            >
              <SelectTrigger className="w-[80px] mt-10" dir="bottom">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="w-[60px]">
                <Link
                  href={{
                    pathname: currentPath,
                    query: { locale: "mn" },
                  }}
                >
                  <SelectItem value="mn" className="w-full">
                    <Image
                      src="/svg/mn.svg"
                      width={30}
                      height={20}
                      alt="Mongolian Flag"
                    />
                  </SelectItem>
                </Link>
                <Link
                  href={{
                    pathname: currentPath,
                    query: { locale: "en" },
                  }}
                >
                  <SelectItem value="en">
                    <Image
                      src="/svg/en.svg"
                      width={30}
                      height={20}
                      alt="English Flag"
                    />
                  </SelectItem>
                </Link>
              </SelectContent>
            </Select>

            <Button
              className="relative bg-gradient text-black w-fit  font-semibold text-md hover:scale-105 transition-transform hover:shadow z-50 overflow-hidden hover:transition-all duration-500 ease-in-out mt-10"
              size="lg"
            >
              Үнийн санал авах
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Header;
