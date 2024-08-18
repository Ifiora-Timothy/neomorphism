"use client";
import { useMainContext } from "@/hooks/useMainContext";
import { cn } from "@/lib/utils";

type Props = {
  size?: number;
  className?: string;
};

const Circularspeed = ({ size: mainSize, className }: Props) => {
  const { speed, setSpeed } = useMainContext();

  const dotPosition = () => {
    //convert the position to degrees and add 270deg and return the value , it shoul be between 0 and 360 so use modulos;
    const position = (speed ?? 0 / 100) * 360 + 270;
    return (position % 360) + "deg";
  };
  const size = mainSize ?? 170;
  const style = { height: size + 50 + "px" };
  const styleWidth = { height: size + 50 + "px", width: size + 50 + "px" };
  return (
    <div className={cn("  w-full h-full flex justify-center", className)}>
      <div
        style={styleWidth}
        className=" items-center flex relative justify-center"
      >
        <div className="absolute top-0 left-0 w-full h-full z-30 justify-center items-center flex flex-col">
          <p className="text-white text-2xl text-center flex font-bold leading-none">
            {speed}&#176;C
          </p>
          <p className="text-grey text-xs text-center font-medium leading-tight">
            cooling...
          </p>
        </div>

        <div className="absolute flex  items-center justify-center h-full w-full">
          <div
            style={style}
            className=" rotate-45  w-1 rounded-full bg-[#3780c3]"
          ></div>
          <div
            style={style}
            className=" rotate-90 -ml-2  w-1 rounded-full bg-[#3780c3]"
          ></div>
          <div
            style={style}
            className=" rotate-270   w-1 rounded-full bg-[#3780c3]"
          ></div>
          <div
            style={style}
            className=" rotate-[135deg] -ml-2 flex   w-1 rounded-full bg-[#3780c3]"
          ></div>
        </div>
        <div
          key={speed}
          className="absolute p-2   rounded-full h-fit w-fit flex justify-center items-start"
        >
          <div
            key={speed}
            className="flex items-center  circleWrapper bg-[#1f2124] rounded-full p-2 w-fit h-fit justify-center"
          >
            <svg
              width={size}
              height={size}
              viewBox={`0 0 ${size} ${size}`}
              className=" circular-progress"
              key={speed}
              style={
                {
                  "--progress": speed,
                  "--dotposition": dotPosition(),
                  "--size": size + "px",
                } as React.CSSProperties
              }
            >
              <circle className="bg"></circle>
              <circle className="fg stroke-[#3780c3]"></circle>
              <circle className="dot"></circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circularspeed;
