import React, { FC } from "react";
import Image from "next/image";
import { ImageProps } from "@/lib/types";
import Config from "@/lib/config";
import { ReactTyped } from "react-typed";
import { imageLoader } from "@/lib/utils/image-loader";

export interface HeroProps {
  background: ImageProps | null;
  animatedTexts: { text: string; id: string }[];
  title: string;
}

const Hero: FC<HeroProps> = ({ background, animatedTexts, title }) => {
  return (
    <div
      className={
        "bg-primary  bg-opacity-[8%] relative before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-40 before:top-0 before:left-0  select-none before:z-40"
      }
    >
      <Image
        loader={imageLoader}
        src={background?.data.attributes.url || ""}
        alt={title}
        width={background?.data.attributes.width}
        height={background?.data.attributes.height}
        className={"w-full h-[calc(100vh-72px)] object-cover select-none z-20"}
      />
      <div
        className={
          "absolute w-full h-full left-0 top-0 flex items-center justify-center flex-col  z-50"
        }
      >
        <h1 className={"text-[60px] sm:text-[90px] text-white font-bold"}>
          {title}
        </h1>
        <ReactTyped
          className={"text-white text-28 sm:text-48"}
          typeSpeed={100}
          backSpeed={40}
          strings={[...animatedTexts.map((el) => el.text)]}
          loop
        />
      </div>
    </div>
  );
};

export default Hero;
