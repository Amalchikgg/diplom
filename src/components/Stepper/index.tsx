import Image from "next/image";

interface Props {
  active?: boolean;
  image: string;
  last: boolean;
}

const Stepper = ({ active, image, last }: Props) => {
  return (
    <div className='flex items-center'>
      <div className='w-[60px] h-[60px] dark:bg-gray2 rounded-full flex flex-col items-center justify-center shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]'>
        <Image src={image} alt='image' width={30} height={30} />
      </div>
      {!last && (
        <div
          className={`w-[22px] h-1 ${
            active ? "bg-primaryMain dark:bg-gray2" : "bg-white dark:bg-gray2"
          } shadow-[0_2px_4px_0_rgba(0,0,0,0.1)]`}
        />
      )}
    </div>
  );
};

export default Stepper;
