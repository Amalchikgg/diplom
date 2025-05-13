import { useTranslations } from "next-intl";
import Image from "next/image";

interface Props {
  className?: string;
  image: string;
  title: string;
  text?: string;
}

const InfoCard = ({ className, image, title, text }: Props) => {
  const t = useTranslations("Index");
  return (
    <div
      className={`bg-gray9 dark:bg-gray3 rounded-[20px] w-[147px] h-[94px] pt-3 pb-[9px] flex items-center justify-center flex-col gap-1 ${className}`}
    >
      <Image
        src={`/assets/icons/${image}.svg`}
        alt='image'
        width={25}
        height={25}
      />
      <p className='text-black font-semibold dark:text-white'>{title}</p>
      {text && <p className='text-xs font-semibold text-gray5'>{text}</p>}
    </div>
  );
};

export default InfoCard;
