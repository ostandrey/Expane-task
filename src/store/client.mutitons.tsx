import {gql} from "graphql-request/dist";

export const UPDATE_CLIENT_MUTATION = gql`
    mutation updtClient(
    $id: ID!,
    $firstName: String!, 
    $lastName: String!,
    $phone: String!,
    $avatarUrl: String!,
    ) {
      updateClient( 
      id: $id,
      firstName: $firstName, 
      lastName: $lastName,
      phone: $phone,
      avatarUrl: $avatarUrl,
      ) {
        id
        firstName
        lastName
        phone
        avatarUrl
      }
    }
`;

export const ADD_CLIENT_MUTATION = gql`
    mutation addClient(
    $firstName: String!, 
    $lastName: String!,
    $phone: String!,
    $avatarUrl: String!,
    ) {
      addClient( 
      firstName: $firstName, 
      lastName: $lastName,
      phone: $phone,
      avatarUrl: $avatarUrl,
      ) {
        firstName
        lastName
        phone
        avatarUrl
      }
    }
`;

export const GET_CLIENTS_MUTATION = gql`
        query {
          getClients {
            id
            firstName
            lastName
            phone
            avatarUrl
          }
        }
      `;
