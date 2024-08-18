import { cn } from "@/lib/utils";
import clsx from "clsx";
import React, { ReactNode } from "react";

type IconProps = {
  children: ReactNode;
  className: string;
  noBlur?: boolean;
};

const RoundIcon = ({ children, noBlur, className }: IconProps) => {
  return (
    <div
      role="button"
      className={clsx(
        cn("buttonGradient rounded-full size-[61px] relative ", className),
        {
          " shadow-[7px_7px_30px_0px_#1f2427,-7px_-7px_30px_0px_#485057] ":
            !noBlur,
        }
      )}
    >
      <div className={clsx("  flex justify-center items-center")}>
        <div className="smbtn flex justify-center  items-center">
          <div className="smblur flex items-center text-white justify-center"></div>
        </div>
      </div>
      <div className="absolute text-grey  top-0 left-0 w-full h-full flex justify-center items-center ">
        {children}
      </div>
    </div>
  );
};

export default RoundIcon;
