import React, { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import GET_PRODUCT, {
  GetProductResponse,
} from "@/lib/gql/queries/product.query";
import Config from "@/lib/config";
import Image from "next/image";
import { imageLoader } from "@/lib/utils/image-loader";
import ReactMarkdown from "react-markdown";
import GET_PROJECT, { GetProjectProps } from "@/lib/gql/queries/project.query";

export interface OurProjectPageProps {}
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
const OurProjectPage: FC<OurProjectPageProps> = () => {
  const { query } = useRouter();
  const { data, loading } = useQuery<GetProjectProps>(GET_PROJECT, {
    variables: {
      locale: Config.defaultLocale,
      id: (query.slug as string).split("-").at(-1),
    },
  });

  if (loading) {
    return <></>;
  }
  return (
    <>
      <Head>
        <title>{data?.project.data.attributes.name}</title>
      </Head>
      <main className={"box max-[900px]:flex-col flex gap-8 mt-20"}>
        <Image
          loader={imageLoader}
          src={
            data?.project.data.attributes.thumbnail.data.attributes.url || ""
          }
          alt={
            data?.project.data.attributes.thumbnail.data.attributes.name || ""
          }
          width={406}
          height={400}
          className={"rounded-[12px] h-[400px] object-cover "}
        />
        <div>
          <h1 className={"font-bold text-40 text-primary-foreground mb-5 "}>
            {data?.project.data.attributes.name}
          </h1>

          {/*// @ts-ignore*/}
          <ReactMarkdown components={MdxComponents}>
            {data?.project.data?.attributes.content || ""}
          </ReactMarkdown>
        </div>
      </main>
    </>
  );
};

export default OurProjectPage;
