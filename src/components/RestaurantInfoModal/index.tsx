import Image from "next/image";
import CustomModal from "../CustomModal";
import { useTranslations } from "next-intl";
import { useOpenClose } from "@/hooks/useOpenClose";

interface Props {
  name: string;
  address: string;
}

const RestaurantInfoModal = ({ name, address }: Props) => {
  const t = useTranslations("Index");
  const { open, onOpen, onClose } = useOpenClose();
  return (
    <>
      <div
        onClick={onOpen}
        className="w-[50px] h-[50px] dark:bg-gray2 rounded-full bg-gray9 p-[10px] cursor-pointer mr-5"
      >
        <Image
          src={"/assets/icons/infoGreen.svg"}
          alt="info"
          width={30}
          height={30}
        />
      </div>
      <CustomModal
        open={open}
        onClose={onClose}
        className="!rounded-[24px] w-[682px] !p-5"
      >
        <p className="font-bold text-mainText text-5xl mb-[11px] dark:text-white">
          {name}
        </p>
        <p className="text-black text-[24px] dark:text-white">{address}</p>
        <p className="text-gray5 text-[20px] font-medium mb-[15px]">
          {t("worksWith")} 9:00 {t("to")} 23:00
        </p>
        <p className="text-black text-[20px] dark:text-white">
          {t("performer")}: MCHJ KFC, 100000, Ташкент, Qo`Vunchi Ko`Chasi, 3-uy,
        </p>
      </CustomModal>
    </>
  );
};

export default RestaurantInfoModal;
