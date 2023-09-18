const gql = require('graphql-tag');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]!
    },

    type Book {
        bookId: String
        Authors: [String]!
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
        me(username: String!): User
    },

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(
            authors: [String]!, 
            description: String!, 
            title: String!, 
            bookId: String!, 
            image: String!, 
            link: String!
            ): User
        removeBook(_id: ID!): User
    }
`;

module.exports = typeDefs;