"use client";
import Image from "next/image";
import FoodInfoModal from "../FoodInfoModal";
import { useOpenClose } from "@/hooks/useOpenClose";
import { useTheme } from "next-themes";
import { Dish } from "@/types/ApiTypes";

interface Props {
  className?: string;
  search?: boolean;
  dish?: Dish;
}

const FoodItem = ({ className, search, dish }: Props) => {
  const { open, onOpen, onClose } = useOpenClose();
  const { theme } = useTheme();
  return (
    <>
      <div
        onClick={onOpen}
        className={`w-[214px] h-[257px] tablet:w-[232px] tablet:h-[280px] rounded-[24px] dark:bg-gray3 bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] cursor-pointer ${className}`}
      >
        <div
          className={`relative rounded-[24px] w-full h-[184px] tablet:h-[198px] mb-[11px] ${
            search && "!h-[143px] !mb-2"
          }`}
        >
          <Image
            src={"/assets/images/food.png"}
            alt="food"
            width={214}
            height={184}
            className="object-cover w-full h-full rounded-[24px]"
          />
          <div className="w-[35px] absolute top-3 right-[11px] h-[35px] bg-white dark:bg-gray3 rounded-full flex items-center justify-center flex-col">
            <Image
              src={`/assets/icons/${
                theme === "dark" ? "plusWhite" : "plus"
              }.svg`}
              alt="plus"
              width={24}
              height={24}
            />
          </div>
        </div>
        <p
          className={`text-black dark:text-white text-center font-semibold mb-1.5 tablet:mb-2 ${
            search && "!mb-0"
          }`}
        >
          {dish?.name}
        </p>
        <p className="text-gray5 dark:text-primaryMain text-sm font-semibold mb-[13px] text-center">
          {dish?.price} сум
        </p>
      </div>
      <FoodInfoModal onClose={onClose} open={open} />
    </>
  );
};

export default FoodItem;
