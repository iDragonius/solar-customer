import React, { FC } from "react";
import { AboutProps } from "@/lib/gql/queries/home.query";
import Image from "next/image";
import { imageLoader } from "@/lib/utils/image-loader";

export interface AboutOurProductsProps {
  data: AboutProps[];
}

const AboutOurProducts: FC<AboutOurProductsProps> = ({ data }) => {
  return (
    <div className={"box mt-20  mb-20"}>
      <h2
        className={
          "text-center text-40 font-bold leading-[56px]  mb-14 text-primary-foreground"
        }
      >
        About our product
      </h2>
      <div
        className={
          "grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3 gap-8"
        }
      >
        {data.map((about, i) => (
          <Card data={about} key={i} />
        ))}
      </div>
    </div>
  );
};
const Card = ({ data }: { data: AboutProps }) => {
  return (
    <div
      className={
        "flex flex-col items-center px-5 py-8 rounded-[12px] shadow-[12px_16px_50px_#9A9A9A1F] trans hover:shadow-[12px_16px_50px_#9A9A9A47] select-none"
      }
    >
      <div
        className={
          "w-20 h-20 rounded-full flex items-center justify-center  bg-[#E3E3E3] bg-opacity-[45%]"
        }
      >
        <Image
          loader={imageLoader}
          src={data.icon.data.attributes.url}
          alt={data.title}
          height={48}
          width={48}
        />
      </div>
      <h3
        className={
          "text-[22px] text-primary-foreground font-medium text-center mt-7"
        }
      >
        {data.title}
      </h3>
    </div>
  );
};
export default AboutOurProducts;
