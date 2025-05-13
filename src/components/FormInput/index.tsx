import { useTranslations } from "next-intl";
import { FieldError, UseFormRegister } from "react-hook-form";

interface Props {
  lable?: string;
  placeholder: string;
  className?: string;
  name?: string;
  type?: string;
  register: UseFormRegister<any>;
  registerItem: string;
  error?: FieldError;
  required?: boolean;
}

const FormInput = ({
  lable,
  placeholder,
  className,
  name,
  type,
  register,
  registerItem,
  error,
  required = true,
}: Props) => {
  const t = useTranslations("Index");
  return (
    <div className="tablet:w-full">
      {lable && (
        <label
          htmlFor={name}
          className="text-[24px] block text-mainText dark:text-white mb-2 tablet:leading-[142%]"
        >
          {lable}
        </label>
      )}
      <input
        {...register(registerItem, {
          ...(!required ? {} : { required: t("obligatoryField") }),
          ...(type == "email"
            ? {
                pattern: {
                  value:
                    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                  message: t("correctEmail"),
                },
              }
            : {}),
          ...(type == "tel"
            ? {
                pattern: {
                  value: /^\+998\d{2}\d{3}\d{2}\d{2}$/,
                  message: t("correctPhone"),
                },
              }
            : {}),
        })}
        type={type}
        id={name}
        placeholder={placeholder}
        className={`outline-none border pl-[17px] dark:text-[#CBD5E0] text-mainText mb-[27px] dark:border-none dark:bg-gray3 border-[#459F86] rounded-[15px] w-[702px] h-[55px] ${className} ${
          error && "!mb-[5px] !outline-[red]"
        }`}
      />
      {error && <p className="text-[red] mb-[20px]">{error.message}</p>}
    </div>
  );
};

export default FormInput;
