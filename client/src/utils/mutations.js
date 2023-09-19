import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LOGIN_USER($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation ADD_USER($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation SAVE_BOOK($bookId: String!) {
  saveBook(bookId: $bookId) {
    _id
    username
    bookCount
    savedBooks {
      _id
      bookId
    }
  }
}
`;

export const REMOVE_BOOK = gql`
  mutation REMOVE_BOOK($id: ID!) {
    removeBook(_id: $id) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        Authors
        description
        title
        image
        link
      }
    }
  }
`;

// mutations.js:
// LOGIN_USER will execute the loginUser mutation set up using Apollo Server.
// ADD_USER will execute the addUser mutation.
// SAVE_BOOK will execute the saveBook mutation.
// REMOVE_BOOK will execute the removeBook mutation.