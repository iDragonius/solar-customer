import { gql } from "@apollo/client";
export type GetOurServicesResponse = {
  ourService: {
    data: {
      id: string;
      attributes: {
        content: string;
      };
    };
  };
};
const GET_OUR_SERVICES = gql`
  query ($locale: I18NLocaleCode!) {
    ourService(locale: $locale) {
      data {
        id
        attributes {
          content
        }
      }
    }
  }
`;

export default GET_OUR_SERVICES;
