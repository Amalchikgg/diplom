"use client";
import BackButton from "@/components/BackButton";
import Basket from "@/components/Basket";
import Container from "@/components/Container";
import OrderAddModal from "@/components/OrderAddModal";
import PaymentBook from "@/components/PaymentBook";
import PaymentDelivery from "@/components/PaymentDelivery";
import Title from "@/components/Title";
import { useOpenClose } from "@/hooks/useOpenClose";
import { DeliveryForm } from "@/types/Form";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { gilroy } from "@/app/fonts";
import { Link } from "@/middleware";

const Payment = () => {
  const t = useTranslations("Index");
  const book = useSearchParams().get("type");
  const { open, onOpen, onClose } = useOpenClose();
  const { register } = useForm<DeliveryForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<DeliveryForm> = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <div className="flex items-center justify-between mb-[52px]">
        <div className="flex items-center gap-8">
          <BackButton className="!m-0" />
          <Title title="KFC" className="!m-0" />
        </div>
        <Link
          href={"#basket" as never}
          className="hidden tablet:flex items-center justify-center gap-[7px] h-[47px] rounded-[12px] w-[214px] bg-primaryMain"
        >
          <Image
            src={"/assets/icons/arrowDown.svg"}
            alt="arrow"
            width={15}
            height={15}
          />
          <p className={`${gilroy.className} font-bold`}>{t("yourOrder")}</p>
        </Link>
      </div>
      <div className="flex gap-[30px] mb-[92px] tablet:flex-col">
        {book == "book" ? (
          <PaymentBook />
        ) : (
          <PaymentDelivery register={register} />
        )}
        <Basket
          title={t("yourOrder")}
          finalText={t(book == "book" ? "prepayment" : "pay")}
          className="!w-[702px] tablet:!w-full"
          onClick={onOpen}
          finallyPay
        />
        <OrderAddModal open={open} onClose={onClose} book={book === "book"} />
      </div>
    </Container>
  );
};

export default Payment;
