import React, { FC } from "react";
import Head from "next/head";

export interface ProductPageProps {}

const ProductPage: FC<ProductPageProps> = () => {
  return (
    <>
      <Head>
        <title>ProductPage</title>
      </Head>
      <main></main>
    </>
  );
};

export default ProductPage;
