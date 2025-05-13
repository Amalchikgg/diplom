"use client";
import OddChangeLng from "@/components/OddChangeLng";
import OddInfo from "@/components/OddInfo";
import RestaurantTab from "@/components/RestaurantTab";
import Title from "@/components/Title";
import { oddMenuTabs } from "@/constants/mockData";
import { useOpenClose } from "@/hooks/useOpenClose";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "@/middleware";
import { useSearchParams } from "next/navigation";
import OddMenuItem from "@/components/OddMenuItem";
import OddMenuDetail from "@/components/OddMenuDetail";
import OddBasketItem from "@/components/OddBasketItem";
import { gilroy } from "@/app/fonts";

const OddMenu = () => {
  const t = useTranslations("Index");
  const { open, onOpen, ref } = useOpenClose();
  const category = useSearchParams().get("category");
  const basket = useSearchParams().get("basket");
  const router = useRouter();
  const [activeTab, $activeTab] = useState("");

  const handleTab = (name: string) => () => {
    $activeTab(name);
  };

  const handleRoute = (param: string) => () => {
    router.push(`/oddMenu?category=${param}` as never);
  };

  const basketRoute = () => {
    router.push(`/oddMenu?category=${category}&basket=check` as never);
  };

  return (
    <div className="max-w-[1440px] w-full m-[0_auto] px-[130px] pb-[122px] oddTablet:max-w-[768px] oddTablet:px-[79px] oddMobile:max-w-[428px] oddMobile:px-0">
      <div className="relative w-full  mb-[250px] oddTablet:mb-[360px] oddMobile:mb-[500px]">
        <Image
          src={"/assets/images/banner.png"}
          alt="banner"
          width={1180}
          height={380}
          className="oddTablet:hidden"
        />
        <Image
          src={"/assets/images/tabletBanner.png"}
          alt="banner"
          width={610}
          height={380}
          className="hidden oddTablet:block oddMobile:hidden"
        />
        <Image
          src={"/assets/images/mobileBanner.png"}
          alt="banner"
          width={428}
          height={267}
          className="hidden oddMobile:block "
        />
        <div className="absolute top-7 w-full px-[35px] oddTablet:top-4 oddTablet:px-5 flex justify-between">
          <OddInfo
            className="w-[90px] oddTablet:h-11"
            icon={{ name: "oddLogo", w: 48, h: 24 }}
          />
          <div className="flex gap-3">
            <OddInfo
              className="w-[132px] oddMobile:hidden oddTablet:w-[123px] oddTablet:h-11 flex-row-reverse"
              title="8088"
              icon={{ name: "phoneBlack", w: 24, h: 24 }}
            />
            <OddChangeLng />
          </div>
        </div>
        {(category || basket) && (
          <OddInfo
            onClick={() => router.back()}
            icon={{ name: "chevronLeft", w: 24, h: 24 }}
            className="absolute bottom-[60px] oddTablet:bottom-[180px] oddMobile:w-[103px] oddMobile:h-[42px] oddMobile:left-[24px] oddMobile:bottom-[110px] oddTablet:left-[31px] oddTablet:h-[42px] left-[35px] w-[148px] oddTablet:w-[129px] cursor-pointer"
            title={t("back")}
            titleClass={`${gilroy.className} !font-bold oddMobile:text-base`}
          />
        )}
        <div className="bg-white rounded-[24px] px-10 py-[26px] absolute w-full bottom-[-230px] oddTablet:bottom-[-335px] oddMobile:bottom-[-470px]">
          <Title
            title="Lago Park"
            className="!mb-[27px] oddTablet:!mb-[22px]"
          />
          <div className="flex gap-4 mb-[27px] oddTablet:mb-[22px] oddTablet:flex-wrap oddTablet:gap-5">
            <OddInfo
              className="bg-gray10 w-[131px] oddTablet:w-full"
              title="8088"
              icon={{ name: "phoneBlack", w: 24, h: 24 }}
            />
            <OddInfo
              className=" bg-gray10 w-[213px] oddTablet:w-[255px] oddMobile:w-[163px]"
              title="09:00 - 00:00"
              icon={{ name: "timeBlack", w: 20, h: 20 }}
              titleClass="oddMobile:text-lg"
            />
            <OddInfo
              className=" bg-gray10 w-[213px] oddTablet:w-[255px] oddMobile:w-[163px]"
              title="4.8 (5000+)"
              icon={{ name: "star", w: 24, h: 24 }}
              titleClass="oddMobile:text-lg"
            />
            <OddInfo
              className=" bg-gray10 w-[526px] oddMobile:!h-[60px] oddTablet:w-full"
              titleClass="!text-lg oddMobile:!text-[16px] oddMobile:!leading-[18px]"
              title="1-й квартал, 6, массив Чиланзор, Ташкент"
              icon={{ name: "locationBlack", w: 24, h: 24 }}
            />
          </div>
          <p
            className={`${gilroy.className} font-medium text-[20px] text-mainText`}
          >
            Здесь вы можете добавить дополнительную информацию для ваших гостей,
            такую как налоги, цену обслуживания, часы работы ресторана,
            контакты, условия доставки, общую информацию о вашем QR меню и так
            далее
          </p>
        </div>
      </div>
      {!category && !basket && (
        <>
          <div className="flex gap-3 mb-[26px] oddTablet:flex-wrap oddMobile:px-6">
            {oddMenuTabs.slice(0, 4).map((tab) => (
              <RestaurantTab
                key={tab}
                title={tab}
                active={tab === activeTab}
                onClick={handleTab(tab)}
                className="bg-white oddTablet:w-[299.01px] oddMobile:w-full"
                activeBg="tabGradient"
                textClass={`text-mainText text-[20px] ${gilroy.className}`}
                activeText="text-white"
              />
            ))}
            {oddMenuTabs.length > 4 && (
              <div className="relative oddMobile:w-full" ref={ref}>
                <OddInfo
                  onClick={onOpen}
                  className="flex-row-reverse w-[104px] oddMobile:w-full !bg-[white] flex-shrink-0"
                  titleClass="!text-[20px] font-bold"
                  title={t("yet")}
                  icon={{ name: "chevronBlack", w: 24, h: 24 }}
                />
                <div
                  className={`bg-white  rounded-[10px] cursor-pointer w-full absolute right-0 top-[60px] z-[100] transition_dropdown ${
                    open ? "dropdown_open" : ""
                  }`}
                >
                  {oddMenuTabs.slice(4).map((tab, i) => (
                    <div
                      key={i}
                      onClick={handleTab(tab)}
                      className={`flex items-center py-[15px] pl-5 ${
                        activeTab === tab && "tabGradient"
                      }`}
                    >
                      <p
                        className={`text-gray1 ${
                          gilroy.className
                        } dark:text-white font-medium ${
                          activeTab === tab && "!text-white"
                        }`}
                      >
                        {tab}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="relative mb-[26px] oddMobile:px-6">
            <input
              className={`bg-white pl-5 ${gilroy.className} rounded-[12px] h-[54px] w-full`}
              placeholder={t("searching")}
            />
            <Image
              src={"/assets/icons/searchBlack.svg"}
              alt="search"
              width={28}
              height={28}
              className="absolute top-[15px] right-[21px] oddMobile:right-[36px]"
            />
          </div>
        </>
      )}
      {!category &&
        !basket &&
        [...Array(3)].map((_, i) => (
          <div key={i} className="oddMobile:px-6">
            <OddMenuItem onClick={handleRoute("breakfest")} />
          </div>
        ))}
      {category && !basket && (
        <div className="oddMobile:px-6">
          <Title
            title="Завтраки"
            className="!mb-[52px] !text-[36px] !leading-[34px]"
          />{" "}
          {[...Array(5)].map((_, i) => (
            <OddMenuDetail key={i} />
          ))}
        </div>
      )}
      {basket && (
        <div className="oddMobile:px-6">
          <button
            className={`w-full bg-gray4 h-[54px] mb-[52px] rounded-[12px] text-[20px] font-bold text-white ${gilroy.className}`}
          >
            {t("basket")}
          </button>
          {[...Array(5)].map((_, i) => (
            <OddBasketItem key={i} />
          ))}
          <div className="flex items-center justify-between">
            <p
              className={`text-mainText ${gilroy.className} text-[32px] leading-[34px] font-bold`}
            >
              {t("total")}:
            </p>
            <p
              className={`text-mainText ${gilroy.className} text-[32px] leading-[34px] font-bold`}
            >
              65 000 сум
            </p>
          </div>
        </div>
      )}
      {!basket && category && (
        <button
          onClick={basketRoute}
          className={`w-[1180px] oddTablet:w-[610px] oddMobile:w-[379px] oddMobile:left-6 tabGradient h-[54px] rounded-[12px] text-[20px] font-bold text-white ${gilroy.className} fixed bottom-10`}
        >
          {t("checkBasket")}
        </button>
      )}
    </div>
  );
};

export default OddMenu;
