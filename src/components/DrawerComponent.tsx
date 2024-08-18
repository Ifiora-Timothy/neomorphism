import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import BlueBtn from "./BlueBtn";
import { Power, Snowflake, Timer, Waves } from "lucide-react";
import CircularProgress from "./CircularProgress";
import FanSpeed from "./FanSpeed";
import ModeComponent from "./ModeComponent";
import RoundIcon from "./RoundIcon";

type Props = {};

const DrawerComponent = (props: Props) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <BlueBtn isActive>
          <Power size={18} />
        </BlueBtn>
      </DrawerTrigger>
      <DrawerContent className="bg-gradient-to-b pb-4 from-[#353a40] to-[#15161a]  border-none outline-none">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <main className="w-full h-fit mt-7 flex items-center  justify-between ">
              <div className=" flex flex-col items-start h-full">
                <div className="ACIsOn  text-white text-lg font-black font-['Lato']">
                  A/C is ON
                </div>
                <div className=" text-[#7e8389] w-[200px] text-left text-sm  font-['Lato']">
                  Tap to turn off or swipe up for a fast setup
                </div>
              </div>
              <ModeComponent mode="off">
                <Power size={18} />
              </ModeComponent>
            </main>
          </DrawerHeader>
          <section className="p-4 pb-0">
            <CircularProgress />
          </section>
          <section className="text-white  mt-6 mb-4">
            <h1 className="font-semibold text-lg text-center ">Fan Speed</h1>
            <div className="">
              <FanSpeed />
            </div>
          </section>
          <section className="text-white  mt-10">
            <h1 className="font-semibold text-lg text-center ">Mode</h1>
            <div className="flex justify-between px-5 pt-3 items-center">
              <ModeComponent mode="Auto">A</ModeComponent>
              <ModeComponent mode="Dry">
                <Waves size={20} />
              </ModeComponent>
              <ModeComponent mode="Cool">
                <Snowflake size={20} />
              </ModeComponent>
              <ModeComponent mode="Program">
                <Timer size={20} />
              </ModeComponent>
            </div>
          </section>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
