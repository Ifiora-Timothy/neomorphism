"use client";
import { useMainContext } from "@/hooks/useMainContext";
import { useEffect, useRef, useState } from "react";

const FanSpeed = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  const progressBar = useRef<HTMLDivElement>(null);
  const progressDragger = useRef<HTMLDivElement>(null);
  const { speed, setSpeed } = useMainContext();
  console.log({ speed });

  const dragHandle = (clientX: number) => {
    if (
      !progressRef.current ||
      !progressDragger.current ||
      !progressBar.current
    )
      return;
    console.log(clientX);

    const percentage = dragChange(clientX);
    setSpeed(percentage);
    // progressDragger.current!.style.left = `${percentage}%`;
    // progressBar.current!.style.width = `${percentage}%`;
  };

  useEffect(() => {
    progressDragger.current?.addEventListener("drag", (e) =>
      dragHandle(e.clientX)
    );
    progressDragger.current?.addEventListener("touchmove", (e) =>
      dragHandle(e.touches[0].clientX)
    );
    progressDragger.current?.addEventListener("dragend", (e: MouseEvent) => {
      // console.log(e.clientX, "dd");

      const percent = dragChange(e.clientX);

      setSpeed(percent);
    });
  }, []);
  const dragChange = (clientX: number) => {
    const rect = progressRef.current!.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const width = rect.width;
    let percentage = (offsetX / width) * 100;
    percentage = Math.ceil(Math.max(0, Math.min(100, percentage)));
    return percentage;
  };

  return (
    <div className="flex w-full py-2 justify-center h-fit relative px-5">
      <div className="absolute px-8 text-xs text-grey w-full flex h-6 justify-between">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>{" "}
      <div className="absolute z-10 px-7 -ml-2 top-[30px] left-0 flex items-center h-full w-full">
        <div
          draggable
          role="button"
          ref={progressDragger}
          style={{ left: speed + "%" }}
          className="size-[30px] relative p-1 cursor-pointer    rounded-full   flex items-center justify-center bg-gradient-to-tl to-[#1f2124] from-[#1d1f21]"
        >
          <div className="borderTracker size-[30px] rounded-full    flex items-center justify-center bg-gradient-to-tl from-[#0f1012] to-[#1e2022] shadow-2xl shad shadow-[#abbedc]">
            <div className="h-1 w-1 bg-[#3780c3] rounded-full"></div>
          </div>
        </div>
      </div>
      <div
        ref={progressRef}
        className="h-3 w-full rounded-full relative top-[30px] border-2 border-slate-700 bg-slate-900"
      >
        <div
          ref={progressBar}
          style={{ width: speed + "%" }}
          className=" h-full bg-[#3780c3] rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default FanSpeed;
