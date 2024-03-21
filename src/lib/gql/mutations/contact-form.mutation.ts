import { gql } from "@apollo/client";

const CREATE_CONTACT_FORM = gql`
  mutation (
    $firstName: String!
    $lastName: String!
    $phoneNumber: String!
    $email: String!
    $note: String!
  ) {
    createContactForm(
      data: {
        firstName: $firstName
        lastName: $lastName
        phoneNumber: $phoneNumber
        email: $email
        note: $note
      }
    ) {
      data {
        id
      }
    }
  }
`;

export default CREATE_CONTACT_FORM;
