import { useTranslations } from "next-intl";
import Image from "next/image";
import InfoCard from "../InfoCard";

const GuestCard = () => {
  const t = useTranslations("Index");
  return (
    <div className='bg-gray10 dark:bg-gray2 rounded-[24px] px-5 pb-5 pt-3'>
      <div className='flex items-center gap-3 mb-6'>
        <Image
          src={"/assets/icons/avatarka.svg"}
          alt='avatar'
          width={84}
          height={84}
        />
        <div>
          <p className='font-semibold text-[20px] text-black dark:text-white'>
            Амаль Абдураимов
          </p>
          <p className='font-semibold text-gray5'>{t("guest")}</p>
        </div>
      </div>
      <div className='flex items-center flex-wrap gap-x-2 gap-y-4'>
        <InfoCard
          image='floor'
          title={"Сектор А (1 этаж)"}
          className='!w-[220px] !py-[18.5] tablet:!w-[33%]'
        />
        <InfoCard
          image='chair'
          title={"Стол №19"}
          className='!w-[220px] !py-[18.5] tablet:!w-[33%]'
        />
        <InfoCard
          image='calendarGreen'
          title={"01/11/23"}
          className='!w-[220px] !py-[18.5] tablet:!w-[32%]'
        />
        <InfoCard
          image='timeGreen'
          title={"19:00"}
          className='!w-[220px] !py-[18.5] tablet:!w-[33%]'
        />
      </div>
    </div>
  );
};

export default GuestCard;
