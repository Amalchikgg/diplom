import { useOpenClose } from "@/hooks/useOpenClose";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";

const DeliveryDropDown = () => {
  const t = useTranslations("Index");
  const { open, onOpen, ref } = useOpenClose();
  const { theme } = useTheme();
  return (
    <div className='relative' ref={ref}>
      <div
        onClick={onOpen}
        className='border cursor-pointer tablet:mr-0 dark:bg-gray2 dark:border-none tablet:w-[148px] border-gray9 bg-gray10 h-[50px] w-[188px] rounded-[10px] py-[13px] pl-[20px] flex items-center'
      >
        <Image
          src={`/assets/icons/${
            theme === "dark" ? "deliveryWhite" : "delivery"
          }.svg`}
          alt='delivery'
          width={24}
          height={24}
          className='mr-[10px]'
        />
        <p className='text-gray1 leading-[137%] dark:text-white'>
          {t("delivery")}
        </p>
      </div>
      <div
        className={`bg-white dark:bg-gray3 rounded-[10px] cursor-pointer w-[344px] absolute left-0 top-[65px] z-[100] transition_dropdown ${
          open ? "dropdown_open" : ""
        }`}
      >
        <div className='flex items-center gap-[15px] py-[15px] pl-5'>
          <Image
            src={`/assets/icons/${
              theme === "dark" ? "deliveryGreen" : "delivery"
            }.svg`}
            alt='info'
            width={24}
            height={24}
          />
          <p className='text-gray1 font-medium dark:text-white'>
            {t("delivery")}
          </p>
        </div>
        <div className='flex items-center gap-[15px] py-[15px] pl-5'>
          <Image
            src={`/assets/icons/${theme === "dark" ? "bookGreen" : "book"}.svg`}
            alt='active'
            width={24}
            height={24}
          />
          <p className='text-gray1 font-medium dark:text-white'>{t("book")}</p>
        </div>
        <div className='flex items-center gap-[15px] py-[15px] pl-5'>
          <Image
            src={`/assets/icons/${
              theme === "dark" ? "takeawayGreen" : "takeaway"
            }.svg`}
            alt='history'
            width={24}
            height={24}
          />
          <p className='text-gray1 font-medium dark:text-white'>
            {t("takeAway")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDropDown;
