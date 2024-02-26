"use client";

import { HEADERS, SOCIAL_LINKS } from "@/lib/config";
import { Instagram, Menu } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { getTranslation } from "@/locale/common";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import path from "path";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Header = () => {
  const currentPath = usePathname();
  const router = useRouter();

  const currentLocale =
    currentPath && currentPath.startsWith("/en") ? "en" : "mn";

  return (
    <header className="fixed top-0 right-0 w-full bg-black/30 backdrop-blur-md z-20">
      <div className="container mx-auto py-4 flex items-center justify-between gap-8">
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
              width={65}
              height={65}
              className="object-cover w-full h-full bg bg-right"
              priority
            />
          </Link>
        </div>
        <div className="md:flex justify-between items-center hidden w-full">
          <div className=" flex items-center gap-4">
            {HEADERS.map((header) => (
              <>
                <Link
                  key={`header-${header.tag}`}
                  href={
                    !header.external
                      ? {
                          pathname: "/",
                          query: { section: header.tag },
                        }
                      : {
                          pathname: header.tag,
                        }
                  }
                  // shallow
                  className="pr-4 "
                >
                  <p
                    className={cn(
                      " ",
                      currentPath === "/" + header.tag
                        ? "text-white"
                        : "text-white"
                    )}
                  >
                    {getTranslation(currentLocale, header.tag)}
                  </p>
                </Link>
              </>
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
                value === "mn" ? router.push(`/`) : router.push(`/en`);
              }}
            >
              <SelectTrigger className="w-[80px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="w-[60px]">
                <SelectItem value="mn" className="w-full">
                  <Image
                    src="/svg/mn.svg"
                    width={30}
                    height={20}
                    alt="Mongolian Flag"
                  />
                </SelectItem>
                <SelectItem value="en">
                  <Image
                    src="/svg/en.svg"
                    width={30}
                    height={20}
                    alt="English Flag"
                  />
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=" block md:hidden">
          <HamburerMenu currentLocale={currentLocale} router={router} />
        </div>
      </div>
    </header>
  );
};

const HamburerMenu = ({
  currentLocale,
  router,
}: {
  currentLocale: string;
  router: any;
}) => {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger className="text-white">
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="text-black pb-16">
        <DrawerHeader>
          <DrawerTitle>Logo</DrawerTitle>
        </DrawerHeader>
        <div className=" text-black px-4 space-y-4">
          <div className="flex flex-col gap-4">
            {HEADERS.map((header) => (
              <>
                <Link
                  key={`header-mobile-${header.tag}`}
                  href={{
                    pathname: "/",
                    query: { section: header.tag },
                  }}
                  shallow
                  className="pr-4 "
                >
                  <Button className="">
                    <p className="text-black ">
                      {getTranslation(currentLocale, header.tag)}
                    </p>
                  </Button>
                </Link>
              </>
            ))}
          </div>
          <div className="flex items-center gap-4 ">
            {SOCIAL_LINKS.map((link) => (
              <Link key={`social-mobile-${link.title}`} href={link.href}>
                <div className="  flex justify-center items-center bg-white bg-opacity-20 p-2 rounded-md text-black">
                  <Instagram />
                </div>
              </Link>
            ))}
          </div>
          <Select
            value={currentLocale}
            onValueChange={(value) => {
              value === "mn" ? router.push(`/`) : router.push(`/en`);
            }}
          >
            <SelectTrigger className="w-[60px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mn">mn</SelectItem>
              <SelectItem value="en">en</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Header;
