import React, { FC } from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import GET_HOME, { GetHomeResponse } from "@/lib/gql/queries/home.query";
import Config from "@/lib/config";
import GET_PROJECTS, {
  GetProjectsResponse,
} from "@/lib/gql/queries/projects.query";
import Link from "next/link";
import slugify from "slugify";
import Image from "next/image";
import { imageLoader } from "@/lib/utils/image-loader";

export interface OurProjectsPageProps {}

const OurProjectsPage: FC<OurProjectsPageProps> = () => {
  const { data, loading } = useQuery<GetProjectsResponse>(GET_PROJECTS, {
    variables: {
      locale: Config.defaultLocale,
    },
  });

  if (loading) {
    return <></>;
  }
  return (
    <>
      <Head>
        <title>Görülən işlər</title>
      </Head>
      <main className={"box"}>
        <h1 className={"font-bold text-40 text-primary-foreground mt-20 mb-12"}>
          Görülən işlər
        </h1>
        <div className={"grid-cols-4 grid gap-8"}>
          {data?.projects.data.map((project) => (
            <Link
              href={`/about-us/our-projects/${slugify(project.attributes.name)}-${project.id}`}
              className={"flex flex-col"}
              key={project.id}
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
                className={
                  "mt-4 font-medium text-[22px] text-primary-foreground"
                }
              >
                {project.attributes.name}
              </h3>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default OurProjectsPage;
