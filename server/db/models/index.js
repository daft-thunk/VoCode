const db = require('../db');
const User = require('./user');
const Snippet = require('./snippet');

const SnippetUser = db.define('snippetUser', {})

Snippet.belongsTo(User, {as: 'creator'});

Snippet.belongsToMany(User, {through: 'snippetUsers'});
User.belongsToMany(Snippet, {through: 'snippetUsers'});

module.exports = {
  User,
  Snippet,
  SnippetUser
};
