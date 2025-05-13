import { Link } from "@/middleware";

interface Props {
  title: string;
  className?: string;
}

const FooterLi = ({ title, className }: Props) => {
  return (
    <li className={`mb-3 ${className}`}>
      <Link href={"#" as never} className='text-black dark:text-white'>
        {title}
      </Link>
    </li>
  );
};

export default FooterLi;
