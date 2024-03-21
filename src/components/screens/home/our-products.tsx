import React, { FC } from "react";
import Image from "next/image";
import { ProductProps } from "@/lib/types";
import Config from "@/lib/config";
import Link from "next/link";
import slugify from "slugify";
import { imageLoader } from "@/lib/utils/image-loader";

export interface OurProductsProps {
  data: ProductProps[];
}

const OurProducts: FC<OurProductsProps> = ({ data }) => {
  return (
    <div className={"bg-[#FEF3EF] bg-opacity-30 py-20 mt-20"}>
      <div className={"box"}>
        <h2
          className={
            "text-40 font-bold text-primary-foreground leading-[56px]  mb-14"
          }
        >
          Bəzi məhsullar
        </h2>
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 min-[800px]:grid-cols-3 min-[1100px]:grid-cols-4 gap-8"
          }
        >
          {data.map((product, i) => (
            <Link
              href={`/products/${slugify(product.attributes.name)}-${product.id}`}
              className={"flex flex-col"}
              key={i}
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
      </div>
    </div>
  );
};

export default OurProducts;
