const { User, Book } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, { username }) => {
            return User.findOne({ username });
        },
    }
}

module.exports = resolvers;