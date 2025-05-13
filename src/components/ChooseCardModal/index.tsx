"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import CustomModal from "../CustomModal";
import Title from "../Title";
import CustomRadio from "../CustomRadio";
import { cards } from "@/constants/mockData";
import { useOpenClose } from "@/hooks/useOpenClose";
import { useTheme } from "next-themes";

const ChooseCardModal = () => {
  const t = useTranslations("Index");
  const { open, onOpen, onClose } = useOpenClose();
  const { theme } = useTheme();
  const [card, $card] = useState("");

  const handleCard = (title: string) => () => {
    $card(title);
  };
  return (
    <>
      <div
        onClick={onOpen}
        className='cursor-pointer w-full tablet:w-[284px] h-[50px] bg-gray10 dark:bg-gray2 rounded-[12px] flex items-center gap-[10px] py-[13px] p-[29px]'
      >
        <Image
          src={"/assets/icons/card.svg"}
          alt='card'
          width={24}
          height={24}
        />
        <p className='text-[#1A202C] font-semibold dark:text-white'>
          {t("card")}
        </p>
      </div>
      <CustomModal
        onClose={onClose}
        open={open}
        className='!w-[408px] !pt-[15px] !pr-[15px] !pb-8 !pl-8'
      >
        <Title title={t("chooseCard")} className='!text-[32px] !mb-10' />
        <div className='flex flex-col mb-16'>
          {cards.map((data, i) => (
            <div className='flex items-center gap-x-2 pr-[25px]' key={data}>
              <Image
                src={`/assets/icons/${
                  theme === "dark" ? "cardGreen" : "cardBlack"
                }.svg`}
                alt='card'
                width={15}
                height={15}
              />
              <CustomRadio
                title={data}
                onClick={handleCard(data)}
                active={data == card}
                className='flex-row-reverse !mr-0 justify-between w-full h-[50px] rounded-[15px]'
                textClass='!text-[20px] !font-[400] dark:text-white'
              />
            </div>
          ))}
        </div>
        <button className='bg-primaryMain w-[341px] h-[50px] rounded-[12px] font-medium text-[20px]'>
          {t("select")}
        </button>
      </CustomModal>
    </>
  );
};

export default ChooseCardModal;
