import React, { FC, useEffect, useState } from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import GET_PRODUCT_CATEGORIES, {
  GetProductCategoriesResponse,
} from "@/lib/gql/queries/product-categories";
import { ProductCategoryProps } from "@/lib/types";
import { useRouter } from "next/router";
import GET_PRODUCT, {
  GetProductResponse,
} from "@/lib/gql/queries/product.query";
import Config from "@/lib/config";
import cn from "@/lib/utils/cn";
import Link from "next/link";
import slugify from "slugify";
import Image from "next/image";
import { imageLoader } from "@/lib/utils/image-loader";
import ReactMarkdown from "react-markdown";

export interface ProductPageProps {}
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

const ProductPage: FC<ProductPageProps> = () => {
  const { query } = useRouter();
  const { data, loading } = useQuery<GetProductResponse>(GET_PRODUCT, {
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
        <title>{data?.product.data.attributes.name}</title>
      </Head>
      <main className={"box max-[900px]:flex-col flex gap-8 mt-20"}>
        <Image
          loader={imageLoader}
          src={
            data?.product.data.attributes.thumbnail.data.attributes.url || ""
          }
          alt={
            data?.product.data.attributes.thumbnail.data.attributes.name || ""
          }
          width={406}
          height={400}
          className={"rounded-[12px] h-[400px] object-cover "}
        />
        <div>
          <h1 className={"font-bold text-40 text-primary-foreground "}>
            {data?.product.data.attributes.name}
          </h1>
          <p
            className={"text-20 text-primary-foreground font-medium -mt-2 mb-5"}
          >
            {
              data?.product.data.attributes.product_category.data.attributes
                .name
            }
          </p>
          {/*// @ts-ignore*/}
          <ReactMarkdown components={MdxComponents}>
            {data?.product.data?.attributes.content || ""}
          </ReactMarkdown>
        </div>
      </main>
    </>
  );
};

export default ProductPage;
