const User = require('./user');
const Snippet = require('./snippet');

Snippet.belongsTo(User, {as: 'Creator'});

Snippet.belongsToMany(User, {through: 'snippetToUser'});

module.exports = {
  User,
  Snippet
};
