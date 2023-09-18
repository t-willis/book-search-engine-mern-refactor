const gql = require('graphql-tag');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Boolean
        savedBooks: [Book]
    },

    type Book {
        bookId: String
        Authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    },

    type Query {
        me: User
    },
`;

module.exports = typeDefs;