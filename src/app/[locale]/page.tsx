"use client";
import CategoryItem from "@/components/CategoryItem";
import Container from "@/components/Container";
import RestautantItem from "@/components/RestaurantItem.tsx";
import ShareItem from "@/components/ShareItem";
import Title from "@/components/Title";
import { categories } from "@/constants/mockData";
import useCategories from "@/tanstack/queries/useCategories";
import useRestaurants from "@/tanstack/queries/useRestaurants";
import { useTranslations } from "next-intl";

import Image from "next/image";

export default function Home() {
  const t = useTranslations("Index");
  const { data: categoriesMap } = useCategories({ enabled: true });
  const { data: restaurants } = useRestaurants({ enabled: true });
  return (
    <Container>
      <div className="mobile:hidden">
        <div className="flex items-center justify-between mb-[40px] tablet:mb-[46px]">
          <Title title={t("restaurants")} className="!mb-0" />
          <div className="flex items-center justify-end gap-x-5 ">
            <div className="rounded-full w-[55px] cursor-pointer h-[55px] bg-white dark:bg-gray3 flex flex-col items-center justify-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
              <Image
                src={"/assets/icons/arrow.svg"}
                alt="arrow"
                width={34}
                height={34}
              />
            </div>
            <div className="rounded-full cursor-pointer w-[55px] h-[55px] bg-white dark:bg-gray3 flex flex-col items-center justify-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
              <Image
                src={"/assets/icons/arrow.svg"}
                alt="arrow"
                width={34}
                height={34}
                className="rotate-180"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-x-[30px] gap-y-5 mb-12 tablet:gap-5 tablet:mb-[57px]">
          {categoriesMap?.map((data, i) => (
            <CategoryItem key={i} title={data.name} id={data.id} />
          ))}
        </div>
        <div className="flex items-center flex-wrap gap-y-10 gap-x-[30px] mb-16 tablet:gap-y-5 tablet:gap-x-[21px]">
          {restaurants?.map((data, i) => (
            <RestautantItem key={data.id} data={data} />
          ))}
        </div>
      </div>
    </Container>
  );
}
