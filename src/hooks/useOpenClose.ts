import { useEffect, useRef, useState } from "react";

export const useOpenClose = () => {
  const [open, $open] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref && ref?.current && !ref.current.contains(event.target)) {
        $open(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);

  const onOpen = () => {
    $open(!open);
  };

  const onClose = () => {
    $open(false);
  };

  return { onOpen, onClose, open, ref };
};
