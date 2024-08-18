import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type BlueProps = {
  children: ReactNode;
  className?: string;
  isActive: boolean;
};

const BlueBtn = ({ children, className, isActive }: BlueProps) => {
  const style = isActive
    ? {}
    : ({
        "--color1": "#2c3036",
        "--color2": "#3a3f47",
        "--childColor1": "#4a4f59",
        "--childColor2": "#1d1f23",
      } as React.CSSProperties);
  return (
    <div className="size-[72px] cursor-pointer  mainBlue flex items-center justify-center rounded-full p-1 relative">
      <div
        style={style}
        role="button"
        className={cn(
          "blueButton relative  rounded-full h-full w-full flex items-center justify-center",
          className
        )}
      >
        <div className="blueChild rounded-full  flex items-center justify-center h-full w-full"></div>
      </div>
      <div className="absolute flex text-slate-200 top-0 left-0 h-full w-full items-center justify-center ">
        {children}
      </div>
    </div>
  );
};

export default BlueBtn;
