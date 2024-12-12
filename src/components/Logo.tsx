import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        src={"/logo.png"}
        alt="logo"
        height={27}
        width={134}
        className="relative z-1 selection:bg-inherit h-[27.5px]"
      />
    </div>
  );
}
