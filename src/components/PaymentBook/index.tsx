import { useTranslations } from "next-intl";
import { useState } from "react";
import Title from "../Title";
import LinkCardModal from "../LinkCardModal";
import ChooseCardModal from "../ChooseCardModal";
import RestaurantTab from "../RestaurantTab";
import { payTabs } from "@/constants/mockData";
import Image from "next/image";

const PaymentBook = () => {
  const t = useTranslations("Index");
  const [tab, $tab] = useState("");

  const handleTab = (title: string) => () => {
    $tab(title);
  };
  return (
    <div className='w-[702px] tablet:w-full'>
      <div className='bg-white dark:bg-gray3 rounded-[24px] p-8 pr-[45px] pb-[35px] mb-6'>
        <Title title={t("book")} className='!mb-5 !text-[32px]' />
        <div className='flex gap-4 mb-5'>
          <div className='bg-gray10 rounded-[12px] dark:bg-gray2 w-[280px] tablet:w-[260px] tablet:flex-shrink-0 h-[50px] py-[5px] pl-[17px]'>
            <p className='text-gray6 text-xs font-semibold'>{t("time")}</p>
            <p className='text-gray1 dark:text-white font-semibold'>19:00</p>
          </div>
          <div className='bg-gray10 dark:bg-gray2 rounded-[12px] w-[122px] tablet:w-[260px] tablet:flex-shrink-0 h-[50px] py-[5px] pl-[17px]'>
            <p className='text-gray6 text-xs font-semibold'>{t("guests")}</p>
            <p className='text-gray1 dark:text-white font-semibold'>6</p>
          </div>
          <div className='bg-gray10 dark:bg-gray2 rounded-[12px] w-[211px] tablet:w-full h-[50px] py-[5px] pl-[17px]'>
            <p className='text-gray6 text-xs font-semibold'>{t("date")}</p>
            <p className='text-gray1 dark:text-white font-semibold'>
              30.10.2023
            </p>
          </div>
        </div>
        <input
          placeholder={t("bookComment")}
          className='w-full outline-none rounded-[12px] bg-gray10 dark:bg-gray2 h-[50px] pl-[29px] placeholder:text-gray6 placeholder:font-semibold'
        />
      </div>
      <div className='p-8 bg-white dark:bg-gray3 rounded-[24px] mb-5 tablet:hidden'>
        <Title
          title={t("paymentSelection")}
          className='!text-[32px] !mb-5 leading-[144%]'
        />
        <div className='flex gap-[13px]'>
          <div className='w-full'>
            <ChooseCardModal />
            <LinkCardModal book />
          </div>
        </div>
      </div>
      <div className='hidden tablet:block'>
        <div className='p-8 bg-white dark:bg-gray3 rounded-[24px] mb-5'>
          <Title
            title={t("paymentSelection")}
            className='!text-[32px] !mb-5 leading-[144%]'
          />
          <div className='flex gap-[13px]'>
            <div className='hidden tablet:flex items-center justify-between w-full'>
              {payTabs.map((data, i) => {
                if (data.name !== "cash") {
                  return (
                    <RestaurantTab
                      key={data.name}
                      title={t(data.name)}
                      onClick={handleTab(data.name)}
                      active={data.name === tab}
                      className='!w-[32%] !justify-start pl-[29px] !border-none bg-gray10 dark:bg-gray2'
                      activeBg='bg-primaryMain'
                      activeText='!text-white'
                      image={data.name === tab ? data.activeImage : data.image}
                      textClass={`${
                        data.name === tab ? "!text-white" : "!text-black"
                      } ml-2.5`}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className='bg-white dark:bg-gray3 rounded-[12px] pl-[27px] pt-[14px] pb-[13px] tablet:flex tablet:gap-5'>
          <div className='hidden tablet:block'>
            <ChooseCardModal />
          </div>
          <LinkCardModal />
        </div>
      </div>
    </div>
  );
};

export default PaymentBook;
