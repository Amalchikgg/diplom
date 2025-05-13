"use client";
import { gilroy } from "@/app/fonts";
import { useOpenClose } from "@/hooks/useOpenClose";
import Image from "next/image";
import { useState } from "react";

const OddChangeLng = () => {
  const { open, onOpen, ref, onClose } = useOpenClose();
  const [language, $language] = useState("Русский");

  const handleLanguage = () => {
    if (language === "Русский") {
      $language("English");
    } else if (language === "English") {
      $language("Русский");
    }
    onClose();
  };
  return (
    <div className="relative" ref={ref}>
      <div
        onClick={onOpen}
        className="h-[54px] oddTablet:h-11 w-[166px] oddTablet:w-[147px] oddMobile:w-[120px] cursor-pointer flex items-center justify-center gap-[9px] bg-gray10 rounded-[12px]"
      >
        <p
          className={`text-mainText ${gilroy.className} font-semibold leading-[34px] text-[24px] oddTablet:text-[20px] oddMobile:text-base`}
        >
          {language}
        </p>
        <Image
          src={"/assets/icons/chevronBlack.svg"}
          alt="chevron"
          width={24}
          height={24}
        />
      </div>
      <div
        onClick={handleLanguage}
        className={`h-[54px] w-[166px] oddTablet:w-[147px] oddTablet:h-11 oddMobile:w-[120px] cursor-pointer  flex items-center justify-center gap-[9px] bg-gray10 rounded-[12px] absolute !top-[70px] oddTablet:!top-[55px] z-[100] transition_dropdown ${
          open ? "dropdown_open" : ""
        }`}
      >
        <p
          className={`${gilroy.className} text-[24px] oddTablet:text-[20px] font-bold leading-[34px] text-[#0069E3] oddMobile:text-base`}
        >
          {language === "English" ? "Русский" : "English"}
        </p>
      </div>
    </div>
  );
};

export default OddChangeLng;
