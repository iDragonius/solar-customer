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
import GET_PRODUCTS, {
  GetProductsResponse,
} from "@/lib/gql/queries/products.query";
import { imageLoader } from "@/lib/utils/image-loader";

export interface ProductsPageProps {}

const ProductsPage: FC<ProductsPageProps> = () => {
  const { data, loading } = useQuery<GetProductsResponse>(GET_PRODUCTS, {
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
        <title>Məhsullar</title>
      </Head>
      <main className={"box"}>
        <h1 className={"font-bold text-40 text-primary-foreground mt-20 mb-12"}>
          Məhsullar
        </h1>
        <div className={"grid-cols-4 grid gap-8"}>
          {data?.products.data.map((product) => (
            <Link
              href={`/products/${slugify(product.attributes.name)}-${product.id}`}
              className={"flex flex-col"}
              key={product.id}
            >
              <Image
                loader={imageLoader}
                src={product.attributes.thumbnail.data.attributes.url}
                alt={product.attributes.thumbnail.data.attributes.name}
                width={286}
                height={239}
                className={"rounded-[12px]"}
              />
              <h3
                className={
                  "mt-4 font-medium text-[22px] text-primary-foreground"
                }
              >
                {product.attributes.name}
              </h3>
              <p className={"text-primary-foreground opacity-80 text-18"}>
                {product.attributes.product_category.data.attributes.name}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default ProductsPage;
