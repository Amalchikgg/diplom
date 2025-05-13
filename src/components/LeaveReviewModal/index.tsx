"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import CustomModal from "../CustomModal";
import Title from "../Title";

const LeaveReviewModal = () => {
  const t = useTranslations("Index");
  const [open, $open] = useState(false);
  const [starFood, $starFood] = useState(0);
  const [starDelivery, $starDelivery] = useState(0);

  const handleOpen = () => {
    $open(!open);
  };

  const handleStar = (index: number, type: "food" | "delivery") => () => {
    if (type === "food") $starFood(index);
    if (type === "delivery") $starDelivery(index);
  };
  return (
    <>
      <div
        className='flex items-center justify-end cursor-pointer'
        onClick={handleOpen}
      >
        <p className='text-gray5 text-[20px] leading-[148%] font-semibold mr-[11px]'>
          {t("leaveReview")}
        </p>
        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            src={"/assets/icons/noStar.svg"}
            alt='star'
            width={47.78}
            height={45.66}
          />
        ))}
      </div>
      <CustomModal
        open={open}
        onClose={() => $open(false)}
        closeIcon={false}
        className='w-[982px] !pt-8 !pr-[41px] !pl-[47px] pb-[34px]'
      >
        <Title
          title={t("leaveReview")}
          className='!leading-[146%] !mb-[14px]  tablet:!text-[32px] tablet:!mb-1'
        />
        <p className='text-black dark:text-white text-[24px] mb-5 tablet:!text-[18px] tablet:!mb-1'>
          {t("leaveReviewText")}
        </p>
        <div className='flex items-center cursor-pointer mb-[14px]'>
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src={`/assets/icons/${
                i + 1 <= starFood ? "activeStar" : "noStar"
              }.svg`}
              alt='star'
              width={67}
              height={67}
              onClick={handleStar(i + 1, "food")}
            />
          ))}
        </div>
        <textarea
          placeholder={t("leaveText")}
          className='w-full h-[176px] rounded-[24px] border mb-10 border-gray9 dark:bg-gray2 dark:border-none bg-gray10 resize-none py-3 px-5 text-mainText outline-none placeholder:text-gray-[#CBD5E0]'
        />
        <p className='text-black dark:text-white text-[24px] mb-5 tablet:!text-[18px] tablet:!mb-1'>
          {t("leaveReviewText2")}
        </p>
        <div className='flex items-center cursor-pointer mb-[14px]'>
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src={`/assets/icons/${
                i + 1 <= starDelivery ? "activeStar" : "noStar"
              }.svg`}
              alt='star'
              width={67}
              height={67}
              onClick={handleStar(i + 1, "delivery")}
            />
          ))}
        </div>
        <textarea
          placeholder={t("leaveText")}
          className='w-full h-[216px] rounded-[24px] dark:bg-gray2 dark:border-none border mb-5 border-gray9 bg-gray10 resize-none py-3 px-5 text-mainText outline-none placeholder:text-gray-[#CBD5E0]'
        />
        <div className='flex justify-end'>
          <button className='bg-primaryMain h-[50px] text-white w-[227px] rounded-[12px] font-medium'>
            {t("send")}
          </button>
        </div>
      </CustomModal>
    </>
  );
};

export default LeaveReviewModal;
