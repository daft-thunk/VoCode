const router = require('express').Router();
const {User, Product} = require('../db/models');
module.exports = router;


router.get('/', (req, res, next) => {
  res.status(201).send('<h1>Module</h1>');
})
