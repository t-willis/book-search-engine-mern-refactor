import { gql } from "@apollo/client";

export const GET_ME = gql`
  query Query($username: String!) {
    me(username: $username) {
      _id
      username
      email
      bookCount
      savedBooks {
        title
        bookId
      }
    }
  }
`;

// queries.js: This will hold the query GET_ME,
// which will execute the me query set up using Apollo Server.