"use client";
import { modifications } from "@/constants/mockData";
import Image from "next/image";
import { useState } from "react";

interface Props {
  info?: boolean;
}

const BasketItem = ({ info }: Props) => {
  const [count, $count] = useState(1);
  const name = "Meal for Many";
  const shortName = name.slice(0, 11);
  const handleCount = (title: "inc" | "desc") => () => {
    if (title === "desc" && count > 1) {
      $count(count - 1);
    } else if (title === "inc") {
      $count(count + 1);
    }
  };
  return (
    <div className='flex items-center justify-between border-b border-[#CBD5E0] dark:border-gray4 pb-4 pr-5'>
      <div className='flex items-center'>
        <div className='w-[89px] h-[92px] mr-[14px]'>
          <Image
            src={"/assets/images/food.png"}
            alt='food'
            width={89}
            height={92}
            className='rounded-[24px] w-full h-full object-fill'
          />
        </div>
        <div>
          <p className='inline text-black dark:text-white font-semibold mr-1 mb-2'>
            {name.length >= 11 ? `${shortName}..` : name}
          </p>
          <p className='inline text-xs text-gray5 font-semibold mb-2'>
            150 гр.
          </p>
          <p className='text-xs text-gray5 font-semibold mb-2'>Маленький</p>
          {modifications.map((data) => (
            <p
              key={data.title}
              className='text-[10px] font-semibold text-[#A0AEC0] leading-[1.2]'
            >
              {data.title}
            </p>
          ))}
          <p className='text-gray5 text-sm font-semibold mt-2'>65 000 сум</p>
        </div>
      </div>
      {info ? (
        <p className='text-black font-semibold dark:text-white'>x1</p>
      ) : (
        <div className='bg-white border dark:gray2 cursor-pointer border-gray9 dark:bg-gray2 dark:border-none rounded-[12px] w-[125px] h-[46px] flex items-center justify-between pl-[13px] pr-[9px]'>
          <Image
            src={"/assets/icons/minusGreen.svg"}
            alt='minus'
            width={23}
            height={24}
            onClick={handleCount("desc")}
          />
          <p className='text-mainText dark:text-white text-[20px] font-semibold'>
            {count}
          </p>
          <Image
            src={"/assets/icons/plusGreen.svg"}
            alt='plus'
            width={23}
            height={24}
            onClick={handleCount("inc")}
          />
        </div>
      )}
    </div>
  );
};

export default BasketItem;
