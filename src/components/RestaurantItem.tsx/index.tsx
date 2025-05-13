"use client";
import { useRouter } from "@/middleware";
import { Restaurant } from "@/types/ApiTypes";
import Image from "next/image";
import { useTranslations } from "use-intl";

interface Props {
  data: Restaurant;
}
const RestautantItem = ({ data }: Props) => {
  const t = useTranslations("Index");
  const router = useRouter();

  const handleRoute = () => {
    router.push(`/restaurant/${data?.id}` as never);
  };
  return (
    <div
      onClick={handleRoute}
      className="w-[336px] h-[310px] tablet:w-[315px] tablet:h-[305px] flex-shrink-0 rounded-[12px] cursor-pointer shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] bg-white dark:bg-gray3"
    >
      <div className="relative w-full h-[180px] tablet:h-[169px] rounded-[12px] mb-[13px] tablet:mb-3">
        <Image
          src={"/assets/images/restaurant.png"}
          alt="restaurant"
          width={336}
          height={180}
          className="w-full h-full object-cover rounded-[12px]"
        />
        <div className="rounded-[0_6px_6px_0] bg-[#FFA92C] p-1 w-[76px] h-6 absolute left-0 top-[30px]">
          <p className="text-xs font-medium">{t("discount")} 10%</p>
        </div>
        <div className="w-10 flex flex-col items-center justify-center h-10 rounded-full cursor-pointer bg-white dark:bg-gray4 shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] absolute right-[15px] bottom-[-20px]">
          <Image
            src={"/assets/icons/like.svg"}
            alt="like"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="pl-[15px] border-b border-b-gray9 dark:border-b-gray3 pb-[14px] mb-2 tablet:pb-[10px] tablet:mb-[7px]">
        <p className="text-mainText text-[24px] dark:text-white font-semibold mb-[5px]">
          {data?.name}
        </p>
        <div className="flex items-center gap-[7px]">
          <Image
            src={"/assets/icons/cartDelivery.svg"}
            alt="delivery"
            width={24}
            height={24}
          />
          <p className="text-[#A0AEC0]">{t("freeDelivery")}</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 pl-[15px] pb-2">
        <Image
          src={"/assets/icons/star.svg"}
          alt="star"
          width={24}
          height={24}
        />
        <p className="text-[#A0AEC0]">4.8(500+)</p>
      </div>
    </div>
  );
};

export default RestautantItem;
