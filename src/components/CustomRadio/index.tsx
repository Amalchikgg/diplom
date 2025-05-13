import { MouseEventHandler } from "react";

interface Props {
  active: boolean;
  title: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  className?: string;
  textClass?: string;
}

const CustomRadio = ({
  active,
  title,
  onClick,
  className,
  textClass,
}: Props) => {
  return (
    <div
      className={`flex items-center mr-[125px] ${className}`}
      onClick={onClick}
    >
      <div
        className={`w-[24px] h-[24px] rounded-full cursor-pointer border-[7px] bg-white dark:bg-gray2 ${
          active ? "border-primaryMain" : "border-[#A0AEC0] dark:border-white"
        } mr-[11px]`}
      />
      <p
        className={`font-medium text-[20px] text-mainText dark:text-white ${textClass}`}
      >
        {title}
      </p>
    </div>
  );
};

export default CustomRadio;
