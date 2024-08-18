import Image from "next/image";
import Link from "next/link";
import SidebarCard from "./SidebarCard";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="pr-2 w-full">
      <div className="flex flex-col gap-3 p-3 h-full   justify-between">
        <Link href="/">
          <SidebarCard title="Overview" path="/">
            <Image
              src="/speedometer.png"
              alt="speeedometer"
              className="size-[100px]"
              height={120}
              width={120}
            />
          </SidebarCard>
        </Link>
        <Link href="/preview" prefetch>
          <SidebarCard path="/preview" title="Battery">
            <Image
              className="size-[100px]"
              src="/battery.png"
              alt="battery"
              height={120}
              width={120}
            />
          </SidebarCard>
        </Link>
        <SidebarCard path="/help" title="Help">
          <Image
            src="/navigation.png"
            alt="speeedometer"
            className="size-[100px]"
            height={120}
            width={120}
          />
        </SidebarCard>
      </div>
    </div>
  );
};

export default Sidebar;
