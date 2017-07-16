'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/commentController');

router.post('/',controller.createComment);
router.get('/',controller.getAllComment);
router.put('/:id',controller.updateComment);
router.delete('/:id',controller.deleteComment);
router.get('/:id',controller.getOneComment);

module.exports = router;