"use client";
import ActiveOrderInfo from "@/components/ActiveOrderInfo";
import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import OrderHistoryInfo from "@/components/OrderHistoryInfo";
import Title from "@/components/Title";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import React from "react";

const Info = () => {
  const t = useTranslations();
  const type = useSearchParams().get("type");
  return (
    <Container>
      {type === "history" && (
        <div className='flex items-center gap-5 mb-8'>
          <BackButton className='!mb-0' />
          <Title title='Заказ #123123' className='!mb-0' />
        </div>
      )}
      {type === "history" && <OrderHistoryInfo />}
      {type === "activeOrders" && <ActiveOrderInfo />}
    </Container>
  );
};

export default Info;
