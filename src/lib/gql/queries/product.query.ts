import { gql } from "@apollo/client";
import { ProductProps } from "@/lib/types";

export type GetProductResponse = {
  product: {
    data: ProductProps;
  };
};
const GET_PRODUCT = gql`
  query ($locale: I18NLocaleCode!, $id: ID!) {
    product(locale: $locale, id: $id) {
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
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_PRODUCT;
