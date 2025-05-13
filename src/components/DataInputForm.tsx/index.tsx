import { useTranslations } from "next-intl";
import { FieldError, UseFormRegister } from "react-hook-form";

interface Props {
  className?: string;
  name: string;
  type: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

const DataInputForm = ({ className, name, type, register, error }: Props) => {
  const t = useTranslations("Index");
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      <label
        htmlFor={name}
        className='text-[20px] text-mainText font-medium dark:text-white'
      >
        {t(name)}
      </label>
      <div className='flex flex-col'>
        <input
          id={name}
          className={`outline-none pl-[29px] rounded-[12px] h-[50px] w-[479px] text-mainText dark:text-white bg-gray10 dark:bg-gray2 ${
            error && "border border-[red]"
          }`}
          type={type}
          {...register(name, {
            required: t("obligatoryField"),
            ...(type == "tel"
              ? {
                  pattern: {
                    value: /^\+998 \d{2} \d{3} \d{2} \d{2}$/,
                    message: t("correctPhone"),
                  },
                }
              : {}),
          })}
        />
        {error && <span className='text-[red]'>{error.message}</span>}
      </div>
    </div>
  );
};

export default DataInputForm;
