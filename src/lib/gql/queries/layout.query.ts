import { gql } from "@apollo/client";
import { NavigationItemProps } from "@/lib/types";

export type GetLayoutResponse = {
  navigation: {
    data: {
      id: string;
      attributes: {
        navigations: NavigationItemProps[];
      };
    };
  };
};
const GET_LAYOUT = gql`
  query ($locale: I18NLocaleCode!) {
    navigation(locale: $locale) {
      data {
        id
        attributes {
          navigations {
            id
            path
            label
            hasLink
            status
            subs {
              path
              label
              id
            }
          }
        }
      }
    }
  }
`;

export default GET_LAYOUT;
