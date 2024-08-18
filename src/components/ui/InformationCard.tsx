import { cn } from "@/lib/utils";
import React from "react";

export const CircleCard = ({
  title,
  desc,
  className,
}: {
  title: string;
  className?: string;
  desc: string;
}) => {
  return (
    <div
      style={{
        scrollbarWidth: "none",
        scrollbarGutter: "0",
        scrollBehavior: "smooth",
      }}
      className={cn(
        "h-[130px] w-[150px]  shrink-0 overflow-hidden   relative bg-gradient-[-43deg] from-[#1F2328] to-[#121315]  rounded-2xl scroll-m-0",
        className
      )}
    >
      <div className="size-[150px] absolute bg-gradient-to-bl -left-[26px] top-[46px]  from-[#121417] to-[rgba(30, 34, 38, 10%)] to-[100%]   rounded-full  "></div>
      <div className="size-[147px] rounded-full  absolute left-[83px] top-[56px]  z-10  bg-gradient-to-br from-0% from-[#131517] via-20% via-[#131517] to-[rgba(30, 34, 38, 0)] to-[100%]  "></div>
      <div className="absolute h-full w-full flex  items-start py-3 px-4 justify-end z-20 flex-col">
        <p className="text-white text-sm">{title}</p>
        <p className="text-grey text-sm">{desc}</p>
      </div>
    </div>
  );
};
