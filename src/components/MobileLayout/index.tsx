"use client";
import { usePathname } from "@/middleware";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "../Container";
import Title from "../Title";
import { gilroy } from "@/app/fonts";

const MobileLayout = () => {
  const pathname = usePathname();
  const t = useTranslations("Index");
  return (
    <div
      className={`hidden mobile:flex ${
        pathname.includes("oddMenu") && "!hidden mobile:hidden"
      }`}
    >
      <Container>
        <div className="hidden mobile:flex items-center justify-center flex-col -mt-[150px]">
          <Image
            src={"/assets/icons/mobile.svg"}
            alt="mobile"
            width={310}
            height={299}
            className="mb-[54px]"
          />
          <Title
            title={t("downloadApp")}
            className="!text-[36px] !mb-[27px] text-center"
          />
          <p
            className={`${gilroy.className} text-center font-bold text-[20px] text-gray5 mb-[62px]`}
          >
            {t("downloadAppText")}
          </p>
          <div className="flex items-center gap-[25px] w-full justify-between px-4">
            <div className="flex items-center gap-2">
              <Image
                src={"/assets/icons/apple.svg"}
                alt="apple"
                width={32}
                height={32}
              />
              <Title title="AppStore" className="!mb-0 !text-[20px]" />
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"/assets/icons/playMarket.svg"}
                alt="playMarket"
                width={32}
                height={32}
              />
              <Title title="Google Play" className="!mb-0 !text-[20px]" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MobileLayout;
