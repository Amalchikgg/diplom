import { gilroy } from "@/app/fonts";

const Title = ({ title, className }: { title: string; className?: string }) => {
  return (
    <h1
      className={`${gilroy.className} text-black dark:text-white text-5xl font-bold mb-[42px] ${className}`}
    >
      {title}
    </h1>
  );
};

export default Title;
