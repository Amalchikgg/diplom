import { ChooseTableForm } from "@/types/Form";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { UseFormRegister } from "react-hook-form";

interface Props {
  placeholder: string;
  iconName: string;
  register: UseFormRegister<ChooseTableForm>;
  registerItem: "date" | "time" | "guestsCount";
}

const InputGroup = ({
  placeholder,
  iconName,
  register,
  registerItem,
}: Props) => {
  const t = useTranslations("Index");
  return (
    <div className='w-[400px] h-[50px] flex items-center pl-[29px] rounded-[12px] bg-gray10 dark:bg-gray2 tablet:w-full'>
      <Image
        src={`/assets/icons/${iconName}.svg`}
        alt='calendar'
        width={24}
        height={24}
        className='mr-[10px]'
      />
      <input
        {...register(registerItem, { required: t("obligatoryFiled") })}
        type='text'
        placeholder={placeholder}
        className='outline-none h-full bg-[transparent] text-mainText dark:text-white w-full'
      />
    </div>
  );
};

export default InputGroup;
