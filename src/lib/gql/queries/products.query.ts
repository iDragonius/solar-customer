import { gql } from "@apollo/client";
import { ProductProps } from "@/lib/types";

export type GetProductsResponse = {
  products: {
    data: ProductProps[];
  };
};
const GET_PRODUCTS = gql`
  query ($locale: I18NLocaleCode!) {
    products(locale: $locale, pagination: { page: 1, pageSize: 5000 }) {
      data {
        id
        attributes {
          name
          content
          product_category {
            data {
              id
              attributes {
                name
              }
            }
          }
          thumbnail {
            data {
              id
              attributes {
                width
                height
                url
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_PRODUCTS;
