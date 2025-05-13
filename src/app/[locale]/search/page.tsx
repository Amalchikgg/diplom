"use client";
import Container from "@/components/Container";
import SearchItem from "@/components/SearchItem";
import Title from "@/components/Title";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import React, { use } from "react";

const Search = () => {
  const t = useTranslations("Index");
  const keyword = useSearchParams().get("keyword");
  return (
    <Container>
      <Title
        title={`${t("find")} 5 ${t("restaurant")}`}
        className="!mb-[55px]"
      />
      {[...Array(5)].map((_, i) => (
        <SearchItem key={i} />
      ))}
    </Container>
  );
};

export default Search;
