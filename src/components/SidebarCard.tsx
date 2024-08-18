"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type sideCardProps = {
  children: ReactNode;
  title: string;
  path: string;
};
const SidebarCard = ({ children, path, title }: sideCardProps) => {
  const pathName = usePathname();
  console.log({
    pathName: pathName == path,
  });
  const isActive = pathName == path;

  return (
    <div
      role="button"
      className=" hover:scale-105 active:scale-95   border-slate-700  mMainShadow size-fit w-full rounded-3xl border  mMainShadow flex items-center justify-center"
    >
      <div className="h-[190px]  bg-inherit w-full rounded-3xl mMainFill">
        <div className="flex items-center justify-center  flex-col size-full">
          <div
            className={clsx("card", {
              "opacity-100": isActive,
              "opacity-50": !isActive,
            })}
          >
            {children}
          </div>
          <div className="flex w-full gap-1 items-center justify-center flex-col">
            <p
              className={clsx("text-sm  text-center", {
                "text-white": isActive,
                "text-grey": !isActive,
              })}
            >
              {title}
            </p>
            <div
              aria-hidden
              className={clsx("w-[30px]  h-[2px] rounded-full ", {
                "bg-primary": isActive,
                "bg-grey": !isActive,
              })}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SidebarCard;
