import { gql } from "apollo-boost";

// Function Name Example: FLEET_LISTINGS
// Query Name Example: FleetListings

export const ALL_PEOPLE = gql`
  query AllPeople {
    allPeople {
      edges {
        node {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

export const PERSON_BY_ID = gql`
  query PersonById($id: Int!) {
    personById(id: $id) {
      nodeId
      id
      firstName
      lastName
    }
  }
`;
