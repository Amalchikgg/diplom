import { Link } from "@/middleware";
import Image from "next/image";

interface Props {
  link: string;
  image: string;
}

const Social = ({ link, image }: Props) => {
  return (
    <Link
      href={"#" as never}
      className='w-[50px] h-[50px] bg-[#E2E8F0] dark:bg-gray2 rounded-full flex flex-col items-center justify-center'
    >
      <Image
        src={`/assets/icons/${image}.svg`}
        alt={image}
        width={25}
        height={25}
      />
    </Link>
  );
};

export default Social;
