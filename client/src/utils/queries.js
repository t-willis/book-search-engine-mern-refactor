import { gql } from "@apollo/client";

export const GET_ME = gql`
  query GET_ME($username: String!) {
  me(username: $username) {
    _id
    username
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`;

// queries.js: This will hold the query GET_ME,
// which will execute the me query set up using Apollo Server.