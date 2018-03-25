const router = require('express').Router();
const {User, Snippet} = require('../db/models');
module.exports = router;

// this should be moved to an admin route
const adminCheck = req => {
  if (req.user && req.user.role === 'admin') return true;
  return false;
};

router.get('/', (req, res, next) => {
if (!adminCheck(req)) {
  res.status(403).send('<h1>FORBIDDEN</h1>');
} else {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email', 'firstName', 'lastName', 'role']
  })
  .then(users => res.json(users))
  .catch(next);
}
});


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

router.put('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(foundUser => foundUser.update({role: req.body.role}))
    .then(updatedUser => res.json(updatedUser))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => user.destroy())
    .then(() => res.sendStatus(204))
    .catch(next);
});

router.post('/:id/snippets/:snippetId', (req, res, next) => {
  Snippet.findById(req.params.snippetId)
    .then(snippet => snippet.addUser(req.params.id))
    .then(snippets => res.json(snippets))
    .catch(next);
});
