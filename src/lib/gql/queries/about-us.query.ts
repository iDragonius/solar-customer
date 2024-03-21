import { gql } from "@apollo/client";

export type GetAboutUsResponse = {
  aboutUs: {
    data: {
      id: string;
      attributes: {
        content: string;
      };
    };
  };
};
const GET_ABOUT_US = gql`
  query ($locale: I18NLocaleCode!) {
    aboutUs(locale: $locale) {
      data {
        id
        attributes {
          content
        }
      }
    }
  }
`;

export default GET_ABOUT_US;
