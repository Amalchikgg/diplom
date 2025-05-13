"use client";
import { Menu } from "@/types/ApiTypes";
import React, { Fragment } from "react";
import Title from "../Title";
import useDishesByMenu from "@/tanstack/queries/useDishesByMenu";
import FoodItem from "../FoodItem";

interface Props {
  data: Menu;
}

const MenuItem = ({ data }: Props) => {
  const { data: dishes } = useDishesByMenu({
    id: String(data.id),
    enabled: true,
  });
  return (
    <Fragment>
      <Title className="!mb-7" title={data.name} />
      <div className="flex flex-wrap gap-[30px] tablet:gap-x-5 tablet:gap-y-8 items-center mb-16 tablet:mb-8">
        {dishes?.map((data, i) => (
          <FoodItem key={data.id} dish={data} />
        ))}
      </div>
    </Fragment>
  );
};

export default MenuItem;
