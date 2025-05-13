"use client";
import Container from "@/components/Container";
import HistoryOrder from "@/components/HistoryOrder";
import OrderHistoryInfo from "@/components/OrderHistoryInfo";
import Title from "@/components/Title";
import { useRouter } from "@/middleware";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import ActiveOrderInfo from "@/components/ActiveOrderInfo";
import { orders } from "@/constants/mockData";

const History = () => {
  const t = useTranslations("Index");
  const router = useRouter();
  const param = useSearchParams();
  const type = param.get("type") as string;
  const [tab, $tab] = useState(type);
  const [active, $active] = useState<number>();

  const getOrderInfo = (index: number) => () => {
    if (window.innerWidth <= 1434) {
      router.push(`/info?type=${type}` as never);
    }
    $active(index);
  };

  const handleTab = (title: string) => () => {
    router.push(`/history?type=${title}` as never);
    $tab(title);
  };
  return (
    <Container>
      <div className='mt-2 flex gap-[29px] mb-[26px]'>
        <div className='w-[458px] tablet:w-full'>
          <Title title={t(type)} />
          <div className='flex gap-[9px] tablet:gap-5 mb-10'>
            <button
              onClick={handleTab("activeOrders")}
              className={`h-14 w-[235px] tablet:w-full font-semibold rounded-[24px] ${
                tab === "activeOrders"
                  ? "bg-white text-primaryMain dark:text-white dark:bg-primaryMain"
                  : "bg-gray9 text-mainText dark:text-white dark:bg-gray3"
              }`}
            >
              {t("activeOrders")}
            </button>
            <button
              onClick={handleTab("history")}
              className={`h-14 w-[215px] tablet:w-full font-medium rounded-[24px] ${
                tab === "history"
                  ? "bg-white text-secondaryMain dark:text-white dark:bg-primaryMain"
                  : "bg-gray9 text-mainText dark:text-white dark:bg-gray3"
              }`}
            >
              {t("history")}
            </button>
          </div>
          <div className='flex flex-col gap-5'>
            {orders.map((data, i) => (
              <HistoryOrder
                key={i}
                onClick={getOrderInfo(i)}
                name={data.name}
                info={data.info}
                price={data.price}
                type={data.type}
                history={tab === "history"}
                active={i == active}
              />
            ))}
          </div>
        </div>
        <div className='w-[946px] tablet:hidden'>
          {tab === "history" && <OrderHistoryInfo />}
          {tab === "activeOrders" && <ActiveOrderInfo />}
        </div>
      </div>
    </Container>
  );
};

export default History;
