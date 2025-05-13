"use client";

import { usePathname } from "@/middleware";
import React, { PropsWithChildren } from "react";

const ChildrensLayout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  return (
    <div
      className={`mobile:hidden ${pathname.includes("oddMenu") && "!block"}`}
    >
      {children}
    </div>
  );
};

export default ChildrensLayout;
