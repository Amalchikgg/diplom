import Image from "next/image";
import InfoCard from "../InfoCard";
import { useTranslations } from "next-intl";

const CourierCard = () => {
  const t = useTranslations("Index");
  return (
    <div className='bg-gray10 dark:bg-gray2 rounded-[24px] px-5 pb-5 pt-3'>
      <div className='flex items-center justify-between mb-6'>
        <div className='flex items-center gap-3'>
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
            <p className='font-semibold text-gray5'>{t("courier")}</p>
          </div>
        </div>
        <Image
          src={"/assets/icons/call.svg"}
          alt='avatar'
          width={35}
          height={35}
          className='tablet:w-[50px] tablet:h-[50px]'
        />
      </div>
      <div className='flex items-center gap-3'>
        <InfoCard
          image='way'
          title={"2 км"}
          text={t("distance")}
          className='tablet:w-full'
        />
        <InfoCard
          image='transport'
          title={"01 123 AC"}
          text={"скутер"}
          className='tablet:w-full'
        />
        <InfoCard
          image='timeGreen'
          title={`35 ${t("minutes")}`}
          text={t("left")}
          className='tablet:w-full'
        />
      </div>
    </div>
  );
};

export default CourierCard;
