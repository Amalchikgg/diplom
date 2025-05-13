"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Link } from "@/middleware";
import Image from "next/image";
import Social from "../Social";
import FooterLi from "../FooterLi";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const Footer = () => {
  const t = useTranslations("Index");
  const { theme } = useTheme();
  const pathname = usePathname();
  return (
    <footer
      className={`bg-[white] dark:bg-gray3 mobile:hidden pb-[138px] tablet:pb-10 rounded-t-[50px] ${
        pathname.includes("auth") || pathname.includes("oddMenu")
          ? "hidden"
          : ""
      }`}
    >
      <div className="max-w-[1434px] tablet:max-w-[1024px] w-full m-[0px_auto] pt-[67px] tablet:pt-[42px] tablet:px-[18px]">
        <div className="flex tablet:justify-between">
          <div className="mr-[152px] tablet:mr-[0px]">
            <Image
              src={`/assets/icons/${
                theme === "dark" ? "logoWhite" : "logo"
              }.svg`}
              alt="logo"
              width={59}
              height={30}
              className="mb-[34px]"
            />
            <p className="text-black dark:text-white w-[336px] tablet:w-[266px] mb-[32px] tablet:mb-[18px]">
              {t("footerText")}
            </p>
            <div className="flex items-center gap-[22px]">
              <Social link="#" image="instagram" />
              <Social link="#" image="facebook" />
              <Social link="#" image="linkedin" />
              <Social
                link="#"
                image={`${theme === "dark" ? "twitterWhite" : "x-twitter"}`}
              />
            </div>
          </div>
          <div className="mr-[145px] tablet:mr-[0px]">
            <p className="text-mainText dark:text-primaryMain font-semibold text-xl mb-9">
              {t("nav")}
            </p>
            <ul>
              <FooterLi title={t("main")} />
              <FooterLi title={t("restaurants")} />
              <FooterLi title={t("grades")} />
              <FooterLi title={t("shares")} />
            </ul>
          </div>
          <div className="mr-[112px] tablet:mr-[0px]">
            <p className="text-mainText dark:text-primaryMain font-semibold text-xl mb-9">
              {t("company")}
            </p>
            <ul>
              <FooterLi title={t("termsOfUse")} />
              <FooterLi
                title={t("privacyPolicy")}
                className="tablet:w-[140px]"
              />
              <FooterLi title={t("termsOfRetrun")} />
            </ul>
          </div>
          <div>
            <p className="text-mainText dark:text-primaryMain font-semibold text-xl mb-9">
              {t("contacts")}
            </p>
            <p className="inline text-black dark:text-white mr-0.5 mb-3">
              {t("needHelp")}
            </p>
            <span className="font-medium underline text-black dark:text-white">
              {t("contactUs")}
            </span>
            <div className="flex my-3">
              <Image
                src={`/assets/icons/${
                  theme === "dark" ? "callGreen" : "phone"
                }.svg`}
                alt="phone"
                width={15}
                height={15}
                className="mr-[15px]"
              />
              <p className="text-black dark:text-white">+ 998 93 999 99 99</p>
            </div>
            <div className="flex mb-3">
              <Image
                src={`/assets/icons/${
                  theme === "dark" ? "emailGreen" : "email"
                }.svg`}
                alt="email"
                width={15}
                height={15}
                className="mr-[15px]"
              />
              <Link
                href={"mailto:info@mail.uz" as never}
                className="text-black dark:text-white"
              >
                info@mail.uz
              </Link>
            </div>
            <div className="flex mb-3">
              <Image
                src={`/assets/icons/${
                  theme === "dark" ? "locationGreen" : "locationBlack"
                }.svg`}
                alt="location"
                width={15}
                height={15}
                className="mr-[15px] mb-[18px]"
              />
              <p className="text-black dark:text-white w-[244px]">
                {t("location")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
