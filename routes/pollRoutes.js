const express = require('express');
const router = express.Router();
const pollController = require('../controllers/pollController');

router.post('/', pollController.createPoll);
router.get('/active', pollController.getActivePolls);
router.put('/:poll_str_id/status', pollController.closePoll);
router.get('/:poll_str_id/results', pollController.getResults);

module.exports = router;
