import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type About {
    id: ID
    head: String
    skills: String
    blurb: String
  }
  type Query {
    getAbout: [About]
  }
`;
