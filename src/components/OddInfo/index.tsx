import { gilroy } from "@/app/fonts";
import Image from "next/image";
import { MouseEventHandler } from "react";

interface Props {
  className?: string;
  icon?: { name: string; w: number; h: number };
  title?: string;
  titleClass?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const OddInfo = ({ className, icon, title, titleClass, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`${gilroy.className} h-[54px] rounded-[12px] flex items-center bg-gray10 justify-center gap-[9px] ${className}`}
    >
      {icon && (
        <Image
          src={`/assets/icons/${icon.name}.svg`}
          alt={icon.name}
          width={icon.w}
          height={icon.h}
        />
      )}
      {title && (
        <p
          className={`${gilroy.className} leading-[34px] text-mainText font-semibold text-[24px] oddTablet:text-[20px] ${titleClass}`}
        >
          {title}
        </p>
      )}
    </div>
  );
};

export default OddInfo;
