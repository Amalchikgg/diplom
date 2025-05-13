"use client";
import { useState } from "react";
import Image from "next/image";
import { gilroy } from "@/app/fonts";

const OddMenuDetail = () => {
  const [count, $count] = useState(0);
  const handleCount = (type: "inc" | "dec") => () => {
    if (type === "dec") {
      $count(count - 1);
    }
    if (type === "inc") {
      $count(count + 1);
    }
  };
  return (
    <div className="mb-10">
      <div className="w-full h-[326px] mb-[26px] rounded-[12px]">
        <Image
          src={"/assets/images/breakfestDetail.png"}
          alt="image"
          width={1180}
          height={326}
          className="w-full h-full object-cover rounded-[12px]"
        />
      </div>
      <div className="flex items-center justify-between mb-[18px]">
        <p
          className={`text-[32px] leading-[34px] font-semibold text-mainText ${gilroy.className}`}
        >
          Английский завтрак
        </p>
        <p className="text-[24px] oddTablet:text-[28px] oddMobile:text-base leading-[34px] font-semibold text-[#808080]">
          400г
        </p>
      </div>
      <p
        className={`text-[20px] font-medium text-mainText mb-[18px] ${gilroy.className}`}
      >
        Яйца жареные, бекон, тост, томаты черри
      </p>
      <div className="flex items-center justify-between oddMobile:mb-10">
        <p
          className={`${gilroy.className} text-[32px] leading-[34px] text-mainText `}
        >
          65 000 сум
        </p>
        <div
          className={`w-[196px] flex oddMobile:hidden items-center justify-between ${
            count === 0 && "!justify-end"
          }`}
        >
          {count >= 1 && (
            <>
              <button
                onClick={handleCount("dec")}
                className="tabGradient justify-center flex items-center w-[56px] h-[53px] rounded-[12px]"
              >
                <Image
                  src={"/assets/icons/oddMinus.svg"}
                  alt="minus"
                  width={24}
                  height={24}
                />
              </button>
              <p
                className={`${gilroy.className} text-[32px] leading-[34px] text-mainText `}
              >
                {count}
              </p>
            </>
          )}
          <button
            onClick={handleCount("inc")}
            className="tabGradient justify-center flex items-center w-[56px] h-[53px] rounded-[12px]"
          >
            <Image
              src={"/assets/icons/oddPlus.svg"}
              alt="plus"
              width={16}
              height={33}
            />
          </button>
        </div>
      </div>
      <div className="hidden oddMobile:flex items-center justify-between">
        {count >= 1 && (
          <>
            <button
              onClick={handleCount("dec")}
              className="tabGradient justify-center flex items-center w-[56px] oddMobile:h-[53px] oddMobile:w-[137px] h-[53px] rounded-[12px]"
            >
              <Image
                src={"/assets/icons/oddMinus.svg"}
                alt="minus"
                width={24}
                height={24}
              />
            </button>
            <p
              className={`${gilroy.className} text-[32px] leading-[34px] text-mainText `}
            >
              {count}
            </p>
          </>
        )}
        <button
          onClick={handleCount("inc")}
          className={`tabGradient justify-center oddMobile:h-[53px] oddMobile:w-[137px] flex items-center w-[56px] h-[53px] rounded-[12px] ${
            count === 0 && "!w-full"
          }`}
        >
          <Image
            src={"/assets/icons/oddPlus.svg"}
            alt="plus"
            width={16}
            height={33}
          />
        </button>
      </div>
    </div>
  );
};

export default OddMenuDetail;
