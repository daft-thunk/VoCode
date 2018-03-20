const router = require('express').Router();
const {User, Snippet} = require('../db/models');
module.exports = router;


router.get('/', (req, res, next) => {
  res.status(201).send('<h1>user</h1>');
})

// get all snippets created with this user
router.get('/:id/snippets', (req, res, next) => {
  Snippet.findAll({where: {creatorId: req.params.id}})
    .then(snippets => res.json(snippets))
    .catch(next)
})


// get all snippets this user is associated with
router.get('/:id/snippets/all', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => user.getSnippets())
    .then(snippets => res.json(snippets))
    .catch(next);
})
