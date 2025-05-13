import { MouseEventHandler } from "react";

interface Props {
  title: string;
  active: boolean;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  className?: string;
  activeBg?: string;
  activeText?: string;
  textClass?: string;
  image?: JSX.Element;
}

const RestaurantTab = ({
  title,
  active,
  onClick,
  className,
  activeBg = "bg-white",
  activeText = "text-primaryMain",
  textClass,
  image,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={`w-[326px] h-[50px] cursor-pointer border-gray10 rounded-[12px] flex justify-center items-center ${
        active && activeBg
      } ${className}`}
    >
      {image}
      <p
        className={`font-semibold text-gray5 ${textClass} ${
          active && activeText
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default RestaurantTab;
