import Image from "next/image";

const Custom404 = () => {
  return (
    <div className='flex items-center flex-col'>
      <Image
        src={"/assets/icons/notFound.svg"}
        alt='notFound'
        width={750}
        height={500}
      />
    </div>
  );
};

export default Custom404;
