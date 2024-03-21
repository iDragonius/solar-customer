import React, { FC } from "react";
import Image from "next/image";

export interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className={"h-[80px] border-t "}>
      <div className={"box flex justify-between items-center "}>
        <Image src={"/logo.png"} alt={"logo"} height={72} width={120} />
        <p className={"text-primary font-semibold underline text-16 mt-1"}>
          Powered by ESC
        </p>
        <p className={"mt-1 text-primary-foreground"}>
          ©2024 Solar. Bütün hüquqlar qorunur
        </p>
      </div>
    </div>
  );
};

export default Footer;
