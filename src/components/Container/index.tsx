import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='max-w-[1434px] tablet:max-w-[1024px] w-full m-[0px_auto] tablet:px-[18px]'>
      {children}
    </div>
  );
};

export default Container;
