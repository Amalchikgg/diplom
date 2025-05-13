"use client";
import { gilroy } from "@/app/fonts";
import { useRouter } from "@/middleware";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  width: number;
  height: number;
  link: string;
  className?: string;
}

const ShareItem = ({ src, title, width, height, link, className }: Props) => {
  const router = useRouter();

  const handleRoute = () => {
    router.push(link as never);
  };
  return (
    <div
      onClick={handleRoute}
      className="w-[456px] h-[217px] tablet:w-[314px] cursor-pointer bg-primaryMain rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] relative pt-[21px] pl-[25px]"
    >
      <p
        className={`${gilroy.className} text-white text-[36px] font-bold w-[220px] leading-[1.2]`}
      >
        {title}
      </p>
      <Image
        src={src}
        alt="share"
        width={width}
        height={height}
        className={`absolute right-0 bottom-0 ${className}`}
      />
    </div>
  );
};

export default ShareItem;
