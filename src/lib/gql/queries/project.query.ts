import { gql } from "@apollo/client";
import { ProjectProps } from "@/lib/types";
export type GetProjectProps = {
  project: {
    data: ProjectProps;
  };
};
const GET_PROJECT = gql`
  query ($locale: I18NLocaleCode!, $id: ID!) {
    project(locale: $locale, id: $id) {
      data {
        id
        attributes {
          name
          content
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

export default GET_PROJECT;
