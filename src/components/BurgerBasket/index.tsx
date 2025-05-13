import { ReactNode, RefObject } from "react";

interface Props {
  active: boolean;
  children: ReactNode;
}

const BurgerBasket = ({ active, children }: Props) => {
  return (
    <div className={`menu ${active && "active"}`}>
      <div className='flex justify-end flex-col items-end'>{children}</div>
    </div>
  );
};

export default BurgerBasket;
