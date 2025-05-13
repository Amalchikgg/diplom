import { useTranslations } from "next-intl";
import Image from "next/image";
import ProductInfoItem from "../ProductInfoItem";
import LeaveReviewModal from "../LeaveReviewModal";
import { useRouter } from "@/middleware";

const OrderHistoryInfo = () => {
  const t = useTranslations("Index");
  const router = useRouter();
  const handleRouter = () => {
    router.push("/restaurant" as never);
  };
  return (
    <div className='bg-white dark:bg-gray3 rounded-[20px] pt-[35px] px-11 pb-7 tablet:mb-9'>
      <p className='font-bold text-[32px] dark:text-white text-black leading-[144%] mb-[21px]'>
        {t("info")}
      </p>
      <div className='flex items-center mb-[30px]'>
        <div className='border-x border-x-[#E2E8F0] h-[102px] pl-[26.5px] pr-[29.5px] pb-[7px] pt-[10px] mr-[28.5px]'>
          <p className='text-black dark:text-white font-medium mb-[14px]'>
            {t("orderTime")}
          </p>
          <p className='font-semibold text-[32px] text-black dark:text-white leading-[144%]'>
            01ч:10м:25с
          </p>
        </div>
        <div className='h-[102px] pb-1 pt-[10px]'>
          <p className='text-black dark:text-white font-medium mb-[14px]'>
            {t("address")}
          </p>
          <p className='font-semibold text-black dark:text-white w-[271px]'>
            1-й квартал, 4, массив Чиланзор, Чиланзарский район, Ташкент
          </p>
        </div>
        <div className='border-x border-x-[#E2E8F0] h-[102px] pl-[23.5px] pr-[24.5px] pb-[7px] pt-[10px] mr-[28.5px]'>
          <div className='flex items-center justify-between mb-[15px]'>
            <p className='text-black dark:text-white font-medium'>
              {t("feedBack")}
            </p>
            <Image
              src={"/assets/icons/phoneYellow.svg"}
              alt='phone'
              width={25}
              height={25}
            />
          </div>
          <p className='font-semibold text-[32px] text-black dark:text-white leading-[144%]'>
            +998909994422
          </p>
        </div>
      </div>
      <div className='flex items-center justify-between mb-[22px]'>
        <p className='leading-[145%] font-bold text-[40px] text-black dark:text-white'>
          KFC
        </p>
        <button
          onClick={handleRouter}
          className='w-[236px] h-11 bg-gray10 rounded-[20px] text-mainText dark:bg-primaryMain dark:text-white font-semibold'
        >
          {t("goToRestoran")}
        </button>
      </div>
      <div className='flex flex-col gap-5 mb-9'>
        {[...Array(4)].map((_, i) => (
          <ProductInfoItem key={i} />
        ))}
      </div>
      <p className='text-end leading-[145%] text-black dark:text-white text-[40px] font-semibold mb-6 pr-1.5'>
        178 000 сум
      </p>
      <LeaveReviewModal />
    </div>
  );
};

export default OrderHistoryInfo;
