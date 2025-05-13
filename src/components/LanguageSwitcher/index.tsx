"use client";
import { usePathname, useRouter } from "@/middleware";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LanguageSwitcher = () => {
  const [open, $open] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSelectLng = (lng: string) => () => {
    if (open) {
      router.push(pathname, { locale: lng });
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      $open(false);
    }
  };

  const handleOpen = () => {
    $open(!open);
  };
  return (
    <div className='relative flex-shrink-0' ref={dropdownRef}>
      <div className='flex items-center cursor-pointer' onClick={handleOpen}>
        <Image
          src={"/assets/icons/language.svg"}
          alt='language'
          width={34}
          height={34}
          className='mr-[10px]'
        />
        <p className='text-gray4 dark:text-white font-medium text-[20px] mr-[32px]'>
          {String(params.locale ?? "en").toUpperCase()}
        </p>
      </div>
      <div
        className={`bg-white dark:bg-gray3 rounded-[10px] p-2.5 cursor-pointer w-[70px] absolute right-3 top-[75px] z-[100] transition_dropdown ${
          open ? "dropdown_open" : ""
        }`}
      >
        <p
          className='text-gray4 dark:text-white font-medium text-[20px] text-center mb-1'
          onClick={handleSelectLng("ru")}
        >
          RU
        </p>
        <p
          className='text-gray4 dark:text-white font-medium text-[20px] text-center'
          onClick={handleSelectLng("en")}
        >
          EN
        </p>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
