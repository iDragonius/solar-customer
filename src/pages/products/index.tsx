import React, { FC, useEffect, useState } from "react";
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
import GET_PRODUCT_CATEGORIES, {
  GetProductCategoriesResponse,
} from "@/lib/gql/queries/product-categories";
import { ProductCategoryProps } from "@/lib/types";
import cn from "@/lib/utils/cn";

export interface ProductsPageProps {}

const ProductsPage: FC<ProductsPageProps> = () => {
  const { data, loading } = useQuery<GetProductCategoriesResponse>(
    GET_PRODUCT_CATEGORIES,
    {},
  );
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategoryProps | null>(null);
  useEffect(() => {
    if (data) {
      setSelectedCategory(data.productCategories.data[0] || null);
    }
  }, [data]);
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
        <div className={"flex justify-between"}>
          <div className={"w-[250px]"}>
            <h3
              className={"text-20 mb-4 text-primary-foreground font-semibold"}
            >
              Kateqoriyalar
            </h3>
            <div className={"flex flex-col  border rounded-[12px] py-1"}>
              {data?.productCategories.data.map((category) => (
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "text-left text-[18px] font-medium text-primary-foreground trans px-3 py-1.5 hover:bg-primary hover:text-white",
                    selectedCategory?.id === category.id &&
                      "bg-primary text-white",
                  )}
                  key={category.id}
                >
                  {" "}
                  {category.attributes.name}
                </button>
              ))}
            </div>
          </div>

          <div className={"grid-cols-3 grid gap-8"}>
            {selectedCategory?.attributes.products.data.map((product) => (
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
                  {selectedCategory?.attributes.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductsPage;
