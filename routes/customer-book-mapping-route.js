const express = require('express');
const checkParams = require('../middleware/paramCheck');
const addNewMapping = require('../controller/customer-book-mappingController');

const router = express.Router();

router.post('/:id/create', addNewMapping);

module.exports = router;