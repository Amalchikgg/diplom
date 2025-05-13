"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import CustomModal from "../CustomModal";
import Title from "../Title";
import { SubmitHandler, useForm } from "react-hook-form";
import { LinkCardForm } from "@/types/Form";
import FormInput from "../FormInput";
import { useOpenClose } from "@/hooks/useOpenClose";
import { useTheme } from "next-themes";

interface Props {
  book?: boolean;
}

const LinkCardModal = ({ book }: Props) => {
  const t = useTranslations("Index");
  const { open, onOpen, onClose } = useOpenClose();
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LinkCardForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<LinkCardForm> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div
        onClick={onOpen}
        className={`bg-gray10 dark:bg-gray2 cursor-pointer w-full tablet:w-[291px] h-[50px] rounded-[12px] flex items-center justify-between pl-[29px] pr-[18px] ${
          book && "mt-3"
        }`}
      >
        <p className='font-semibold text-[#1A202C] dark:text-white'>
          {t("linkCard")}
        </p>
        <Image
          src={`/assets/icons/${book ? "plusGreen" : "plusYellow"}.svg`}
          alt='plus'
          width={24}
          height={24}
        />
      </div>
      <CustomModal
        open={open}
        onClose={onClose}
        className='!rounded-[24px] !w-[719px] pt-[15px] pb-8 pr-[15px] pl-8'
      >
        <Title title={t("linkingCard")} className='!text-[32px] !mb-8' />
        <div className='flex items-center gap-[18px] mb-7'>
          <Image
            src={`/assets/icons/${theme === "dark" ? "visaWhite" : "visa"}.svg`}
            alt='visa'
            width={24}
            height={24}
          />
          <Image
            src={`/assets/icons/${
              theme === "dark" ? "mastercardWhite" : "mastercard"
            }.svg`}
            alt='mastercard'
            width={24}
            height={24}
          />
          <Image
            src={`/assets/icons/${
              theme === "dark" ? "uzcardWhite" : "uzcard"
            }.svg`}
            alt='uzcard'
            width={13}
            height={17}
          />
          <Image
            src={`/assets/icons/humo.svg`}
            alt='humo'
            width={29}
            height={17}
            className='shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-[transparent]'
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            register={register}
            registerItem={"cardNumber"}
            placeholder={t("cardNumber")}
            error={errors.cardNumber}
            className='border-none !rounded-[12px] !mb-[14px] !pl-[29px] !bg-gray10 dark:!bg-gray2 !w-[655px] placeholder:text-gray6 placeholder:font-semibold'
          />
          <div className='flex gap-5'>
            <FormInput
              register={register}
              registerItem={"deadline"}
              placeholder={t("deadline")}
              error={errors.deadline}
              className='border-none !rounded-[12px] !mb-[14px] !pl-[29px] !bg-gray10 dark:!bg-gray2 !w-[318px] placeholder:text-gray6 placeholder:font-semibold'
            />
            <FormInput
              register={register}
              registerItem={"cvv"}
              placeholder={"CVV"}
              error={errors.cvv}
              className='border-none !rounded-[12px] !mb-[14px] !pl-[29px] !bg-gray10 dark:!bg-gray2 !w-[318px] placeholder:text-gray6 placeholder:font-semibold'
            />
          </div>
          <FormInput
            register={register}
            error={errors.cardHolder}
            registerItem={"cardHolder"}
            placeholder={t("cardHolder")}
            className='border-none !rounded-[12px] !mb-[31px] !pl-[29px] dark:!bg-gray2 !bg-gray10 !w-[655px] placeholder:text-gray6 placeholder:font-semibold'
          />
          <div className='w-[655px] flex justify-end gap-5'>
            <button className='bg-mainText rounded-[12px] h-[50px] text-white w-[208px] text-[20px] font-medium'>
              {t("abolish")}
            </button>
            <button
              type='submit'
              className={`bg-mainText dark:bg-primaryMain rounded-[12px] h-[50px] text-white w-[208px] text-[20px] font-medium`}
            >
              {t("bind")}
            </button>
          </div>
        </form>
      </CustomModal>
    </>
  );
};

export default LinkCardModal;
