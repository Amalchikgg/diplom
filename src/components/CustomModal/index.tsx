import { Dialog, Transition } from "@headlessui/react";
import { Fragment, PropsWithChildren } from "react";
import Image from "next/image";

interface Props extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  className?: string;
  closeIcon?: boolean;
}

const CustomModal = ({
  open,
  onClose,
  className,
  children,
  closeIcon = true,
}: Props) => {
  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog as='div' className='relative z-[100]' onClose={onClose}>
        <div className='fixed top-[0%] inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 bg-[rgba(0,0,0,0.3)]'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel
                className={`relative overflow-y-auto transform rounded-[24px] bg-white dark:bg-gray3 shadow-xl transition-all flex flex-col p-[30px] w-[719px] pt-5 ${className}`}
              >
                {closeIcon && (
                  <div className='flex justify-end'>
                    <div
                      onClick={onClose}
                      className='flex flex-col items-center cursor-pointer justify-center w-[35px] h-[35px] rounded-full bg-gray9'
                    >
                      <Image
                        src={"/assets/icons/close.svg"}
                        alt='close'
                        width={27}
                        height={27}
                      />
                    </div>
                  </div>
                )}
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CustomModal;
