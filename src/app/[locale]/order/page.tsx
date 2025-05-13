"use client";
import Container from "@/components/Container";
import OrderStepper from "@/components/OrderStepper";
import Title from "@/components/Title";
import {
  bookOrderSteps,
  deliveryOrderSteps,
  takeAwayOrderSteps,
} from "@/constants/mockData";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useMemo } from "react";
import { gilroy } from "@/app/fonts";
import CourierCard from "@/components/CourierCard";
import GuestCard from "@/components/GuestCard";
import { useRouter } from "@/middleware";
import BasketItem from "@/components/BasketItem";

const Order = () => {
  const t = useTranslations("Index");
  const router = useRouter();
  const cancelOrder = false;
  const type: string = "delivery";
  const step = 2;

  const steps = useMemo(() => {
    if (type === "delivery") {
      return deliveryOrderSteps;
    } else if (type === "book") {
      return bookOrderSteps;
    } else if (type === "takeaway") {
      return takeAwayOrderSteps;
    }
    return [];
  }, []);

  return (
    <Container>
      <div className="hidden tablet:flex items-center gap-[23px] mb-10">
        <Image
          src={"/assets/icons/arrowGreen.svg"}
          alt="arrow"
          width={35}
          height={35}
          onClick={() => router.back()}
        />
        <Title title="Заказ #123123" className="!mb-0" />
        <p className="font-semibold text-gray4">30/10/2023 19:00</p>
      </div>

      <div className="flex gap-[30px] mb-12 tablet:flex-col-reverse">
        <div className="rounded-[20px] bg-white dark:bg-gray3 pt-[31px] pb-[22px] pl-[34px] pr-9 hidden tablet:block">
          <div className="flex justify-between items-center mb-[10px]">
            <p className="text-[20px] font-semibold text-gray5">
              {t("discount")}
            </p>
            <p className="text-[20px] font-bold text-gray5">12 000 сум</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray3 font-semibold text-[24px] dark:text-white">
              {t(type === "delivery" ? "toPay" : "prepayment")}
            </p>
            <p className="text-gray3 font-bold text-[20px] dark:text-white">
              122 000 сум
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray3 rounded-[20px] w-[580px] tablet:w-full p-10">
          <div
            onClick={() => router.back()}
            className="rounded-full tablet:hidden bg-gray10 dark:bg-gray2 w-[51px] cursor-pointer h-[51px] flex items-center justify-center mb-5"
          >
            <Image
              src={"/assets/icons/arrowGreen.svg"}
              alt="arrow"
              width={35}
              height={35}
            />
          </div>
          <Title
            title="Заказ №123123"
            className={`!mb-0 tablet:hidden leading-[146%] ${
              cancelOrder && "!text-[#E53E3E] dark:!text-[#F56565]"
            }`}
          />
          <p className="font-semibold text-gray4 mb-[25px]">30/10/2023 19:00</p>
          <div className="flex mb-[50px] tablet:justify-between">
            <div className="mr-[88px] mt-[15px] tablet:mr-0">
              {steps.map((data, i) => (
                <OrderStepper
                  key={i}
                  image={i + 1 <= step ? data.activeImage : data.image}
                  last={steps.length == i + 1}
                  text={i + 1 < step ? t(data.successText) : t(data.text)}
                  active={i + 1 <= step}
                  success={i + 1 < step}
                  cancelOrder={cancelOrder}
                  index={i}
                />
              ))}
            </div>
            <div
              className={`flex items-center gap-9 ${cancelOrder && "!gap-7"}`}
            >
              <div className="h-[201px] w-[1px] bg-gray9" />
              {cancelOrder ? (
                <div className="flex items-center flex-col tablet:mx-28">
                  <p
                    className={`${gilroy.className} font-bold text-mainText dark:text-white leading-[138%] mb-3`}
                  >
                    {t("reason")}
                  </p>
                  <div className="py-[10px] px-4 border-2 border-[#E53E3E] rounded-[12px] w-[196px] mb-3">
                    <p className="text-mainText dark:text-white font-medium text-sm leading-[143%]">
                      Ресторан закрыт
                    </p>
                  </div>
                  <div className="border-2 border-[#E53E3E] rounded-[12px] w-[196px] py-[10px] px-4 h-[116px]">
                    <p className="text-sm text-gray4 leading-[143%] dark:text-white">
                      К сожалению, ресторан временно закрылся.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center flex-col tablet:mx-28">
                  <p className="font-semibold text-sm text-gray4 dark:text-white mb-[9px] tablet:text-[20px]">
                    {t("awaitTime")}
                  </p>
                  <p
                    className={`${gilroy.className} text-mainText dark:text-white font-bold leading-[109%] text-[64px] tablet:text-[101px]`}
                  >
                    65
                  </p>
                  <p className="text-black dark:text-white font-semibold lowercase tablet:text-[25px] -mt-1">
                    {t("minutes")}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between mb-8">
            <p className="text-[40px] leading-[145%] font-bold text-black dark:text-white">
              KFC
            </p>
            <button
              onClick={() => router.push("/restaurant" as never)}
              className="w-[192px] h-11 bg-gray10 dark:bg-primaryMain dark:text-white text-mainText font-semibold rounded-[12px]"
            >
              {t("goToRestoran")}
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {[...Array(5)].map((_, i) => (
              <BasketItem key={i} info />
            ))}
          </div>
          <div className="mb-10" />
          {type == "delivery" && <CourierCard />}
          {type == "book" && <GuestCard />}
        </div>
        <div className="w-[824px] tablet:w-full">
          <Image
            src={"/assets/images/orderCard.png"}
            alt="card"
            width={824}
            height={949}
            className="mb-[23px] tablet:w-full tablet:h-[388px] tablet:object-cover"
          />
          <div className="rounded-[20px] dark:bg-gray3 bg-white pt-[31px] pb-[22px] pl-[34px] pr-9 tablet:hidden">
            <div className="flex justify-between items-center mb-[10px]">
              <p className="text-[20px] font-semibold text-gray5">
                {t("discount")}
              </p>
              <p className="text-[20px] font-bold text-gray5">12 000 сум</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray3 font-semibold text-[24px] dark:text-white">
                {t("prepayment")}
              </p>
              <p className="text-gray3 font-bold text-[20px] dark:text-white">
                122 000 сум
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Order;
