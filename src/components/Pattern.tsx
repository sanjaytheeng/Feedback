import Image from "next/image";
import React from "react";

const Pattern = () => {
  return (
    <Image
      src="/pattern.svg"
      alt="image"
      width={700}
      height={80}
      className="absolute top-0 z-0 selection:bg-initial"
    />
  );
};

export default Pattern;
