import { gql } from "@apollo/client";
import { ProjectProps } from "@/lib/types";

export type GetProjectsResponse = {
  projects: {
    data: ProjectProps[];
  };
};
const GET_PROJECTS = gql`
  query ($locale: I18NLocaleCode!) {
    projects(locale: $locale, pagination: { page: 1, pageSize: 5000 }) {
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

export default GET_PROJECTS;
