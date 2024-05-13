import React from "react";

const SkeletonFieldCard = () => {
  return Array.from({ length: 4 }).map((_, index) => (
    <div key={index} className="border bg-white rounded-lg p-2">
      <div className="animate-pulse h-40 sm:h-60 lg:h-80 bg-gray-300 rounded-lg" />
      <div className="space-y-1 mt-2">
        <div className="h-3 md:h-5 bg-gray-300 w-1/2 rounded-sm" />
        <div className="h-2 md:h-3 bg-gray-300 w-full rounded-sm" />
        <div className="h-2 md:h-3 bg-gray-300 w-full rounded-sm" />
      </div>
    </div>
  ));
};

export default SkeletonFieldCard;
