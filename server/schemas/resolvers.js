const { User, Book } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async () => {
            return User.find();
        },
    }
}

module.exports = resolvers;