import Image from "next/image";

const ProductInfoItem = () => {
  const modify = ["Кетчуп", "Халапеньо", "Горчица", "Майонез", "Майонез"];
  return (
    <div className='bg-gray10 dark:bg-gray2 rounded-[24px] flex items-center justify-between pr-[47px]'>
      <div className='flex items-center gap-6'>
        <Image
          src={"/assets/images/food.png"}
          alt='food'
          width={89}
          height={92}
          className='rounded-[24px]'
        />
        <div>
          <p className='text-[20px] text-black font-semibold inline dark:text-white'>
            Meal for Many
          </p>{" "}
          <span className='text-[10px] font-semibold text-gray6'>250 гр.</span>
          <p className='text-[10px] font-semibold text-gray5'>Маленький</p>
        </div>
      </div>
      <div className='flex gap-11 items-center'>
        <p className='text-mainText font-semibold text-[20px] leading-[140%] dark:text-white'>
          x1
        </p>
        <div className='w-[200px] flex items-center gap-0.5 flex-wrap'>
          {modify.map((data, i) => (
            <div key={i} className='flex items-center gap-0.5'>
              <p className='text-[10px] font-semibold text-gray6'>{data}</p>
              {modify.length > i + 1 && (
                <span className='text-xs font-semibold text-black dark:text-white mt-1'>
                  •
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <p className='text-gray5 font-semibold dark:text-white'>65 000 сум</p>
    </div>
  );
};

export default ProductInfoItem;
