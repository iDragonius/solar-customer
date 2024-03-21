import { gql } from "@apollo/client";
import { ImageProps, ProductProps, ProjectProps } from "@/lib/types";

export type AboutProps = {
  title: string;
  id: string;
  icon: ImageProps;
};
export type GetHomeResponse = {
  homePage: {
    data: {
      id: string;
      attributes: {
        animatedTexts: { text: string; id: string }[];
        title: string;
        background: ImageProps;
        about: AboutProps[];
      };
    };
  };
  products: {
    data: ProductProps[];
  };
  projects: {
    data: ProjectProps[];
  };
};
const GET_HOME = gql`
  query ($locale: I18NLocaleCode!) {
    homePage(locale: $locale) {
      data {
        id
        attributes {
          animatedTexts {
            text
            id
          }
          title
          background {
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
          about {
            title
            id
            icon {
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
    products(locale: $locale) {
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
    projects(locale: $locale) {
      data {
        id
        attributes {
          name
          content
          thumbnail {
            data {
              id
              attributes {
                width
                height
                name
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_HOME;
