import React, { FC } from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import GET_PROJECTS, {
  GetProjectsResponse,
} from "@/lib/gql/queries/projects.query";
import Config from "@/lib/config";
import Link from "next/link";
import slugify from "slugify";
import Image from "next/image";
import { imageLoader } from "@/lib/utils/image-loader";
import GET_ABOUT_US, {
  GetAboutUsResponse,
} from "@/lib/gql/queries/about-us.query";
import ReactMarkdown from "react-markdown";

export interface AboutPageProps {}
const MdxComponents = {
  h3: ({ node, ...props }: { node: unknown }) => (
    <h3 className={"text-24 font-medium mb-3 text-primary"} {...props} />
  ),
  p: ({ node, ...props }: { node: unknown }) => (
    <p
      className={" font-medium leading-7 text-primary-foreground mb-4"}
      {...props}
    />
  ),
  li: ({ node, ...props }: { node: unknown }) => (
    <li className={"ml-4 mb-1 list-disc"} {...props} />
  ),
};

const AboutPage: FC<AboutPageProps> = () => {
  const { data, loading } = useQuery<GetAboutUsResponse>(GET_ABOUT_US, {
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
        <title>Haqqımızda</title>
      </Head>
      <main className={"box"}>
        <h1
          className={
            "font-bold text-24 sm:text-40 text-primary-foreground sm:mt-20 mt-12 sm:mb-12 mb-8"
          }
        >
          Haqqımızda
        </h1>
        <div className={"max-w-[800px]"}>
          {/*// @ts-ignore*/}
          <ReactMarkdown components={MdxComponents}>
            {data?.aboutUs.data?.attributes.content || ""}
          </ReactMarkdown>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
