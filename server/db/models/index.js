const User = require('./user');
const Snippet = require('./snippet');

Snippet.belongsTo(User, {as: 'creator'});

Snippet.belongsToMany(User, {through: 'snippetToUser'});
User.belongsToMany(Snippet, {through: 'snippetToUser'});

module.exports = {
  User,
  Snippet
};
