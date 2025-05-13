"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CustomModal from "../CustomModal";
import Title from "../Title";
import { gilroy } from "@/app/fonts";
import { useRouter } from "@/middleware";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

interface Props {
  open: boolean;
  onClose: () => void;
  book: boolean;
}

const OrderAddModal = ({ open, onClose, book }: Props) => {
  const t = useTranslations("Index");
  const { theme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    if (!book && open) {
      setTimeout(() => {
        handleRouter();
      }, 5000);
    }
  }, [book, open]);

  const handleRouter = () => {
    router.push("/history?type=activeOrders" as never);
  };
  return (
    <CustomModal
      open={open}
      onClose={onClose}
      closeIcon={false}
      className="flex flex-col items-center !w-[882px] !pt-[23px] pb-[63px] !pl-[45px] !pr-[55px]"
    >
      <Image
        src={`/assets/icons/${
          theme === "dark" ? "orderSuccessWhite" : "orderAdd"
        }.svg`}
        alt="image"
        width={391}
        height={391}
        className="mb-[14px]"
      />
      <Title title={t(book ? "bookPlaced" : "orderPlaced")} className="!mb-1" />
      <p
        className={`${gilroy.className} text-gray5 text-[20px] font-bold mb-[14px] text-center leading-[350%]`}
      >
        {t(book ? "bookPlacedText" : "orderPlacedText")}
      </p>
      <button
        onClick={handleRouter}
        className="w-[654px] h-[50px] rounded-[12px] bg-primaryMain text-[20px] font-semibold"
      >
        {t("activeOrders")}
      </button>
    </CustomModal>
  );
};

export default OrderAddModal;
