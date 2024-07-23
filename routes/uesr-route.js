const express = require('express');
const checkParams = require('../middleware/paramCheck');
const { getAllUsers, createNewUser, userPurchase } = require('../controller/userController');

const router = express.Router();

router.get('/list', getAllUsers);

router.post('/create', createNewUser);

router.put('/:id/purchased', checkParams, userPurchase)

module.exports = router;