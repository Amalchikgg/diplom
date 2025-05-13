"use client";
import Container from "@/components/Container";
import RestautantItem from "@/components/RestaurantItem.tsx";
import Title from "@/components/Title";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import React from "react";

const Shares = () => {
  const t = useTranslations("Index");
  const share = useSearchParams().get("share");
  return (
    <Container>
      <Title title={t(share)} className="!mb-8" />
      <div className="flex items-center flex-wrap gap-y-10 gap-x-[30px] mb-16 tablet:gap-y-5 tablet:gap-x-[21px]">
        {/* {[...Array(10)].map((_, i) => (
          <RestautantItem key={i} />
        ))} */}
      </div>
    </Container>
  );
};

export default Shares;
