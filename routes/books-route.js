const express = require('express');
const { getAllAvailableBooks, createNewBook, purchaseBook, updateBook } = require('../controller/booksController');
const checkParams = require('../middleware/paramCheck');

const router = express.Router();

router.get('/list', getAllAvailableBooks);

router.post('/create', createNewBook);

router.put('/:id/update', checkParams, updateBook);

router.put('/:id/purchased', checkParams, purchaseBook)

module.exports = router;