import Image from "next/image";
import { useTranslations } from "next-intl";
import CustomModal from "../CustomModal";
import { useOpenClose } from "@/hooks/useOpenClose";
import Map from "../Map";
import { MapTypes } from "@/types/ApiTypes";
import { useState } from "react";
import useCreateAddress from "@/tanstack/mutations/createAddress";

const AddAddressModal = () => {
  const t = useTranslations("Index");
  const { open, onOpen, onClose } = useOpenClose();
  const [latLng, $latLng] = useState<MapTypes | null>(null);
  const [address, $address] = useState("");
  const { mutate } = useCreateAddress();

  const handleLatLng = (value: MapTypes) => () => {
    $latLng(value);
  };

  const handleSubmit = () => {
    if (latLng) {
      mutate({
        latitude: latLng.lat,
        longitude: latLng.long,
        address,
        title: address,
      });
      onClose();
    }
  };
  return (
    <>
      <div
        className="py-[15px] pl-[20px] flex items-center gap-[15px]"
        onClick={onOpen}
      >
        <p className="text-primaryMain">{t("addNewAddress")}</p>
        <Image
          src={"/assets/icons/plusGreen.svg"}
          alt="plus"
          width={24}
          height={24}
        />
      </div>
      <CustomModal
        open={open}
        onClose={onClose}
        className={"!rounded-[50px] dark:bg-gray3 !w-[1120px]"}
      >
        <p className="text-black dark:text-white font-semibold text-[40px] mb-3">
          {t("enterAddressDelivery")}
        </p>
        <p className="text-black dark:text-white text-[24px] mb-[30px]">
          {t("howDeliver")}
        </p>
        <div className="flex items-center mb-[30px]">
          <div className="border mr-5 flex items-center border-gray9 bg-gray10 dark:bg-gray2 dark:border-none w-[797px] h-[50px] rounded-[10px] py-[10px] pl-5">
            <Image
              src={"/assets/icons/search.svg"}
              alt="close"
              width={27}
              height={27}
              className="mr-3"
            />
            <input
              type="text"
              onChange={(e) => $address(e.target.value)}
              value={address}
              placeholder={t("enterYourAddress")}
              className="text-mainText bg-[transparent] placeholder:text-[#CBD5E0] outline-none w-full"
            />
          </div>
          <button className="bg-primaryMain h-[50px] w-[243px] rounded-[12px] text-medium text-white">
            OK
          </button>
        </div>
        <Map onSave={handleLatLng} />
      </CustomModal>
    </>
  );
};

export default AddAddressModal;
