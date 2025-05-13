import { UseFormRegister } from "react-hook-form";
import LinkCardModal from "../LinkCardModal";
import Title from "../Title";
import ChooseCardModal from "../ChooseCardModal";
import FormInput from "../FormInput";
import Image from "next/image";
import { useTranslations } from "next-intl";
import RestaurantTab from "../RestaurantTab";
import { useState } from "react";
import { payTabs } from "@/constants/mockData";
import { useTheme } from "next-themes";

interface Props {
  register: UseFormRegister<any>;
}

const PaymentDelivery = ({ register }: Props) => {
  const t = useTranslations("Index");
  const { theme } = useTheme();
  const [tab, $tab] = useState("");

  const handleTab = (title: string) => () => {
    $tab(title);
  };
  return (
    <form className='w-[702px] tablet:w-full'>
      <div className='bg-white dark:bg-gray3 p-8 pr-[45px] tablet:!p-8 tablet:w-full rounded-[24px] mb-5'>
        <Title
          title={t("delivery")}
          className='!text-[32px] !mb-3 leading-[144%]'
        />
        <div className='flex items-center mb-5 tablet:w-full tablet:justify-start tablet:pl-5 pl-5 gap-[10px] rounded-[10px] bg-gray10 dark:bg-gray2 dark:border-none border border-gray9 w-full h-[50px]'>
          <Image
            src={`/assets/icons/${
              theme === "dark" ? "locationWhite" : "locationBlack"
            }.svg`}
            alt='location'
            width={30}
            height={30}
          />
          <p className='text-mainText dark:text-white'>Чилонзор 1, 4</p>
        </div>
        <div className='flex items-center gap-4 mb-5 tablet:!w-full'>
          <FormInput
            register={register}
            registerItem={"approach"}
            required={false}
            placeholder={t("approach")}
            className='border-none !rounded-[12px] text-center !mb-0 !p-0 !bg-gray10 !w-[122px] dark:!bg-gray2 placeholder:text-gray6'
          />
          <FormInput
            register={register}
            registerItem={"floor"}
            required={false}
            placeholder={t("floor")}
            className='border-none !rounded-[12px] text-center !mb-0 !p-0 !bg-gray10 !w-[122px] dark:!bg-gray2 placeholder:text-gray6'
          />
          <FormInput
            register={register}
            registerItem={"apartment"}
            required={false}
            placeholder={t("apartment")}
            className='border-none !rounded-[12px] text-center !mb-0 !p-0 !bg-gray10 !w-[122px] dark:!bg-gray2 placeholder:text-gray6'
          />
          <FormInput
            register={register}
            registerItem={"interCom"}
            required={false}
            placeholder={t("interCom")}
            className='border-none !rounded-[12px]  !mb-0 text-center !p-0 !bg-gray10 !w-[211px] dark:!bg-gray2 placeholder:text-gray6 tablet:!w-[500px]'
          />
        </div>
        <FormInput
          register={register}
          registerItem={"courierComment"}
          required={false}
          placeholder={t("courierComment")}
          className='border-none !rounded-[12px] !pl-[29px] !mb-0 !bg-gray10 !w-full dark:!bg-gray2 placeholder:text-gray6'
        />
      </div>
      <div className='p-8 bg-white dark:bg-gray3 rounded-[24px] mb-5'>
        <Title
          title={t("paymentSelection")}
          className='!text-[32px] !mb-5 leading-[144%]'
        />
        <div className='flex gap-[13px]'>
          <div className='w-full  tablet:hidden'>
            <RestaurantTab
              title={t("cash")}
              onClick={handleTab("cash")}
              active={"cash" === tab}
              className='!w-full !justify-start pl-[29px] mb-[10px] !border-none bg-gray10 dark:bg-gray2'
              activeBg='bg-primaryMain'
              activeText='!text-white'
              image={
                <Image
                  src={`/assets/icons/${
                    "cash" === tab ? "cashWhite" : "cash"
                  }.svg`}
                  alt='cash'
                  width={24}
                  height={24}
                />
              }
              textClass={`${
                "cash" === tab ? "!text-white" : "!text-black dark:!text-white"
              } ml-2.5`}
            />
            <div className='block tablet:hidden'>
              <ChooseCardModal />
            </div>
          </div>
          <div className='hidden tablet:flex items-center justify-between w-full'>
            {payTabs.map((data, i) => (
              <RestaurantTab
                key={data.name}
                title={t(data.name)}
                onClick={handleTab(data.name)}
                active={data.name === tab}
                className='!w-full !justify-start pl-[29px] !border-none bg-gray10'
                activeBg='bg-primaryMain'
                activeText='!text-white'
                image={data.name === tab ? data.activeImage : data.image}
                textClass={`${
                  data.name === tab ? "!text-white" : "!text-black"
                } ml-2.5`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='bg-white dark:bg-gray3 rounded-[12px] pl-[27px] pr-8 pt-[14px] pb-[13px] tablet:flex tablet:gap-5'>
        <div className='hidden tablet:block'>
          <ChooseCardModal />
        </div>
        <LinkCardModal />
      </div>
    </form>
  );
};

export default PaymentDelivery;
