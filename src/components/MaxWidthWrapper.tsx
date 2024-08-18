import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MaxWidthWrapper = ({ children }: Props) => {
  return (
    <div className=" py-4 w-screen sm:px-4   sm:to-[#16171B] text-white h-screen overflow-hidden  bg-gradient-to-t from-[#16171B] to-[#353A40]">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
