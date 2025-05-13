import Image from "next/image.js";
import RestautantItem from "../RestaurantItem.tsx";
import FoodItem from "../FoodItem";

const SearchItem = () => {
  return (
    <div className='flex items-center gap-x-[30px] mb-10 tablet:gap-x-5'>
      <RestautantItem />
      {[...Array(4)].map((_, i) => (
        <FoodItem
          key={i}
          className='tablet:!w-[167px] tablet:h-[200px] h-auto'
          search
        />
      ))}
      <div className='w-[60px] h-[60px] tablet:hidden bg-primaryMain flex items-center cursor-pointer justify-center flex-col rounded-full'>
        <Image
          src={"/assets/icons/chevron.svg"}
          alt='chevron'
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};

export default SearchItem;
