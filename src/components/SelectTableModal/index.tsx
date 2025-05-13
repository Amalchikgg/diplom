"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import CustomModal from "../CustomModal";
import Image from "next/image";
import { ChooseTableForm } from "@/types/Form";
import { SubmitHandler, useForm } from "react-hook-form";
import InputGroup from "../InputGroup";
import RestaurantTab from "../RestaurantTab";
import { sectorTabs } from "@/constants/mockData";
import TableItem from "../TableItem";
import { useTheme } from "next-themes";

interface Props {
  open: boolean;
  onClose: () => void;
}

const SelectTableModal = ({ open, onClose }: Props) => {
  const t = useTranslations("Index");
  const [tab, $tab] = useState("");
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChooseTableForm>({
    mode: "onChange",
  });

  const handleTab = (title: string) => () => {
    $tab(title);
  };

  const onSubmit: SubmitHandler<ChooseTableForm> = (data) => {
    console.log(data);
  };

  return (
    <CustomModal
      open={open}
      onClose={onClose}
      closeIcon={false}
      className='!w-[1344px] tablet:!w-[882px] !rounded-[12px] !p-8'
    >
      <div className='relative flex items-center justify-center mb-[40px]'>
        <Image
          src={"/assets/icons/arrowOrange.svg"}
          alt='arrow'
          width={24}
          height={24}
          className='absolute left-0 cursor-pointer'
          onClick={onClose}
        />
        <p className='text-black dark:text-white text-[32px] font-bold'>
          {t("chooseTable")}
        </p>
      </div>
      <p className='text-black dark:text-white text-[24px] font-bold mb-[28px]'>
        {t("selectDateAndTime")}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex items-center gap-10 mb-9 tablet:flex-col tablet:items-start'>
          <InputGroup
            placeholder={t("enterDate")}
            iconName={`${theme === "dark" ? "calendarGreen" : "calendar"}`}
            register={register}
            registerItem={"date"}
          />
          <InputGroup
            placeholder={t("enterTime")}
            iconName={`${theme === "dark" ? "timeGreen" : "time"}`}
            register={register}
            registerItem={"time"}
          />
          <InputGroup
            placeholder={t("guestsCount")}
            iconName={`${theme === "dark" ? "guestsGreen" : "person"}`}
            register={register}
            registerItem={"guestsCount"}
          />
        </div>
        <p className='text-black text-[24px] font-bold mb-[28px] dark:text-white'>
          {t("tapTable")}
        </p>
        <div className='flex items-center gap-6 mb-9'>
          {sectorTabs.map((data, i) => (
            <RestaurantTab
              key={data}
              title={data}
              onClick={handleTab(data)}
              active={data == tab}
              className='!w-[178px] !border-none bg-gray9 dark:bg-gray2'
              activeBg='!bg-primaryMain'
              activeText='!text-white'
              textClass={`${
                data == tab ? "!text-white" : "!text-black dark:!text-white"
              }`}
            />
          ))}
        </div>
        <div className='flex flex-wrap gap-5 mb-9'>
          {[...Array(11)].map((_, i) => (
            <TableItem key={i} />
          ))}
        </div>
        <Image
          src={"/assets/images/layout.png"}
          alt='layout'
          width={1280}
          height={602}
          className='mb-9'
        />
        <div className='flex justify-end'>
          <button
            className={`h-[50px] w-[377px] rounded-[12px] bg-primaryMain font-semibold text-[20px]`}
          >
            {t("subjectBook")}
          </button>
        </div>
      </form>
    </CustomModal>
  );
};

export default SelectTableModal;
