const router = require('express').Router();
const {Snippet} = require('../db/models');
module.exports = router;

// get all snippets
router.get('/', (req, res, next) => {
  Snippet.findAll()
    .then(snippets => res.json(snippets))
    .catch(next);
});

// get specific snippet
router.get('/:id', (req, res, next) => {
  Snippet.findById(req.params.id)
    .then(snippet => res.json(snippet))
    .catch(next);
});

// add a snippet
router.post('/', (req, res, next) => {
  Snippet.create({creatorId: req.body.userId, command: req.body.command, code: req.body.code, description: req.body.description})
    .then(snippet => res.json(snippet))
    .catch(next);
});

router.put('/', (req, res, next) => {
  Snippet.findById(req.body.id)
    .then(snippet => snippet.update({command: req.body.command, code: req.body.code}))
    .then(snippet => res.json(snippet))
    .catch(next);
});

