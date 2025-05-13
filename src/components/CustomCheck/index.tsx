import Image from "next/image";
import { MouseEventHandler } from "react";

interface Props {
  active: boolean;
  title: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  className?: string;
  textClass?: string;
  secondTitle?: string;
  secondTitleClass?: string;
}

const CustomCheck = ({
  active,
  title,
  onClick,
  className,
  textClass,
  secondTitle,
  secondTitleClass,
}: Props) => {
  return (
    <div className={className}>
      <div className={`${secondTitle && "flex items-center gap-x-2"}`}>
        <p className={textClass}>{title}</p>
        {secondTitle && <p className={secondTitleClass}>{secondTitle}</p>}
      </div>
      <div
        onClick={onClick}
        className={`w-[30px] h-[30px] rounded-[10px] bg-[#CBD5E0] dark:bg-white flex items-center justify-center flex-col ${
          active && "!bg-primaryMain"
        }`}
      >
        {active && (
          <Image
            src={"/assets/icons/checkWhite.svg"}
            alt='check'
            width={18}
            height={18}
          />
        )}
      </div>
    </div>
  );
};

export default CustomCheck;
