import BlueBtn from "@/components/BlueBtn";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { CircleCard } from "@/components/ui/InformationCard";
import StatusCard from "@/components/ui/statusCard";
import { Battery, LockKeyhole, Navigation, Thermometer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" h-[calc(100vh-2rem)]  sm:w-full">
      <div className="sm:col-[4/12]  grid grid-rows-12 w-full h-full">
        <div className="w-full mb-2 flex items-center  row-[1/2]">
          <Navbar />
        </div>
        <section className="row-span-7   sm:border sm:border-slate-700 mMainShadow sm:row-span-5 sm:px-5 py-3 sm:rounded-3xl sm:bg-gradient-to-t from-[#353a40] to-[#222328] sm:block sm:size-full  grid overflow-hidden h-full w-full  grid-rows-subgrid ">
          <div className="flex sm flex-col row-[1/3] sm:row-[1/2] items-center sm:justify-start justify-center w-full">
            <div className="flex w-full justify-start sm:flex-row sm:items-center sm:gap-1 flex-col gap-0 ">
              <h3 className="text-grey sm:font-medium text-xl sm:text-lg text-center font-normal">
                Tesla
              </h3>
              <h2 className="text-white text-center sm:text-lg  text-3xl sm:font-semibold font-bold font-sans tracking-wide">
                CyberTruck
              </h2>
            </div>
          </div>
          <div className="relative  grid grid-rows-subgrid  row-span-4  sm:w-full w-screen ">
            <p className="absolute justify-self-center   sm:ml-[400px] min-[1200px]:ml-[600px]   row-[1/4] mt-3 sm:-top-[50px] top-5 flex justify-center">
              <span className="sm:text-[140px] tracking-tighter text-[120px] leading-[110px] font-extralight ">
                297
              </span>
              <span className="absolute -right-[25px] top-[10px]">km</span>{" "}
            </p>
            <div className="absolute caronea sm:w-full row-[2/5]  mt-4 -right-[200px] sm:size-full sm:flex sm:justify-center sm:right-[70px] top-0 z-10">
              <Image
                src="/tesla.png"
                alt="tesla car image"
                height={255}
                width={807}
                priority
                className="sm:h-[200px]   h-[240px] block w-[600px] sm:w-[500px]   lg:w-[607px] object-contain"
              />
            </div>
          </div>
        </section>
        <section className="row-span-4 grid sm:hidden px-3 grid-rows-subgrid w-full">
          <p className="text-grey row-[1/2] flex items-center justify-center  text-center">
            A/C is turned on
          </p>
          <div className="w-full row-[2/4] flex-col gap-3 flex items-center mb-2">
            <Link href="/preview">
              <BlueBtn isActive>
                <LockKeyhole size={18} />
              </BlueBtn>
            </Link>
            <p className="text-slate-200 text-opacity-85  w-full text-center text-sm">
              Tap to open the car
            </p>{" "}
          </div>
        </section>
        <section className="row-[7/13] b grid-cols-5 pt-4  hidden sm:grid gap-4 h-full w-full">
          <div className="rounded-3xl border border-slate-700 mMainShadow col-[1/3] w-full h-full  bg-gradient-to-t from-[#353a40] to-[#222328]">
            <h1 className="font-semibold text-lg pr-4 leading-loose mb-1 py-3 px-5">
              Status
            </h1>
            <div className="flex flex-wrap justify-between  px-6 items-center gap-10">
              <StatusCard title="Battery" value="54%">
                <Battery className="fill-grey text-grey -rotate-90" size={20} />
              </StatusCard>
              <StatusCard title="Range" value="297 km">
                <Navigation className="fill-grey text-grey" size={20} />
              </StatusCard>
              <StatusCard title="Temperature" value="27&#176;">
                <Thermometer
                  className="fill-grey text-grey"
                  fill="text-slate"
                  size={20}
                />
              </StatusCard>
            </div>
          </div>
          <div className="rounded-3xl  border border-slate-700  col-[3/6] mMainShadow  w-full h-full   bg-gradient-to-t from-[#353a40] to-[#222328]">
            <h1 className="font-semibold text-lg pr-4 leading-loose mb-1 py-3 px-5">
              Information
            </h1>
            <div className="flex items-center  justify-center px-5 w-full">
              <div className=" max-w-[500px] flex-wrap justify-self-center  gap-x-6 gap-y-4 flex  ">
                <CircleCard
                  className="h-[90px]  w-[200px]"
                  title="Engine"
                  desc="Sleeping mode "
                />
                <CircleCard
                  className="h-[90px]  w-[200px]"
                  title="Climate"
                  desc="A/C in ON"
                />
                <CircleCard
                  className="h-[90px] justify-self-start w-[200px]"
                  title="Tires"
                  desc="Low Pressure"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
