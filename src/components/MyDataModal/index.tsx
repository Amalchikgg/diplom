"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { use, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MyDataForm } from "@/types/Form";
import { gilroy } from "@/app/fonts";
import DataInputForm from "../DataInputForm.tsx";
import CustomRadio from "../CustomRadio";
import CustomModal from "../CustomModal";
import { useOpenClose } from "@/hooks/useOpenClose";
import { useTheme } from "next-themes";
import useUpdateProfile from "@/tanstack/mutations/updateProfile";
import useUser from "@/tanstack/queries/useUser";

const MyDataModal = () => {
  const t = useTranslations("Index");
  const { open, onOpen, onClose } = useOpenClose();
  const [sex, $sex] = useState<"male" | "female">("male");
  const { data: user } = useUser();
  const { mutate } = useUpdateProfile();
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<MyDataForm>({
    mode: "onChange",
  });

  useEffect(() => {
    if (user) {
      $sex(user.profile.gender);
      setValue("name", user.profile.name);
      setValue("phoneNumber", user.phone);
      setValue("birthDay", user.profile.birth_date);
    }
  }, [user]);

  const onSubmit: SubmitHandler<MyDataForm> = (data) => {
    mutate({
      phone: data.phoneNumber,
      name: data.name,
      birth_date: data.birthDay,
      gender: sex,
    });
  };

  const handleSex = (title: "male" | "female") => () => {
    $sex(title);
  };

  return (
    <>
      <div
        className="flex items-center gap-[15px] py-[15px] pl-5"
        onClick={onOpen}
      >
        <Image
          src={`/assets/icons/${theme === "dark" ? "myDataGreen" : "info"}.svg`}
          alt="info"
          width={24}
          height={24}
        />
        <p className="text-gray1 dark:text-white font-medium">{t("myData")}</p>
      </div>
      <CustomModal open={open} onClose={onClose}>
        <p
          className={`${gilroy.className} text-[32px] text-mainText dark:text-white mb-[23px]`}
        >
          {t("myData")}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DataInputForm
            name="name"
            type="text"
            register={register}
            error={errors.name}
          />
          <DataInputForm
            name="phoneNumber"
            type="tel"
            register={register}
            error={errors.phoneNumber}
          />
          <div className="flex items-center justify-between mb-7">
            <p className="text-[20px] font-medium text-mainText dark:text-white">
              {t("sex")}
            </p>
            <div className="w-[479px] flex items-center">
              <CustomRadio
                title={t("men")}
                active={sex === "male"}
                onClick={handleSex("male")}
              />
              <CustomRadio
                title={t("women")}
                active={sex === "female"}
                onClick={handleSex("female")}
              />
            </div>
          </div>
          <DataInputForm
            name="birthDay"
            type="text"
            register={register}
            error={errors.birthDay}
            className="mb-[46px]"
          />
          <div className="flex items-center justify-end gap-5">
            <button
              type="button"
              className="bg-mainText w-[208px] h-[50px] text-white rounded-[12px] font-medium text-[20px]"
            >
              {t("abolish")}
            </button>
            <button
              type="submit"
              className={`bg-mainText w-[208px] text-white dark:bg-primaryMain h-[50px] rounded-[12px] font-medium text-[20px]`}
            >
              {t("save")}
            </button>
          </div>
        </form>
      </CustomModal>
    </>
  );
};

export default MyDataModal;
