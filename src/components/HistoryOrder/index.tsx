import { useTranslations } from "next-intl";
import Image from "next/image";
import { MouseEventHandler, useMemo } from "react";

interface Props {
  onClick?: MouseEventHandler<HTMLDivElement>;
  history?: boolean;
  active?: boolean;
  type?: string;
  price?: string;
  name?: string;
  info?: string;
}

const HistoryOrder = ({
  onClick,
  active,
  price,
  name,
  info,
  history,
  type,
}: Props) => {
  const t = useTranslations("Index");

  const getImage = useMemo(() => {
    if (history) {
      return "time";
    }
    if (info === "Заказ обработан") {
      return "process";
    } else if (info === "Заказ готовится") {
      return "cook";
    } else if (info === "Заказ доставляется") {
      return "delivery";
    } else if (
      info === "Заказ доставлен" ||
      info === "Бронь добавлена" ||
      info === "Ждем вас"
    ) {
      return "check";
    }
    return "";
  }, [history, info]);
  return (
    <div
      onClick={onClick}
      className='h-[114px] w-[458px] tablet:w-full cursor-pointer flex items-center rounded-[24px] bg-white dark:bg-gray3 shadow-[0_2px_4px_0_rgba(0,0,0,0.1)]'
    >
      <div
        className={`${
          active ? "bg-primaryMain" : "bg-gray5"
        } w-[19px] h-[114px] rounded-[2px] rounded-l-[24px] mr-[18px]`}
      />
      <div className='flex items-center justify-between pr-[21px] w-full'>
        <div>
          <p className='text-black dark:text-white font-semibold text-[24px] mb-3'>
            {name}
          </p>
          <div className='flex items-center gap-2'>
            <Image
              src={
                info == "Заказ отменен" && !history
                  ? "/assets/icons/canceled.svg"
                  : `/assets/icons/${getImage}${
                      active && !history ? "Green" : "Gray"
                    }.svg`
              }
              alt={getImage}
              width={24}
              height={24}
            />
            <p className='text-gray6 font-medium'>
              {!history ? info : `5 минут назад`}
            </p>
          </div>
        </div>
        <div>
          <p className='text-black dark:text-white font-semibold text-[24px]'>
            {price}
          </p>
          <p
            className={`font-semibold text-sm ${
              !history
                ? active
                  ? "text-primaryMain"
                  : "text-gray4"
                : "text-secondaryMain"
            } text-end`}
          >
            {type}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryOrder;
