import React from "react";

import styles from "@/styles/Home.module.css";

const SlidingText = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-200">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-200 via-transparent to-gray-200 animate-slide"></div>
        <div className="relative z-10 flex items-center px-4 py-2 space-x-2">
          <p className="font-bold text-lg text-gray-800">Sliding Text:</p>
          <p className="text-lg text-gray-800 animate-pulse">This text slides from left to right</p>
        </div>
      </div>
    </div>
  );
};

export default SlidingText;