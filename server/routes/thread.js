'use strict'
const express = require('express');
const router = express.Router();
var controller = require('../controllers/threadController');

router.post('/',controller.createThread);
router.get('/',controller.getAllThread);
router.put('/:id',controller.updateThread);
router.delete('/:id',controller.deleteThread);
router.get('/:id',controller.getOneThread);

module.exports = router;