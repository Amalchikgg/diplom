"use client";
import FormInput from "@/components/FormInput";
import { Link, useRouter } from "@/middleware";
import LoginMutation from "@/tanstack/mutations/Login";
import useUser from "@/tanstack/queries/useUser";
import { LoginForm } from "@/types/Form";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Login = () => {
  const t = useTranslations("Index");
  const router = useRouter();
  const [check, $check] = useState(false);
  const { data: user, isLoading } = useUser();
  const { mutate } = LoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
    defaultValues: {
      phoneNumber: "+99899999 999",
      password: "a2004ab2033",
    },
  });

  useEffect(() => {
    if (user && !isLoading) {
      router.push("/" as never);
    }
  }, [user, isLoading]);

  const handleCheck = () => {
    $check(!check);
  };

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    mutate(
      {
        password: data.password,
        phone: data.phoneNumber,
      },
      {
        onSuccess: () => {
          router.push("/" as never);
        },
      }
    );
  };
  if (user) {
    return router.push("/" as never);
  }
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
        <p className="text-mainText dark:text-white text-5xl font-bold tablet:font-semibold tablet:leading-[146%] mb-[14px]">
          {t("welcome")}
        </p>
        <p className="text-[24px] text-mainText dark:text-white font-medium mb-[62px] tablet:mb-[60px]">
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
          className="tablet:w-full tablet:!mb-[42px]"
        />
        <FormInput
          name="password"
          type="password"
          register={register}
          registerItem="password"
          placeholder={t("enterPassword")}
          lable={t("password")}
          className="mb-[15px] tablet:w-full tablet:!mb-"
          error={errors.password}
        />
        <div className="flex items-center justify-between w-[702px] mb-[56px] tablet:w-full">
          <div className="flex items-center">
            <div
              onClick={handleCheck}
              className={`w-[35px] h-[35px] cursor-pointer bg-[#CBD5E0] ${
                check && "!bg-primaryMain"
              } rounded-[12px] mr-4 flex items-center justify-center`}
            >
              {check && (
                <Image
                  src={"/assets/icons/checkWhite.svg"}
                  alt="check"
                  width={24}
                  height={24}
                />
              )}
            </div>
            <p className="font-medium text-[20px] text-mainText dark:text-white opacity-60">
              {t("rememberPassword")}
            </p>
          </div>
          <p className="font-medium text-[20px] text-mainText dark:text-white">
            {t("forgotPassword")}
          </p>
        </div>
        <button
          type="submit"
          className="bg-gray3 w-[702px] h-[55px] text-white dark:bg-primaryMain rounded-[12px] text-[20px] font-bold mb-[36px] tablet:w-full"
        >
          {t("enter")}
        </button>
        <p className="text-mainText font-medium inline dark:text-white">
          {t("noAccount")}{" "}
          <Link
            href={"/auth/registration" as never}
            className="font-semibold underline"
          >
            {t("register")}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
