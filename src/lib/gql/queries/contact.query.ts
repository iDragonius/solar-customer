import { gql } from "@apollo/client";
import { ImageProps } from "@/lib/types";

export type GetContactResponse = {
  contact: {
    data: {
      id: string;
      attributes: {
        phoneNumber: string;
        email: string;
        address: string;
        socialNetworks: {
          icon: ImageProps;
          url: string;
        }[];
      };
    };
  };
};
const GET_CONTACT = gql`
  query {
    contact {
      data {
        id
        attributes {
          phoneNumber
          email
          address
          socialNetworks {
            icon {
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
            url
          }
        }
      }
    }
  }
`;

export default GET_CONTACT;
