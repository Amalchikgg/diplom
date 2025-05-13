"use client";
import FormInput from "@/components/FormInput";
import { useRouter } from "@/middleware";
import RegisterMutation from "@/tanstack/mutations/Register";
import useUser from "@/tanstack/queries/useUser";
import { LoginForm, RegisterForm } from "@/types/Form";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const Registration = () => {
  const t = useTranslations("Index");
  const router = useRouter();
  const { data: user, isLoading } = useUser();
  const { mutate } = RegisterMutation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterForm>({
    mode: "onChange",
    defaultValues: {
      phoneNumber: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    if (!isLoading && user) {
      router.push("/" as never);
    }
  }, [isLoading, user]);

  const onSubmit: SubmitHandler<RegisterForm> = (data) => {
    if (data.newPassword !== data.confirmPassword) {
      return setError("confirmPassword", { message: "Пароли не совпадают" });
    }
    mutate(
      {
        phone: data.phoneNumber.trim(),
        password: data.newPassword,
      },
      {
        onSuccess: () => {
          router.push("/" as never);
        },
      }
    );
  };
  return (
    <div className="flex tablet:flex-col">
      <Image
        src={"/assets/images/registerImage.png"}
        alt="img"
        width={853}
        height={1080}
        className="h-[100vh] tablet:hidden"
      />
      <Image
        src={"/assets/images/tabletRegister.png"}
        alt="img"
        width={1024}
        height={556}
        className="hidden tablet:block w-full mb-[60px]"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-[100vh] flex flex-col items-center justify-center tablet:h-[auto] tablet:px-[18px] tablet:mb-24"
      >
        <p className="text-mainText dark:text-white text-5xl font-bold mb-[14px] tablet:font-semibold tablet:leading-[146%]">
          {t("welcome")}
        </p>
        <p className="text-[24px] text-mainText dark:text-white font-medium mb-[62px] tablet:mb-10">
          {t("loginText")}
        </p>
        <FormInput
          name="phone"
          type="tel"
          register={register}
          registerItem="phoneNumber"
          placeholder={t("enterPhone")}
          lable={t("phone")}
          error={errors.phoneNumber}
          className="tablet:w-full"
        />
        <FormInput
          name="password"
          type="password"
          register={register}
          registerItem="newPassword"
          placeholder={t("enterPassword")}
          lable={t("newPassword")}
          error={errors.newPassword}
          className="tablet:w-full"
        />
        <FormInput
          name="password"
          type="password"
          register={register}
          registerItem="confirmPassword"
          placeholder={t("confirmPassword")}
          lable={t("confirmPassword")}
          className="mb-[61px] tablet:w-full"
          error={errors.confirmPassword}
        />
        <button
          type="submit"
          className="bg-gray3 w-[702px] h-[55px] text-white dark:bg-primaryMain rounded-[12px] text-[20px] font-bold mb-[36px] tablet:w-full"
        >
          {t("register")}
        </button>
      </form>
    </div>
  );
};

export default Registration;
