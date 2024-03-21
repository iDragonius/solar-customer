import { gql } from "@apollo/client";
import { ProductCategoryProps } from "@/lib/types";
export type GetProductCategoriesResponse = {
  productCategories: {
    data: ProductCategoryProps[];
  };
};
const GET_PRODUCT_CATEGORIES = gql`
  query {
    productCategories {
      data {
        id
        attributes {
          name
          products {
            data {
              id
              attributes {
                name
                content
                thumbnail {
                  data {
                    id
                    attributes {
                      url
                      width
                      height
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_PRODUCT_CATEGORIES;
