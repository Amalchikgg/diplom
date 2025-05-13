import { usePathname, useRouter } from "@/middleware";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const CategoryItem = ({ title, id }: { title: string; id: number }) => {
  const router = useRouter();

  const handleRoute = () => {
    router.push(`/category/${id}?category=${title}` as never);
  };
  return (
    <div
      onClick={handleRoute}
      className="w-[336px] tablet:w-[316px] h-20 cursor-pointer rounded-[20px] bg-white dark:bg-gray3 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] relative p-[23px]"
    >
      <p className="text-[24px] text-black dark:text-white font-semibold leading-[142%]">
        {title}
      </p>
      <Image
        src={"/assets/icons/category.svg"}
        alt="category"
        width={80}
        height={69}
        className="absolute bottom-0 right-0"
      />
    </div>
  );
};

export default CategoryItem;
