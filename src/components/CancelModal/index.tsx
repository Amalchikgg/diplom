import { useTranslations } from "next-intl";
import CustomModal from "../CustomModal";
import Image from "next/image";
import { MouseEventHandler } from "react";
import Title from "../Title";
import { gilroy } from "@/app/fonts";
import { useTheme } from "next-themes";

interface Props {
  open: boolean;
  onClose: () => void;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CancelModal = ({ open, onClose, onClick }: Props) => {
  const t = useTranslations("Index");
  const { theme } = useTheme();
  return (
    <CustomModal
      open={open}
      onClose={onClose}
      className="!w-[882px] pt-[11px] pr-[13px]"
    >
      <div className="flex items-center flex-col">
        <Image
          src={`/assets/icons/${
            theme === "dark" ? "cancelDark" : "cancelOrder"
          }.svg`}
          alt="cancel"
          width={372}
          height={372}
          className="mb-[27px]"
        />
        <Title title={t("isCancelOrder")} className="!text-[40px] !mb-0" />
        <p
          className={`${gilroy.className} font-bold text-[20px] text-gray5 leading-[350%] mb-[15px]`}
        >
          {t("cancelOrderText")}
        </p>
        <div className="flex items-center justify-center gap-10 mb-7">
          <button
            onClick={onClose}
            className="rounded-[12px] w-[292px] h-[50px] bg-gray10 text-gray3 dark:bg-gray2 dark:text-white text-[20px] font-semibold"
          >
            {t("goBack")}
          </button>
          <button
            onClick={onClick}
            className="rounded-[12px] w-[292px] h-[50px] bg-primaryMain text-white text-[20px] font-semibold"
          >
            {t("cancelOrder")}
          </button>
        </div>
      </div>
    </CustomModal>
  );
};

export default CancelModal;
