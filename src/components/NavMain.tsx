import { cn } from "@/lib/utils";
import React from "react";
import { Home } from "lucide-react";
import { DesktopNav } from "./Navbar";
import Link from "next/link";
import { DialogDemo } from "./ExitDialog";

type Props = {
  className?: string;
};

const NavMain = ({ className }: Props) => {
  return (
    <div className={cn("w-full h-full ", className)}>
      <MobileNavMain className="sm:hidden block" />
      <DesktopNav className="sm:block hidden text-white" />
    </div>
  );
};

export default NavMain;

const MobileNavMain = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, "full px-3")}>
      <div className="flex w-full justify-between">
        <Link href="/">
          <div className="button  flex items-center justify-center size-[37px]  sm:size-[32px]">
            <Home />
          </div>
        </Link>

        <DialogDemo />
      </div>
    </div>
  );
};

const DesktopNavMain = ({ className }: { className?: string }) => {
  return <div className={cn(className, "")}>desktop nav</div>;
};
