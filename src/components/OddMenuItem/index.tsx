import { gilroy } from "@/app/fonts";
import Image from "next/image";
import { MouseEventHandler } from "react";

interface Props {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const OddMenuItem = ({ onClick }: Props) => {
  return (
    <div
      className="mb-[26px] w-full h-[326px] cursor-pointer relative"
      onClick={onClick}
    >
      <Image
        src={"/assets/images/breakfest.png"}
        alt="image"
        width={1180}
        height={326}
        className="w-full h-full object-cover rounded-[12px]"
      />
      <div className="w-full h-full absolute top-0 right-0 rounded-[12px] bg-[rgba(0,0,0,0.55)] flex flex-col items-center justify-center">
        <p
          className={`${gilroy.className} text-[40px] font-bold text-white leading-[34px] mb-[19px]`}
        >
          Завтраки
        </p>
      </div>
    </div>
  );
};

export default OddMenuItem;
