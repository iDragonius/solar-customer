import React, { FC } from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import GET_ABOUT_US, {
  GetAboutUsResponse,
} from "@/lib/gql/queries/about-us.query";
import Config from "@/lib/config";
import ReactMarkdown from "react-markdown";
import GET_OUR_SERVICES, {
  GetOurServicesResponse,
} from "@/lib/gql/queries/our-services";

export interface OurServicesPageProps {}
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

const OurServicesPage: FC<OurServicesPageProps> = () => {
  const { data, loading } = useQuery<GetOurServicesResponse>(GET_OUR_SERVICES, {
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
        <title>Xidmətlərimiz</title>
      </Head>
      <main className={"box"}>
        <h1 className={"font-bold text-40 text-primary-foreground mt-20 mb-12"}>
          Xidmətlərimiz
        </h1>
        <div className={"max-w-[800px]"}>
          {/*// @ts-ignore*/}
          <ReactMarkdown components={MdxComponents}>
            {data?.ourService.data?.attributes.content || ""}
          </ReactMarkdown>
        </div>
      </main>
    </>
  );
};

export default OurServicesPage;
