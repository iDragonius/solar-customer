import { gql } from "@apollo/client";
import { CertificateProps } from "@/lib/types";

export type GetCertificatesResponse = {
  certificate: {
    data: {
      id: string;
      attributes: {
        certificates: CertificateProps[];
      };
    };
  };
};
const GET_CERTIFICATES = gql`
  query {
    certificate {
      data {
        id
        attributes {
          certificates {
            image {
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
            id
          }
        }
      }
    }
  }
`;

export default GET_CERTIFICATES;
