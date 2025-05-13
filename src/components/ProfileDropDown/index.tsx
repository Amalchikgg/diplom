"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import MyDataModal from "../MyDataModal";
import { useRouter } from "@/middleware";
import { useOpenClose } from "@/hooks/useOpenClose";
import { useTheme } from "next-themes";

const ProfileDropDown = () => {
  const t = useTranslations("Index");
  const { ref, open, onOpen } = useOpenClose();
  const { theme, setTheme } = useTheme();
  const [halal, $halal] = useState(true);
  const router = useRouter();

  const handleRouter = (link: string) => () => {
    router.push(link as never);
  };

  console.log(theme);

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  };

  const handleHalal = () => {
    $halal(!halal);
  };
  return (
    <div className='relative' ref={ref}>
      <div
        className='w-[50px] h-[50px] rounded-full cursor-pointer'
        onClick={onOpen}
      >
        <Image
          src={"/assets/icons/avatar.svg"}
          alt='avatar'
          width={50}
          height={50}
          className='rounded-full'
        />
      </div>
      <div
        className={`bg-white dark:bg-gray3 rounded-[10px] cursor-pointer w-[344px] absolute right-0 top-[75px] z-[100] transition_dropdown ${
          open ? "dropdown_open" : ""
        }`}
      >
        <MyDataModal />
        <div
          className='flex items-center gap-[15px] py-[15px] pl-5'
          onClick={handleRouter("/history?type=activeOrders")}
        >
          <Image
            src={`/assets/icons/${
              theme === "dark" ? "activeOrdersGreen" : "active"
            }.svg`}
            alt='active'
            width={24}
            height={24}
          />
          <p className='text-gray1 dark:text-white font-medium'>
            {t("activeOrders")}
          </p>
        </div>
        <div
          className='flex items-center gap-[15px] py-[15px] pl-5'
          onClick={handleRouter("/history?type=history")}
        >
          <Image
            src={`/assets/icons/${
              theme === "dark" ? "historyGreen" : "history"
            }.svg`}
            alt='history'
            width={24}
            height={24}
          />
          <p className='text-gray1 dark:text-white font-medium'>
            {t("history")}
          </p>
        </div>
        <div
          className='flex items-center gap-[15px] py-[15px] pl-5'
          onClick={handleHalal}
        >
          <Image
            src={`/assets/icons/${
              theme === "dark" ? "halalGreen" : "halal"
            }.svg`}
            alt='halal'
            width={24}
            height={24}
            className={`${!halal && "rotate-180"}`}
          />
          <p className='text-gray1 dark:text-white font-medium'>
            {t(halal ? "halal" : "defaultMode")}
          </p>
        </div>
        <div
          className='flex items-center gap-[15px] py-[15px] pl-5'
          onClick={handleTheme}
        >
          <Image
            src={`/assets/icons/${
              theme === "dark" ? "halalGreen" : "halal"
            }.svg`}
            alt='halal'
            width={24}
            height={24}
            className={`${theme === "dark" && "rotate-180"}`}
          />
          <p className='text-gray1 dark:text-white font-medium'>
            {t(theme !== "dark" ? "darkTheme" : "lightTheme")}
          </p>
        </div>
        <div className='flex items-center gap-[15px] py-[15px] pl-5'>
          <Image
            src={`/assets/icons/${theme === "dark" ? "exitGreen" : "exit"}.svg`}
            alt='exit'
            width={24}
            height={24}
          />
          <p className='text-gray1 dark:text-white font-medium'>{t("exit")}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropDown;
