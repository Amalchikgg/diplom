"use client";
import Container from "@/components/Container";
import { useRouter } from "@/middleware";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { gilroy } from "@/app/fonts";
import { Fragment, useState } from "react";
import RestaurantInfoModal from "@/components/RestaurantInfoModal";
import RestaurantTab from "@/components/RestaurantTab";
import { foodCounts, restaurantTabs, tabs } from "@/constants/mockData";
import Title from "@/components/Title";
import FoodItem from "@/components/FoodItem";
import Basket from "@/components/Basket";
import DropTabs from "@/components/DropTabs";
import BackButton from "@/components/BackButton";
import BurgerBasket from "@/components/BurgerBasket";
import { useOpenClose } from "@/hooks/useOpenClose";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import useRestaurant from "@/tanstack/queries/useRestaurant";
import useMenu from "@/tanstack/queries/useMenu";

const Restaurant = () => {
  const t = useTranslations("Index");
  const { open, onOpen, ref } = useOpenClose();
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const { theme } = useTheme();
  const [like, $like] = useState(false);
  const [tab, $tab] = useState("delivery");
  const [foodTab, $foodTab] = useState("");
  const { data: restaurant } = useRestaurant({ enabled: true, id: id });
  const { data: menus } = useMenu({ enabled: true, id: id });
  const router = useRouter();
  const visibleTabs = tabs.slice(0, 5);
  const dropTabs = tabs.slice(5);

  const handleLike = () => {
    $like(!like);
  };

  const handleTab = (title: string) => () => {
    $tab(title);
  };

  const handleRoute = () => {
    router.push(`/payment?type=${tab}` as never);
  };

  const handleFoodTab = (title: string) => () => {
    $foodTab(title);
  };

  return (
    <Container>
      <BackButton className="tablet:mb-8" />
      <div className="flex gap-[30px]">
        <div className="w-[946px] tablet:w-full">
          <div className="w-full rounded-[12px] h-[286px] relative mb-[106px] tablet:mb-[93px]">
            <Image
              src={"/assets/images/restaurantBunner.png"}
              alt="bunner"
              width={946}
              height={268}
              className="h-full object-cover rounded-[12px] tablet:w-full"
            />
            <div className="w-[902px] tablet:w-[94.8%] h-[121px] pl-10 dark:bg-gray3 pr-[53px] flex items-center rounded-[24px] bg-white absolute bottom-[-60px] tablet:bottom-[-70px] right-[26px]">
              <p className="font-bold text-5xl text-mainText dark:text-white mr-[57px]">
                {restaurant?.name}
              </p>
              <div className="flex items-center gap-[9px] bg-gray10 dark:bg-gray2 w-[197px] pl-[21px] pr-[17px] h-[54px] rounded-[20px] mr-4">
                <Image
                  src={`/assets/icons/${
                    theme === "dark" ? "deliveryGreen" : "delivery"
                  }.svg`}
                  alt="delivery"
                  width={24}
                  height={24}
                />
                <p className="text-[24px] font-medium text-mainText dark:text-white">
                  10-15 минут
                </p>
              </div>
              <div className="flex items-center gap-[9px] bg-gray10 dark:bg-gray2 w-[197px] pl-3 pr-[18px] h-[54px] rounded-[20px] mr-[128px]">
                <Image
                  src={"/assets/icons/star.svg"}
                  alt="star"
                  width={24}
                  height={24}
                />
                <p className="text-[24px] font-medium text-mainText dark:text-white">
                  4.8 (5000+)
                </p>
              </div>
              <RestaurantInfoModal
                name={restaurant?.name as string}
                address={restaurant?.address as string}
              />
              <div
                className="w-[50px] h-[50px] rounded-full bg-gray9 dark:bg-gray2 p-[10px] cursor-pointer"
                onClick={handleLike}
              >
                <Image
                  src={`/assets/icons/${like ? "like" : "noLike"}.svg`}
                  alt="info"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>

          <div className="rounded-[10px] relative bg-gray9 dark:bg-gray3 dark:border-none w-full h-[50px] mr-[18px] py-[14px] pl-[60px] border border-gray9 mb-6">
            <Image
              src={"/assets/icons/searchBlack.svg"}
              alt="search"
              width={30}
              height={30}
              className="left-[20px] top-[10px] absolute"
            />
            <input
              className="outline-none bg-[transparent] dark:text-white dark:placeholder:text-gray4 w-[820px] text-mainText placeholder:text-mainText"
              placeholder={t("institutionSearch")}
            />
            <button className="absolute right-0 top-0 h-[50px] w-[91px] text-white bg-primaryMain rounded-[12px] font-bold">
              {t("search")}
            </button>
          </div>
          <div className="flex justify-between mb-[45px]">
            <div className="flex gap-3">
              {visibleTabs.map((data, i) => (
                <RestaurantTab
                  key={data}
                  title={data}
                  onClick={handleFoodTab(data)}
                  active={data == foodTab}
                  className="!w-[122px] !border-none bg-gray9 dark:bg-gray3"
                  activeBg="!bg-primaryMain"
                  activeText="!text-white dark:!text-white"
                  textClass="!text-gray1 dark:!text-white"
                />
              ))}
            </div>
            <DropTabs
              tabs={dropTabs}
              activeTab={foodTab}
              onClick={handleFoodTab}
            />
          </div>
          {foodCounts.map((data) => (
            <Fragment key={data.title}>
              <Title className="!mb-7" title={data.title} />
              <div className="flex flex-wrap gap-[30px] tablet:gap-x-5 tablet:gap-y-8 items-center mb-16 tablet:mb-8">
                {[...Array(data.count)].map((_, i) => (
                  <FoodItem key={i} />
                ))}
              </div>
            </Fragment>
          ))}
        </div>
        <div className="tablet:hidden">
          <Basket
            title={t("basket")}
            finalText={t(tab == "book" ? "prepay" : "allSuccess")}
            type={tab}
            onClick={handleRoute}
            className=" !h-auto"
          />
        </div>
        <div className="bg-white w-full px-[18px] py-[14px] hidden tablet:block fixed left-0 bottom-0">
          <div
            className="bg-primaryMain rounded-[12px] h-[50px] flex items-center justify-between px-6"
            onClick={onOpen}
          >
            <p className="leading-[137%] font-bold">{t("order")}</p>
            <p className="leading-[137%] font-bold">172 000 сум</p>
          </div>
        </div>
        <BurgerBasket active={open}>
          <div ref={ref}>
            <Basket
              title={t("basket")}
              finalText={t(tab == "book" ? "prepay" : "allSuccess")}
              type={tab}
              onClick={handleRoute}
              className="!h-auto"
            />
          </div>
        </BurgerBasket>
      </div>
    </Container>
  );
};

export default Restaurant;
