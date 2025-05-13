"use client";
import { Link, useRouter } from "@/middleware";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ProfileDropDown from "../ProfileDropDown";
import DeliveryDropDown from "../DeliveryDropDown";
import AddressDropDown from "../AddressDropDown";
import LanguageSwitcher from "../LanguageSwitcher";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import useUser from "@/tanstack/queries/useUser";
import { FormEvent, useEffect, useState } from "react";

const Header = () => {
  const t = useTranslations("Index");
  const pathname = usePathname();
  const router = useRouter();
  const { theme } = useTheme();
  const { data: user, isLoading } = useUser();
  const [keyword, setKeyword] = useState<string>("");

  // useEffect(() => {
  //   if (!isLoading && !user && !pathname.includes("auth")) {
  //     router.push("/auth/login" as never);
  //   }
  // }, [isLoading, user]);

  const handleRoutes = (link: string) => () => {
    router.push(link as never);
  };

  const handleNavigation = (keyword?: string) => {
    const param = keyword ? "?keyword=" + keyword : "";

    router.push(("/search" + param) as never);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    const keyword = e.target?.[0].value;
    if (keyword.length >= 2) {
      handleNavigation(keyword);
    }
  };

  return (
    <header
      className={`bg-white dark:bg-gray3 mb-[50px] mobile:hidden sticky top-0 z-10 w-[100%] py-6 ${
        pathname.includes("auth") || pathname.includes("oddMenu")
          ? "hidden"
          : ""
      }`}
    >
      <div className="max-w-[1434px] tablet:max-w-[1024px] w-full m-[0px_auto] px-[18px]">
        <div className="flex items-center tablet:mb-9 justify-between">
          <Image
            src={`/assets/icons/${theme === "dark" ? "logoWhite" : "logo"}.svg`}
            alt="logo"
            width={101}
            height={52}
            className="cursor-pointer"
            onClick={handleRoutes("/")}
          />
          <div className="flex items-center">
            <form onSubmit={onSubmit}>
              <div className="rounded-[10px] relative dark:border-none dark:bg-gray2 bg-gray10 w-[440px] mr-5 flex-shrink-0 tablet:w-full h-[50px] tablet:mr-[79px] py-[14px] pl-[60px] border border-gray9">
                <Image
                  src={"/assets/icons/search.svg"}
                  alt="search"
                  width={24}
                  height={24}
                  className="left-[24px] top-[14px] absolute"
                />
                <input
                  type="text"
                  name="keyword"
                  className="outline-none bg-[transparent] w-[220px] text-mainText placeholder:text-[#CBD5E0]"
                  placeholder={t("searchRestaurantAndFood")}
                />
                <button
                  type="submit"
                  onClick={handleRoutes(`/search?search=${keyword}`)}
                  className="absolute right-0 top-0 h-[50px] w-[94px] text-white bg-primaryMain rounded-[12px] font-bold"
                >
                  {t("search")}
                </button>
              </div>
            </form>
            <div className="flex tablet:hidden">
              <AddressDropDown />
              <DeliveryDropDown />
            </div>
          </div>

          <>
            <div className="flex items-center">
              <LanguageSwitcher />
              {!user ? (
                <ProfileDropDown />
              ) : (
                <>
                  <Image
                    src={"/assets/icons/profile.svg"}
                    alt="profile"
                    width={34}
                    height={34}
                    className="mr-[10px]"
                  />
                  <Link
                    href={"/auth/login" as never}
                    className="text-gray4 font-medium dark:text-white"
                  >
                    {t("login")}/
                  </Link>
                  <Link
                    href={"/auth/registration" as never}
                    className="text-gray4 font-medium dark:text-white"
                  >
                    {t("auth")}
                  </Link>
                </>
              )}
            </div>
          </>
        </div>
        <div className="tablet:flex items-center gap-5 hidden w-full">
          <DeliveryDropDown />
          <AddressDropDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
