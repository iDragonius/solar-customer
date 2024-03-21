import React, { FC } from "react";
import Image from "next/image";
import { ProjectProps } from "@/lib/types";
import Config from "@/lib/config";
import Link from "next/link";
import slugify from "slugify";
import { imageLoader } from "@/lib/utils/image-loader";

export interface OurWorksProps {
  data: ProjectProps[];
}

const OurWorks: FC<OurWorksProps> = ({ data }) => {
  return (
    <div className={"mt-32 box"}>
      <h2
        className={
          "text-40 font-bold text-primary-foreground leading-[56px]  mb-12"
        }
      >
        Görülən işlər
      </h2>
      <div
        className={
          "grid grid-cols-1 sm:grid-cols-2 min-[800px]:grid-cols-3 min-[1100px]:grid-cols-4 gap-8"
        }
      >
        {data.map((project, i) => (
          <Link
            href={`/about-us/our-projects/${slugify(project.attributes.name)}-${project.id}`}
            className={"flex flex-col"}
            key={i}
          >
            <Image
              loader={imageLoader}
              src={project.attributes.thumbnail.data.attributes.url}
              alt={project.attributes.thumbnail.data.attributes.name}
              width={286}
              height={239}
              className={"rounded-[12px]"}
            />
            <h3
              className={"mt-4 font-medium text-[22px] text-primary-foreground"}
            >
              {project.attributes.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
