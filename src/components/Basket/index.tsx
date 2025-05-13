import { useTranslations } from "next-intl";
import BasketItem from "../BasketItem";
import Title from "../Title";
import Image from "next/image";
import { MouseEventHandler, RefObject } from "react";
import SelectTableModal from "../SelectTableModal";
import { useOpenClose } from "@/hooks/useOpenClose";

interface Props {
  title: string;
  finalText: string;
  className?: string;
  type?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  finallyPay?: boolean;
  ref?: RefObject<HTMLDivElement>;
}

const Basket = ({
  title,
  finalText,
  className,
  type,
  onClick,
  finallyPay,
  ref,
}: Props) => {
  const t = useTranslations("Index");
  const { open, onOpen, onClose } = useOpenClose();
  const prepay = true;

  return (
    <div
      id='basket'
      ref={ref}
      className={`w-[458px] h-[830px] ${
        type == "book" && "!h-[920px]"
      } bg-white dark:bg-gray3 rounded-[20px] ${className}`}
    >
      <div className='flex items-center justify-between px-6 pt-8 pb-5'>
        <Title title={title} className='!mb-0' />
        <div className='w-[50px] h-[50px] bg-gray9 dark:bg-gray4 rounded-full p-[13px] cursor-pointer'>
          <Image
            src={"/assets/icons/delete.svg"}
            alt='delete'
            width={24}
            height={24}
          />
        </div>
      </div>
      {type == "book" && (
        <div
          onClick={onOpen}
          className='h-[50px] mx-6 flex items-center cursor-pointer justify-between rounded-[12px] bg-primaryMain pl-5 mb-5 mt-3 pr-[17px]'
        >
          <p className='text-[20px] font-medium'>
            {t(prepay ? "table" : "selectTable")} {prepay && "№12"}
          </p>
          {prepay && (
            <p className='font-semibold text-[20px]'>30.10.2023, 19:00</p>
          )}
        </div>
      )}
      <SelectTableModal open={open} onClose={onClose} />
      <div className='p-6 pr-0 shadow-[0_2px_14px_0_rgba(0,0,0,0.04)] h-[476px] tablet:h-[473px] rounded-[24px] mb-8'>
        <div className='scroll pr-6 flex flex-col gap-y-5 w-full max-h-[100%] h-[100%] overflow-y-scroll'>
          {[...Array(10)].map((_, i) => (
            <BasketItem key={i} />
          ))}
        </div>
      </div>
      <div className={`px-6 pb-5`}>
        {finallyPay && (
          <input
            placeholder={t("promocode")}
            className='outline-none text-[20px] mb-[55px] px-5 border w-full border-gray9 dark:bg-gray2 dark:border-none rounded-[12px] h-[50px] placeholder:text-[#A0AEC0] text-mainText'
          />
        )}
        {finallyPay && (
          <div className='flex items-center justify-between pl-[23px] pr-5 mb-[17px] tablet:mb-[-50px]'>
            <p className='text-gray5 font-semibold text-[20px]'>
              {t("discount")}
            </p>
            <p className='text-gray5 font-semibold text-[20px]'>12 000 сум</p>
          </div>
        )}
        <div
          onClick={onClick}
          className={`h-[50px] tablet:mt-[70px] cursor-pointer rounded-[12px] bg-[#459F86] flex items-center justify-between pl-5 pr-[17px] ${
            !prepay && "!bg-gray4"
          }`}
        >
          <p className='font-medium text-[20px] text-white'>{finalText}</p>
          <p className='text-[20px] font-bold text-white'>158 000 сум</p>
        </div>
      </div>
    </div>
  );
};

export default Basket;
