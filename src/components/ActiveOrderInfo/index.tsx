"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import CancelModal from "../CancelModal";
import ProductInfoItem from "../ProductInfoItem";
import Stepper from "../Stepper";
import { bookSteps, deliverySteps, takeAwaySteps } from "@/constants/mockData";
import Title from "../Title";
import { useTranslations } from "next-intl";
import { useRouter } from "@/middleware";
import { useOpenClose } from "@/hooks/useOpenClose";
import { useTheme } from "next-themes";

const ActiveOrderInfo = () => {
  const t = useTranslations("Index");
  const { open, onOpen, onClose } = useOpenClose();
  const { theme } = useTheme();
  const [cancelOrder, $cancelOrder] = useState(false);
  const [pause, $pause] = useState(false);
  const router = useRouter();
  const step = 1;
  const type: string = "delivery";

  const steps = useMemo(() => {
    if (type === "delivery") {
      return deliverySteps;
    } else if (type === "book") {
      return bookSteps;
    } else if (type === "takeaway") {
      return takeAwaySteps;
    }
    return [];
  }, []);

  const handlePause = () => {
    $pause(false);
  };

  const handleCancelOrder = () => {
    $cancelOrder(true);
    onClose();
  };
  return (
    <div className='bg-white dark:bg-gray3 rounded-[20px] p-10 mt-[90px] tablet:mt-0 tablet:mb-10'>
      <div className='flex items-center justify-between mb-2 relative tablet:pl-[84px]'>
        <div
          onClick={() => router.back()}
          className='absolute left-0 top-6 hidden rounded-full tablet:flex w-[51px] h-[51px] bg-gray10 items-center flex-col justify-center'
        >
          <Image
            src={"/assets/icons/arrowGreen.svg"}
            alt='arrow'
            width={35}
            height={35}
          />
        </div>
        <Title title={`${t("order")} №123123123`} className='!mb-0' />
        <div className='flex items-center'>
          {pause && (
            <div className='flex items-center gap-6 -mb-10'>
              <div>
                <p className='font-medium text-[24px] text-black dark:text-white leading-[142%] text-end'>
                  {t("pause")}
                </p>
                <p className='text-gray5 dark:text-white leading-[143%] text-sm'>
                  {t("pauseText")}
                </p>
              </div>
              <Image
                src={`/assets/icons/${
                  theme === "dark" ? "playDark" : "play"
                }.svg`}
                alt='cancel'
                width={100}
                height={100}
                className='cursor-pointer'
                onClick={handlePause}
              />
            </div>
          )}
          {cancelOrder && (
            <div className='flex items-center gap-6 -mb-10'>
              <p className='text-[24px] text-black font-medium leading-[142%] dark:text-white'>
                {t("canceledOrder")}
              </p>
              <Image
                src={`/assets/icons/${
                  theme === "dark" ? "cancelOrderDark" : "cancel"
                }.svg`}
                alt='cancel'
                width={100}
                height={100}
              />
            </div>
          )}
          {!cancelOrder &&
            !pause &&
            steps.map((data, i) => (
              <Stepper
                key={data.image}
                image={
                  i + 1 <= step
                    ? data.activeImage
                    : theme === "dark"
                    ? data.darkImage
                    : data.image
                }
                last={steps.length == i + 1}
                active={i + 1 <= step}
              />
            ))}
        </div>
      </div>
      <p className='font-semibold text-gray4 dark:text-gray5 mb-[30px] tablet:pl-[84px]'>
        30/10/2023 7:32PM
      </p>
      <p className='text-[40px] text-black dark:text-white font-bold leading-[145%] mb-[18px]'>
        KFC
      </p>
      <div className='flex items-center justify-between mb-[31px]'>
        <div className='flex gap-x-4'>
          <button
            onClick={() => router.push("/restaurant" as never)}
            className='bg-gray10 w-[192px] h-11 rounded-[20px] text-mainText dark:text-white dark:bg-gray2 font-semibold'
          >
            {t("goToRestoran")}
          </button>
          <button
            onClick={() => !pause && router.push("/order" as never)}
            className={`bg-primaryMain w-[192px] text-white h-11 rounded-[20px] font-semibold ${
              pause && "!bg-gray4"
            }`}
          >
            {t("openCard")}
          </button>
        </div>
        <p
          className='font-semibold text-[#FEB2B2] cursor-pointer'
          onClick={onOpen}
        >
          {t("cancelOrder")}
        </p>
        <CancelModal
          open={open}
          onClose={onClose}
          onClick={handleCancelOrder}
        />
      </div>
      <div className='flex flex-col gap-5 mb-10 max-h-[430px] overflow-auto scroll pr-3'>
        {[...Array(5)].map((_, i) => (
          <ProductInfoItem key={i} />
        ))}
      </div>
      <div className='flex justify-between items-center mb-[10px]'>
        <p className='text-[20px] text-gray5 font-semibold'>{t("discount")}</p>
        <p className='text-[20px] text-gray5 font-bold'>12 000 сум</p>
      </div>
      <div className='flex items-center justify-between'>
        <p className='text-[24px] font-semibold text-gray3 dark:text-white'>
          {t("total")}
        </p>
        <p className='text-[20px] font-bold text-gray3 dark:text-white'>
          122 000 сум
        </p>
      </div>
    </div>
  );
};

export default ActiveOrderInfo;
