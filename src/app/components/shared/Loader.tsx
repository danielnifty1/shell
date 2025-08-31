import React from "react";
import { ClipLoader } from "react-spinners";
const Loader = ({ height }: { height?: string }) => {
  return (
    <div
      className={`flex justify-center align-middle items-center h-${
        height ? [height] : "screen"
      }`}
    >
      <ClipLoader size={50} color="#e2bd7e" />
    </div>
  );
};

export default Loader;