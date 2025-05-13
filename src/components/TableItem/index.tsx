"use client";

import { gilroy } from "@/app/fonts";
import { useTranslations } from "next-intl";
import { useState } from "react";

const TableItem = () => {
  const t = useTranslations("Index");
  const [active, $active] = useState(false);

  const handleActive = () => {
    $active(!active);
  };
  return (
    <div
      className={`border border-gray9 dark:border-none dark:bg-gray2 rounded-[6px] h-12 cursor-pointer w-60 tablet:w-[259.343px] ${
        active && "border-none bg-gray10 h-[auto]"
      }`}
    >
      <div
        className="flex items-center justify-between px-4 py-3 max-h-12"
        onClick={handleActive}
      >
        <p
          className={`${gilroy.className} text-lg text-gray3 dark:text-white font-semibold`}
        >
          {t("table")}
        </p>
        <p
          className={`${gilroy.className} text-lg text-gray3 dark:text-white font-semibold`}
        >
          № 1
        </p>
      </div>
      {active && (
        <div className="pt-1 pb-3 px-4">
          <div className="flex items-center justify-between mb-4">
            <p
              className={`${gilroy.className} text-gray3 dark:text-white font-semibold`}
            >
              {t("capacity")}
            </p>
            <p
              className={`${gilroy.className} text-gray3 dark:text-white font-semibold`}
            >
              4
            </p>
          </div>
          <p
            className={`${gilroy.className} text-gray3 dark:text-white font-medium mb-2`}
          >
            {t("timeOccupied")}
          </p>
          <div className="flex flex-col gap-2">
            {[...Array(3)].map((_, i) => (
              <p
                key={i}
                className={`${gilroy.className} rounded-[2px] w-[140px] text-center h-4 bg-[#FEFCBF] text-[#744210] text-xs font-bold`}
              >
                15 May 2020 9:30 am
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TableItem;
