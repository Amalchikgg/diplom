import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import AddAddressModal from "../AddAddressModal";
import { useOpenClose } from "@/hooks/useOpenClose";
import { useTheme } from "next-themes";
import { AddressStore } from "@/store/addressStore";
import useAddresses from "@/tanstack/queries/useAddresses";

const AddressDropDown = () => {
  const t = useTranslations("Index");
  const [active, $active] = useState("");
  const { open, onOpen, ref } = useOpenClose();
  const { theme } = useTheme();
  const address = ["Eski Chilonzor passage 4", "Чилонзор 1, 4"];
  const { data: addresses } = useAddresses({ enabled: true });
  const addressStore = AddressStore((state) => state.address);
  const setAddress = AddressStore((state) => state.setAddress);

  const handleActive = (text: string) => () => {
    $active(text);
  };

  return (
    <div className="relative tablet:w-full" ref={ref}>
      <div
        onClick={onOpen}
        className="bg-gray9 cursor-pointer rounded-[10px] w-[200px] dark:bg-gray2 dark:border-none h-[50px] border border-gray9 mr-[18px] flex items-center py-[10px] pl-5 tablet:mr-0 tablet:w-full"
      >
        <Image
          src={`/assets/icons/${
            theme === "dark" ? "locationWhite" : "location"
          }.svg`}
          alt="location"
          width={24}
          height={23}
          className="mr-[14px]"
        />
        <p className="text-[#CBD5E0] dark:text-white">{t("enterAddress")}</p>
      </div>
      <div
        className={`bg-white dark:bg-gray3 rounded-[10px] cursor-pointer w-[243px] tablet:w-full tablet:right-0 absolute right-5 top-[70px] z-[100] transition_dropdown ${
          open ? "dropdown_open" : ""
        }`}
      >
        <AddAddressModal />
        {address.map((data, i) => (
          <div
            key={data}
            onClick={handleActive(data)}
            className={`py-[15px] pl-[20px] flex items-center gap-[15px] ${
              active === data
                ? "bg-white dark:bg-gray3"
                : "bg-gray10 dark:bg-gray3"
            }`}
          >
            <p className="text-mainText dark:text-white">{data}</p>
            {active === data && (
              <Image
                src={`/assets/icons/${
                  theme === "dark" ? "checkGreen" : "check"
                }.svg`}
                alt="check"
                width={24}
                height={24}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressDropDown;
