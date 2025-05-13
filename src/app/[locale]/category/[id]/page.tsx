"use client";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { usePathname } from "@/middleware";
import useCategory from "@/tanstack/queries/useCategory";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import React from "react";

const Category = () => {
  const t = useTranslations("Index");
  const pathName = usePathname();
  const name = useSearchParams().get("category") as string;
  const id = pathName.split("/");
  const { data: restaurants } = useCategory({ enabled: true, id: id[2] });
  console.log("id", id[2]);

  return (
    <Container>
      <Title title={name} className="!mb-[55px]" />
    </Container>
  );
};

export default Category;
