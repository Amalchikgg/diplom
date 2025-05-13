"use client";
import { gilroy } from "@/app/fonts";
import Image from "next/image";
import { useState } from "react";

const OddBasketItem = () => {
  const [count, $count] = useState(1);
  const handleCount = (type: "inc" | "dec") => () => {
    if (type === "dec" && count > 1) {
      $count(count - 1);
    }
    if (type === "inc") {
      $count(count + 1);
    }
  };
  return (
    <div className="mb-[42px] pb-[42px] border-b-[1px] border-b-[#CBD5E0]">
      <div className="flex items-center justify-between mb-[18px]">
        <p
          className={`text-[32px] leading-[34px] font-semibold text-mainText ${gilroy.className}`}
        >
          Английский завтрак
        </p>
        <p
          className={`${gilroy.className} text-[24px] oddTablet:text-[28px]  oddMobile:text-base leading-[34px] font-semibold text-[#808080]`}
        >
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
          className={`${gilroy.className} text-[32px] font-bold leading-[34px] text-mainText `}
        >
          65 000 сум
        </p>
        <div
          className={`w-[196px] flex items-center oddMobile:hidden justify-between ${
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

export default OddBasketItem;
