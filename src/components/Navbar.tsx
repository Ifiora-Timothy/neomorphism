import { cn } from "@/lib/utils";
import { DialogDemo } from "./ExitDialog";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full h-full ">
      <MobileNav className="sm:hidden block" />
      <DesktopNav className="sm:block hidden text-white" />
    </div>
  );
};

export default Navbar;

const MobileNav = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, "full ")}>
      <div className="flex w-full justify-center">
        <DialogDemo />
      </div>
    </div>
  );
};

export const DesktopNav = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "mMainFill h-full flex items-center px-3 justify-center p-1 rounded-xl",
        className
      )}
    >
      <DialogDemo />
    </div>
  );
};
