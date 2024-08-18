import CircularProgress from "@/components/CircularProgress";
import DrawerComponent from "@/components/DrawerComponent";
import FanSpeed from "@/components/FanSpeed";
import ModeComponent from "@/components/ModeComponent";
import NavMain from "@/components/NavMain";
import { CircleCard } from "@/components/ui/InformationCard";
import StatusCard from "@/components/ui/statusCard";
import {
  Battery,
  Navigation,
  Power,
  Snowflake,
  Thermometer,
  Timer,
  Waves,
} from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const AcMap = new Map(
    Object.entries({
      auto: 20,
      dry: 37,
      cool: 15,
      program: 30,
    })
  );

  return (
    <main className="h-[calc(100vh-2rem)]  ">
      <div
        style={{ gridTemplateRows: "repeat(14, minmax(0, 1fr))" }}
        className="grid h-full"
      >
        <div className="w-full  flex items-center  row-[1/2]  ">
          <NavMain />
        </div>
        <section className="row-[2/6]  mt-2 sm:grid-rows-subgrid p-[12px_12px_0]   sm:border sm:border-slate-700 mMainShadow sm:row-span-7 sm:px-5  py-3 sm:rounded-3xl sm:bg-gradient-to-t from-[#353a40] to-[#222328] sm:grid sm:size-full ">
          <div className="sm:flex hidden   sm flex-col row-[1/3] sm:row-[1/2] items-center sm:justify-start justify-center w-full">
            <div className="flex w-full justify-start sm:flex-row sm:items-center sm:gap-1 flex-col gap-0 ">
              <h3 className="text-grey sm:font-medium text-xl sm:text-lg text-center font-normal">
                Tesla
              </h3>
              <h2 className="text-white text-center sm:text-lg  text-3xl sm:font-semibold font-bold font-sans tracking-wide">
                CyberTruck
              </h2>
            </div>
          </div>
          <div
            className="w-full sm:row-[2/6] flex-col flex  items-end
           h-full justify-center relative sm:grid sm:grid-cols-6"
          >
            <div className="flex sm:hidden w-full justify-center items-center gap-1 ">
              <h3 className="text-grey text-base text-center font-normal">
                Tesla
              </h3>
              <h2 className="text-white text-center  text-lg font-bold font-sans tracking-wide">
                CyberTruck
              </h2>
            </div>
            <Image
              src="/teslafront.png"
              alt="tesla car image"
              height={277}
              width={507}
              priority
              className=" justify-self-end  col-span-4 overflow-visible block h-[217px]  w-[497px] object-contain"
            />
            <div className=" hidden sm:flex justify-end absolute   right-[50px] w-full h-full ">
              <CircularProgress className="justify-self-end w-fit" size={150} />
            </div>
          </div>
          <div className=" hidden sm:flex flex-col  items-center h-full row-[6/7]">
            <h1 className="font-semibold text-lg pr-4 text-left leading-none mb-1 py-0 px-5">
              Fan Speed
            </h1>
            <FanSpeed />
          </div>
        </section>
        <section className=" block sm:hidden row-[6/7] px-4">
          <h1 className="font-semibold leading-loose mb-1">Status</h1>
          <div className="flex px-3 items-center gap-5">
            <StatusCard title="Battery" value="54%">
              <Battery className="fill-grey text-grey -rotate-90" size={14} />
            </StatusCard>
            <StatusCard title="Range" value="297 km">
              <Navigation className="fill-grey text-grey" size={14} />
            </StatusCard>
            <StatusCard title="Temperature" value="27&#176;">
              <Thermometer
                className="fill-grey text-grey"
                fill="text-slate"
                size={14}
              />
            </StatusCard>
          </div>
        </section>
        <section className="  block sm:hidden row-[7/11] pl-4 mt-6 w-full overflow-hidden">
          <h1 className="font-semibold pr-4 leading-loose mb-1">Information</h1>
          <div
            style={{
              scrollbarWidth: "none",
              scrollbarGutter: "0",
              scrollBehavior: "smooth",
            }}
            className="flex items-center gap-2 pr-3 w-full  overflow-auto"
          >
            <CircleCard title="Engine" desc="Sleeping mode " />
            <CircleCard title="Climate" desc="A/C in ON" />
            <CircleCard title="Tires" desc="Low Pressure" />
          </div>
        </section>
        <section className="row-[11/15] block sm:hidden  mt-0 w-full overflow-hidden">
          <div className="flex px-6  w-full items-center justify-between">
            <h1 className="font-semibold leading-loose ">Navigation</h1>
            <h3 className="text-sm text-slate-200">History</h3>
          </div>
          <div className="FastSettings w-full h-full relative">
            <div className="w-full  h-36 left-0 top-0 absolute bg-gradient-to-b from-[#353a40] to-[#15161a] rounded-tl-3xl rounded-tr-3xl  border-t-2 border-[#424750]" />
            <div className="absolute w-full h-full top-0 left-0 flex items-start justify-center">
              <div className="Drag w-[60px] h-1  mt-2 bg-[#17181c] rounded-[20px] shadow-inner" />
            </div>
            <div className="absolute px-7  w-full h-full top-0 left-0 flex flex-col items-start  jusc">
              <div className="w-full h-fit mt-7 flex items-center  justify-between ">
                <div className=" flex flex-col h-full">
                  <div className="ACIsOn  text-white text-sm font-black font-['Lato']">
                    A/C is ON
                  </div>
                  <div className=" text-[#7e8389] w-[150px] text-xs font-normal font-['Lato']">
                    Tap to turn off or swipe up for a fast setup
                  </div>
                </div>
                <DrawerComponent />
              </div>
            </div>
          </div>
        </section>
        <section className="row-span-6 pt-4 grid-cols-5   hidden sm:grid gap-4 h-full w-full">
          <div className="rounded-3xl border pb-2 border-slate-700 mMainShadow col-[1/3] w-full h-full  bg-gradient-to-t from-[#353a40] to-[#222328]">
            <h1 className="font-semibold text-lg pr-4 leading-loose mb-1 py-3 px-5">
              Battery
            </h1>
            <div className="flex  justify-around  px-6 items-center gap-5">
              <div className="w-fit  relative h-[175px] ">
                <svg
                  width="120px"
                  height="175px"
                  className="rotate-180"
                  viewBox="0 0 120 175"
                >
                  <path
                    d="
                    M 0 0
                    L 120 0
                    L 120 160
                    L 90 160
                    L 90 175                 
                    L 30 175
                    L 30 160
                    L 0 160
                    L 0 0
                    Z
                    "
                    className="fill-grey"
                    stroke="none"
                  />
                </svg>
                <div className="absolute bottom-0  left-0 flex w-full h-full justify-center items-end">
                  <div className="h-[100px] w-full bg-[#3780c3]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <BatteryCard title="km/hr" value="453 km/hr" />
                <BatteryCard title="Charging" value="24%" />
                <BatteryCard title="Distance travelled" value="15 000 km" />
              </div>
            </div>
          </div>
          <div className="rounded-3xl  border border-slate-700  col-[3/6] mMainShadow  w-full h-full   bg-gradient-to-t from-[#353a40] to-[#222328]">
            <h1 className="font-semibold text-lg pr-4 leading-loose pt-3 pb-0 px-5">
              Mode
            </h1>
            <div className="flex items-center gap-2  w-full  flex-col justify-start px-8">
              <div className="w-full h-fit  flex items-center gap-8  justify-center ">
                <div className=" flex flex-col  items-start h-full">
                  <div className="ACIsOn  text-white text-xl font-black font-['Lato']">
                    A/C is ON
                  </div>
                  <div className=" text-[#7e8389]  text-left text-sm  font-['Lato']">
                    Tap to turn off
                  </div>
                </div>
                <ModeComponent mode="off">
                  <Power size={18} />
                </ModeComponent>
              </div>
              <div className="flex justify-around px-5 w-full pt-3 items-center">
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
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;

type BatteryCardProps = {
  title: string;
  value: string;
};
const BatteryCard = ({ title, value }: BatteryCardProps) => {
  return (
    <div className="flex flex-col items-start justify-between ">
      <div className="font-semibold text-lg text-white">{value}</div>
      <div className=" text-sm text-grey">{title}</div>
    </div>
  );
};
