import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  value: string;
};

const StatusCard = ({ children, title, value }: Props) => {
  return (
    <div className="flex  gap-1 px-1 items-start shrink-0">
      <div className="">{children}</div>
      <div className="flex flex-col">
        <p className="text-grey sm:font-bold sm:text-lg text-xs  sm:leading-none">
          {title}
        </p>
        <p className="text-white sm:text-lg text-sm">{value}</p>
      </div>
    </div>
  );
};

export default StatusCard;
