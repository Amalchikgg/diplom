import Image from "next/image";
import CustomModal from "../CustomModal";
import { useTranslations } from "next-intl";
import CustomRadio from "../CustomRadio";
import { useState } from "react";
import CustomCheck from "../CustomCheck";
import { modifications } from "@/constants/mockData";

interface Props {
  open: boolean;
  onClose: () => void;
}

const FoodInfoModal = ({ open, onClose }: Props) => {
  const t = useTranslations("Index");
  const parameters = ["Маленький", "Средний", "Большой"];
  const [parameter, $parameter] = useState("");
  const [modification, $modification] = useState<string[]>([]);

  const handleParameter = (title: string) => () => {
    $parameter(title);
  };

  const handleModification = (title: string) => () => {
    if (modification.some((item) => item == title)) {
      $modification(modification.filter((item) => item !== title));
    } else {
      $modification([...modification, title]);
    }
  };
  return (
    <CustomModal
      onClose={onClose}
      open={open}
      className='!rounded-[24px] !w-[682px] tablet:!w-[910px] tablet:!pl-[0px] tablet:pr-3 tablet:pt-3'
    >
      <div className='px-6 tablet:pr-8'>
        <div className='hidden tablet:flex mb-8'>
          <div className='mr-7 flex-shrink-0'>
            <Image
              src={"/assets/images/food.png"}
              alt='food'
              width={175}
              height={154}
              className='rounded-[24px] '
            />
          </div>
          <div className='w-full'>
            <p className='text-gray4 dark:text-white font-semibold w-[478px]'>
              Бургер с хрустящим сочным куриным филе в теплой булочке с
              кунжутом, увенчанный свежим салатом и сливочным майонезом, всего
              за 25 000 сум
            </p>
            <div className='flex items-center justify-between w-full'>
              <div>
                <p className='text-black text-[32px] font-semibold dark:text-white'>
                  Зингер
                </p>
                <p className='text-gray5 text-[24px] font-semibold dark:text-white'>
                  350 гр.
                </p>
              </div>
              <div className='flex items-center justify-between w-[60%]'>
                <p className='text-gray1 text-[32px] dark:text-white font-semibold'>
                  25 000 сум
                </p>
                <button className='h-[50px] w-[152px] bg-primaryMain text-white rounded-[12px] text-[20px] font-medium'>
                  {t("add")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between mb-5 tablet:hidden'>
          <Image
            src={"/assets/images/food.png"}
            alt='food'
            width={214}
            height={184}
            className='rounded-[24px]'
          />
          <p className='text-gray4 font-semibold w-[335px] dark:text-white'>
            Бургер с хрустящим сочным куриным филе в теплой булочке с кунжутом,
            увенчанный свежим салатом и сливочным майонезом, всего за 25 000 сум
          </p>
        </div>
        <p className='text-black text-[32px] font-semibold tablet:hidden dark:text-white'>
          Зингер
        </p>
        <p className='text-gray5 text-[24px] font-semibold mb-[22px] tablet:hidden '>
          350 гр.
        </p>
        <div className='flex items-center justify-between mb-8 tablet:hidden'>
          <p className='text-gray1 text-[32px] font-semibold dark:text-white'>
            25 000 сум
          </p>
          <button className='h-[50px] w-[152px] bg-primaryMain rounded-[12px] text-[20px] font-medium'>
            {t("add")}
          </button>
        </div>
        <div className='h-[1px] bg-[#1A202C] mb-5' />
        {parameters.map((data, i) => (
          <CustomRadio
            key={data}
            title={data}
            onClick={handleParameter(data)}
            active={parameter == data}
            className='flex-row-reverse !mr-0 justify-between h-[50px] bg-gray10 dark:bg-gray2 rounded-[15px] !px-4 !pr-2 mb-2'
            textClass='!text-base dark:text-white'
          />
        ))}
        <div className='h-[1px] bg-[#1A202C] mb-5 mt-5' />
        {modifications.map((data, i) => {
          const active = modification.some((item) => item == data.title);
          return (
            <CustomCheck
              key={data.title}
              title={data.title}
              secondTitle={data.secondTitle}
              onClick={handleModification(data.title)}
              active={active}
              textClass='text-mainText font-semibold dark:text-white'
              secondTitleClass='text-[#A0AEC0] font-semibold'
              className='h-[50px] rounded-[15px] bg-gray10 dark:bg-gray2 flex items-center justify-between px-4 mb-2'
            />
          );
        })}
      </div>
    </CustomModal>
  );
};

export default FoodInfoModal;
