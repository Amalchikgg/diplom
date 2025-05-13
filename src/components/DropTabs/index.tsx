import { useTranslations } from "next-intl";
import Image from "next/image";
import { useOpenClose } from "@/hooks/useOpenClose";
import { useTheme } from "next-themes";

interface Props {
  activeTab: string;
  tabs: string[];
  onClick: (title: string) => () => void;
}

const DropTabs = ({ activeTab, tabs, onClick }: Props) => {
  const t = useTranslations("Index");
  const { theme } = useTheme();
  const { ref, open, onOpen } = useOpenClose();
  return (
    <div className='relative' ref={ref}>
      <div
        onClick={onOpen}
        className='rounded-[12px] bg-gray9 dark:bg-gray3 flex items-center mr-1 w-[92px] justify-center h-[50px] cursor-pointer'
      >
        <p className='text-gray1 font-semibold dark:text-white'>{t("yet")}</p>
        <Image
          src={`/assets/icons/${
            theme === "dark" ? "arrowWhite" : "chevronBlack"
          }.svg`}
          alt='chevron'
          width={24}
          height={24}
        />
      </div>
      <div
        className={`bg-white dark:bg-gray3 rounded-[10px] cursor-pointer w-[250px] absolute right-0 top-[55px] z-[100] transition_dropdown ${
          open ? "dropdown_open" : ""
        }`}
      >
        {tabs.map((data, i) => (
          <div
            key={i}
            onClick={onClick(data)}
            className={`flex items-center py-[15px] pl-5 ${
              activeTab === data && "bg-primaryMain"
            }`}
          >
            <p
              className={`text-gray1 dark:text-white font-medium ${
                activeTab === data && "!text-white"
              }`}
            >
              {data}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropTabs;
