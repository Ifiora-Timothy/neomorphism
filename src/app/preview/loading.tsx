import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-gray-200">
      <div className="flex flex-col items-center">
        <div
          className="relative flex items-center justify-center w-24 h-24 bg-gray-800 rounded-lg shadow-lg 
            shadow-gray-900/60"
        >
          <div
            className="absolute w-16 h-16 bg-gray-700 rounded-full shadow-inner shadow-gray-900/60 
              animate-spin"
          ></div>
        </div>
        <h1 className="mt-4 text-xl font-light">Loading...</h1>
      </div>
    </div>
  );
};

export default loading;
