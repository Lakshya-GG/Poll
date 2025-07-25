const express = require('express');
const router = express.Router({ mergeParams: true });
const voteController = require('../controllers/voteController');

router.post('/', voteController.castVote);

module.exports = router;
