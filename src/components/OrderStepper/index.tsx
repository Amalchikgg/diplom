import { useTranslations } from "next-intl";
import Image from "next/image";

interface Props {
  active: boolean;
  last: boolean;
  text: string;
  image: string;
  success: boolean;
  cancelOrder: boolean;
  index: number;
}

const OrderStepper = ({
  active,
  last,
  text,
  image,
  success,
  cancelOrder,
  index,
}: Props) => {
  const t = useTranslations("Index");
  return (
    <div>
      <div className='flex items-center gap-2'>
        <Image
          src={cancelOrder && index == 0 ? "/assets/icons/report.svg" : image}
          alt='process'
          width={24}
          height={24}
          className='tablet:w-[34px] tablet:h-[34px]'
        />
        <p
          className={`text-gray6 tablet:text-[20px] font-semibold leading-[150%] ${
            active && "!text-mainText dark:!text-white"
          } ${success && "!text-primaryMain dark:!text-primaryMain"}`}
        >
          {cancelOrder && index == 0 ? t("orderWasCanceled") : text}
        </p>
      </div>
      {!last && (
        <div
          className={`h-5 border-l border-dashed border-gray3 my-1 ml-3 ${
            success && "!border-primaryMain"
          }`}
        />
      )}
    </div>
  );
};

export default OrderStepper;
