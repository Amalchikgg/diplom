"use client";
import Image from "next/image";
import { useRouter } from "@/middleware";
import { useTranslations } from "next-intl";
import React from "react";
import { useTheme } from "next-themes";
import { gilroy } from "@/app/fonts";

const BackButton = ({ className }: { className?: string }) => {
  const t = useTranslations("Index");
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className={`flex items-center dark:bg-gray3 cursor-pointer w-[110px] gap-[7px] justify-center h-[47px] rounded-[12px] bg-gray9 mb-[14px] ${className}`}
    >
      <Image
        src={`/assets/icons/${
          theme === "dark" ? "arrowBackWhite" : "arrowBlack"
        }.svg`}
        alt="arrow"
        width={15}
        height={15}
        className="mt-0.5"
      />
      <p
        className={`${gilroy.className} text-gray1 dark:text-white font-semibold`}
      >
        {t("back")}
      </p>
    </div>
  );
};

export default BackButton;
